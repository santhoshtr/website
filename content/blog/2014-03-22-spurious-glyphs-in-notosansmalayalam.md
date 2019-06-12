---
title: Spurious glyphs in NotoSansMalayalam
author: Santhosh Thottingal
type: post
date: 2014-03-22T08:50:08+00:00
url: /blog/2014/03/22/spurious-glyphs-in-notosansmalayalam/
categories:
  - Malayalam
tags:
  - fonts

---
NotoSansMalayalam is a font released by Google internationalization team under [noto project][1]. I was checking the glyphs of Malayalam and noted a number of spurious glyphs in the font

[<img class="alignnone size-full wp-image-449" alt="notosansml-unwantedglyphs" src="/wp-content/uploads/2014/03/notosansml-unwantedglyphs.png" width="1043" height="914" srcset="/wp-content/uploads/2014/03/notosansml-unwantedglyphs.png 1043w, /wp-content/uploads/2014/03/notosansml-unwantedglyphs-300x262.png 300w, /wp-content/uploads/2014/03/notosansml-unwantedglyphs-1024x897.png 1024w" sizes="(max-width: 1043px) 100vw, 1043px" />][2]

It is interesting because the font attempted to provide a minimal Malayalam font with reduced glyph set. While attempting that about 10% of the glyphs are either non-existing Malayalam glyphs(Glyphs with dot under consonants) or rarely used glyphs(Glyphs with U+0D62 MALAYALAM VOWEL SIGN VOCALIC L)

Bug [filed][3]. It was learned that the last set of glyphs with dots above and below are for [Carnatic music notations][4]. They are not defined by unicode, but font used a custom way of representing them with a ligature formed by U+0307.

 [1]: https://code.google.com/p/noto/
 [2]: /wp-content/uploads/2014/03/notosansml-unwantedglyphs.png
 [3]: https://code.google.com/p/noto/issues/detail?id=24
 [4]: https://en.wikipedia.org/wiki/Carnatic_music