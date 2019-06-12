---
title: Predictive text entry with ibus
author: Santhosh Thottingal
type: post
date: 2010-03-12T14:39:37+00:00
url: /blog/2010/03/12/predictive-text-entry-with-ibus/
categories:
  - Projects
tags:
  - ibus
  - predictive text entry

---
A few days back I came to know about this project :[Text Prediction on GNOME][1] based on <a title="GTK+ Input Method context" href="http://www.gtk.org/api/2.6/gtk/GtkIMContext.html" target="_blank">GTK+ Input Method context</a>. Basically it is an input method with text prediction feature.

I had a similar project idea during 2009 May and had done some amount of coding for that. The project was to have an [IBUS][2] input method which can do letter prediction as well as word prediction. The prediction is based on ngrams.  Since it is based on ibus, it works on all desktop applications.  You can see the screenshots of prototype from [here][3], [here][4] and [here][5]

The core code was ready. It was written in python and use ibus-python. Unfortunately I did not get time to spend on this project for a long time and currently this project is not there in my top priorities.  Since I see many people interested in auto-completion or predictive text entry, I uploaded the code here <http://github.com/santhoshtr/ibus-sulekha> .  It is not in a working state as of now, but I would be happy if anybody interested in taking it forward.  I wrote a small documentation on algorithm [here][6], and feel free to contact me if any help is required.

 [1]: http://www.joaquimrocha.com/2010/03/03/text-prediction-on-gnome/
 [2]: http://code.google.com/p/ibus
 [3]: http://smc.org.in/~santhosh/images/sulekha-proto1.png
 [4]: http://smc.org.in/~santhosh/images/sulekha-proto2.png
 [5]: http://smc.org.in/~santhosh/images/sulekha-proto3.png
 [6]: http://wiki.github.com/santhoshtr/ibus-sulekha/