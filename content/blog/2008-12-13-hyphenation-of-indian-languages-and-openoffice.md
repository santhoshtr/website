---
title: Hyphenation of Indian Languages and Openoffice
author: Santhosh Thottingal
type: post
date: 2008-12-14T02:20:00+00:00
url: /blog/2008/12/13/hyphenation-of-indian-languages-and-openoffice/
lj_itemid:
  - 59
lj_permalink:
  - http://santhoshtr.livejournal.com/15266.html
lj_current_location:
  - Banglore
categories:
  - Indic
  - Projects
tags:
  - hack
  - hyphenation
  - openoffice

---
**What is Hiphenation?**

Hyphenation is the process inserting hyphens in between the syllables of a word so that when the text is [justified][1], maximum space is utilized.

Hiphenation is an important feature that DTP softwares provide. For Indian languages there is no good DTP softwares available. XeTex is the only choice to work with unicode and professional quality page layout. But xetex and DTP are not exactly same. Inkscape can be used as temporary solution. But only for small scale works. There is a project going on to add Harfbuzz backend to Scribus, the freedomware DTP package.

Hiphenation is also requred in many other places. Actually it is required where ever we &#8216;justify&#8217; a block of text in openoffice or any wordprocessors. Same is the case of webpages. If we justify a block of text in ml_IN, let is see what is happening now

<img src="http://pics.livejournal.com/santhoshtr/pic/0000wd6p" width="267" height="118" border='0' />

Note the long gaps between words. This is a screenshot taken from firefox. The default hiphenation just breaking the lines in space characters. And no doubt that it makes the pages ugly. The problem becomes worse if the length of the word is more and column width is less.

So what is the solution?

Ideal solution : Applications should be aware of the language, its hiphenation rules and should to the hiphenation wherever required.

Openoffice can take hiphenation dictionaries just like spell checkers. But for Indian languages, we are yet to prepare hiphenation dictionaries(more on that later.) . CSS3 draft of w3c has a provision for [hyphenate][2]. But it is stil in draft stage

**Algorithm For Hiphenation**

The basic for all hyphenation algorithms is the hyphenation algorithm, designed by Frank Liang in 1983, which is adopted in TeX. [Wikipedia artcle of TeX][3] explain this with very simple example

> If TeX must find the acceptable hyphenation positions in the word encyclopedia, for example, it will consider all the subwords of the extended word .encyclopedia., where . is a special marker to indicate the beginning or end of the word. The list of subwords include all the subwords of length 1 (., e, n, c, y, etc), of length 2 (.e, en, nc, etc), etc, up to the subword of length 14, which is the word itself, including the markers. TeX will then look into its list of hyphenation patterns, and find subwords for which it has calculated the desirability of hyphenation at each position. In the case of our word, 11 such patterns can be matched, namely 1c4l4, 1cy, 1d4i3a, 4edi, e3dia, 2i1a, ope5d, 2p2ed, 3pedi, pedia4, y1c. For each position in the word, TeX will calculate the maximum value obtained among all matching pattern, yielding en1cy1c4l4o3p4e5d4i3a4. Finally, the acceptable positions are those indicated by an odd number, yielding the acceptable hyphenations en-cy-clo-pe-di-a. This system based on subwords allows the definition of very general patterns (such as 2i1a), with low indicative numbers (either odd or even), which can then be superseded by more specific patterns (such as 1d4i3a) if necessary. These patterns find about 90% of the hyphens in the original dictionary; more importantly, they do not insert any spurious hyphen. In addition, a list of exceptions (words for which the patterns do not predict the correct hyphenation) are included with the Plain TeX format; additional ones can be specified by the user.

For more details about the algorithm used in Openoffice  [read][4] this paper by Nemeth Laszlo

**Hiphenation in Indian languages.**

Unlike English or any other languages, hiphenation in Indian languages are not that much complex. In general following are the rules

  * \[consonant\]\[vowel\]\[consonat] can be hiphenated as [consonant\]\[vowel\] &#8211; [consonat] if vowel is not a virama or halant
  * Dont split a word after ZWJ
  * We can split a word after ZWNJ
  * plus any language specific rules. For eg: in ml_IN a line should not start with a chillu letter.

**Hiphenation Dictionaries for Indian languages.**

Based on the above mentioned rules, Let us try to create hiphenation dictionaries for Indian languages. I will explain this with the help of a Hindi word example: अनुपल्ब्ध.

We have to define the following rules in the dictionary for this

अ1 -> 1 is odd number , ie. word can be splitterd after अ

ु1 -> 1 is odd number , ie. word can be splitterd after ु

1ल -> 1 is odd number , ie. word can be splitterd before ल

1प -> 1 is odd number , ie. word can be splitterd before प

1ब -> 1 is odd number , ie. word can be splitterd before ब

्2 -> 2 is even number , ie. word can NOT be splitterd after ्

1ध -> 1 is odd number , ie. word can be splitterd before ध

So the end result is अ+नु+प+ल्ब्ध

Same way we can create the Hyphenation dictionaries for all other languages. I have prepared the Hyphenation dictionaries for 8 Indian Languages. [Download it from the git repo of the SMC][5].

**How to Install a xx_IN hyphenation dictionary.**

  * Copy the hyphenation dictionay hyph\_xx\_IN to /usr/share/myspell/dicts folder.
  * Create a file at /usr/share/myspell/infos/ooo/ folder named openoffice.org-hyphenation-xx with one line content

    HYPH xx IN hyph\_xx\_IN
  * Run this command sudo update-openoffice-dicts

Open the openoffice writer, Open some fille in your language or type some text. Justify the text. Set the language of the selection by using Tools->Language menu Hiphenate it by using Tools->Language->Hiphenation menu.

Hope it works :). I tested only Hindi and Malayalam. For other languages , inform me if you see any problems or if it is not working . Here is the hyphenated Malayalam paragraph. Compare it with the image I showed at the beginning of this blogpost

<img src="http://pics.livejournal.com/santhoshtr/pic/0000xw9h" width="263" height="98" border='0' />

Ok. so after testing these hyphenation dictionaries, if we provide them to upstream and packaged, hyiphenation problems in openoffice is solved. 🙂

But&#8230;. How to solve this problem in web pages?!. We will discuss it in next blogpost!

## Thanks

* Thanks to Hussain K H and Kevin Siji for their valuable inputs in preparing Malayalam hyphenation patterns.
* Thanks to Nemeth Laszlo, author of Hunspell and Openoffice Hyphenation for helping me to prepare the hyphenation tables.

* * *

**Update(Apr 16,2009)** The hyphenation dictionaries were packaged for Fedora and will be part of Fedora 11</p>

 [1]: http://en.wikipedia.org/wiki/Justification_(typesetting)
 [2]: http://www.w3.org/TR/css3-text/#hyphenate
 [3]: http://en.wikipedia.org/wiki/TeX#Hyphenation_and_justification
 [4]: http://markmail.org/download.xqy?id=rwne7kf67ttyk62l&number=2
 [5]: http://git.savannah.gnu.org/gitweb/?p=smc.git;a=tree;f=hyphenation