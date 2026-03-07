---
title: "Rewriting the multilingual sentence segmenter - sentencex - in Rust"
type: post
date: 2026-03-07T05:00:00+05:30
url: /blog/2026/03/07/sentencex-rust
tags: ["NLP", "Wikimedia","Sentences", "Rust"]
categories: ["Natural Language Processing", "Wikimedia"]
showToc: true
TocOpen: true
math: true
_build:
  list: never
  render: always
  publishResources: true
---


In October 2023, we [announced sentencex](https://diff.wikimedia.org/2023/10/23/sentencex-empowering-nlp-with-multilingual-sentence-extraction/) — a sentence segmentation library built for the wide language diversity of Wikipedia and Wikimedia projects. The original release comprised two separate libraries: one in Python (used by [MinT](https://www.mediawiki.org/wiki/MinT), our machine translation service) and one in JavaScript (used by [Content Translation](https://www.mediawiki.org/wiki/Content_translation)). Both were rule-based, practical, and got the job done.

But maintaining two implementations of the same logic was a constant source of drift.

sentencex 1.0 is a ground-up rewrite in Rust, with the Python and JavaScript libraries replaced by thin bindings over a single, shared core.

{{< figure src="/wp-content/uploads/2023/10/sentencex-en.png" caption="Screenshot of [sentencex online demo](https://wikimedia.github.io/sentencex/demo)" >}}

## Why Rust

The original Python library took approximately **11 seconds** to segment the [Complete Works of Shakespeare](https://www.gutenberg.org/files/100/100-0.txt) — a 5.29MB plain-text file.

<details>
<summary>Old sentencex library</summary>

```python
# /// script
# dependencies = [
#  "sentencex==0.6.1"
# ]
# ///
from sentencex import segment
import time

with open("shakespeare.txt") as bigfile:
    text = bigfile.read()
language_code = "en"
t = time.time()
sentences = segment(language_code, text)
time_taken = time.time() - t
print("Speed : {:>20.2f} ms".format(time_taken * 1000))
print(sentences)
```

```bash
uv run old-sentencex.py
Speed :             11058.93 ms
```
</details>

The Rust rewrite processes the same file in **~178 milliseconds**.

```bash
$ curl https://www.gutenberg.org/files/100/100-0.txt | ./sentencex -l en > /dev/null
Time taken for segment(): 178.745108ms
Total sentences: 150254
```

That is roughly a **60× improvement**. The output is the same 150,254 sentences — extracted correctly, non-destructively, with no allocations beyond the sentence boundary index.

Several design decisions drive this:

- **Zero-copy output.** The `segment()` function returns `Vec<&str>` — slices pointing directly into the original input string. Nothing is copied or reallocated.
- **Static regex compilation.** All regex patterns are compiled once at program startup via `LazyLock` and reused across every call.
- **Chunk-based processing.** For texts larger than 10KB, the library splits at paragraph boundaries, processes each chunk independently, and reassembles results. This keeps working-set sizes manageable and avoids pathological regex backtracking on long inputs.
- **Compiled abbreviation lists.** Abbreviation data is embedded at compile time via `include_str!`, with no file I/O at runtime.

## One Core, Three Platforms

The Rust library is the single source of truth. Bindings expose the same `segment()` and `get_sentence_boundaries()` API to Python, Node.js, and browser environments via WebAssembly.

### Rust

```bash
cargo add sentencex
```

```rust
use sentencex::segment;

fn main() {
    let text = "The U.S. National Aeronautics and Space Administration (NASA) \
                led Webb's design and development. It launched in December 2021.";
    let sentences = segment("en", text);
    for sentence in &sentences {
        println!("{}", sentence);
    }
}
```

To process a file — say, the complete Shakespeare corpus:

```rust
use sentencex::segment;
use std::fs;
use std::time::Instant;

fn main() {
    let text = fs::read_to_string("shakespeare.txt").unwrap();
    let start = Instant::now();
    let sentences = segment("en", &text);
    println!("Segmented {} sentences in {:?}", sentences.len(), start.elapsed());
}
```

### Python

```bash
pip install sentencex
```

```python
import sentencex
import time

with open("shakespeare.txt") as f:
    text = f.read()

start = time.perf_counter()
sentences = sentencex.segment("en", text)
elapsed = time.perf_counter() - start

print(f"Segmented {len(sentences)} sentences in {elapsed * 1000:.0f}ms")
```

The `get_sentence_boundaries()` function returns structured data with byte offsets, useful for highlighting or annotation:

```python
boundaries = sentencex.get_sentence_boundaries("en", text)
for b in boundaries:
    print(b["text"], b["start_index"], b["end_index"])
```

### Node.js

```bash
npm install sentencex
```

```javascript
import { segment, get_sentence_boundaries } from "sentencex";
import { readFileSync } from "fs";

const text = readFileSync("shakespeare.txt", "utf8");
const start = performance.now();
const sentences = segment("en", text);
console.log(`Segmented ${sentences.length} sentences in ${(performance.now() - start).toFixed(0)}ms`);
```

CommonJS:

```javascript
const { segment } = require("sentencex");
```

### Browser (WebAssembly)

```bash
npm install sentencex-wasm
```

```javascript
import init, { segment } from "sentencex-wasm";

await init();
const sentences = segment("en", "Hello world. This is a test.");
```

Or directly from a CDN, with no build step:

```javascript
import init, { segment } from "https://esm.sh/sentencex-wasm";
await init();
```

The WASM build exposes the same API as the native bindings. Running the Shakespeare corpus in a browser tab — all 5.29MB, 150,254 sentences — completes in around 200ms on a modern machine.

## Language Support

The library ships with hand-curated rules for **30 languages**: Amharic, Arabic, Armenian, Bengali, Bulgarian, Burmese, Catalan, Danish, Dutch, Finnish, French, German, Greek, Gujarati, Hindi, Italian, Japanese, Kannada, Kazakh, Malayalam, Marathi, Polish, Portuguese, Punjabi, Russian, Slovak, Spanish, Tamil, Telugu, and English.

For each of these, the library maintains:

- A list of known abbreviations (e.g. `Dr.`, `Prof.`, `Jan.` for English; `bzw.`, `z.B.`, `Mio.` for German)
- Language-specific sentence-break punctuation (e.g. Greek adds `;` as a sentence terminator; Armenian and Burmese have their own terminators)
- Override logic for edge cases like month names (German does not break after `Jan.` when a date follows)

### The Fallback Chain

Beyond the 30 directly supported languages, the library defines a **fallback chain for ~244 language codes**. Rather than silently falling back to English for an unsupported language, sentencex maps each code to the nearest linguistically related language that has custom rules.

Some examples:

| Requested code | Fallback chain |
|---|---|
| `de-at` | `de` |
| `zh-cn` | `zh-hans` → `zh` → `zh-hant` |
| `nb` | `no` → `nn` |
| `tcy` (Tulu) | `kn` (Kannada) |
| `blk` (Pa'O Karen) | `my` (Burmese) |
| `als` (Alemannic) | `gsw` → `de` |

The fallback map is built into a `LazyLock<HashMap>` at startup — zero runtime cost and no surprises. If a cycle is detected or no fallback exists, the library defaults to English.

The goal is to support every language with a Wikipedia edition. That currently means ~300+ language codes are handled, either directly or via the chain.

## The Approach

sentencex uses a rule-based approach, not a statistical model. The core logic is:

1. A period (or language-specific equivalent) ends a sentence.
2. Unless the preceding token is a known abbreviation.
3. Certain ranges are skippable: quoted text, parenthesized asides, email addresses.

This is deliberately conservative. When the library is uncertain — say, `Albert I. Jones` — it prefers **not** to split rather than splitting incorrectly. A missed boundary is usually less damaging than a false one for downstream tasks like text-to-speech or machine translation.

Segmentation is also **non-destructive**: the output slices are substrings of the original input. Joining all returned sentences reconstructs the original text exactly — whitespace, punctuation, and line breaks preserved.

## Accuracy: The Golden Rule Set

Accuracy is measured against the English Golden Rule Set (GRS), a benchmark of 60 hand-labeled test cases originally assembled for [pragmatic_segmenter](https://github.com/diasks2/pragmatic_segmenter). The cases cover abbreviations, quoted speech, parenthetical remarks, email addresses, numeric values, and more.

sentencex scores **100.00 F1** on this benchmark (list-format cases excluded):

| Library | English GRS F1 |
|---|---|
| **[sentencex](https://github.com/wikimedia/sentencex)** | **100.00** |
|[pysbd](https://github.com/nipunsadvilkar/pySBD) | 93.00 |
|  [blingfire](https://github.com/microsoft/BlingFire)  | 91.67 |
| [syntok](https://github.com/fnl/syntok) | 85.67 |
| [spacy](https://spacy.io/) | 81.67 |
| [mwtokenizer](https://pypi.org/project/mwtokenizer/) | 78.00 |
| [nltk](https://pypi.org/project/nltk/) | 72.33 |

The benchmark script is at [`benchmarks/compare.py`](https://github.com/wikimedia/sentencex/blob/main/benchmarks/compare.py) and can be run with `uv run benchmarks/compare.py`. It tests both GRS accuracy and Shakespeare segmentation speed against all the above libraries.

A few illustrative cases from the GRS that the library handles correctly:

```
Input:  Her email is Jane.Doe@example.com. I sent her an email.
Output: ["Her email is Jane.Doe@example.com.", " I sent her an email."]

Input:  She turned to him, "This is great." She held the book out to show him.
Output: ["She turned to him, \"This is great.\"", " She held the book out to show him."]

Input:  She works at Yahoo! in the accounting department.
Output: ["She works at Yahoo! in the accounting department."]
```

For the 5.2MB text file of Shakespeare's works, [blingfire](https://github.com/microsoft/BlingFire) from above list comes closer to sentencex. It takes roughly 3x as long as sentencex — about 500ms.


<details>
<summary>Blingfire speed test</summary>

```python
# /// script
# dependencies = [
#  "blingfire"
# ]
# ///
```python
import blingfire

t = time.time()
result = blingfire.text_to_sentences(text)
sentences = result.splitlines() if result else []
time_taken = time.time() - t
print('Speed : {:>20.2f} ms'.format(time_taken * 1000))
print(  len(sentences))
print(  sentences)
```

Gives result like:
Speed :   469.81 ms

</details>


## Get It

- **Rust:** [crates.io/crates/sentencex](https://crates.io/crates/sentencex) — `cargo add sentencex`
- **Python:** [pypi.org/project/sentencex](https://pypi.org/project/sentencex/) — `pip install sentencex`
- **Node.js:** [npmjs.com/package/sentencex](https://www.npmjs.com/package/sentencex) — `npm install sentencex`
- **Browser/WASM:** [npmjs.com/package/sentencex-wasm](https://www.npmjs.com/package/sentencex-wasm) — `npm install sentencex-wasm`
- **Source:** [github.com/wikimedia/sentencex](https://github.com/wikimedia/sentencex)

