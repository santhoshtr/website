---
title: 'New handwriting style font for Malayalam: Chilanka'
author: Santhosh Thottingal
type: post
date: 2014-10-27T06:18:12+00:00
url: /blog/2014/10/27/new-handwriting-style-font-for-malayalam-chilanka/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"cc55b14daf34";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:94:"https://medium.com/@sthottingal/new-handwriting-style-font-for-malayalam-chilanka-cc55b14daf34";}'
categories:
  - Fonts
  - Indic
  - Malayalam
  - Projects
  - SMC
tags:
  - fonts
  - Malayalam

---
A new handwriting style font for Malayalam is in development. The font is named as &#8220;Chilanka&#8221;(ചിലങ്ക).

This is a alpha version release. Following is a sample rendering.

![][1]

<a title="More" href="http://smc.org.in/downloads/fonts/chilanka/samples/sample1.png" target="_blank">More</a> <a title="More" href="http://smc.org.in/downloads/fonts/chilanka/samples/sample2.png" target="_blank">samples</a> <a title="More" href="http://smc.org.in/downloads/fonts/chilanka/samples/sample4.png" target="_blank">here.</a>

You may try the font using this edtiable page <a href="http://smc.org.in/downloads/fonts/chilanka/tests/" target="_blank">http://smc.org.in/downloads/fonts/chilanka/tests/</a> -It has the font embedded

Download the latest version: <a title="Download" href="http://smc.org.in/downloads/fonts/chilanka/Chilanka.ttf" target="_blank">http://smc.org.in/downloads/fonts/chilanka/Chilanka.ttf</a>

  * Font license: Free licensed font, OFL.
  * Source code: <a href="https://github.com/smc/Chilanka" target="_blank">https://github.com/smc/Chilanka</a>
  * Tools used for drawing: Inkscape and fontforge

Chilanka/ചിലങ്ക is a <a href=" https://en.wikipedia.org/wiki/Ghungroo" target="_blank">musical anklet</a>

A brief note on the workflow I used for font development is as follows

  1. Prepared a template svg in Inkscape that has all guidelines and grid setup.
  2. Draw the glyphs. This is the hardest part. For this font, I used bezier tool of inkscape. SVG with stroke alone is saved. Did not prepare outline in Inkscape, this helped me to rework on the drawing several times easily. To visualize how the stroke will look like in outlined version, I set stroke width as 130, with rounded end points. All SVGs are version tracked. SVGs are saved as inkscape svgs so that I can retain my guidelines and grids.
  3. In fontforge, import this svgs and create the outline using expand stroke, with stroke width 130, stroke height 130,  pen angle 45 degree, line cap and line join as round.
  4. Simplify the glyph automatically and manually to reduce the impact of conversion of Cubic bezier to quadratic bezier.
  5. Metrics tuning. Set both left and right bearings as 100 units(In general, there are glyph specfic tuning)
  6. The opentype tables are the complex part. But for this font, it did not take much time since I used SMC&#8217;s already existing well maintained feature tables. I could just focus on design part.
  7. Test using test scripts

Some more details:

  * Design: Santhosh Thottingal
  * Technology: Santhosh Thottingal and Kavya Manohar
  * Total number of glyphs: 676. Includes basic latin glyphs.
  * Project started on September 15, 2014
  * Number of svgs prepared: 271
  * Em size: 2048. Ascend: 1434. Descend: 614
  * 242 commits so far.
  * Latest version: 1.0.0-alpha.20141027
  * All drawings are in inkscape. No paper involved, no tracing.

Thanks for all my friends who are helping me testing and for their encouragement.

Stay tuned for first version announcement 🙂

(Cross posted from <http://blog.smc.org.in/new-handwriting-style-font-for-malayalam-chilanka/> )

 [1]: http://smc.org.in/downloads/fonts/chilanka/samples/sample3.png