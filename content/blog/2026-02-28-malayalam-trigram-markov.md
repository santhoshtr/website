---
title: "From Tokens to Text: A Trigram Markov Model for Malayalam"
type: post
date: 2026-02-28T05:00:00+05:30
url: /blog/2026/02/28/malayalam-markov-chain
tags: ["NLP", "Malayalam", "Markov Chain", "Language Modeling", "Trigram", "CSF", "Rust"]
categories: ["Natural Language Processing", "Machine Learning"]
series: ["Malayalam Language Modeling"]
showToc: true
TocOpen: true
math: true
---

Ever wondered how a computer learns to generate text that actually looks like Malayalam? Not just random characters, but something with actual structure? I'm not talking about Large Language Models here. I'm talking about Small Language Models that are efficient and explainable. something you can build and run on your own laptop.

In my previous "[The Broken Token](https://thottingal.in/blog/2026/02/27/malayalam-tokenizer-llm/)" article, I presented a Malayalam unigram tokenizer and analysed its strengths and weaknesses. I did fertility rate evaluation and then analysed the tokenization in the context of Malayalam language characteristics. A common evaluation method for tokenizers is using them in downstream tasks—so I decided to build a text generator. That's where things got interesting.

Along the way, we'll wrestle with sparsity, pick the right data structure (CSF), and build a generator that *you* can try online.

Live demo: https://malgen.thottingal.in/

Source corpus: Swathanthra Malayalam Computing (SMC) corpus — https://gitlab.com/smc/corpus/

Repository: https://github.com/santhoshtr/markov-trigram

---

## Markov Chains: A Quick Primer

Let's take a quick detour. If you've worked with n-grams before, you might want to skip this—but if you're wondering what "Markov" actually means, read on. <span class="sidenote">![ Russian mathematician Andrey Markov](https://upload.wikimedia.org/wikipedia/commons/7/70/AAMarkov.jpg) Russian mathematician Andrey Markov </span>

