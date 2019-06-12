---
title: Manjari 1.5 version released
author: Santhosh Thottingal
type: post
date: 2018-02-10T07:02:29+00:00
url: /blog/2018/02/10/manjari-1-5-version-released/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"5cc255ff9da9";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:73:"https://medium.com/@sthottingal/manjari-1-5-version-released-5cc255ff9da9";}'
categories:
  - Fonts
  - SMC
tags:
  - Manjari

---
A new version of Manjari typeface is available [now][1]. Version 1.5 is mainly a bug fix release.

In [version 1.3,][2] the build tooling of the project was changed from fontforge to fontmake. Two weeks back a few people reported that the font no longer works in MS Word and Wordpad. Font selector lists the font, but when selected, the content remains same. It works in all other applications without any issues. Because of that the bug went unnoticed.

Debugging the issue was not easy since font works everywhere else. I did a line by line diff of the ttx format(XML font format) of old and new version fonts.  Found that the OS/2 [ulUnicodeRange][3], [ulCodePageRange][4] values were set to 0 in version 1.3.  Apparently these values are really checked by MS Word and Wordpad. If these are missing Wordpad and Word just rejects the font.  Correct values for these [fields are set now][5].

New [version 1.5][1] is available now. You can download the latest fonts from <https://smc.org.in/fonts/#manjari>

 [1]: https://gitlab.com/smc/manjari/tags/Version1.5
 [2]: http://thottingal.in/blog/2017/10/14/manjari-1-3/
 [3]: https://www.microsoft.com/typography/unicode/ulu.htm
 [4]: https://www.microsoft.com/typography/unicode/ulcp.htm
 [5]: https://gitlab.com/smc/manjari/commit/9419cf7b67e844ca73fb2f3914bfead503cc1e23