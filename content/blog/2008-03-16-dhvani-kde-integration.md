---
title: Dhvani – KDE Integration.
author: Santhosh Thottingal
type: post
date: 2008-03-17T04:06:00+00:00
url: /blog/2008/03/16/dhvani-kde-integration/
lj_itemid:
  - 36
lj_permalink:
  - http://santhoshtr.livejournal.com/9390.html
lj_current_location:
  - Chennai
lj_current_mood:
  - creative
categories:
  - Indic
  - Projects
tags:
  - dhvani
  - hack

---
It is possible integrate Dhvani Indian Langauge TTS to KDE desktop through its TTS system KTTS. Using this you can dhvani can read the text in kate,kedit,kwrite, Konqueror. You can even listen to the text in the webpages in Konqueror

Dhvani can be itegrated to KTTS using its Command plugin feature. To do this go to control center&#8211;>Regional and Accessibility &#8211;>Text-to-speech &#8211;>Talker Tab. Add a new Synthesizer.

[<img src="http://pics.livejournal.com/santhoshtr/pic/0000d1hg/s320x240" width="320" height="213" border='0' />][1]

Select the syntesizer type as Command and Langauge as Other. You can select any language since Dhvani doesn&#8217;t want langauge parameter and it detects the language automatically.

Give the synthesizer command as dhvani %f

[<img src="http://pics.livejournal.com/santhoshtr/pic/0000ec5f/s320x240" width="320" height="213" border='0' />][2]

Move this synthesizer to top in the list of Synthesizers and Click apply. Done.

Now take a UTF-8 text in any of the editors described above or take a webpage in any of the supported language. From the tools menu take Speak Text and listen !!!

For for information about dhvani, how to install etc see the [documentation][3]

 [1]: http://pics.livejournal.com/santhoshtr/pic/0000d1hg/
 [2]: http://pics.livejournal.com/santhoshtr/pic/0000ec5f/
 [3]: http://fci.wikia.com/wiki/Dhvani