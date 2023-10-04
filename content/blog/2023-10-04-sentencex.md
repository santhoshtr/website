---
title: "sentencex: Empowering NLP with Multilingual Sentence Extraction"
author: Santhosh Thottingal
type: post
date: 2023-10-04T14:00:00+05:30
url: /blog/2023/10/04/sentencex
categories:
  - wikipedia
  - NLP
  - Projects
tags:
  - NLP


---
Sentence segmentation is a fundamental process in natural language processing. It involves breaking down a given text into individual sentences, a task that finds applications in various contexts. Whether you need to split a paragraph into sentences for further analysis or present sentence boundaries in a user-friendly frontend application, sentence segmentation is crucial.

At first glance, identifying sentence boundaries might seem straightforward – just look for a period or full stop. However, it quickly becomes complex when you consider cases where a period is used for abbreviations such as "Dr." or in numerical values like "3.14." This simple punctuation mark doesn't always signal the end of a sentence.

In many languages, the period isn't the standard sentence delimiter. For instance, Hindi uses a unique character called the 'danda' sign (।) to indicate the end of a sentence. Additionally, sentence segmentation must account for periods inside quotations, which don't denote sentence boundaries, or periods within email addresses, which certainly aren't sentence endings.

The challenge lies in finding sentence segmentation libraries that can handle these complexities across a wide range of languages while addressing language-specific intricacies. Most existing libraries fall short in this regard. They tend to focus on English or support only a limited number of languages. Furthermore, they may not be adequately performant or actively maintained.

At the Wikimedia foundation's language team, we needed a robust sentence segmentation library for our [machine translation system](https://www.mediawiki.org/wiki/MinT) and our [section translation project](https://www.mediawiki.org/wiki/Content_translation/Section_translation). The former is a Python project, while the latter is a Node.js project. After a thorough examination of existing libraries, we decided to create our own – not just one, but two libraries: one in Python and another in JavaScript, both serving the same purpose.

## sentencex

We are introducing 'sentencex' library, available in both Python and JavaScript. This remarkable sentence segmentation library boasts extensive language support while emphasizing speed and practicality. When it comes to the balance between linguistic precision and versatility for various applications, sentencex prioritizes usability.

In situations where ambiguity arises and linguistic insight is needed, our library errs on the side of caution, avoiding unnecessary splits rather than risking incorrect segmentations. Our performance benchmarks reveal that this library not only delivers impressive speed but also excels in evaluation datasets.

The name sentencex stands for **sentence** **ex**traction or sentence✂️

Our overarching goal is to provide support for all languages that have a presence on Wikipedia. Instead of defaulting to English for languages not explicitly defined in the library, we've implemented a fallback chain mechanism. This means that the closest language included in the library will be utilized. We've defined fallbacks for approximately 244 languages, and we also have abbreviation data available for around 30 languages.

![Example sentence segmentation for English content](/wp-content/uploads/2023/10/sentencex-en.png)

### sentencex python library

Source code: [github repository](https://github.com/wikimedia/sentencex). Please refer the documentation for usage examples

Python package:  [sentencex](https://pypi.org/project/sentencex)

Demo: https://wikimedia.github.io/sentencex/

### sentencex js library

Source code: [github repository](https://github.com/wikimedia/sentencex-js). Please refer the documentation for usage examples

NPM package:  [sentencex](https://www.npmjs.com/package/sentencex)

Demo: https://wikimedia.github.io/sentencex-js

![Example sentence segmentation for Malayalam content](/wp-content/uploads/2023/10/sentencex-ml.png)

This library is already in use in [MinT](https://www.mediawiki.org/wiki/MinT) project. It is also replacing the minimal sentence segmentation libray we had in #cx-cxserver  project.  As we start using it in more project, we hope to support more languages and existing languages better.