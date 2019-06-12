---
title: 'Sulekha: Transliteration Based Indic Texteditor'
author: Santhosh Thottingal
type: post
date: 2007-11-20T04:47:00+00:00
url: /blog/2007/11/19/sulekha-transliteration-based-indic-texteditor/
lj_itemid:
  - 30
lj_permalink:
  - http://santhoshtr.livejournal.com/7796.html
categories:
  - Misc
tags:
  - hack
  - SMC
  - sulekha

---
Learning how to type in our own Mother tongue is always a problem for newbies. Usually we will just use English as &#8220;yeh kya hey&#8221; while chatting/mailing. It is because of this reason the transliteration based input methods are more popular than the Inscript in some languages. Google recently released their [Indic transliterate][1] service, a web based text editor which will take English words and convert to Indic languages with the help of some machine learning.

But as far as a normal user is concerned there are many things missing there. It works only if you are online, the suggestions it is listing for English words are often wrong words with spelling mistakes, not a free software etc..

It is in this context, I tried to develop a Desktop application which will act as transliteration based text editor with almost all features of Google transliterate and with some extra features. The project is called as &#8216;Sulekha&#8221;, meaning &#8220;one who writes well&#8221;

**What is Sulekha**

Sulekha is a GTK based text editor. It transliterated the English words to Malayalam (It is not only designed for Malayalam. but I started it for Malayalam) when user types space/newline. If the transliterated word is an actual Malayalam word , Sulekha will replace the English word with the Malayalam word. Other wise we will try to get an exact match from the dictionary we have. If there are multiple words which matches the transliterated word, we will show it as an option list, just like a spell checker. If there is no suggestions, there is a onscreen keyboard, using that user can type using mouse and we will add that new word to the dictionary. Thereby Sulekha learns new words.

[<img src="http://pics.livejournal.com/santhoshtr/pic/0000cgwh/s320x240" width="320" height="187" border="0" />][2]

If one experienced user wants to use type some words using any input methods, we can disable the sulekha algorithm as well. Then it works as a normal text editor. Sulekha uses Aspell for word learning and suggestions. There is a transliteration engine which transliterated the word to a particular language.

So it is possible to extend Sulekha to any language having Aspell word list. Just need to write one transliteration engine which it language specific. Sulekha editor is a hack on the gtkspell library code which works as a basis for GEDIT text editor. If possible, we can think about a web based sync of word lists also.

The project is not complete, but the code is available in the [GIT repository of Swathanthra Malayalam Computing at Savannah][3]

To build the code;

./configure

make

To run:

For editor :

sulekha

For commandline transliterator

sulekha englishword\_to\_transliterate

This is the TODO list of Sulekha as of now

1. Onscreen keyboard- Coding and Integration

2. Session dictionary/System dictionary Handling

3. Fixing some bugs in Transliteration system, especially the letters after Chillu.- need a small correction in the algorithm

4. Implementing the Editor Menu functions, File Handling

5. Tuning Aspell configuration for the Edit distance optimization for the best suggestions, Currently the suggestion list is too big and suggestion words include words with more than 2 edit distance.

6. Handling the edit inside the word

7. Web Integration

If you are interested in this project/adding new language support please contact santhosh00 at gmail.com

Happy Hacking!!!

 [1]: http://www.google.com/transliterate/indic
 [2]: http://pics.livejournal.com/santhoshtr/pic/0000cgwh/
 [3]: http://git.savannah.nongnu.org/gitweb/?p=smc.git