---
title: Dhvani 0.94 Released
author: Santhosh Thottingal
type: post
date: 2008-11-16T04:02:00+00:00
url: /blog/2008/11/15/dhvani-0-94-released/
lj_itemid:
  - 55
lj_permalink:
  - http://santhoshtr.livejournal.com/14154.html
categories:
  - Indic
  - Projects
tags:
  - dhvani

---
A new version of [Dhvani][1] -The Indian Language Text to Speech System is available now. The new version comes with the following improvements/features

  * Support for 11 languages- Hindi, Panjabi, Gujarati, Marati, Bengali, Oriya, Telugu, Kannada, Tamil , Malayalam and Pashto(Afganistan)
  * Pitch and Tempo modification for speech
  * Direct ogg-vorbis speech output and optional wav output format</li>

      * [C/C++ APIs][2] for applications to use dhvani as a shared library.
      * [Generic driver for Speech-dispatcher][3] and Integration to Orca through speech dispatcher
      * Python binding through speech dispatcher
      * Improved [language detection algorithm][4]</ul>

    Dhvani documentation is available [here][5].

    Binary packages and source code are available [here][6]



    **Thanks**

      * Rahul Bhalerao for Marathi module and patches
      * Zabeehkhan for Pashto Module
      * Nirupama, CDAC Chennai and CDAC Noida people for testing and reporting bugs
      * NRCFOSS Chennai, Krishnakanth Mane and many others for feedbacks
      * [Amida Simputer][7] team for patches on Telugu module especially the Telugu number reading logic
      * Debayan and Roshan for testing and informing problems

    There was good amount of code change in this version. Still there are many improvements to do in language modules and synthesizer. Some of the language modules requires developers who speak that language. Syntheziser got some improvements and require some amount of research to make the speech more natural. So your feedbacks, suggestions, bug reports and patches are valuable.

    PS: A note for quick usage after installation from binary: After installing deb or rpm, Open gedit, edit->preferences->plugins, enable external tools. Dhvani will be available as a plugin there. Select some text in any of the supporting languages and click the Dhvani menu.

 [1]: http://dhvani.sourceforge.net
 [2]: http://dhvani.sourceforge.net/doc/apis.html
 [3]: http://dhvani.sourceforge.net/doc/screenreader.html
 [4]: http://dhvani.sourceforge.net/doc/langauge-detection.html
 [5]: http://dhvani.sourceforge.net/doc
 [6]: http://sourceforge.net/projects/dhvani
 [7]: http://www.amidasimputer.com/