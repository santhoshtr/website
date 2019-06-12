---
title: 'Localization: What are we missing?'
author: Santhosh Thottingal
type: post
date: 2009-03-26T05:19:00+00:00
url: /blog/2009/03/25/localization-what-are-we-missing/
lj_itemid:
  - 63
lj_permalink:
  - http://santhoshtr.livejournal.com/16339.html
lj_current_location:
  - Chennai
categories:
  - Community
tags:
  - localization

---
[This blog post is kind of self criticism and written not forgetting the valuable contribution that l10n communities are doing. ]

Some observations on the Localized desktops in Indian Languages

* Not all localization team members try the application that he/she translate at least once before working on the PO file. Result: If somebody does the localization without understanding what the application does and try the en\_US interface, he/she miss the context of the strings. An example I have seen : the string &#8220;Querying&#8221; was translated to xx\_IN language string which means &#8220;Questioning&#8221; instead of the required string corresponding to &#8220;Searching&#8221;. Sometimes we miss to understand how much space the string is going to take in the screen and we translate a small English word to a long xx_IN string to make the meaning clear. Result: Ugly interface.

[<img src="http://pics.livejournal.com/santhoshtr/pic/00011yfx" width="640" height="148" border='0' />][1]

Tamil gedit from Ubuntu 8.10(Click to enlarge)

\* Not all localization team members \*try* the application that he/she translated after completing the PO file or even after the application is released. This happens when he/she translates many applications(sometimes if it is part his/her job).

\* Practically, there is no process called \*testing* localized desktop in our SDLC. L10N members translates a PO file and sometimes he/she translates it as text file rather than a user interface. It is must that we should bring some process to make sure that the localized desktop is tested for usability, contextually correct translation, spelling mistakes, wrong short cut keys, fuzzy strings , non translated strings in main interface etc etc.

* Since the ratio between the total number of applications in a desktop environment and number of team members is very less, we end up in translating one application by many people. Result: inconsistent translation and no ownership for ensuring the translation quality. Ramadoss from Tamil team was suggesting that ideally , for each application there should be a person from each language , who is responsible for timely translation, testing. He can take more than one application responsibility but not more than say, 10. Practically, this requires a big l10n community per language and unfortunately we don&#8217;t have it as of now.

* Peer review, one of the important and mandatory process in l10n is not happening properly when the release date is approaching. L10N communities often try to meet the percentage of completion somehow. IMHO, the new l10n tools frameworks often miss to give importance for peer review in the workflow they design. FOSS community, being inclusive in nature often welcomes new l10n contributors. I have seen many members improving their l10n skills after making the corrections as per the review comments from others. When a new l10n workflow allows every contributor to submit their translated PO file without the peer review from community, the ultimate result is very bad user interface. We have seen this many times with Rosetta translations of Ubuntu. Everybody going there tries out the Rosetta &#8220;features&#8221; and leave few strings &#8220;translated&#8221; there. And Ubuntu takes those strings for their immediate release. Upstream translations are never taken on time or the &#8220;translated&#8221; strings are never submitted to upstream. Result: Very bad localized desktop with many spelling mistakes, inconstant translations etc.. We ml_IN team used to watch who is &#8220;contributing&#8221; through Rosetta and make him work with the community. I hope the new translation frameworks will give sufficient attention to this problem. If we are not keeping a balance between newbie translation and quality assuarance , our localized desktops will not improve.

[<img src="http://pics.livejournal.com/santhoshtr/pic/000133rg" width="640" height="360" border='0' />][2]

Again Tamil gedit, but from Debian Lenny. Compare it with the Ubuntu version shown above(Click to enlarge)

* User feedback: The number of users who use the desktop in their own mother tongue, even though the % of translation is more than 80% for many languages, is very less. IMHO, It is because of a &#8216;dependency conflict&#8217; of the following things

a) A person who is not good in English

b) A person want to use computer in mother language for some &#8220;purpose&#8221;

c) A person who is capable of spending Rs ~20K for a computer

Most of the cases, there is a conflict between any 2 of the following and that ends up in a) Person use his desktop in english b) Person not using computer at all. I am sure that if there are good number of users, we will not end up in interfaces I showed in the screen shots.

* One inconsistency I noticed across localized desktops is regarding the shortcut keys/accelerator keys. Some languages use English short cut keys and give at the end of the word in Brackets for eg: അടയ്ക്കുക (C). As you can see in screen shots sometimes we have small letter and sometimes capital letter for that. Some languages use letters in xx\_IN itself. But there is no consistency. For Control and Alt keys, some language translate them, some others keep it in English. What is the problem with English short cut key? For using English short cut key , the user should be using English layout keyboard. For shortcut keys in xx\_IN, one should be using xx\_IN keyboard layout. For a user(assume that he use xx\_IN desktop since he is not good in English) typing in xx\_IN in gedit using xx\_IN keyboard, is it possible to use the short cut keys if we give in English? Are we expecting that for using short cut key while typing the document, he change switch his keyboard layout ? (btw, anybody noticed that Apple doesn&#8217;t use Accelerator keys in its OS?)

[<img src="http://pics.livejournal.com/santhoshtr/pic/00010ph2" width="600" height="480" border='0' />][3]

bn_IN gedit in Ubuntu 8.10(Click to enlarge)

[<img src="http://pics.livejournal.com/santhoshtr/pic/00012s8f" width="640" height="400" border='0' />][4]

ml_IN gnome dictionary client in Ubuntu 8.10(Click to enlarge)

Suggestion/Ideas are welcome&#8230; How can we make our localized desktop more beautiful and user friendly?

 [1]: http://pics.livejournal.com/santhoshtr/pic/00011yfx/
 [2]: http://pics.livejournal.com/santhoshtr/pic/000133rg/
 [3]: http://pics.livejournal.com/santhoshtr/pic/00010ph2/
 [4]: http://pics.livejournal.com/santhoshtr/pic/00012s8f/