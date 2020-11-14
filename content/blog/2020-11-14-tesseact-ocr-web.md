---
title: "Tesseract OCR web interface"
author: Santhosh Thottingal
type: post
date: 2020-11-14T14:38:00+05:30
url: /blog/2020/11/14/ya-ra-va-signs/
categories:
  - Malayalam
  - OCR
tags:
  - malayalam
  - ocr

---

I prepared a web frontend for [Tessearct OCR](https://github.com/tesseract-ocr/tesseract) to do optical character recognition for Malayalam - https://ocr.smc.org.in

![[Ya, Ra signs producing same rendering irrespective of order in data.](https://ocr.smc.org.in)](/wp-content/uploads/2020/11/ocr.smc.org.in.png)

This application uses [Tesseract.js](https://tesseract.projectnaptha.com/), Javascript port of Tesseract.

You can use images with English or Malayalam content. Use the editor and the spellchecker for proofreading the text recognized.

Your image does not leave your browser since the recognition is done in browser and does not use any remote servers.

Source code: https://gitlab.com/smc/tesseract-ocr-web