---
title: Hyphenation in web
author: Santhosh Thottingal
type: post
date: 2013-03-17T15:38:36+00:00
url: /blog/2013/03/17/hyphenation-in-web/
categories:
  - Indic
  - Misc
tags:
  - hyphenation

---
This is a follow up of a 4 year old <a href="http://thottingal.in/blog/2008/12/16/hyphenation-of-indian-languages-in-webpages/" target="_blank">blog post about hyphenation</a>. <dfn id="hyphenation0" title="hyphenation|hyphenate">Hyphenation</dfn> allows the controlled splitting of words to improve the layout of paragraphs, typically splitting words at syllabic or morphemic boundaries and visually indicating the split (usually with a hyphen).

I wrote about how a webpage can use <a href="http://code.google.com/p/hyphenator/" target="_blank">Hyphenator</a> javascript library to achieve hyphenation for a text with &#8216;<a href="http://en.wikipedia.org/wiki/Justification_(typesetting)" target="_blank">justify</a>&#8216; style. Along with the hyphenation rules <a href="http://wiki.smc.org.in/Hyphenation" target="_blank">I wrote for many Indian languages</a>, this solution works and some websites already use it. The Hyphenator library helps to insert <a href="http://en.wikipedia.org/wiki/Soft_hyphen" target="_blank">Soft hyphens</a> in appropriate positions inside the text.

<figure id="attachment_409" aria-describedby="caption-attachment-409" style="width: 798px" class="wp-caption alignnone">[<img class="size-full wp-image-409" alt="Example showing the difference between Malayalam text hyphenated and not hyphenated. You can see lot of line space wasted with white space in non-hyphenated text" src="/wp-content/uploads/2013/03/hyphenation-example-ml.png" width="798" height="507" srcset="/wp-content/uploads/2013/03/hyphenation-example-ml.png 798w, /wp-content/uploads/2013/03/hyphenation-example-ml-300x190.png 300w" sizes="(max-width: 798px) 100vw, 798px" />][1]<figcaption id="caption-attachment-409" class="wp-caption-text">Example showing the difference between Malayalam text hyphenated and not hyphenated. You can see lot of line space wasted with white space in non-hyphenated text</figcaption></figure>

&nbsp;

More recently browsers such as Firefox, Safari and Chrome have begun to support the <a href="http://www.w3.org/TR/css3-text/#hyphenation" target="_blank">CSS3 hyphens property</a>, with hyphenation dictionaries for a range of languages, to support automatic hyphenation.

For hyphenation to work correctly, the text must be marked up with language information, using the language tags described earlier. This is because hyphenation rules vary by language, not by script. The description of the hyphens property in CSS says “Correct automatic hyphenation requires a hyphenation resource appropriate to the language of the text being broken. The user agents is therefore only required to automatically hyphenate text for which the author has declared a language (e.g. via HTML lang or XML xml:lang) and for which it has an appropriate hyphenation resource.”

### CSS Example

<pre>-webkit-hyphens: auto;
-moz-hyphens: auto;
-ms-hyphens: auto;
-o-hyphens: auto;
hyphens: auto;</pre>

### Browser Compatibility

  * Chrome 13+ with -webkit prefix
  * Firefox 6.0+ with -moz prefix
  * IE 10+ with -ms prefix.

### Hyphenation rules

CSS Text Level 3 does not define the exact rules for hyphenation, however user agents are strongly encouraged to optimize their line-breaking implementation to choose good break points and appropriate hyphenation points.

Firefox has hyphenation rules for about 40 languages. A complete list of languages supported in FF and IE is available at <a href="https://developer.mozilla.org/en-US/docs/CSS/hyphens#Languages_support_notes" target="_blank">Mozilla wiki</a>

You can see that none of the Indian languages are listed there. Hyphenation rules can be reused from the TeX hyphenation rules.  Jonathan Kew was <a title="Bug 672320 - add hyphenation resources for more locales" href="https://bugzilla.mozilla.org/show_bug.cgi?id=672320" target="_blank">importing</a> the hyphenation rules from TeX and <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=672320#c102" target="_blank">I had requested </a>importing the hyphenation rules for Indian languages too.  But that was more than a year back, not much progress in that. Apparently there was <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=656248" target="_blank">a licensing issue with derived work</a> but looks like it is resolved already.

### CSS4 Text

While this is all well and good, it doesn’t provide the fine grain control you may require to get professional results. For this <a href="http://dev.w3.org/csswg/css4-text/" target="_blank">CSS4 Text</a> introduce more features.

  * Limiting the number of hyphens in a row using <a href="http://dev.w3.org/csswg/css4-text/#hyphenate-line-limits" target="_blank">hyphenate-limit-lines</a>. This property is currently supported by IE10 and Safari, using the -ms- and -webkit- prefix respectively.
  * Limiting the word length, and number of characters before and after the hyphen using  <a href="http://dev.w3.org/csswg/css4-text/#hyphenate-char-limits" target="_blank">hyphenate-limit-chars</a>
  * Setting the hyphenation character using hyphenate-character. Helps to override the default soft hyphen character

### More reading

  * <a href="http://thottingal.in/blog/2008/12/13/hyphenation-of-indian-languages-and-openoffice/" target="_blank"><span style="line-height: 13px;">Hyphenation in Indian languages and openoffice</span></a>
  * <a href="http://tug.org/tex-hyphen/#languages" target="_blank">TeX hyphenation </a>
  * <a href="http://en.wikipedia.org/wiki/TeX#Hyphenation_and_justification" target="_blank">Hyphenation algorithm</a>
  * <a href="http://mirror.veriportal.com/savannah//smc/hyphenation/web/example.html" target="_blank">Example showing Indian languages hyphenated</a>
  * [Hyphenate text using Silpa application][2]

PS: Sometimes hyphenation can be very challenging. For example hyphenating the 746 letter long name of <a href="http://en.wikipedia.org/wiki/Wolfe%2B585,_Senior" target="_blank">Wolfe+585, Senior</a>.

 [1]: /wp-content/uploads/2013/03/hyphenation-example-ml.png
 [2]: http://silpa.org.in/Hyphenate