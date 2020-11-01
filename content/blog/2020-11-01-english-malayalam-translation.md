---
title: "English Malayalam Translation using OpusMT"
author: Santhosh Thottingal
type: post
date: 2020-11-01T17:10:00+05:30
url: /blog/2020/11/01/english-malayalam-machine-translation/
categories:
  - Malayalam
tags:
  - malayalam
  - machine-translation

---

SMC had started a machine translation service at [translate.smc.org.in](https://translate.smc.org.in) for English-Malayalam. This system uses [huggingface transformers](https://huggingface.co/transformers/) with [OpusMT](https://github.com/Helsinki-NLP/OPUS-MT) language models for translation.

[OPUS MT](https://github.com/Helsinki-NLP/OPUS-MT) provides pre-trained neural translation models trained on OPUS data. These models can seamlessly run with the OPUS-MT transation servers that can be installed from our [OPUS-MT github repository](https://github.com/Helsinki-NLP/OPUS-MT). The translation service is powered by [Marian Neural MT engine](https://marian-nmt.github.io/)

The quality of the machine translation depends on the availability of parallel corpus. Data contributions by actual users are more than welcome. If you are interested in contributing translated documents, please use [Opus repository](https://opus-repository.ling.helsinki.fi/) to upload translated documents in various formats. This could also be translated webpages. Anyone can create an account and start uploading data. You may also help us uploading additional training data at https://translate.ling.helsinki.fi/
