---
title: Python isalpha is buggy
author: Santhosh Thottingal
type: post
date: 2009-03-30T00:29:00+00:00
url: /blog/2009/03/29/python-isalpha-is-buggy/
lj_itemid:
  - 65
lj_permalink:
  - http://santhoshtr.livejournal.com/16753.html
categories:
  - Bugs
tags:
  - python

---
This code



<pre>#!/usr/bin/env python
# -*- coding: utf-8 -*-
ml_string=u"സന്തോഷ്  हिन्दी"
for ch in ml_string:
    if(ch.isalpha()):
        print ch
</pre>

gives this output



<pre>സ
ന
ത
ഷ
ह
न
द
</pre>

And fails for all mathra signs of Indian languages. This is a  [known][1]  [bug][2] in glibc.

Does anybody know whether python internally use glibc functions for this basic string operations or use separate character database llke QT does?

 [1]: https://bugzilla.redhat.com/show_bug.cgi?id=466912
 [2]: https://bugzilla.redhat.com/show_bug.cgi?id=474124