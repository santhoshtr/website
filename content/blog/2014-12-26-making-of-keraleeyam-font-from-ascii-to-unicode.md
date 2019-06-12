---
title: 'Making of Keraleeyam font: From ASCII to Unicode'
author: Kavya Manohar
type: post
date: 2014-12-26T17:01:19+00:00
url: /blog/2014/12/26/making-of-keraleeyam-font-from-ascii-to-unicode/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:74:"https://cdn-images-1.medium.com/fit/c/200/200/1*dmbNkD5D-u45r44go_cf0g.png";s:10:"author_url";s:32:"https://medium.com/@kavyamanohar";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"8899fd2dca71";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:93:"https://medium.com/@kavyamanohar/making-of-keraleeyam-font-from-ascii-to-unicode-8899fd2dca71";}'
categories:
  - Community
  - Fonts
  - Malayalam

---
Keraleeyam is a new unicode malayalam font designed for titles.  It was originally designed in 2005 for &#8216;Keraleeyam&#8217;, a magazine supporting environmental movements in Kerala, with ASCII encoding and was distributed along  with Rachana editor software.

<img class="alignnone" src="http://blog.smc.org.in/content/images/2014/12/keraleeyam-sample2.png" alt="" width="898" height="386" />Unicode font feature tables for malayalam are complex, which include diverse rules for ligature formation and glyph positioning. Keraleeyam which was originally ASCII encoded, contained no such rules. It would have been a herculian task to manually add the rules for each glyph. Keraleeyam has 792 glyphs in it. Also rules needed to be duplicated to support both the latest and old open type specifications. It ensures that the font is rendered correctly by all applications in new and reasonably old operating systems.

Happy to say that font featuring was done without much difficulty as one would expect. Thanks to the existing unicode font Rachana with little known bugs and extensive glyph set of 1083 glyphs. And thanks to Hussain K. H. who designed and named every glyph with the same name as the corresponding glyph in Rachana. <a href="http://rajeeshknambiar.wordpress.com/" target="_blank">Rajeesh K. V.</a> imported the feature tables of Rachana and applied it over Keraleeyam, in a semi- automated manner.

Then remained the optimization tasks of kerning and positioning. I contributed to such fine tuning stuff. The beta version of the Keraleeyam font was <a href="http://blog.smc.org.in/keraleeyam-font/" target="_blank">released</a> as a part of 13th anniversary celebrations of Swathanthra Malayalam Computing by Murali Thummarukudi at Vylopilli Samskrithi Bhavan on 16th December 2014.

The project is hosted <a href="https://gitlab.com/smc/keraleeyam" target="_blank">here</a>. Seeking comments and feedbacks for the release of stable version soon.

&nbsp;