---
title: "Hyphenation of Indian languages"
author: Santhosh Thottingal
type: post
date: 2022-02-18T20:00:00+05:30
url: /blog/2022/02/18/indian-language-hyphenation/
categories:
  - Hyphenation
tags:
  - hyphenation

---

The latest version of Firefox - Firefox 97 - supports hyphenation of Indian languages. I had filed a [bug report](https://bugzilla.mozilla.org/show_bug.cgi?id=1240277) to include [the hyphenation patterns I prepared](https://github.com/santhoshtr/hyphenation) in Firefox. That 6 year old bug report is now resolved.

[Hyphenation](http://en.wikipedia.org/wiki/Hyphenation_algorithm) is the process inserting hyphens in between the syllables of a word so that when the text is [justified](http://en.wikipedia.org/wiki/Justification_(typesetting)), maximum space is utilized.

Following languages are supported:

* Assamese
* Bengali
* Gujarati
* Hindi
* Kannada
* Malayalam
* Marati
* Odia
* Panjabi
* Tamil
* Telugu

I had written several articles about how to do hyphenation for Indian languages in various applications. Now that Firefox also gets hyphenation support, I would like to summarize the hyphenation support in applications here.

## Web browsers

Hyphenation in web browsers is supported by the css `hyphens` property. With proper `lang` attribute annotation in the html elements, the following style declaration in CSS makes the text justified with hyphenation.

```css
text-align: justify;
hyphens: auto;
```

All browsers support the `hyphens` property, but the availability of hyphenation patterns for languages vary across browsers. I already mentioned that Firefox added Indian language hyphenation in Firefox 97. [Chromium had added support for Indian languages in 2020 August](https://github.com/chromium/chromium/commit/6607bfa1ce9656569ea9330bb7f1fb3058aad920). So all chromium based browsers also gets it, including Brave, Chrome and Edge.

The usage of visible hyphens is not common in Indian languages. The above CSS will produce visible hyphens at the word breaks. To avoid that CSS has `hyphenate-character` property. But Firefox does not support it. Chromium based browsers has the prefixed property `-webkit-hyphenate-character`. Providing an empty string as the value avoid visible hyphens.

```css
text-align: justify;
hyphens: auto;
-webkit-hyphenate-character: '';
```

| No hyphenation | Visible hyphens | Invisible hyphens |
|---|--|--|
|![](/wp-content/uploads/2022/02/no-hyphenation.png) |![](/wp-content/uploads/2022/02/with-visible-hyphenation.png) | ![](/wp-content/uploads/2022/02/with-hyphenation.png) |

For other browsers or old versions a javascript library named [Hyphenopoly](https://github.com/mnater/Hyphenopoly) can be used.


## LibreOffice

Linux distros comes with hyphen-* packages that contain hyphenation patterns for each languages. Once these packages are present, LibreOffice can use them for hyphenation.

* An blog post from 2008:
[Hyphenation of Indian Languages and Openoffice](https://thottingal.in/blog/2008/12/13/hyphenation-of-indian-languages-and-openoffice/)
* A video tutorial: [Malayalam Hyphenation using LibreOffice in Ubuntu](https://www.youtube.com/watch?v=fGb_c9d-sU8)

## Android

Since March 2018, Android has [the same hyphenation patterns](https://android.googlesource.com/platform/external/hyphenation-patterns/+/dedeff64279b77bafff72b6d866efc93e829b4ab).

## XeLaTeX

[Polyglossia](https://mirror.kku.ac.th/CTAN/macros/unicodetex/latex/polyglossia/polyglossia.pdf) package provides hyphenation for XeLaTex.

I have written [a tutorial on how to use hyphenation with XeLaTeX typesetting](https://thottingal.in/blog/2014/07/20/typesetting-malayalam-using-xetex/).

## Adobe Indesign

Indesign CC 2018 comes with Hunspell hyphenation dictionaries. I had written [a tutorial on using hyphenation in Indesign](https://thottingal.in/blog/2017/10/29/indesign-cc-automatic-hyphenation-for-indian-languages/
). I am not sure about the latest versions of Indesign and its hyphenation support.

## Scribus

In 2017, Scribus added hyphenation patterns for Malayalam and later other languages too. I had written [a tutorial on scribus and hyphenation](https://thottingal.in/blog/2017/10/29/scribus-malayalam-hyphenation-support/)

## Useful resources

* http://www.hyphenation.org/tex#languages maintains a list of languages and their hyphenation patterns
* [w3c Indic layout requirements - hyphenation](https://www.w3.org/TR/ilreq/#h_hyphenation)
* [All you need to know about hyphenation in CSS](http://clagnut.com/blog/2395/) - This article has more information on hyphenation control CSS properties

## Feedback

The hyphenation rules were based on inputs from native language speakers and language experts. But I do not claim they are 100% accurate. Also, these rules are based on characters and their context with in a word. There is a valid argument that hyphenation should also respect the meaning change, if any, resulting from the words that formed by splitting a bigger word. That is beyond the scope of these patterns. But some of the application listed above provides ways to provide exception dictionaries(For example, please see Adapting Hyphenation section in the [polyglossia](https://mirror.kku.ac.th/CTAN/macros/unicodetex/latex/polyglossia/polyglossia.pdf) manual).

Please contact me or use the issue tracker in source code repository to report bugs or provide suggestions for improvement. Thanks in advance.

