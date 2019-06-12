---
title: Detailed font reports using fontreport tool
author: Santhosh Thottingal
type: post
date: 2017-01-01T12:24:37+00:00
url: /blog/2017/01/01/fontreport/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"7bbf72ee820f";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:88:"https://medium.com/@sthottingal/detailed-font-reports-using-fontreport-tool-7bbf72ee820f";}'
categories:
  - Fonts
  - i18n
tags:
  - fonts

---
Google i18n team developed a tool to create detailed report of fonts. The tool named [fontreport][1], produces a multi page PDF with Unicode coverage of the font, what glyphs are in it, what Open Type features it supports, available ligatures, and glyph substitutions. Optionally the tool can also create plain text reports. The PDF is generated using TeX.

<figure id="attachment_898" aria-describedby="caption-attachment-898" style="width: 840px" class="wp-caption alignright"><img class="size-large wp-image-898" src="/wp-content/uploads/2017/01/manjari-1024x686.png" alt="" width="840" height="563" srcset="/wp-content/uploads/2017/01/manjari-1024x686.png 1024w, /wp-content/uploads/2017/01/manjari-300x201.png 300w, /wp-content/uploads/2017/01/manjari-768x514.png 768w, /wp-content/uploads/2017/01/manjari-1200x803.png 1200w, /wp-content/uploads/2017/01/manjari.png 1552w" sizes="(max-width: 840px) 100vw, 840px" /><figcaption id="caption-attachment-898" class="wp-caption-text">Manjari font report generated using fontreport tool</figcaption></figure>

I found it very useful to create report for [a dozen of fonts][2] I maintain with [Swathantha Malayalam Computing][3] community. Sharing the reports it created:

Font reports(PDF):

  1. [Rachana Regular][4]
  2. [Rachana Bold][5]
  3. [Meera][6]
  4. [Manjari Regular][7]
  5. [Manjari Bold][8]
  6. [Manjari Thin][9]
  7. [Dyuthi][10]
  8. [Chilanka][11]
  9. [Karumbi][12]
 10. [AnjaliOldLipi][13]
 11. [Keraleeyam][14]
 12. [Uroob][15]

 [1]: https://github.com/googlei18n/fontreport
 [2]: https://smc.org.in/fonts
 [3]: https://smc.org.in
 [4]: https://smc.org.in/downloads/fonts/rachana/Rachana-Regular.pdf
 [5]: https://smc.org.in/downloads/fonts/rachana/Rachana-Bold.pdf
 [6]: https://smc.org.in/downloads/fonts/meera/Meera.pdf
 [7]: https://smc.org.in/downloads/fonts/manjari/Manjari-Regular.pdf
 [8]: https://smc.org.in/downloads/fonts/manjari/Manjari-Bold.pdf
 [9]: https://smc.org.in/downloads/fonts/manjari/Manjari-Thin.pdf
 [10]: https://smc.org.in/downloads/fonts/dyuthi/Dyuthi.pdf
 [11]: https://smc.org.in/downloads/fonts/chilanka/Chilanka.pdf
 [12]: https://smc.org.in/downloads/fonts/karumbi/Karumbi.pdf
 [13]: https://smc.org.in/downloads/fonts/anjalioldlipi/AnjaliOldLipi.pdf
 [14]: https://smc.org.in/downloads/fonts/keraleeyam/Keraleeyam.pdf
 [15]: https://smc.org.in/downloads/fonts/uroob/Uroob.pdf