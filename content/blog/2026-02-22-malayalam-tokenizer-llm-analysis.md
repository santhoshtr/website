---
title: "The Broken Token: Tokenization for Malayalam Language Models"
type: post
date: 2026-02-27T05:00:00+05:30
url: /blog/2026/02/27/malayalam-tokenizer-llm
tags: ["NLP", "Malayalam", "Tokenization", "BPE", "Unigram", "Machine Learning", "Rust", "LLM"]
categories:
    - "Natural Language Processing"
    - "Machine Learning"
showToc: true
TocOpen: true
description: "Standard LLMs fragment Malayalam words into 15+ meaningless pieces, destroying the semantic signal required for learning. This post details the training of custom BPE and Unigram tokenizers, and explores why resolving fragmentation is the necessary first step toward solving the larger problems of data scarcity and complex morphology"

customcss: "/css/llm-tokenizer.css"
---

Tokenization is the first cut a language model makes on text. For Malayalam, that cut has almost always been in the wrong place — and the consequences reach much further than efficiency.

Most large language models use tokenizers trained primarily on English and related Latin-script languages. When those tokenizers encounter Malayalam, the results range from inefficient to broken. Andrej Karpathy captured this as follows:

![](/wp-content/uploads/2026/02/tokenizer/karpathy-tweet.png)


This post is in two connected parts. The first is a technical exercise: I trained two subword tokenizers for Malayalam — one BPE, one Unigram — on the SMC Malayalam corpus and published them on HuggingFace. I explain the algorithms, the design choices that make them suitable for Malayalam, and measure their fertility against a cross-section of major LLMs including GPT-4, Gemma, Sarvam, and LLaMA.

The second part follows the implications of those measurements. A tokenizer fertility score is not just a benchmark number — it is a window into why Malayalam LLMs are hard to build at all. Poor tokenization fragments words into semantically meaningless byte pieces, diluting the distributional signal that language models depend on to learn meaning. Transformer attention partially compensates for this, but at a cost that compounds the already-severe data scarcity problem. Malayalam's free word order and dense agglutinative morphology multiply the difficulty further. Taken together, these factors explain why building a capable Malayalam LLM requires more than adding Malayalam data to a training run — and why improving the tokenizer, though necessary, is not sufficient.

