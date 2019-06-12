---
title: Redesigned font download page of SMC
author: Santhosh Thottingal
type: post
date: 2016-04-06T06:29:51+00:00
url: /blog/2016/04/06/redesigned-font-download-page-of-smc/
categories:
  - Fonts
  - SMC
tags:
  - design
  - typography
  - web
  - webfonts

---
The [font preview and download page][1] of [SMC][2] has a fresh look now.

<img class="size-large wp-image-584 aligncenter" src="/wp-content/uploads/2016/04/smc-font-page-new.png" alt="fonts" width="840" height="630" />

The intention is to provide a font preview, typography showcase, download site in single page. Every font has multiple illustrations of usage and the text used is editable if you want to try your own text there.

The old page which was also designed by myself was not mobile friendly. It provides a single page view to compare the fonts, each represented as cards. But it did not had enough flexibility to showcase some fine usages of typography.

<img class="size-large wp-image-584 aligncenter" src="/wp-content/uploads/2016/04/smc-font-page-old.png" alt="fonts" width="840" height="630" />

The new design is mobile friendly.

<img class="size-medium wp-image-584 aligncenter" src="/wp-content/uploads/2016/04/smc-font-page-new-mobile.png" alt="fonts" width="300" height="600" />

On technical side, I used [flexbox][3], [LESS][4]. For carousal style transitions, I used [cycle2][5]  More importantly, I [did not use bootstrap][6] :).  See [code][7].

 [1]: http://smc.org.in/fonts
 [2]: //smc.org.in
 [3]: https://www.w3.org/TR/css-flexbox-1/
 [4]: http://lesscss.org/
 [5]: http://jquery.malsup.com/cycle2/
 [6]: http://adventurega.me/bootstrap/
 [7]: https://gitlab.com/smc/fonts-preview-site