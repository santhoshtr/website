---
title: "Manjari version 1.800 released"
author: Santhosh Thottingal
type: post
date: 2020-04-11T11:17:00+05:30
url: /blog/2020/04/11/manjari-new-version/
categories:
  - Projects
  - Fonts
tags:
  - fonts

---

A new version of Manjari Malayalam typeface is available now. [Version 1.800][1] adds tabular number and slashed zero opentype features along with bug fixes.

New version of the font is available at: <https://smc.org.in/fonts/#manjari>

## Tabular numbers

[The Kerala health department][3] publishes daily COVID-19 reports and they use Manjari([example][4]). Sometimes the numbers in table in Manjari font is slightly difficult to read when you want to compare the numbers in columns across rows. This is because each digit will take a proportional horizontal space and not fixed width.

`tnum` opentype feature helps to get fixed width tabular numbers in contexts like above.

{{< figure src="/wp-content/uploads/2020/04/manjari-tnum-card.png">}}

## Slashed zero

While working with numbers, sometimes it is difficult to differentiate between 0,o,O,ഠ. It helps if 0 has a slash in it. New version of Manjari adds this alternate glyph using opentype feature `zero`

{{< figure src="/wp-content/uploads/2020/04/manjari-zero-card.png">}}

These features can be used in applications that support selecting them(most of the applications do.).

### CSS and webpages
Use `font-feature-settings: "tnum";` or `font-feature-settings: "zero";`. To select both, use `font-feature-settings: "tnum", "zero";`

## Libreoffice

In font selector, give the font name as `Manjari Regular:tnum` or use font settings dialog

{{< figure src="/wp-content/uploads/2020/04/manjari-zero-tnum-libreoffice.png">}}

## Inkscape

In text and font dialog(Control+Shift+T), go to Variants tab, Under Numbers, tick, Tabular, Slashed zero options.

## Xelatex:

Use `addfontfeature`

```
\documentclass[11pt]{article}
\usepackage{polyglossia}
\newfontfamily{\manjari}[Script=Malayalam]{Manjari}
\begin{document}
\manjari{\addfontfeature{Numbers={Monospaced,SlashedZero}}01234}
\end{document}
```

Here is an image showing tabular and slashed zero.

{{< figure src="/wp-content/uploads/2020/04/manjari-zero-tnum-card.png">}}

Manjari already supports some stylistic variants too. See this [blog post][2]

**Wish you good health and stay safe from COVID-19 pandemic.**

[1]: https://gitlab.com/smc/fonts/manjari/-/tags/Version1.800
[2]: https://thottingal.in/blog/2018/01/06/stylistic-alternates-manjari-chilanka/
[3]: http://dhs.kerala.gov.in
[4]: http://dhs.kerala.gov.in/wp-content/uploads/2020/04/Daily-Bulletin-HFWD-Malayalam-April-10.pdf