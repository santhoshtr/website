---
title: "Using Manjari as new orthography Malayalam font"
author: Santhosh Thottingal
type: post
date: 2021-10-29T20:00:00+05:30
url: /blog/2021/10/29/manjari-as-new-lipi-font/
categories:
  - Fonts
tags:
  - Manjari
  - opentype
  - malayalam

---

Manjari is a traditional orthography font. It has large set of ligatures. Vowel signs like /u/ get attached to its corresponding consonants to form ligatures. But, sometimes there are requirements to illustrate new orthography malayalam content in [Manjari](https://smc.org.in/fonts/manjari). Recently, Manjari was used to typeset an academic book related to Malayalam script and it was required to show some content in new orthography with detached vowel signs and detached reph signs. Using a different font that follows new orthography such as Noto Sans Malayalam was possible, but mixing Noto and Manjari won't give a pleasant reading experience.

In this article, I will explain how Manjari font can be used for this kind of usecases. First in web pages and then in TeX.

The basic principle is to control which opentype features are enabled or disabled for rendering. Manjari's opentype implementation is modular and it allows enabling or disabling specific features. This procedure will work with [all the fonts SMC released](https://smc.org.in/fonts). But it won't work with fonts released by RIT as they follow an [approach](https://rajeeshknambiar.wordpress.com/2021/09/20/a-new-set-of-opentype-shaping-rules-for-malayalam-script/) where every ligature in the font is by `akhand` feature.

* For detaching all vowel signs from its consonants(കു, പു, സൃ, തൃ) as in new lipi/new orthography, we will disable the Post base substitution - `psts` feature.
* To disable reph ligatures(ക്ര, പ്ര etc) we will disable Prebase substitution - `pres`

*Note that we will keep stacked or horizontally formed conjuncts as such. Their behaviour is not clearly distinguisable in old and new orthographies. For example, stacked സ്സ, horizontal ligature ന്ന is present in both orthography.*

## Using CSS to control orthography

CSS allows controlling opentype features by using `font-feature-settings`. To get new orthography, we use the style

```css
font-feature-settings: "psts" off, "pres" off;
```

Following image shows the effect of having this style.

![](/wp-content/uploads/2021/10/manjari-old-new-lipi.gif)

## XeTeX and opentype feature selection

The [fontspec](https://ctan.org/pkg/fontspec?lang=en) package exposes `RawFeature` option to control low level opentype features.  `RawFeature=-pres;-psts` disabled `psts` and `pres`

To define Manjari as new lipi font, the following snippet might help.

```latex
\newfontfamily\malnewliipifont[Script=Malayalam, HyphenChar="00AD]{Manjari}[
  Path=fonts/,
  UprightFont=Manjari-Regular.ttf,
  RawFeature=-pres;-psts
]
```

Then, use it like `\malnewliipifont{ your content }`

**Important**:  As I mentioned in the beginning, Manjari is designed as old orthography font and it is highly recommended to use it as such.