The full source is at [github.com/smc/malayalam-tokenizer](https://github.com/smc/malayalam-tokenizer). The trained tokenizers are on HuggingFace:

- [smcproject/malayalam-bpe-tokenizer](https://huggingface.co/smcproject/malayalam-bpe-tokenizer)
- [smcproject/malayalam-unigram-tokenizer](https://huggingface.co/smcproject/malayalam-unigram-tokenizer)

A live comparison demo is available at the [SMC HuggingFace space](https://huggingface.co/spaces/smcproject/malayalam-tokenizer-comparison).

---

## What Is Tokenization?

Before training a language model, text must be converted to a sequence of integers. Tokenization is the algorithm that performs this conversion. <span class="sidenote">If you are interested in learning how to build a tokenizer from scratch, see [Andrej Karpathy, *Let's build the GPT Tokenizer*](https://www.youtube.com/watch?v=zduSFxRajkE)</span> Each integer indexes a fixed vocabulary of *tokens* — subword pieces that the model learns to work with.

![](/wp-content/uploads/2026/02/tokenizer/tokenization-intro.png)

The choice of tokenizer shapes everything downstream: how long sequences become, whether rare words survive, whether morphological structure is preserved[^1]. A tokenizer trained on predominantly English text carries English-centric assumptions that hurt other languages — and Malayalam in particular. For example, a sentence in Malayalam, Burmese or Amharic may require 10x more tokens than a similar message in English.

In a detailed article titled "[All languages are NOT created (tokenized) equal](https://www.artfish.ai/p/all-languages-are-not-created-tokenized)", Yennie Jun
presents an analysis of token length for languages.<span class="sidenote">Try out the exploratory dashboard to analyze token lengths for various languages https://huggingface.co/spaces/santhosh/tokenizers-languages</span>

![](/wp-content/uploads/2026/02/tokenizer/medium-token-length.webp)


Let us understand popular algorithms for tokenization.


## BPE: Original Algorithm and Its NLP Variants

### The Original BPE (1994)

[Byte-Pair Encoding](https://en.wikipedia.org/wiki/Byte-pair_encoding) was invented by Philip Gage in 1994 as a **data compression** algorithm. The idea is simple: scan a text, find the most frequent pair of adjacent bytes, replace it with a new symbol, and repeat until no pair occurs more than once. The result is a shorter representation and a lookup table to reverse it.

```
aaabdaaabac
→ Replace "aa" with Z:  ZabdZabac  (Z=aa)
→ Replace "ab" with Y:  ZYdZYac    (Y=ab, Z=aa)
→ Replace "ZY" with X:  XdXac      (X=ZY, Y=ab, Z=aa)
```

This has nothing to do with language. It is lossless compression over arbitrary byte sequences.

### Modified BPE for Language Models

In 2015, Sennrich et al.[^2] adapted BPE for neural machine translation. The compression goal was replaced with a vocabulary-learning goal:

1. Start with a vocabulary of individual characters (or Unicode code points).
2. Count the most frequent adjacent pair of tokens.
3. Merge that pair into a new token. Add it to the vocabulary.
4. Repeat until the vocabulary reaches the target size.

The result is a vocabulary of *subword units* — fragments ranging from single characters to full common words. Any text can be encoded without unknowns, because individual characters are always in the vocabulary.

This is the algorithm used in GPT-2, RoBERTa, and many other models. It operates at the character level, and for languages written with Latin script it works well: characters map one-to-one to bytes, morphemes tend to be short, and frequent subwords align with meaningful linguistic units.

### Byte-Level BPE (BBPE) — the Problematic Variant

GPT-2 introduced a further modification: **Byte-Level BPE (BBPE)**. Instead of starting from characters, BBPE starts from individual bytes. Every input string is first converted to its raw UTF-8 byte sequence, then BPE merges are applied over those 256 possible byte values.

The motivation was practical: BBPE can encode *any* Unicode text without an `<unk>` token, because every possible byte is in the base vocabulary. You never need to handle unknown characters.

For English and Latin-script languages this is almost invisible — Latin characters are single-byte UTF-8, so byte-level and character-level are equivalent. But for Malayalam the effect is severe.

Malayalam characters are encoded in UTF-8 as **3-byte sequences**. A single character like `ന` (U+0D28) is stored as the bytes `0xE0 0xB4 0xA8`. BBPE treats these three bytes as three separate tokens. Merges then learn to re-combine them — but only for high-frequency combinations. Low-frequency or rare words end up fragmented at the byte level, producing tokens that are not valid Unicode characters, carry no linguistic meaning, and inflate sequence length.

| Text | Encoding level | Tokens |
|---|---|---|
| `ന` (U+0D28) | Character-level BPE | 1 token (`ന`) |
| `ന` (U+0D28) | Byte-Level BPE | Up to 3 tokens (`0xE0`, `0xB4`, `0xA8`) |

This is why the criticism "BPE is bad for Malayalam" is more precisely: **Byte-Level BPE is bad for Malayalam**. Character-level BPE, trained on sufficient Malayalam text, can learn meaningful subword units. The problem is that almost no existing model's tokenizer was trained that way.

As you can see below, the word കേരളം is tokenized to 10 tokens in LLaMA-3, each one is not a valid character but byte fragments.

![](/wp-content/uploads/2026/02/tokenizer/llama-3-ml-tokens.png)

GPT-4 and other popular LLMs chose this method not as an oversight. They prioritizes universal encoding (handling binary data/code/emojis) which is why it defaults to raw bytes

### BPE Tokenizer that respects character boundaries

We can configure a BPE to respect character boundaries. I trained a BPE tokenizer for Malayalam using [SMC Corpus](https://gitlab.com/smc/corpus/). <span class="sidenote">[SMC Corpus](https://gitlab.com/smc/corpus/) is not a large corpus. It is about 250 MB of text from wikipedia, Sayahna, news portals etc. However, the content was curated.</span> It uses a **Metaspace pre-tokenizer**, not a ByteLevel pre-tokenizer. Metaspace splits on whitespace and replaces spaces with the `▁` marker — it operates at the character (Unicode code point) level. Malayalam's multibyte UTF-8 sequences remain intact throughout.


---

## Unigram Tokenization

Having fixed the byte-level problem, the next question is whether BPE is the best approach at all, or whether a different algorithm produces better segmentations for Malayalam.

**Unigram** (sometimes called *SentencePiece Unigram*) is a probabilistic tokenization algorithm introduced by Kudo (2018) [^4]. It works differently from BPE<span class="sidenote">HuggingFace LLM Course has a [chapter on Unigram](https://huggingface.co/learn/llm-course/en/chapter6/7). Recommended.</span>:

1. Start with a large seed vocabulary of character n-grams from the corpus.
2. Assign probabilities to each piece based on corpus frequency.
3. Iteratively prune pieces with low contribution to the overall likelihood (EM algorithm).
4. At inference, find the segmentation that **maximizes the probability of the sentence** using dynamic programming (Viterbi decoding).

The key difference from BPE is in how segmentation decisions are made. BPE is *deterministic* — given a vocabulary, every string has exactly one segmentation, produced by greedily applying the merge rules. Unigram is *probabilistic* — it finds the globally optimal segmentation given the learned piece probabilities.

For agglutinative languages like Malayalam, where a single word may be composed of a root and several suffixes stacked together, this can matter. BPE's greedy merge strategy tends to learn token boundaries that reflect frequency in the training corpus, which is often driven by common short prefixes. Unigram's EM training tends to discover pieces that carry more coherent linguistic meaning.



### Algorithm Comparison

| Algorithm | Segmentation | Strengths | Weaknesses | Used in |
|---|---|---|---|---|
| BPE (character-level) | Deterministic greedy merge | Fast, no unknowns | Greedy; frequency-driven boundaries | GPT-2, RoBERTa |
| Byte-Level BPE | Deterministic, byte-based | Universal coverage | Fragments non-Latin scripts | GPT-3/4, LLaMA |
| WordPiece | Greedy likelihood | Stable vocabularies | English-centric initialization | BERT |
| Unigram | Probabilistic (Viterbi) | Optimal segmentation; script-agnostic | Heavier training | T5, XLM-R, Gemma |

Both our tokenizers use character-level Metaspace — avoiding the byte-level problem entirely — and differ only in the merge/pruning algorithm: BPE uses greedy frequency merges, Unigram uses EM-based pruning with Viterbi decoding.


## Training Data: SMC Malayalam Corpus

Both tokenizers were trained on the [Swathanthra Malayalam Computing (SMC) corpus](https://gitlab.com/smc/corpus/), a freely licensed collection of Malayalam text aggregated by SMC from Wikipedia, Sayahna (literary works), newspapers, and other sources.

The corpus provides broad vocabulary coverage across registers — formal, literary, and journalistic — which is important for learning subword units that generalize beyond any single domain.


## Building the Tokenizers

Both tokenizers are implemented in Rust using the [HuggingFace `tokenizers`](https://github.com/huggingface/tokenizers) library (v0.22.2). The implementations share the same normalizer and pre-tokenizer configuration; only the model and trainer differ.

Source code for the tokenizer trainer is available at https://github.com/smc/malayalam-tokenizer

### Shared Configuration

Both tokenizers apply:

- **NFC normalization** — ensures Malayalam conjuncts formed via ZWJ/ZWNJ are handled consistently. Without this, the same grapheme cluster can appear in multiple Unicode representations, splitting what should be one token into different IDs.
- **Metaspace pre-tokenization** — splits on whitespace, marks word boundaries with `▁`. Operates at Unicode code point level, preserving Malayalam's multibyte sequences.
- **Special tokens**: `<s>`, `</s>`, `<unk>`, `<pad>`, `<mask>` — compatible with HuggingFace's standard interface.
- **Vocabulary size**: 16,000.

### Training BPE

```bash
cargo run --release --bin ml_bpe_tokenizer -- train \
  --folder corpus/           \   # directory of .txt files
  --vocab-size 16000         \
  --output data/tokenizer.ml.bpe.json
```

The BPE trainer builds merge rules starting from individual Malayalam characters. Each merge combines the most frequent adjacent pair across the corpus. After 16,000 merges (minus special tokens), the vocabulary is saved as HuggingFace-compatible JSON.

### Training Unigram

```bash
cargo run --release --bin ml_unigram_tokenizer -- train \
  --folder corpus/           \
  --vocab-size 16000         \
  --output data/tokenizer.ml.unigram.json
```

The Unigram trainer seeds a large initial vocabulary from corpus n-grams, then iteratively prunes it using EM until 16,000 pieces remain. Each step removes the pieces whose removal decreases overall corpus log-likelihood the least.

### Inspecting the Results

Once trained, you can encode any Malayalam text directly:

```bash
./target/release/ml_bpe_tokenizer encode -t data/tokenizer.ml.bpe.json "നമസ്കാരം"

./target/release/ml_unigram_tokenizer encode -t data/tokenizer.ml.unigram.json "നമസ്കാരം"
```

Both produce meaningful subword splits:

```
BPE:
  Tokens:   ["<s>", "▁ന", "മസ്", "കാരം", "</s>"]

Unigram:
  Tokens:   ["<s>", "▁ന", "മസ്", "കാരം", "</s>"]
```
For longer, morphologically complex words the segmentations can differ:

```

BPE:
  Tokens:   ["<s>", "▁അങ്ങനെയ", "ുണ്ട്", "</s>"]

Unigram:
  Tokens:   ["<s>", "▁അങ്ങനെ", "യുണ്ട്", "</s>"]
```

Both arrive at two meaningful content pieces, but the boundary falls differently. The BPE split keeps `അങ്ങനെ` + `യ` (adverb root + connective particle) as one unit; Unigram splits at the morpheme boundary `അങ്ങനെ` | `യുണ്ട്`. Neither is wrong — they reflect different frequency patterns learned from the same corpus.

### Vocabulary Size

16,000 is the default and the recommended starting point for a single-language tokenizer. The trade-off:

| Vocab Size | Pros | Cons | Suitable For |
|---|---|---|---|
| 8K | Small model, fast | More fragmentation, higher fertility | Prototypes, constrained environments |
| 16K | Good coverage, manageable size | — | General Malayalam NLP (recommended) |
| 20K | Better morpheme coverage | Larger model | Large, diverse corpora |
| 32K | Broad cross-lingual coverage | High sparsity, memory cost | Mixed-language models |

---

## The Tokenizers on HuggingFace

Both trained tokenizers are published on HuggingFace under the SMC project:

- **BPE**: [smcproject/malayalam-bpe-tokenizer](https://huggingface.co/smcproject/malayalam-bpe-tokenizer)
- **Unigram**: [smcproject/malayalam-unigram-tokenizer](https://huggingface.co/smcproject/malayalam-unigram-tokenizer)

They are compatible with the standard HuggingFace `transformers` interface:

```python
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("smcproject/malayalam-bpe-tokenizer")

text = "മലയാളം ഒരു ദ്രാവിഡ ഭാഷയാണ്"
tokens = tokenizer.tokenize(text)
print(tokens)
# ['▁മലയാളം', '▁ഒരു', '▁ദ്രാവിഡ', '▁ഭാഷ', 'യാണ്']
```

Both tokenizers include a demo comparison UI on HuggingFace, available at the [smcproject/malayalam-bpe-tokenizer](https://huggingface.co/spaces/smcproject/malayalam-tokenizer-comparison) space page. You can paste any Malayalam text and see how each tokenizer segments it, side by side.

{{< figure src="/wp-content/uploads/2026/02/tokenizer/tokenizer-comparison-space.png" caption="Screenshot of the HuggingFace [Malayalam  tokenizer comparison](https://huggingface.co/spaces/smcproject/malayalam-tokenizer-comparison)  demo." >}}

---

## Evaluating tokenizers

### Fertility Across Tokenizers

The most direct way to measure tokenizer quality is **fertility** — the number of tokens produced per word. Lower fertility means more compact representations, which translates to:

- Fewer model steps per sentence
- More text fitting in a fixed context window
- Less fragmentation of linguistic units

I evaluated fertility on a Malayalam reference text (a paragraph describing the Malayalam language and its geographic distribution) using a cross-section of major LLM tokenizers alongside our two Malayalam-specific tokenizers.

The [evaluation script](https://github.com/smc/malayalam-tokenizer/blob/master/scripts/evaluate_tokenizers.py) uses the HuggingFace `transformers` library to load each tokenizer and count tokens on the same input text<span class="sidenote">The evaluation text used is the first two paragraphs of Malayalam article in Malayalam Wikipedia.</span>.

**Results (175-word Malayalam reference text)**

| Tokenizer | Model | Tokens | Tokens/Word |
|---|---|---|---|
| **MalayalamBPE** | smcproject/malayalam-bpe-tokenizer | **336** | **1.9** |
| **MalayalamUnigram** | smcproject/malayalam-unigram-tokenizer | **335** | **1.9** |
| Sarvam-1 | sarvamai/sarvam-1 | 528 | 3.0 |
| Gemma-3 | unsloth/gemma-3-4b-it | 544 | 3.1 |
| LLama-4 | unsloth/Llama-4-Scout-17B-16E-Instruct | 875 | 5.0 |
| Gemma-2 | unsloth/gemma-2-2b-it | 1,045 | 6.0 |
| mistral-small-3.1 | unsloth/Mistral-Small-3.1-24B-Instruct-2503 | 1,135 | 6.5 |
| DeepSeek-V3 | unsloth/DeepSeek-V3 | 1,350 | 7.7 |
| Qwen2.5 | unsloth/Qwen2.5-3B-Instruct | 2,281 | 13.0 |
| GPT-4 | (cl100k_base via tiktoken) | 2,772 | 15.8 |
| LLama-3 | unsloth/Llama-3.3-70B-Instruct | 2,773 | 15.8 |
| phi-4 | unsloth/phi-4 | 2,772 | 15.8 |
| SmolDocling | ds4sd/SmolDocling-256M-preview | 3,484 | 19.9 |
| SmolVLM | HuggingFaceTB/SmolVLM-256M-Instruct | 3,484 | 19.9 |

{{< figure src="/wp-content/uploads/2026/02/tokenizer/fertility_chart.svg" caption="Bar chart comparing tokens/word across all tokenizers. The Malayalam-specific tokenizers are highlighted." >}}

### Reading the Numbers

The Malayalam-specific tokenizers produce **1.9 tokens per word** — less than 2 on average. This is close to the theoretical floor: some words are common enough to be single tokens, others (morphologically complex) split into 2–3 pieces.

The best multilingual tokenizer in this comparison is [Sarvam-1](https://huggingface.co/sarvamai/sarvam-1)  at 3.0, followed by Gemma-3 at 3.1. Sarvam is notable here — it is an Indian-language-focused model trained specifically to handle Indic scripts well, and its tokenizer reflects that investment. Gemma-3's 3.1 is also respectable; Google's training data skews toward higher coverage of Indian languages.

At the other extreme, models like GPT-4, LLaMA-3, phi-4, SmolDocling, and SmolVLM produce 15–20 tokens per word for Malayalam. These are BBPE tokenizers where Malayalam's 3-byte UTF-8 sequences fragment into individual bytes before merges can recover them. A 175-word paragraph becomes 2,700–3,500 tokens. For a 4K-token context window, that leaves room for roughly 3–4 sentences of Malayalam.

The gap between 1.9 (our tokenizer) and 15.8 (LLaMA-3) is not a small optimization. It is roughly **8× more efficient use of the context window**.

It should be noted that there is nothing magic in my tokenizer training. The training data was chosen as Malayalam alone. That is entirely different from other tokenizers where they either try to focus primarily English or try to address multiple languages with varying size training data at once. We will discuss the pros and cons of this approach later in this article.

### BPE vs Unigram: Are They Different?

For this text, BPE produces 336 tokens and Unigram produces 335 — essentially identical fertility. This is expected: both algorithms, trained on the same corpus with the same vocabulary size and the same Metaspace pre-tokenizer, converge to similar token counts. The differences show up at the boundary level (where exactly a word is split), not in the aggregate count.

For downstream model training, the choice between BPE and Unigram may matter more for morphological alignment than for raw efficiency. Unigram's probabilistic training tends to produce pieces that align better with morpheme boundaries; BPE's frequency-driven merges tend to capture common surface forms. Both are reasonable starting points for Malayalam NLP.

In fact, I observed the morphological alignment. Consider the text: "മരത്തിൽ കയറി" and "എങ്ങനെയുണ്ട്" <span class="sidenote">Meaning: <q>Climbed on the tree</q> and <q>How is it</q> respectively</span>


|BPE Tokenizer |Unigram Tokenizer|
|:--------------|:-----------------|
|<token>മ </token><token>രത്തിൽ </token><token>കയറി</token>|<token>മര</token><token>ത്തിൽ </token><token>കയറി</token>|
|<token>എ </token><token>ങ്ങനെയ</token><token>ുണ്ട്</token>|<token>എങ്ങനെ</token><token>യുണ്ട് </token>|

The morphemes of മരത്തിൽ is `മരം<Noun><Locative>`.<span class="sidenote">For Malayalam morphological analysis and generation, refer [mlmorph](https://morph.smc.org.in/analyser.html) project.</span> Linguistic correctness of morphemes cannot be expected from a statistical tokenizer, but the letter മ used as a token for the word മരത്തിൽ does not make any sense. `മര`  as given by Unigram is better token in this case. We will discuss what I meant by 'better token' later in this article.


### Character boundary or Syllable boundary?

We noticed that intra-character split is not happening with BPE(and Unigram) as expected. However, we can see that the token boundaries are still at odd positions. Take the example of my name "സന്തോഷ്"


|BPE Tokenizer |Unigram Tokenizer|
|:--------------|:-----------------|
|<token>സന്ത </token><token>ോഷ് </token>|<token>സന്തോഷ</token><token>് </token>|

Did you notice a dotted circle in second token? Dotted circles appear because the text fragment is incomplete as per Malayalam script conventions. <span class="sidenote">Also known as Script grammar</span>. Malayalam (and other Indic languages) has the concept of matras/vowel signs. Vowel signs are not stand alone. They should appear along with a consonant. Script rendering systems will indicate this by a dotted circle. Beyond rendering, what we are seeing is inappropriate word split for Malayalam. You cannot start a word with a vowel sign. A valid word will always start with a Vowel or Consonant<span class="sidenote">For more details on Script grammar of Malayalam, refer [A formal grammar for Malayalam syllables](https://thottingal.in/blog/2017/05/27/a-formal-grammar-for-malayalam-syllables/) - Santhosh Thottingal</span>. Never with a vowel sign. In the case of unigram tokenizer, the above example shows Virama sign as second token. [Virama sign removes the inherent vowel](https://en.wikipedia.org/wiki/Virama) from the preceding consonant. But that consonant was part of first token and here the virama sign is isolated.

Another example: The word "നിലക്കടല" is tokenized by both BPE and Unigram tokenizer as

<token>നില</token><token>ക്കട</token><token>ല</token>

Here, the second token `ക്കട` is starting with a [geminated consonant](https://en.wikipedia.org/wiki/Gemination) a pattern that cannot happen in Malayalam.

This raises a question on our pre-tokenizer. Should we need a more sophisticated pre-tokenizer? I don't know. I am planning to do more experiments on it. I am not forgetting that linguistic accuracy is not expected from tokens. We will discuss more on that later in this article.

I also noticed another interesting aspect of Unigram tokenizer while testing different texts. Even though the above fertility rate measurement reported similar rate for both BPE and Unigram, it may be better for Unigram if we widen our test corpus. I noticed several examples where unigram model is producing less number of tokens than BPE. An example: "മനുഷ്യന്റെ".  As shown below Unigram tokenizer produced 1 token while BPE tokenizer produced 3 tokens.


|BPE Tokenizer |Unigram Tokenizer|
|:--------------|:-----------------|
|<token>മ</token><token>നുഷ്യ</token><token>ന്റെ</token>|<token>മനുഷ്യന്റെ</token>|


The fertility numbers are now in. BPE: 1.9 tokens per word. Unigram: 1.9 tokens per word. Against GPT-4's 15.8, LLaMA-3's 15.8, Qwen's 13.0. The tokenizer problem, at least, is solvable — and the solution is not exotic. But a fertility score is not the end of the story. It is the beginning of a harder question: what do these numbers actually mean for building LLMs that work in Malayalam? The rest of this post is an attempt to answer that honestly.

---

## What It Takes for LLMs to Support Malayalam

Building a capable LLM for Malayalam is a chain of dependent problems, and tokenization is the first link. If that link is weak, every link downstream is weaker.

![](/wp-content/uploads/2026/02/tokenizer/minimal-llm.png)

Following is a **very** minimal pseudocode of an LLM.<span class="sidenote">One of the good resources to learn LLM and transformer visually is [Transformer explainer](https://poloclub.github.io/transformer-explainer/). While the code is greatly simplified, LLMs are actually simple at its core. Check out Andrej Karpathy's [nanochat](https://github.com/karpathy/nanochat)</span>


```javascript
tokens = tokenizer(prompt);
embeddings = embed(tokens);
while (true) {
    x = embeddings;
    for ([attention, feedforward] of transformers) {
        x = x + attention(layernorm(x));
        x = x + feedforward(layernorm(x));
    }

    output_token = output(x[x.length - 1]);
    if (output_token === END_TOKEN) break;

    new_embedding = embed([output_token]);
    embeddings = [...embeddings, new_embedding];
}

print(decode(tokens));
```

### Fertility Is Necessary but Not Sufficient

Good fertility — a low tokens-per-word ratio — is a prerequisite for Malayalam LLM quality, but it is not sufficient on its own[^1]. There are two distinct problems that need to be solved separately:

1. **Tokenizer quality**: the tokenizer must be trained on sufficient, balanced Malayalam text so that its vocabulary allocates meaningful slots to Malayalam subword units.
2. **LLM training data volume**: the model itself must be trained on enough Malayalam text to learn the language's semantics, syntax, and pragmatics.

These are often conflated, but they fail in different ways and require different fixes.

### The Vocabulary Allocation Problem

A tokenizer trained on a heavily English-skewed corpus will produce a vocabulary that is heavily English-skewed, even if the training algorithm is formally language-agnostic. BPE and Unigram both work by finding the most frequent subword units in the training data. If the corpus is 95% English and 5% Malayalam, the algorithm will greedily allocate vocabulary slots to English patterns — common English prefixes, suffixes, and word fragments will absorb most of the 16,000 or 32,000 available positions, leaving only a thin tail for Malayalam.

The result is a tokenizer that handles English with fertility close to 1.0–1.5 tokens per word, while Malayalam falls to 10–20. This imbalance is baked into the vocabulary and cannot be fixed without retraining the tokenizer.

The fix is not simply "add more Malayalam data." Even with a 50/50 balanced tokenizer training corpus, the vocabulary allocation will not be 50/50, because English has a larger inventory of frequent subword combinations that legitimately compete for slots. Getting good Malayalam fertility requires *over-representing* Malayalam in the tokenizer training corpus relative to its intended share in the LLM — enough to force the vocabulary to commit meaningful capacity to Malayalam morphology<span class="sidenote">Vocabulary expansion and continued pretraining is a technique used in low resource languages to address this problem to certain extent. See this presentation by Anoop Kunchukuttan about extending [English LLMs to Indic languages](https://anoopkunchukuttan.gitlab.io/publications/presentations/extend_en_llms_apr2024.pdf) </span>.

### The Training Corpus Balance Must Follow

Once a well-balanced tokenizer exists, the LLM training corpus must reflect the same balance. A good tokenizer trained on balanced data does not help if the LLM is then trained on 99% English text: the model will not learn Malayalam semantics no matter how efficient the token representation is.

But this is where the structural problem becomes stark. The Malayalam internet corpus — Wikipedia, news, literature, social media — is orders of magnitude smaller than English. The [SMC corpus](https://gitlab.com/smc/corpus/) is a serious effort, but Malayalam text available for LLM training is measured in gigabytes where English is measured in terabytes. This is not a gap that can be closed quickly. It reflects decades of digital content production, and Malayalam, like most of the world's languages, is on the short end.

93% of OpenAI GPT-3’s training data set was in English[^3]. Second largest language was French (1.81%). And 0.00165% of it was Malayalam.
<span class="sidenote">To know the percentage of language training data in GPT-3, refer this [spreadsheet](https://github.com/openai/gpt-3/blob/master/dataset_statistics/languages_by_word_count.csv)</span> If you are driving a 100-kilometer journey, 0.0016% of that trip is only 1.6 meters. It’s the length of one single step you take while getting into your car before a cross-country trip!

This is the well-known **data scarcity problem**, and it is the binding constraint for most non-English languages.<span class="sidenote">For a detailed analysis of available corpus for Indic language LLM training, see Anoop Kunchukuttan's [The Evolving Landscape of Indic Language Pre-training Corpora](https://airesearchindia.substack.com/p/the-evolving-landscape-of-indic-language) article</span>

A perfect tokenizer cannot compensate for a 10000:1 training data imbalance. However, there is no magical solution for data scarcity, so the only tangible option is to improve other parts of the system, including the tokenizer.

### How Fragmentation Corrupts Semantic Learning

To understand why tokenizer quality matters so deeply for the *model*, not just for efficiency, it helps to think about how LLMs learn meaning.

Language models learn the meaning of tokens through [distributional semantics](https://en.wikipedia.org/wiki/Distributional_semantics): a token's meaning is defined by the company it keeps.<span class="sidenote"><q>You shall know a word by the company it keeps</q> [Firth, J. R.](https://en.wikipedia.org/wiki/John_Rupert_Firth) 1957:11</span> If the token സ്നേഹം (love) and the token വാത്സല്യം (affection) consistently appear in the same linguistic environments—such as being surrounded by കരുതൽ (care) or ബന്ധം (relationship)—the model learns that these tokens are semantically related. Even if സ്നേഹം and വാത്സല്യം are rarely used in the same sentence, their embeddings will converge in a shared semantic neighborhood because they "fill the same holes" in the language.

<video src="/wp-content/uploads/2026/02/tokenizer/work.mp4" width="100%" controls autoplay loop></video>
<span class="sidenote">Illustration credit: [Generative AI exists because of the transformer](https://ig.ft.com/generative-ai/), By Financial Times Visual Storytelling Team and Madhumita Murgia in London September 12 2023 </span>

Now consider what happens when a BBPE tokenizer fragments `സ്നേഹം` into 8 byte tokens: `e0 b4 b8 e0 b5 8d e0 b4 a8 e0 b5 87 e0 b4 b9 e0 b4 82`. Each of these byte tokens appears in *hundreds* of unrelated Malayalam words. The byte sequence `e0 b4` appears in virtually every Malayalam character. There is no stable semantic neighborhood for `e0` or `b4` — they co-occur with everything indiscriminately. The distributional signal is noise. The model cannot learn that these 8 tokens, in this configuration, mean "love" — it would need to see that exact 8-token sequence in thousands of contexts where the meaning is clearly "love" and not "school" or "river" or "government," all of which share many of the same byte tokens.


{{< figure src="/wp-content/uploads/2026/02/tokenizer/tokenization-attention.svg" caption="Illustration of token fragmentation that leads to attention spread in the case of English." >}}

This is not a theoretical concern. It is the mechanism by which high token fertility directly degrades model quality: fragmentation dilutes the distributional signal that the model depends on to learn meaning.

### Breaking Cross-Lingual Transfer

There is a secondary, perhaps more damaging, effect of this fragmentation: it breaks the bridge between languages.

In modern LLM training, we rely heavily on cross-lingual transfer. We assume that if a model learns the logic of "mathematics" or "coding" in English (where data is abundant), it can transfer that reasoning to Malayalam. We expect the model to map the English concept of `Democracy` to the Malayalam concept of `ജനാധിപത്യം`.

The Geometry of Alignment
In a vector space, this mapping is geometric. The model tries to align the vector for Democracy with the vector for ജനാധിപത്യം.

* In a good tokenizer: Democracy is 1 token. ജനാധിപത്യം might be 2–3 tokens. The model learns a mapping between two stable, compact vector representations.
*  In a BBPE tokenizer: Democracy is 1 token. ജനാധിപത്യം is 15 byte-tokens.

The model is no longer mapping a concept to a concept. It is trying to map a single stable point (the English token) to a specific, jittery trajectory of 15 byte-tokens. This is exponentially harder.

This is one of the reason why we often see "hallucination" in low-resource languages. The model understands the query in Malayalam, does the reasoning in its "English" latent space, but when it tries to project the answer back into Malayalam, it fails to navigate the complex 15-step trajectory required to output the correct word. It falls off the path, outputting valid byte-tokens that form nonsense words.

By fixing the tokenizer, we are not just compressing text; we are stabilizing the bridge that allows Malayalam to inherit the reasoning capabilities learned from high-resource languages.

### Does Attention Solve This?

A reasonable question at this point is: does the transformer's attention mechanism rescue us from this problem? After all, transformers do not learn meaning at the token level in isolation — they learn it *in context*, through attention over sequences. Even if `സ്നേഹം` is fragmented into 8 tokens, the attention mechanism can in principle attend over all 8 tokens together and recover word-level meaning from context. <span class="sidenote">Attention in Transformers is a mechanism allowing models to weigh the importance of different input tokens relative to each other, creating <a href="https://jalammar.github.io/illustrated-transformer/">context-aware embeddings.</a></span>


This is a real mitigation. It is part of why GPT-4, despite its 15.8 tokens/word for Malayalam, can still produce passable Malayalam output when given enough context. The transformer's attention is more powerful than the static vector lookup of the [Word2Vec](https://en.wikipedia.org/wiki/Word2vec) era.


<video src="/wp-content/uploads/2026/02/tokenizer/interest.mp4" width="100%" controls autoplay loop></video>

**But attention mitigates the problem without eliminating it.** The costs surface elsewhere:

**Context window cost.** A Malayalam sentence that takes 50 tokens in a well-trained tokenizer takes 400 tokens in a BBPE model. The model spends the bulk of its context window on the mechanical work of "reassembling" meaning from byte fragments, rather than on reasoning about the content. For a 4K-token context window, this is the difference between 80 words of Malayalam and 10.

**Training data requirements scale with fragmentation.** For the model to learn that these 8 specific byte tokens, in this specific order, mean "love," it needs to see that 8-token sequence in enough distinct contexts to build a stable representation. With a good tokenizer where the word is 1–2 tokens, far fewer training examples are needed to reach the same representational quality. High fragmentation does not just require more computation — it requires more *data*. For a low-resource language, this is exactly the resource you do not have.

**Positional locality pressure.** Transformer attention is not uniformly distributed across sequence positions. Models with [sliding window attention](https://www.digitalocean.com/community/tutorials/sliding-window-attention-efficient-long-context-models) (Mistral, for example) explicitly limit the attention span. Even in full-attention models, the attention mechanism has a learned bias toward local context. A word fragmented into 8 consecutive tokens requires the model to bridge positions 1–8 to compose a word; in a well-tokenized sequence, the same word occupies position 1. At scale, across thousands of Malayalam words in a document, this positional overhead compounds.

### The Sentence Transformer Partial Exception

A partial exception to this fragmentation penalty is found in [Sentence transformers](https://sbert.net). Because these models pool the entire sequence into a single fixed-size embedding, they can aggregate semantic signal across fragmented tokens more effectively than autoregressive models.<span class="sidenote">Sentence transformers (like SBERT) create a holistic vector representation via pooling, making them robust for retrieval (RAG) tasks even with suboptimal tokenization. However, they do not help with generation, which requires precise, step-by-step prediction of the next token.</span> While this makes semantic search more forgiving, it does not rescue the generative process: when an LLM produces text, it must predict probabilities based on immediate local context, a mechanism that breaks down when meaningful words are shattered into arbitrary byte sequences.

### Morphological complexity

Malayalam is agglutinative. Unlike English, where complex ideas are strung together as separate words ("Sat in the shade of the tree"), Malayalam fuses them into single, potentially infinite strings (മരത്തണലിലിരുന്നു). This phenomenon, known as productive morphology, means the number of possible "words" in Malayalam is mathematically infinite. <span class="sidenote">If you are curious about morphological complexity is measured and how Malayalam compares with other languages, read [A quantitative analysis of the morphological complexity of Malayalam](https://kavyamanohar.com/post/malayalam-morphological-complexity/) by Kavya Manohar</span>. There are many other languages that share this characteristics - Dravidian languages, Finnish, Turkish are some examples.

For example "വെയിലേൽക്കാതിരിക്കാൻ മരത്തണലിലിരുന്നു" . "മരത്തണലിലിരുന്നു" means "Sat at the shade of a tree" A single word has verb, noun, adjective forms fused together. "വെയിലേൽക്കാതിരിക്കാൻ" means "To avoid sunburn". <span class="sidenote">It is possible to slightly simplify these words for writing. വെയിൽ ഏൽക്കാതിരിക്കാൻ മരത്തണലിൽ ഇരുന്നു. is an accepted form. However, a native Malayalam speaker will not speak with multiple pauses in the writing. On the other hand, we can also write it as a single word: വെയിലേൽക്കാതിരിക്കാനാമരത്തണലിലിരുന്നു.  Can appear a bit peotic though. </span>

For a tokenizer, this is a nightmare. A static vocabulary cannot memorize every possible word. It must rely on subword segmentation. But how it segments matters. When I tokenize മരത്തണലിലിരുന്നു using a good tokenizer, I would expect semantic meaning and relations for the following words captured (in the sense of LLM semantic capturing):

* Tree - മരം
* Shadow - തണൽ
* Sat (past tense) of sit - ഇരുന്നു
* Locative relation - ഇൽ

Similarly, for  വെയിലേൽക്കാതിരിക്കാൻ

* Sunburn  - വെയിൽ
* Sun - സൂര്യൻ
* Not to - ഒഴിവാക്കാൻ
* Causal relation - ഏൽക്കാതിരിക്കാൻ

Let us first tokenize using our trained tokenizers. For simplicity I am using SMC Unigram Tokenizer<span class="sidenote">If you try our [tokenizer comparison tool](https://huggingface.co/spaces/smcproject/malayalam-tokenizer-comparison), you will find that gpt4 tokenizer produces 63 tokens</span>. We get 4+6 = 10 tokens:

<token>വെ</token><token>യിലേ</token><token>ൽക്ക</token><token>ാതിരിക്കാൻ</token>

<token>മര</token><token>ത്ത</token><token>ണ</token><token>ലി</token><token>ല</token><token>ിരുന്നു</token>

If you try to spot [lemma](https://en.wikipedia.org/wiki/Lemma_(morphology)) or stems from the words in this list, maybe "മര" (tree) alone will qualify it. Rest are statistical occurrence based character sequences. Some of them are not valid subwords from script grammar perspectives. But LLMs are known to be far away from those notions of classical linguistics.

To understand this further let us analyze few more examples.

| Word | Meaning | Tokens from SMC Unigram tokenizer |
| -----|-----|----|
|നിലക്കടല| Peanut| <token>നീല</token><token>ക്കട</token><token>ല</token>|
| ഇറച്ചിക്കട| Butcher Shop|<token>ഇ</token><token>റ</token><token>ച്ചി</token><token>ക്കട</token>|
| തീക്കടൽ | Sea of fire|<token>തീ</token><token>ക്കട</token><token>ൽ</token>|
| മർക്കടൻ | Monkey|<token>മർ</token><token>ക്കട</token><token>ൻ</token>|

Note the token `ക്കട`.  To the model, the token `ക്കട` is noise. It appears in contexts regarding food, oceans, animals, and commerce. The distributional hypothesis—that a word is defined by its company—collapses here. The "company" ക്കട keeps is incoherent.

**The "Bitter Lesson" vs. The Data Reality**

Rich Sutton’s famous essay, [The bitter lesson](https://en.wikipedia.org/wiki/Bitter_lesson), argues that we should stop trying to engineer human knowledge (like linguistics) into AI. He claims that general methods (search and learning) scaling with massive computation always win in the long run.

For English, this is true. The model sees the token ing billions of times, eventually "learning" it is a gerund suffix purely from statistics.

But for Malayalam, we do not have the data to learn the hard way. We cannot afford to let the model spend billions of floating-point operations figuring out that ക്കട means "shop" in one context and "sea" in another. We need the tokenizer to present the data in a way that makes the patterns obvious before the model starts learning.

### Free Word Order: An Additional Compounding Difficulty

Malayalam has one more structural property that makes the learning problem harder, and it interacts with everything discussed so far: **free word order**.

Malayalam is canonically Subject-Object-Verb (SOV). `രാമൻ രാവണനെ കൊന്നു` —Rama killed Ravana — is the default order. But the language allows significant permutation for emphasis and pragmatic focus. `രാവണനെ രാമൻ കൊന്നു`, `കൊന്നു രാവണനെ രാമൻ `, and several other orderings are all grammatical, differing in what the speaker foregrounds rather than in the core propositional meaning. A native speaker shifts word order naturally, continuously, and often without conscious awareness. A language model must handle all of these.

* <token>രാമൻ</token><token>രാവണനെ</token><token>കൊന്നു</token>
* <token>രാമൻ</token><token>കൊന്നു</token><token>രാവണനെ</token>
* <token>രാവണനെ</token><token>രാമൻ</token><token>കൊന്നു</token>
* <token>രാവണനെ</token><token>കൊന്നു</token><token>രാമൻ</token>
* <token>കൊന്നു</token><token>രാമൻ</token><token>രാവണനെ</token>
* <token>കൊന്നു</token><token>രാവണനെ</token><token>രാമൻ</token>

The immediate question is whether this is a problem that transformer attention can solve. The answer is: yes, in principle — but at a cost that further multiplies the already-demanding data requirement.

**Why attention is architecturally suited to free word order**

The self-attention mechanism is, at its core, a learned function over all pairs of positions in a sequence simultaneously. It does not process tokens left-to-right the way a recurrent model does; it considers every token in relation to every other token in a single pass. Positional encodings inject order information, but the attention weights themselves can learn to down-weight positional distance and up-weight semantic and syntactic relationships regardless of where tokens appear in the sequence.

This means that a transformer *can* learn that `രാമൻ രാവണനെ കൊന്നു` and `രാവണനെ രാമൻ കൊന്നു` are expressions of the same underlying proposition. The architecture is not the obstacle. The recurrent models that preceded transformers had a much harder time with this: their sequential processing made long-distance dependencies in permuted orders genuinely difficult to learn. Transformers removed that structural barrier.

**But equivalence must be learned, and learning requires data**

The critical point is that this equivalence is not given to the model — it must be *learned from examples*. Each word order variant is a distinct token sequence, and the model must see each variant enough times, in enough varied contexts, to recognize that they map to the same semantic content.

Consider a modest Malayalam clause with five content words. There are up to 120 possible orderings. Not all are equally natural — some are pragmatically marked, some borderline — but a substantial fraction are attested in real text. For the model to handle all of them with equal confidence, it must have seen each with enough frequency to build stable representations. In English, this problem barely exists: the word order is rigid enough that the model only needs to learn one canonical pattern per sentence type.

The data demand this creates is not merely additive. It multiplies with the vocabulary. Every new verb, every new noun, every new construction introduces a fresh set of ordering variants that the model must learn independently. The total surface variation the model must cover is the product of lexical variety and ordering variety. For a low-resource language already struggling to provide enough training text, this multiplication is particularly damaging.

**Morphology as the load-bearing structure**

Malayalam does not leave the reader stranded by free word order. The language compensates through rich morphological case marking. `രാമൻ` carries nominative case, marking it as the subject regardless of where it appears in the sentence. `രാവണനെ` carries accusative marking. The grammatical relationships are encoded in the morphology of each word, not in their positions relative to each other. A speaker — or a model — that can read the case suffixes does not need position to determine who is doing what to whom.

This is an elegant solution at the linguistic level, but it shifts the burden for the language model. To exploit case morphology correctly, the model must learn the full paradigm of case suffixes across all noun classes, the agreement patterns between arguments and predicates, and the pragmatic conditions that license each word order variant. This is a substantial amount of linguistic structure to acquire, and it requires training data that is both sufficient in volume and sufficiently varied in the constructions it contains.

The tokenizer is implicated here directly. Malayalam case suffixes are morphemes — meaningful units that attach to noun stems. A well-trained tokenizer, like the ones we built here, uses the Metaspace pre-tokenizer and trains on Malayalam text, which means it has the opportunity to learn morpheme boundaries. A BPE tokenizer trained on adequate Malayalam data will tend to learn that `-യ്ക്ക്` (dative suffix) is a coherent unit, because it appears frequently as a suffix across thousands of different noun stems. A BBPE tokenizer slices the suffix into its constituent bytes, destroying the morphological signal entirely. The model trained on BBPE-tokenized Malayalam must reconstruct, from raw byte co-occurrence statistics, that these bytes together encode a grammatical relationship. This is possible in principle but requires vastly more data to achieve the same quality of grammatical knowledge.


**The compounding interaction with fragmentation**

There is a specific compounding effect worth making explicit. Free word order requires the model to establish long-distance dependencies between subject, object, and verb across many possible positional configurations. The ability of attention to bridge these dependencies depends on the token distance between the relevant elements.

In a well-tokenized 10-word Malayalam sentence, the subject and verb might be separated by 5–15 token positions depending on word order. Attention can bridge 5–15 positions reliably. In a BBPE-fragmented representation of the same sentence, each word expands to 8–15 byte tokens, and the same 10-word sentence is now 80–150 tokens long. The subject and verb are now separated by 40–80 positions. The model must learn to establish a subject-verb dependency across 40–80 positions, across all the permutations of free word order, from a training corpus that is already small.

Each of these factors is a multiplier on the training data requirement.

| Property | Effect on model | Rough multiplier on data need |
|---|---|---|
| High fragmentation (BBPE) | Increases positional distance between related tokens | ~4–8× |
| Free word order | Increases distinct surface patterns per proposition | ~2–5× |
| Agglutinative morphology | Increases surface form variety per lexical item | ~3–10× |
| Low corpus volume | Base shortfall vs. English | ~100–1000× |


And all of these operate on a base corpus that is orders of magnitude smaller than English.
The result is not a linear data shortfall but a compounding one.

**A structural comparison with English**

It is worth pausing to appreciate how much English's structure simplifies the learning problem, by contrast. English has:



| Feature | **English (The "Simplified" Path)** | **Malayalam (The "Structural" Challenge)** |
| --- | --- | --- |
| **Word Order** | **Fixed (SVO):** "The cat ate the fish." Meaning is derived from position. | **Free:** Word order can shift for emphasis without changing basic meaning. |
| **Morphology** | **Sparse:** Uses separate words (of, the, by) to show relationships. | **Agglutinative:** Complex suffixes are tacked onto roots (one word can be a sentence). |
| **Tokenization** | **Efficient:** ASCII characters are 1 byte; tokens align well with words. | **Fragmented:** Multi-byte UTF-8 characters often get "sliced" into meaningless pieces. |
| **Data Volume** | **Trillions:** Massive, diverse datasets (Common Crawl, books, code). | **Billions:** Significantly less "textual fuel" for the model to learn from. |


This structural asymmetry is why multilingual models trained on English-dominated corpora perform poorly on Malayalam even when Malayalam data is present. It is not enough to include Malayalam in the training mix. The model needs enough Malayalam data to overcome both the free word order variation and the morphological paradigm complexity, with token sequences that are compact enough for attention to bridge the relevant dependencies. None of those conditions are met by current large multilingual models.

**What this means for the data requirement**

A rough way to think about it: a language with fixed word order, sparse morphology, and ASCII text requires approximately X tokens of training data to reach a given level of grammatical and semantic competence. Malayalam, with free word order, agglutinative morphology, multi-byte characters, and BBPE fragmentation, likely requires some multiple of X to reach the same competence level — perhaps 5×, perhaps 20×, the exact factor being an empirical question that has not been carefully measured. What we can say is that the current Malayalam training data available is not X, let alone 5X or 20X. It is far below the threshold where these structural challenges become tractable.

Improving the tokenizer reduces the fragmentation multiplier. It does not touch the word order multiplier or the morphology multiplier. This is the honest scope of what better tokenization can achieve: it removes one compounding factor from a product of several. It is meaningful and worth doing — as we hope this project demonstrates — but it is not sufficient on its own.

This creates a catch-22: we need massive amounts of data to statistically learn the complex grammar, but we are working with a low-resource language. If we cannot scale the data volume to match English, we might need to increase the 'density' of linguistic information per token. This leads us to question the statistical approach entirely: instead of asking the model to discover morphology from byte fragments, what if we baked it into the tokenizer?

### Morphologically informed tokenizer?

If statistical tokenizers like BPE and Unigram are blind to grammar, purely morphological tokenizers attempt to see it. Rather than splitting words based on frequencies morphologically informed tokenizer splits based on linguistic roots and suffixes.

Morphologically rich languages like Turkish have evaluated morphologically informed tokenizers. In the paper titled "Characters or Morphemes: How to Represent Words?"[^5], the authors report that <q>morpheme-based models are better at learning word representations of morphologically complex languages compared to character-based and character n-gram level models since the morphemes help to incorporate more syntactic knowledge in learning, that makes morpheme-based models better at syntactic tasks.</q>. Another study about Turkish language[^6] reports <q> that the morphological-level tokenizer delivers a challenging performance with de facto tokenizers. Furthermore, we find that increasing the vocabulary size improves the performance of Morphological- and Word-level tokenizers more than that of de facto tokenizers.</q>

Even for English, there are compound words, even if rare. In a paper titled "Superbizarre Is Not Superb: Derivational Morphology Improves BERT’s Interpretation of Complex Words"[^7], researchers from Oxford University report that <q>the generalization capabilities of Pretrained Language Models could be further improved if a morphologically-informed vocabulary of input tokens were used</q>

Superbizarre is currently tokenized as:
<token>Superb</token><token>izzare</token>

To tokenize it in correct way(so that it can capture semantic meaning), it should be as follows, the authors argue.
<token>Super</token><token>bizzare</token>

Morphological analysis can provide suffixes and word stems that are semantically more meaningful and valuable than the tokens obtained with overlapping frequency or likelihood. To understand this better, let us take the example തണലിലിരുന്നു.

We will first expand it using a morphological analyzer to `തണൽ<n><locative>ഇരിക്കുക<v><past>`. Then we will tokenize it.
We expect the tokens as:

<token>തണൽ</token><token>`<n>`</token><token>`<locative>`</token><token>ഇരിക്കുക`<v>`</token><token>`<past>`</token>

Why is this theoretically better than unigram or BPE? Let us assume we have other words and observe meaning convergence:

| text | Morphological Analysis| Tokens|
|-----------|---------------|--------------|
| തണലിലിരുന്നു | `തണൽ<n><locative>ഇരിക്കുക<v><past>`|<token>തണൽ</token><token>`<n>`</token><token>`<locative>`</token><token>ഇരിക്കുക`<v>`</token><token>`<past>`</token>|
| തണലിലിരുന്നില്ല | `തണൽ<n><locative>ഇരിക്കുക<v><past><neg>`|<token>തണൽ</token><token>`<n>`</token><token>`<locative>`</token><token>ഇരിക്കുക`<v>`</token><token>`<past>`</token><token>`<neg>`</token>|
| തണലിലിരുന്നോട്ടെ | `തണൽ<n><locative>ഇരിക്കുക<v><permissive_mood>` |<token>തണൽ</token><token>`<n>`</token><token>`<locative>`</token><token>ഇരിക്കുക`<v>`</token><token>`<permissive_mood>`</token>|
| തണലില്ല |` തണൽ<n><neg>`|<token>തണൽ</token><token>`<n>`</token><token>`<neg>`</token>|
| തണലുണ്ടോ?|  `തണൽ<n><locative>ഉണ്ട്<aff><qn>`|<token>തണൽ</token><token>`<n>`</token><token>`<locative>`</token><token>`<aff>`</token><token>`<qn>`</token>|
| തണലിലിരിക്കുക |` തണൽ<n><locative>ഇരിക്കുക<v>`|<token>തണൽ</token><token>`<n>`</token><token>`<locative>`</token><token>ഇരിക്കുക`<v>`</token>|

As you can observe, we represented all the words using a vocabulary of 10. And clearly you can see repeated usage of root words and pos tags. This is what I meant by morphologically informed tokenization. At detokenization stage, we will need morphological generator(reverse process of analysis).

The above idea is a theory for Malayalam and to be experimented with and analyzed.

This approach, however, runs counter to Rich Sutton’s famous "Bitter Lesson" (2019). Sutton argues that hard-coding human knowledge (like linguistic rules) eventually loses to general methods that scale with computation (like raw statistical search).

But the Bitter Lesson assumes we have the computation and the data to scale. For Malayalam, where the training data is 0.0016% of GPT-3's corpus, we may not have the luxury of ignoring linguistic rules.


### The Compound Problem

Putting this together: what would it actually take to build a high-quality Malayalam LLM?


| Requirement | Status | What this project delivers |
|---|---|---|
| Tokenizer: fertility < 2.5–3.0 | Solved here, but we see fertility is not sufficient | 1.9 tok/word (BPE + Unigram) |
| LLM corpus: volume + variety | Open problem | SMC corpus is a start, not sufficient |
| Free word order coverage | Open problem | Requires corpus diversity, not just size |
| Morphological paradigm coverage | Open problem | Preserved at tokenizer layer; model must learn the rest |


All of these problems interact: a better tokenizer lowers the data requirement for the model, because each training example conveys more semantic signal per token and places grammatically related elements closer in positional space. Improving tokenizer quality is one of the highest-leverage interventions available for a low-resource language, precisely because it reduces the multiplier on every other data demand.

The tokenizers we trained here are a small piece of this. They demonstrate that the fertility problem is solvable at the tokenizer layer — 1.9 tokens/word is achievable with a 16K vocabulary trained on the SMC corpus. They preserve morpheme boundaries where BBPE destroys them. They keep Malayalam characters intact rather than fragmenting them into bytes. These are necessary conditions for a capable Malayalam LLM. They are not sufficient conditions. The training data volume problem, the word order coverage problem, and the morphological paradigm coverage problem remain open — and they are significantly harder to solve than training a tokenizer.

## Notes

* I did an illustrated talk about Linguistics, Malayalam and AI at Malayalam University last year. Unfortunately it was not recorded, but my presentation slides are [available here]( https://santhoshtr.github.io/ai-linguistics-malayalam-talk)
* Beyond numbers and theoretical analysis, testing a tokenizer is often done with a downstream task. I worked on a Markov Chain based text generator for Malayalam based on this tokenizer. I will write an article about it later.
* Thanks to Kavya Manohar for valuable discussions to frame the thoughts in this article.

## References

[^1]: Mehdi Ali et al Findings of the Association for Computational Linguistics: NAACL 2024  [Tokenizer Choice For LLM Training: Negligible or Crucial?](https://aclanthology.org/2024.findings-naacl.247/)
[^2]: Sennrich et al. (2015), *Neural Machine Translation of Rare Words with Subword Units*: https://arxiv.org/abs/1508.07909
[^3]: GPT 3 Training data stats: https://github.com/openai/gpt-3/blob/master/dataset_statistics/languages_by_word_count.csv
[^4]: Kudo Taku [Subword Regularization: Improving Neural Network Translation Models with Multiple Subword Candidates](https://arxiv.org/abs/1804.10959)
[^5]: Ahmet Üstün, Murathan Kurfalı, Burcu Can [Characters or Morphemes: How to Represent Words?](https://aclanthology.org/W18-3019/)
[^6]: Cagri Toraman, Eyup Halit Yilmaz, Furkan Şahi̇nuç, Oguzhan Ozcelik [Impact of Tokenization on Language Models: An Analysis for Turkish](https://dl.acm.org/doi/10.1145/3578707)
[^7]: Valentin Hofmann, Janet B. Pierrehumbert, Hinrich Schütze: Superbizarre Is Not Superb: Derivational Morphology Improves BERT’s Interpretation of Complex Words(https://arxiv.org/pdf/2101.00403.pdf)
