---
title: Bug in Firefox Spellcheck
author: Santhosh Thottingal
type: post
date: 2008-05-19T00:50:00+00:00
url: /blog/2008/05/18/bug-in-firefox-spellcheck/
lj_itemid:
  - 40
lj_permalink:
  - http://santhoshtr.livejournal.com/10337.html
categories:
  - Bugs
tags:
  - firefox
  - spell checker

---
There is a bug in Firefox in the spell check functionality that affects many Indian Langauges using Zero Width [Non] Joiners in the words. Firefox uses hunspell as the spelling checker. Openoffice also uses Hunspell. The bug is not there in Openoffice and problem with firefox is with the tokenization of words in editable textfields before doing spellcheck. Firefox splits the words if there is ZWJ/ZWNJ in the word. And because of this the input to the spellchecker is wrong and it is not the actual word.

I have filed a bug against the spellchecker of Firefox and you can see it [here (bug #434044 )][1]

I have given some sample words in Malayalam and Bengali(Thanks to [Runa][2]) with ZWJ/ZWNJ. If your language uses ZWJ/ZWNJ, please comment/vote in mozilla bugzilla.

I found this when I was trying to prepare a Malayalam spellcheck [extension][3] for firefox(Hunspell wordlist). Still many languages do not have the affix rules in place for aspell/hunspell and it makes the spellcheck less efficient particularly for highly inflected/agglutinated languages like Malayalam.

Thanks to Németh László, Hunspell developer for helping me to figure out the problem

 [1]: https://bugzilla.mozilla.org/show_bug.cgi?id=434044
 [2]: http://runab.livejournal.com
 [3]: http://download.savannah.gnu.org/releases/smc/Spellchecker/