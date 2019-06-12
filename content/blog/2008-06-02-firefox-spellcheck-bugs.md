---
title: Firefox spellcheck bugs…
author: Santhosh Thottingal
type: post
date: 2008-06-03T05:16:00+00:00
url: /blog/2008/06/02/firefox-spellcheck-bugs/
lj_itemid:
  - 44
lj_permalink:
  - http://santhoshtr.livejournal.com/11279.html
categories:
  - Bugs
tags:
  - firefox

---
Firefox spellcheck feature requires some volunteers to fix the

tokenization issue. There are two bugs related to the tokenization

  1. [Bug 434044 – The tokenization of words for spellcheck is wrong when there is a ZWJ/ZWNJ/ZWS in the word.][1] &#8211; Reported: 2008-05-16 07:49 PDT by Santhosh Thottingal
  2. [Bug 318040 – Spell checker flags words containing full stops (periods)][2] Reported: 2005-11-28 12:45 PDT by Joseph Wright

 [1]: https://bugzilla.mozilla.org/show_bug.cgi?id=434044
 [2]: https://bugzilla.mozilla.org/show_bug.cgi?id=318040