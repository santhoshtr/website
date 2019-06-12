---
title: Scribus gets Malayalam Hyphenation support
author: Santhosh Thottingal
type: post
date: 2017-10-29T05:19:48+00:00
url: /blog/2017/10/29/scribus-malayalam-hyphenation-support/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:11:"6b21a736ec6";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:86:"https://medium.com/@sthottingal/scribus-gets-malayalam-hyphenation-support-6b21a736ec6";}'
categories:
  - Malayalam
  - Projects
  - Tutorial
tags:
  - hyphenation
  - scribus

---
Scribus now has support for Malayalam hyphenation.

I filed a [bug report][1] to add Malayalam hyphenation rules to Scribus and it is now added to scribus. The hyphenation rules are based on the [TeX hyphenation patterns I wrote][2].

## How to use

You need scribus 1.5.4 or later. It is not yet available as release while I am writing this. But once released you can get from <https://www.scribus.net/downloads/>

  * Start a new document. Add text frames and content. You will need narrow columns to have wordbreaking contexts. For example 2 columns as I use for demo here.
  * Select the text and set font as a Malayalam font like Manjari, Set the language as Malayalam.
  * In Hyphenation properties, set hyphenation character as blank, otherwise visible hyphens will appear.
  * Set the text justified.
  * From menu Extras->Hyphenate text. Done.

[<img class="aligncenter wp-image-1154 size-large" src="/wp-content/uploads/2017/10/ml-hyph-scribus-1024x575.png" alt="" width="840" height="472" srcset="https://thottingal.in/wp-content/uploads/2017/10/ml-hyph-scribus-1024x575.png 1024w, https://thottingal.in/wp-content/uploads/2017/10/ml-hyph-scribus-300x169.png 300w, https://thottingal.in/wp-content/uploads/2017/10/ml-hyph-scribus-768x431.png 768w, https://thottingal.in/wp-content/uploads/2017/10/ml-hyph-scribus-1200x674.png 1200w" sizes="(max-width: 840px) 100vw, 840px" />][3]

Here is the output:

<figure id="attachment_1153" aria-describedby="caption-attachment-1153" style="width: 588px" class="wp-caption aligncenter">[<img class="wp-image-1153 size-full" src="/wp-content/uploads/2017/10/Spectacle.B22246.png" alt="" width="588" height="808" srcset="https://thottingal.in/wp-content/uploads/2017/10/Spectacle.B22246.png 588w, https://thottingal.in/wp-content/uploads/2017/10/Spectacle.B22246-218x300.png 218w" sizes="(max-width: 588px) 100vw, 588px" />][4]<figcaption id="caption-attachment-1153" class="wp-caption-text">Hyphenated two column content</figcaption></figure>

&nbsp;

 [1]: https://bugs.scribus.net/view.php?id=15024
 [2]: https://github.com/smc/hyphenation/blob/master/ml_IN/hyph_ml_IN.dic
 [3]: /wp-content/uploads/2017/10/ml-hyph-scribus.png
 [4]: /wp-content/uploads/2017/10/Spectacle.B22246.png