A **[Markov chain](https://en.wikipedia.org/wiki/Markov_chain)** is a stochastic model where the probability of the next state depends only on the current state—not on the full history of how you got there. This is called the **Markov property** or memorylessness:

$$P(X_{n+1} = s \mid X_n = s_n, X_{n-1} = s_{n-1}, \dots) = P(X_{n+1} = s \mid X_n = s_n)$$

For text, "states" are words or tokens. A first-order Markov model predicts the next word based solely on the current word. A second-order model (trigrams) looks at the previous two words, and so on.

So why does this work? In many sequences—especially natural language—the immediate past contains most of what's relevant for predicting the future. The further back you look, the less *additional* information you gain. This trade-off between context and tractability is exactly what makes n-gram models useful.

## Why Trigrams?

Here's the question: how much context do we actually need?

A trigram model estimates the probability of the next token given the previous two tokens:

$$P(w_3 \mid w_1, w_2) = \frac{\operatorname{Count}(w_1, w_2, w_3)}{\operatorname{Count}(w_1, w_2)}$$

For tokenized Malayalam, a single word might be split into 2-3 tokens. Therefore, a Bigram often only sees 'inside' a single word. A Trigram is the minimum required to see across word boundaries. Pretty useful, right?

## Just Use a Markov Chain Library?

Can't we just use a markov chain library? There are plenty of libraries. For example, python [markovify](https://github.com/jsvine/markovify) library is popular and has been used in many applications. There are many tutorials on how to build a markov text generator with a few lines of python code.

The only difference is that we're dealing with Malayalam—a language with a nearly infinite vocabulary. English words are mostly discrete blocks. You have "the," "cat," "sat"—you put them next to each other like LEGO bricks. Malayalam, on the other hand, is agglutinative. You don't just stack blocks; you fuse them together to create new, complex shapes like clay.

Markov chains rely on repetition. To learn that "apple" usually follows "red," the model needs to see the sequence "red apple" many times.

In English, the word "house" looks the same most of the time. But in Malayalam, "house" can appear in many forms:

* വീട്         (House)
* വീട്ടിൽ      (In the house)
* വീടിന്റെ    (The house's)
* വീട്ടിലേക്ക്  (To the house)
* വീട്ടിൽനിന്ന്  (From the house)
* വീട്ടിലോ?    (In the house?)

The problem? To a standard Markov chain, വീട് and വീട്ടിൽ are completely different, unrelated words. Because Malayalam can attach gender, tense, case, and prepositions onto the root word, the number of unique words is practically infinite.

Because there are so many variations of every word, your training data becomes "sparse."

If you feed a book into the model:

* In English, the pair "is going" might appear 500 times. The model learns this is a strong connection.

* In Malayalam, the specific form of the verb might only appear once in the whole book because it includes the specific person, tense, and mood all in one word.

If a word pair only appears once, the Markov chain cannot "generalize." It doesn't learn a pattern; it just memorizes that specific sentence.

If you feed Malayalam text into libraries like Markovify (which splits text by spaces), here's what happens:

1. **Copy-Paste (Overfitting)**

Since the connections between specific complex words are so rare, the model won't have choices.

* In English, after "I am," the model chooses between "happy," "sad," "going," etc.
* In Malayalam, after a complex bigram, there's likely only one word that ever followed it in your entire text file.

The generator will simply spit out exact sentences from your source text rather than creating new, original sentences. It fails to "remix" the text.

2. **The Chain Breaks (Dead Ends)**

Markovify creates a dictionary. If you give it a starting word, it looks for what comes next. Because the vocabulary is so huge, it might pick a word that was at the end of a sentence in your training data—one that has no "next" word link for the current context. The generator will stop abruptly or throw errors.

3. **Massive Memory Usage**

Markovify stores a dictionary of every unique word pair.

* In English, a 1MB text file might result in a manageable dictionary.
* In Malayalam, because almost every word is unique due to morphology, the dictionary size explodes, consuming huge amounts of RAM for very little intelligence.

So what's the solution?

First, we need to turn clay into LEGO—make the infinite vocabulary finite. That's where our tokenizer comes in. While this solves the vocabulary issue, it creates a new context problem, especially with bigrams or trigrams.

A Markov chain "looks back" a certain number of steps to decide what to do next.

* Word-Level Bigram: Look back 1 word.    Context: "The President" -> Predicts: "spoke". (The model knows the subject).
* Token-Level Bigram: Look back 1 token.     Context: "_Veett" -> Predicts: "il".

**The Danger**
In a tokenized system, a Bigram or Trigram often covers only one single word or just a fragment of a word.

If you use a Bigram (state size = 1), the model might see the token _ഇൽ (in). It predicts the next token. But _ഇൽ  is a suffix used for houses, cars, boxes, and cities. The model has forgotten what it is inside. It forgot "വീട്" (House).

This makes it very clear that we at least need to try trigrams. And we also need to train with a very large corpus.

The typical use case for Markovify-like libraries is bigrams with a few MBs of text (like Edgar Allan Poe's works or Shakespeare's complete works). A rough estimate of memory requirement for a 500 MB corpus is ~5-6GB RAM for a trigram model—and generation will be quite slow. Increasing state size from 2 to 3 usually triples (or more) the memory usage because there are exponentially more unique combinations of 3 tokens than 2.

Optimization problems like this one are my favorite. Hence I chose the path of building one myself.

## From Text To Trigrams (With Our Tokenizer)

So how do we actually build this thing? Here's the pipeline:

1. **Tokenize**: Encode corpus lines into token IDs
2. **Extract**: Sliding-window trigrams of IDs
3. **Count**: Tally up how often each trigram appears

Let me show you what I mean:

```
Input:  "... മലയാളം വാചകം ..."
Tokens: [w₁, w₂, w₃, w₄, ...]
Trigrams: (w₁,w₂,w₃), (w₂,w₃,w₄), ...
```


Now here's where things get... spicy.

With a 16K-vocabulary tokenizer, the space of possible trigrams is 16K³ ≈ 4 trillion. A dense 3D array is impossible (≈16 TB for counts alone!).

The good news? Real corpora are *extremely* sparse—only a tiny fraction of possible trigrams ever occur. Most word pairs never appear together. "Zebra" rarely follows "the," but "the" often follows "of." So your matrix is mostly zeros.

But that still leaves us with a storage problem. How do we handle it? To represent sparse matrices in a space- and retrieval-efficient way, [Compressed Sparse Rows ](https://en.wikipedia.org/wiki/Sparse_matrix) (CSR) are often used. CSR stores only the non-zero transitions in three lists:

* Values list: The actual probabilities (like 0.3 for "of → the")
* Column indices list: Which column each probability belongs to
* Row pointers list: Where each row's data starts and ends

Here's a simple example. For these transitions:

* Row 1 (word "I"): → "am" (0.4), → "like" (0.6)
* Row 2 (word "to"): → "be" (0.7), → "go" (0.3)
* Row 3 (word "cat"): no transitions (all zeros)

CSR stores:
```text
Values:        [0.4, 0.6, 0.7, 0.3]
Column indices:[1,   5,   2,   3]  (word IDs)
Row pointers:  [0,   2,   4,   4]  (start index of each row)
```

How it works:

* Row 1: starts at index 0, ends before 2 → entries at positions 0-1
* Row 2: starts at 2, ends before 4 → entries at positions 2-3
* Row 3: starts at 4, ends at 4 → no entries (empty row)

Why it's great for markovhains?

* Memory efficient: Only store transitions that actually occur
* Fast prediction: To find what follows "to", go directly to row 2's entries
* Scalable: Works even with huge vocabularies since most pairs are zero

Think of it as a contact list for each word—you only store the friends that actually exist, not the whole phone book of 10,000 names!

But this only works for two dimensions. For three dimensions, we need a CSR of another CSR. It's called Compressed Sparse Fiber (CSF).

## CSF: Compressed Sparse Fiber

This is where CSF comes in. CSF extends CSR's logic to higher dimensions:

* First level: Compress the first word (like CSR rows)
* Second level: For each first word, compress the second word (fibers)
* Third level: Store actual probabilities for the third word

For trigrams, it organizes counts in three levels: w₁ → w₂ → w₃. Each level uses pointer arrays to define ranges, and all indices per range are sorted for binary search. Here's the structure:

```
Level 1 (w₁):
  w1_to_idx: HashMap<u32, usize>
  w1_ptr:    Vec<usize>     // ranges into w2_indices

Level 2 (w₂):
  w2_indices: Vec<u32>      // sorted per w₁
  w2_ptr:     Vec<usize>     // ranges into w3_indices

Level 3 (w₃):
  w3_indices: Vec<u32>      // sorted per (w₁,w₂)
  counts:     Vec<u32>

Metadata: vocabulary_size, bigram_totals, unigram_totals
```

Lookup sketch:

```
GetCount(w₁, w₂, w₃):
  w1_idx = w1_to_idx[w₁]
  [w2_start, w2_end) = w1_ptr[w1_idx .. w1_idx+1]
  w₂ position = binary_search(w2_indices[w2_start..w2_end], w₂)
  [w3_start, w3_end) = w2_ptr[w₂ position .. +1]
  w₃ position = binary_search(w3_indices[w3_start..w3_end], w₃)
  return counts[w3_start + w₃ position]
```

Here's an example. Trigram transitions for:
```
"I am" → "happy" (0.5),
"I am" → "tired" (0.3)
"I like" → "pizza" (0.8)
```

CSF Stores:

```text
Level 1 (first words):
- "I" → points to its second words

Level 2 (second words/fibers):
- "am" → points to third word probabilities
- "like" → points to third word probabilities

Level 3 (actual data):
- For "I"+"am": ["happy":0.5, "tired":0.3]
- For "I"+"like": ["pizza":0.8]
```

#### Visual Analogy

CSR is like a sparse book where each page (row) lists a few friends (columns)
CSF is like a sparse bookshelf where:

* Each shelf = first word
* Each book on that shelf = second word (fiber)
* Each page in that book = probabilities for third words

So why did I choose CSF over the alternatives? Here's what sold me:

- **Efficient range queries**: Given (w₁,w₂), we can grab all w₃ candidates directly—no hunting around
- **Cache-friendly**: Contiguous arrays mean better memory access patterns
- **Minimal overhead**: Way leaner than nested maps

For generation, this matters a lot. We need to find all possible next tokens for a given context quickly. CSF makes that painless.

## Building The Model

The project includes a CLI to build and query the model. It processes the corpus in chunks, parallelizes over lines, and converts a nested map into CSF arrays. It takes about 30 mins to build the model from SMC Corpus. The project is written in Rust.

## Generation: Try It Live

Here's the fun part—the generator.

We use weighted random sampling based on the frequency distribution. Then slides the window forward and repeats.

Want to see it in action? I've got a live demo waiting for you:

**👉 https://malgen.thottingal.in/**

Go ahead, type something in Malayalam and see what the model comes up with. I'll wait.

{{< figure src="/wp-content/uploads/2026/02/markov/malgen.png" caption=" Screenshot of malgen.thottingal.in with a prompt and generated continuation." >}}

The typing effect is just for fun. In fact, generating 1000 tokens takes less than one second—yes, 1000 tokens per second!

Corpus: https://gitlab.com/smc/corpus/

## What We Learned

Here's what stuck with me after building this:

- A good tokenizer dramatically improves efficiency for Malayalam: fewer tokens, better coverage, more coherent downstream modeling
- Trigrams offer a practical balance of context and tractability—enough to generate something that looks like real text, without drowning in data requirements
- CSF is genuinely underrated. If you're working with sparse tensors, give it a look

## What's Next

Where do we go from here? A few ideas I'm playing with:

- Larger corpora and controlled domain subsets (literature vs news)
- 4-gram backoff models, Kneser-Ney smoothing
- What happens if we plug this tokenizer into a neural LM?

