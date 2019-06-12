---
title: Announcing Project Silpa
author: Santhosh Thottingal
type: post
date: 2009-06-16T15:13:53+00:00
url: /blog/2009/06/16/announcing-project-silpa/
categories:
  - Indic
  - Projects
tags:
  - silpa

---
Many of my friends already know about a project I am working on,  this is a public announcement of that.

The project is named as Silpa, may be an acronym of Swathanthra(Mukth, Free as in Freedom) Indian Language Processing Applications. It is a web framework and a set of applications for processing Indian Languages in many ways. Or in other words, it is a platform for porting existing and upcoming language processing applications to the web.

Before going to the details, you can have a quick preview of the application here : <a href="http://smc.org.in/silpa" target="_blank">http://smc.org.in/silpa</a>

The project is designed for adding applications/utilities as plugins. The framework is written from scratch using python language. As you can see in the development version, there are number of modules already written.  Most of the modules requires some more work to make it \_complete\_. The application is free software and there is a link to the source code at the bottom of the application.

As it is meant for covering all languages of India, all modules should be capable of handling all scripts from India(Sometimes English too). At the same time , the language of input data is transparent , meaning, user need not mention that \_this\_ is the language in which she is entering the data. Unlike desktop applications which asks to specify the language along with the input data(for eg: Spell checker) , the modules should try to detect the language them self. And if possible, modules try to process the data even if the input data is in multiple Indic scripts.

The modules may be General purpose(eg: Dictionary, Spellcheck,Sort. Transliteration, Font conversion..) or Technology/Algorithm  Demonstration purpose (eg: Hyphenation, Stemmer, Search algorithms)

Some of the modules are usable  as of now, while some of them are in development. You may just try out them. User&#8217;s data will not be logged  except when a crash occurs(at that time user data and exception trace will be logged for later debugging).

And, this is also a call for contributors. You may propose new ideas for modules, feature suggestion etc.. A few  students showed interest in the project. Unfortunately python is not a language in their  college syllabus. So if you are good in python and have interest in contributing to the project, drop me a mail :). There is no separate version for development and the one which is present at http://smc.org.in/silpa . All development happens there itself and any change in the code is immediately available for use!(or immediately starts crashing for user data)

I will write on some interesting algorithms I used for some modules later. If you are curious to know them, read the code!