---
title: Trufont now has SVG paste, drag and drop support
author: Santhosh Thottingal
type: post
date: 2017-10-14T16:14:54+00:00
url: /blog/2017/10/14/trufont-svg-paste-drag-and-drop-support/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"a16c204317dd";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:92:"https://medium.com/@sthottingal/trufont-now-has-svg-paste-drag-and-drop-support-a16c204317dd";}'
categories:
  - Fonts
  - Projects

---
[TruFont][1] the font-editing application written with Python3, ufoLib, defcon and PyQt5 now has support for pasting SVG images as glyphs. It now also support drag and dropping SVG files. <img class="alignright" src="http://trufont.github.io/img/app.png" alt="Trufont" width="364" height="364" />

For my font design workflow I mainly use Inkscape to desgin master drawings and then use fonteditor for further editing. I am migrating the fonts we maintained to Trufont from Fontforge(It is no longer developed). But, not having SVG support with Trufont was a blocker for me. So today I filed two patches and got merged to Trufont master.

  * <a class="message" title="Support pasting SVG from clipboard v2" href="https://github.com/trufont/trufont/commit/78109b2a004cadaeb4a247c3330d69bdb2311c71" data-pjax="true">Support pasting SVG from clipboard</a>
<li class="commit-title ">
  <a class="message" title="Support drag and dropping SVG images as glyphs" href="https://github.com/trufont/trufont/commit/08726cc26808ab47febca90aa0ce032c6be5d2b1" data-pjax="true">Support drag and dropping SVG images as glyphs</a>
</li>

There are still some known issues. Mainly the pasted svg is vertically flipped. The editor can flip it again. But the original issue need investigation.

 [1]: https://trufont.github.io