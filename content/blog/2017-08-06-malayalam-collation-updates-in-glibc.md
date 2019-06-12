---
title: Malayalam collation updates in Glibc
author: Santhosh Thottingal
type: post
date: 2017-08-06T12:49:05+00:00
url: /blog/2017/08/06/malayalam-collation-updates-in-glibc/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"1dba800d0b0c";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:81:"https://medium.com/@sthottingal/malayalam-collation-updates-in-glibc-1dba800d0b0c";}'
categories:
  - Bugs
  - i18n
  - Indic
  - Projects
tags:
  - glibc

---
[GNU C library 2.26 released][1] and proud to have my name listed under contributors. Two small patches for localedata were merged:

<li class="bz_short_desc_container edit_form">
  <a href="https://sourceware.org/bugzilla/show_bug.cgi?id=19919"><b>Bug 19919</b></a> <span id="summary_container">&#8211; <span id="short_desc_nonedit_display">iso14651_t1_common: Correct the Malayalam sorting order of 0D36 and 0D37</span></span>
</li>
  1. <div class="bz_short_desc_container edit_form">
      <a href="https://sourceware.org/bugzilla/show_bug.cgi?id=19922"><b>Bug 19922</b></a> <span id="summary_container">&#8211; <span id="short_desc_nonedit_display">iso14651_t1_common: Define collation for Malayalam chillu characters</span></span>
    </div>

 [1]: https://sourceware.org/ml/libc-announce/2017/msg00001.html