---
title: "A spellchecker webservice supporting 90 languages"
author: Santhosh Thottingal
type: post
date: 2020-10-26T16:10:00+05:30
url: /blog/2020/10/26/spellchecker-webservice/
categories:
  - Spellchecker
  - Webserice
tags:
  - web-api
  - spellchecker

---

https://spell.toolforge.org/ is a webservice providing spellcheck web API for 90 languages.

I wrote this service hoping that it can be potentially integrated to wikipedia editor to help contributors.

The spellchecker backend is [hunspell](https://hunspell.github.io/) for majority of the languages. It can also proxy similar webservices to provide a single interface. For Malayalam language it uses such an external web API.

This [Express](https://github.com/expressjs/express/) based nodejs service interfaces to hunspell using [nodehun](https://github.com/Wulf/nodehun).

## API

 * GET spellcheck/:language/:word: Check the word in the given language for spelling mistakes. [Example](https://spell.toolforge.org/spellcheck/en/Educashion)
 * POST spellcheck/:language: Check the words in the text passed for spelling mistakes. The posted body should be json with "text" key containing text.
 * GET list/languages: List available languages. [Example](https://spell.toolforge.org/list/languages)


## Example

As an example, I created a TinyMCE Editor with spellchecker capability using this API

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="result" data-user="santhoshtr" data-slug-hash="bGewGzB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Spellchecker example">
  <span>See the Pen <a href="https://codepen.io/santhoshtr/pen/bGewGzB">
  Spellchecker example</a> by Santhosh Thottingal (<a href="https://codepen.io/santhoshtr">@santhoshtr</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Source code

Source code for the service is available at https://github.com/santhoshtr/spellchecker-webservice/
