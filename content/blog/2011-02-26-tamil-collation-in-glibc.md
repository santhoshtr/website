---
title: Tamil Collation in GLIBC
author: Santhosh Thottingal
type: post
date: 2011-02-26T12:29:51+00:00
url: /blog/2011/02/26/tamil-collation-in-glibc/
categories:
  - Indic
tags:
  - Bugs
  - Collation
  - glibc
  - Tamil

---
A  few months back, we started fixing the <a href="http://en.wikipedia.org/wiki/Collation" target="_blank">collation</a> rules of Indian languages in GNU C library. Pravin Satpute prepared patches for many languages and I prepared patches for Malayalam and Tamil. Later Pravin enhanced the Tamil patch.

You can read the rules used for Malayalam collation [here[PDF document]][1]. Tamil patch was applied to upstream, but the bug is still open since there is some confusion on the results.

Before reading the below discussion, please read the discussion happened in the bug report : [[ta_IN] Tamil collation rules are not working in other locales][2]

Since many Tamil friends can give valuable comments on this, I am giving an explanation for my patch here. K Sethu gave some interestin his [comments][3] on the patch and I would like to hear from others also. Since collation is a very important component on Tamil support, I feel that an open discussion and consensus  should happen among language speakers outside bug trackers.

This is the logic used currently in Tamil and Malayalam Collation rules also follow the same logic.

  1. Consider each consonant as pure consonant + implicit a vowel. ie க= க் + அ   and த= த்+ அ
  2. Similarly கா = க்+ ஆ, தி = த்+ இ
  3. From #1 and #2, க் < க, த்< த , We get this output for example:அ

    அக்

    அகம்

    அகால

    அக்கம

    அக்கு

    But K Sethu questions this order in <a href="https://bugzilla.redhat.com/show_bug.cgi?id=514110#c9" target="_blank">his comment here</a>.According to him

     **( consonant1+ virma+ consonant2 ) < ( consonant1+ vowel + [consonant2] )**

    or The correct sequence should be அ, அக், அக்கம், அக்கு, அகம், அகால

    But as per my patch

     **( consonant1+ virma+ consonant2 ) > ( consonant1+ vowel + [consontant2] )**

    ie, all conjuncts for consonant1 happens after all consonant1+vowel + * sequences.

    So let me try to explain this behaviour.
  4. let us take க்த and கத:க்த = க்+ த்+ அ

    கத = க்+ அ+ த்+ அ

    considering the weight comparison logic(decreasing weight from left to right)

    this comparison becomes between

    க்+ த்+ அ and க்+ அ+ த்+ அ

    since க் is common in first weight, removing it. so it becomes

    த்+ அ and அ+ த்+ அ

    Since த் > அ

    த்+ அ > அ+ த்+ அ

    and there by

    க்த > கத

    So conjuncts comes after the cosonant+vowel pairs. hence the result given in #3

Apart from these, equal weights are assigned for ோ (0BCB), ௌ (0BCC), and their canonical equivalent forms.

If anybody interested in testing the patch, get ta\_IN and iso14651\_t1_common files from [here][4], back up those file in /usr/share/i18n/locales, and place these two files there. reconfigure your locale using &#8220;sudo dpkg-reconfigure locales&#8221;. Sort some random file using &#8220;LANG=ta_IN sort yourfile&#8221;. If your distro is not debian based, follow the instructions from [here][5]

There is an easy way to test this. Silpa project provides an online application for Indic language collation. You can <a href="http://silpa.smc.org.in/Sort" target="_blank">try it from here</a>. It is a Unicode Collation algorithm implementation. The Unicode collation definition has many mistakes but we have a patched version. You can compare the results between original and patched version.

Feel free to inform this discussion to anybody interested on Tamil Computing. I would be happy to help in the **implementation** if we  reach  a consensus.**

**

**

**

 [1]: http://smc.org.in/doc/malayalam-collation.pdf
 [2]: https://bugzilla.redhat.com/show_bug.cgi?id=514110
 [3]: https://bugzilla.redhat.com/show_bug.cgi?id=514110#c9
 [4]: http://sourceware.org/git/?p=glibc.git;a=tree;f=localedata/locales;h=97c84a37822446bba3d52c9d5001a420e1aebb85;hb=refs/heads/release/2.13/master
 [5]: http://pravin-s.blogspot.com/2008/08/shortcut-method-for-testing-new-locale.html