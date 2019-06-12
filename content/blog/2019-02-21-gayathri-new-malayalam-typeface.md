---
title: Gayathri – New Malayalam typeface
author: Santhosh Thottingal
type: post
date: 2019-02-21T06:40:13+00:00
url: /blog/2019/02/21/gayathri-new-malayalam-typeface/
featured_image: /wp-content/uploads/2019/02/Gayathri_1200x630-1.jpg
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";N;s:10:"author_url";N;s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";N;s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";N;}'
categories:
  - Fonts
  - Malayalam
  - Projects
  - SMC
tags:
  - fonts
  - gayathri
  - Malayalam
  - unicode

---
[Swathanthra Malayalam Computing][1] is proud to announce Gayathri &#8211; a new typeface for Malayalam. Gayathri is designed by [Binoy Dominic][2], opentype engineering by [Kavya Manohar][3] and project coordination by [Santhosh Thottingal][4].<figure class="wp-block-image">

<img src="https://thottingal.in/wp-content/uploads/2019/02/Gayathri_1200x630-1024x538.jpg" alt="" class="wp-image-1591" srcset="https://thottingal.in/wp-content/uploads/2019/02/Gayathri_1200x630-1024x538.jpg 1024w, https://thottingal.in/wp-content/uploads/2019/02/Gayathri_1200x630-300x158.jpg 300w, https://thottingal.in/wp-content/uploads/2019/02/Gayathri_1200x630-768x403.jpg 768w, https://thottingal.in/wp-content/uploads/2019/02/Gayathri_1200x630-1088x571.jpg 1088w, https://thottingal.in/wp-content/uploads/2019/02/Gayathri_1200x630.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>

This typeface was financially supported by [Kerala Bhasha Institute][5], a Kerala government agency under cultural department. This is the first time SMC work with Kerala Government to produce a new Malayalam typeface.

Gayathri is a display typeface, available in Regular, Bold, Thin style variants. It is licensed under Open Font License. Source code, including the SVG drawings of each glyph is available [in the repository][6]. Gayathri is available for download from [smc.org.in/fonts#gayathri][7]<figure class="wp-block-image">

<img src="https://thottingal.in/wp-content/uploads/2019/02/variants-2.png" alt="" class="wp-image-1596" srcset="https://thottingal.in/wp-content/uploads/2019/02/variants-2.png 791w, https://thottingal.in/wp-content/uploads/2019/02/variants-2-300x188.png 300w, https://thottingal.in/wp-content/uploads/2019/02/variants-2-768x483.png 768w" sizes="(max-width: 791px) 100vw, 791px" /></figure>

Gayathri has soft, rounded terminals, strokes with varying thickness and good horizontal packing. Gayathri has large glyph set for supporting Malayalam traditional orthography, which is the [new trend in contemporary Malayalam.][8] With a total of 1124 glyphs, Gayathri also has basic latin coverage. All Malayalam characters defined till Unicode 11 is supported.<figure class="wp-block-image">

<img src="https://thottingal.in/wp-content/uploads/2019/02/ml-unicode-1009x1024.png" alt="" class="wp-image-1597" srcset="https://thottingal.in/wp-content/uploads/2019/02/ml-unicode-1009x1024.png 1009w, https://thottingal.in/wp-content/uploads/2019/02/ml-unicode-296x300.png 296w, https://thottingal.in/wp-content/uploads/2019/02/ml-unicode-768x779.png 768w, https://thottingal.in/wp-content/uploads/2019/02/ml-unicode-1088x1104.png 1088w, https://thottingal.in/wp-content/uploads/2019/02/ml-unicode.png 1168w" sizes="(max-width: 1009px) 100vw, 1009px" /></figure>

There are not much Malayalam typefaces designed for titles and large displays. We hope Gayathri will fill that gap.

This is also the first typeface by Binoy Dominic. He had proved his lettering skills in his profession as graphic designer, working on branding with Malayalam content for his clients.

Binoy prepared all glyphs in SVGs, our scipts converted it to [UFO sources][9]. [Trufont][10] was used for small edits. Important glyph information like bearings, names, were defined in yaml configuration. Build scripts generated valid UFO sources and [fontmake][11] was used to build OTF output. Of course, there were lot of cycles of design fine tuning. Gitlab CI was used for running the build chain and testing. Fontbakery was used for quality assurance. [UFO Normalizer,][12] [UFO Lint][13] tools were also part of build system.

 [1]: https://smc.org.in
 [2]: http://binoydominic.com/
 [3]: https://kavyamanohar.com/
 [4]: https://thottingal.in
 [5]: http://www.keralabhashainstitute.org/
 [6]: http://gitlab.com/smc/fonts/gayathri
 [7]: http://smc.org.in/fonts#gayathri
 [8]: https://thottingal.in/documents/Malayalam%20Orthographic%20Reforms_%20Impact%20on%20Language%20and%20Popular%20Culture.pdf
 [9]: http://unifiedfontobject.org/
 [10]: https://github.com/trufont/trufont
 [11]: https://github.com/googlei18n/fontmake/
 [12]: https://github.com/unified-font-object/ufoNormalizer
 [13]: https://github.com/source-foundry/ufolint