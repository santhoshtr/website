---
title: Dictionary Jabber Buddy Bots
author: Santhosh Thottingal
type: post
date: 2010-11-20T17:24:05+00:00
url: /blog/2010/11/20/dictionary-jabber-buddy-bots/
categories:
  - Indic
  - Malayalam
  - Projects
  - SMC
tags:
  - bots
  - dictionary
  - python
  - xmpp

---
Recently we released two Jabber buddy bots for dictionary lookup. By adding eng.mal.dict@gmail.com as a chat contact one can ask for the meaning of an English word in Malayalam by just sending a chat message. Similarly for English-Hindi or Hindi-English dictionary, we have another bot eng.hin.dict@jabber.org. Both of these dictionaries use Dict databases based on  <a title="DICT" href="http://en.wikipedia.org/wiki/DICT" target="_blank">DICT protocol</a>.

Both of these bots were well received  by the users. We have 8000+ users for English-Malayalam Dictionary.  Online blogs/media also gave good publicity. Thanks a lot!.

<a title="Swathanthra Malayalam Computing" href="http://smc.org.in" target="_blank">SMC </a>developers Rajeesh Nambiar, Ershad, Ragsagar, and  Sarath Lakshman had helped in improving the program. You can get the source code from <a href="http://git.savannah.gnu.org/cgit/smc.git/tree/bots" target="_blank">here</a>. It is a small program written using python XMPP library.

We had written this programs one year back, 2009 december itself. We could not launch them for public since we did not had a server to host them.  Usually webhosting providers wont allow to run programs like this in their servers. Recently <a href="netdotnet.com" target="_blank">netdotnet.com</a> provided a VPS server for SMC and we could launch them from that server.

English-Hindi dictionary is reasonably big, but English-Malayalm is very small with only ~10k words. So we just added a Malayalam Wiktionary backend for the bot.

Here is a video on how to use English-Hindi bot prepared by  <a href="http://varunverma.org/blogs/translate-inside-your-google-chat-window/" target="_blank">Varun Verma </a>



  * An article about English Malayalam bot in Epathram.com <a href="http://epathram.com/column-itsit/11/03/225654-english-malayalam-dictionary-in-google-chat.html" target="_blank">here. </a>
  * A blog post by Sailesh in Hindi <a href="http://emadad.hindyugm.com/2010/10/know-hindi-meanings-while-chatting.html" target="_blank">http://emadad.hindyugm.com/2010/10/know-hindi-meanings-while-chatting.html</a>

We can start this kind of bot for other languages too, if we have dictionaries with Free S/w compatible licenses. If interested, please contact me.