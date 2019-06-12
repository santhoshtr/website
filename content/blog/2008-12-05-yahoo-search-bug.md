---
title: Yahoo search bug
author: Santhosh Thottingal
type: post
date: 2008-12-06T02:54:00+00:00
url: /blog/2008/12/05/yahoo-search-bug/
lj_itemid:
  - 58
lj_permalink:
  - http://santhoshtr.livejournal.com/15068.html
lj_current_location:
  - Banglore
categories:
  - Bugs
tags:
  - Bugs
  - yahoo

---
None of the search engines can handle Indian languages very well. Google removes the zero width joiners, non joiners , that are used in many languages. Yahoo doesnot remove it. But a UI bug in webpage makes the results wrong..

See the below image:

<img src="http://pics.livejournal.com/santhoshtr/pic/0000ta1c" width="320" height="228" border='0' />



The bottom half of the image is the source code. We can clearly see that the closing bold tag is placed in between the word instead of putting at the end of the word. As a result, the word is rendered wrong in the page.

This happens for all languages which use ZWJ, ZWNJ, ZWS etc. It breaks the word just before the zwnj/zwj and puts the end of bold tag to highlight the search result..

I showed this to [Gopal][1] and told me that he filed a bug on that.

 [1]: http://t3.dotgnu.info/blog/