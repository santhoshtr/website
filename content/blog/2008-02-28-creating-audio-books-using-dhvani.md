---
title: Creating audio books using Dhvani
author: Santhosh Thottingal
type: post
date: 2008-02-28T16:44:00+00:00
url: /blog/2008/02/28/creating-audio-books-using-dhvani/
lj_itemid:
  - 34
lj_permalink:
  - http://santhoshtr.livejournal.com/8759.html
lj_current_mood:
  - creative
categories:
  - Projects
tags:
  - dhvani
  - hack

---
[Dhvani][1] can be used for creating [audiobooks][2] in any of the supported languages(Hindi, Malayalam, Telugu, Kannada, Oriya, Bengali, Gujarati, Panjabi).

First of all you should get the latest dhvani source code from [CVS in sourceforge][3]. Compile it and install.

To create an audiobook follow these steps

You need the text in utf-8 format. No need to specify the langauge. Dhvani will detect the langauge automatically.

`<br />
dhvani -o audiobook.wav textfile<br />
oggenc -B 16 -C 1 -R 16000 audiobook.wav<br />
`

Now you have a file called audiobook.ogg. If you prefer ogg, then your audiobook is ready. If you want the file in mp3 format

`<br />
oggdec audiobook.ogg`

(This will create a file named audiobook.ogg.wav )`<br />
lame --preset 192 -ms -h audiobook.ogg.wav`

(install [lame][4] if it is not present using your package manager)

Now your mp3 file is ready. Transfer it to your music player and enjoy!

I have a sample Malayalam Audio book [here][5]

Note: The speech produced for Languages other than Hindi and Malayalam may not be as per their pronunciation rules. There are two solution for this:

a) Teach me that langauge 😉 or

b) Submit a patch to fix that language module

You can find the Dhvani documentation  [here][6]

 [1]: http://sourceforge.net/projects/dhvani/
 [2]: http://en.wikipedia.org/wiki/Audiobook
 [3]: http://sourceforge.net/cvs/?group_id=35339
 [4]: http://lame.sourceforge.net/
 [5]: http://www.archive.org/details/DhvaniAudioBookOfAMalayalamArticle
 [6]: http://fci.wikia.com/wiki/Dhvani