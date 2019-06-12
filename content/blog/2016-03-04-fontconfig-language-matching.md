---
title: Fontconfig language matching
author: Santhosh Thottingal
type: post
date: 2016-03-04T15:00:30+00:00
url: /blog/2016/03/04/fontconfig-language-matching/
categories:
  - Fonts
  - i18n
  - Misc
  - Tutorial
tags:
  - fontconfig
  - fonts
  - typography

---
> I had to spend a few hours to debug a problem about fontconfig not identifiying a font for a language. Following the tradition of sharing the knowledge you acquired in hard way, let me note it down here for search engines.

The font that I am designing now has 3 style variants, thin, regular and bold. All has same family name. So if you set this family for whatever purpose, depending on context, thin, regular or bold versions will be picked up. Regular is expected by default. Also when you pick the font from font selectors, you would expect, regular being selected by default.

The problem I was facing is, instead of Regular, Bold was getting selected as default. In font selectors, Bold was listed first.

In GNU/Linux systems, this font matching and selection is done by [fontconfig][1]. I started with fc-match

<pre>$ fc-match MyFont
MyFontBold.otf: "MyFont" "Bold"</pre>

So that confirms the problem. After fiddling with [os/2 properties ][2], asking in [fontconfig mailing list][3], and reading [fontconfig documentation][4], I found that the _lang_ property fontconfig calculates from Regular variant of font does not include &#8216;en&#8217;

<pre>$ fc-list MyFont : family : style : lang
MyFont:style=Bold:lang=aa|ay|bi|br|ch|en|es|eu|fj|fur|gd|gl|gv|ho|ia|id|ie|io|it|mg|ml|nl|nr|nso|oc|om|pt|rm|so|sq|ss|st|sw|tl|tn|ts|uz|vo|xh|yap|zu|an|fil|ht|jv|kj|kwm|li|ms|ng|pap-an|pap-aw|rn|r
w|sc|sg|sn|su|za
MyFont:style=Regular:lang=aa|ay|bi|br|ch|da|de|es|et|eu|fi|fj|fo|fur|fy|gl|ho|ia|id|ie|io|is|it|ki|lb|mg|ml|nb|nds|nl|nn|no|nr|nso|ny|om|rm|sma|smj|so|ss|st|sv|sw|tl|tn|ts|uz|vo|vot|xh|yap|zu|an|f
il|ht|jv|kj|kwm|li|ms|na|ng|pap-an|pap-aw|rn|rw|sc|sg|sn|su|za</pre>

I tried to find how fontconfig calculates the languages supported by a font. The minimum set of code points to be included in a font so that fontconfig declare that it supports a given language is defined in the fontconfig library. You can find them in source code. For example, mandatory code points(glyphs that match to it) to be present for English is defined in [en.orth][5] file. I cross checked each code points and one was indeed missing from my regular font variant, but bold version had everything. When I added it, all [started working][6] normally.

Later fontconfig developer Akira TAGOH [told me][7] that I can also use _fc-validate_ to check the language coverage

<pre>$ fc-validate --lang=en MyFont.otf
MyFont.otf:0 Missing 1 glyph(s) to satisfy the coverage for en language</pre>

And after adding the missing glyph

<pre>$ fc-validate --lang=en MyFont.otf
MyFont.otf:0 Satisfy the coverage for en language</pre>

And now fc-match list Regular as default style

<pre>$ fc-match MyFont
MyFont.otf: "MyFont" "Regular"</pre>

 [1]: https://www.freedesktop.org/wiki/Software/fontconfig/
 [2]: https://www.microsoft.com/typography/otspec/os2.htm
 [3]: https://lists.freedesktop.org/archives/fontconfig/2016-March/005694.html
 [4]: https://www.freedesktop.org/software/fontconfig/fontconfig-user.html
 [5]: https://github.com/behdad/fontconfig/blob/master/fc-lang/en.orth
 [6]: https://lists.freedesktop.org/archives/fontconfig/2016-March/005695.html
 [7]: https://lists.freedesktop.org/archives/fontconfig/2016-March/005696.html