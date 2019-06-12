---
title: Language Detection and Spellcheckers
author: Santhosh Thottingal
type: post
date: 2008-11-14T04:42:00+00:00
url: /blog/2008/11/13/language-detection-and-spellcheckers/
lj_itemid:
  - 54
lj_permalink:
  - http://santhoshtr.livejournal.com/13832.html
lj_current_location:
  - Chennai
categories:
  - Indic
  - Projects
tags:
  - language computing
  - spell checker

---
A few weeks back there was a discussion on #indlinux IRC channel about automatic language detection. The idea is, spellcheckers or any language tools should not ask the users to select a language. Instead, they should detect the language automatically. The idea is not new. There is a KDE bug [here][1]and Ubuntu has this as an [brainstorm idea][2]. It seems M$ word already [have][3]  [this][4].

A sample use case can be this: &#8220;While preparing a document in Openoffice, I want to write in English as well as in Hindi. For doing spellcheck, I need to manually change the language rather than the application detect it automatically&#8221;

Regarding the algorithm behind automatic language detection, there are many approaches. Statistical approaches are effective for languages sharing same script(For eg: languages which use latin script or Hindi and Marathi). N-gram based methods are used in statistical approach. [Here is a &#8216;patented&#8217; idea][5] . And [this page][6] explains a character trigram approach. Google has a language detection service(http://www.google.com/uds/samples/language/detect.html) and it [seems it is still][7] in development or &#8216;learning stage&#8217;.

Here is an example of statistical language detection: [languid][8](It did not work for me when I tried, But you can download the source code and check)

[Sonnet][9] is the spellchecker framework of KDE written by [J. Rideout][10]. It is also trying to provide the language detection feature. [Here is an old article][11] in linux.com about that. It is based on n-gram based text categorization and is a port of [languid][8]. From the article:

> A gram is a segment of text made of N number of characters. Sonnet uses trigrams, made from three characters. By analyzing the popularity of any given trigram within a text, one may make assumptions about the language the text is written in. Rideout gives an example: &#8220;The top trigram for our English model is &#8216;\_th&#8217; and for Spanish &#8216;\_de&#8217;. Therefore, if the text contains many words that start with &#8216;th&#8217; and no words that start with &#8216;de,&#8217; it is more likely the text is in English [than Spanish]. Additionally, there are several optimizations which include only checking the language against languages with similar scripts and some heuristics that use the language of neighboring text as a hint.&#8221;

(I tried sonnet and could not get it working for ml_IN. Instead of words, it was iterating through letters. Anyway I will check this problem later.)

As far as Indian languages are concerned, Unicode code range based language detection will work for most of the cases. Most of the languages has its own script and Unicode code point range. For example, detecting Malayalam is a matter of checking the letters are in the Malayalam Unicode range. But for Devanagari script it is not straight forward. Hindi , Marathi etc use Devanagari script. Dhvani, the text to speech system for Indian languages use a simple algorithm for language detection(http://dhvani.sourceforge.net/doc/language-detection.html). There the Hindi and Marathi is identified by giving a priority for LANG environment variable. But it will fail if somebody try to use Marathi in an English desktop(Users can specify the language to be used – In that case language detection will not be done.).

In the case of spell checkers other than LANG environment variable there are other options. When you type in gedit or any text editors, detecting the keyboard layout will be one way of detecting the language. But it depends which IME the users uses. It can be xkb or scim or even a copy-paste.

Anyway, it is pretty clear that the current natural language features in the free desktops requires more improvements. Based on a discussion we had in #indlinux IRC, we had setup a [wiki page][12] here to discuss on this.

As a [proof of concept][13], I tried to write a spellchecker for Gedit texteditor with language detection for Indian languages. Basically it uses Unicode character range. It is a gedit plugin written in python. And it uses [pyenchant][14] spellcheck wrapper library. Install python-enchant using your package manager if it is not already installed. Download the [plugin][15] and [python module][16] to ~/.gnome2/gedit/plugins folder and restart gedit. Enable external tools and new Spellchecker plugin in edit->preferences->plugins. It does not have the pango error style underline or suggestions in context menu as of now. It just prints the results and suggestions in the console of gedit. And ‘Add to Dictionary’ etc are not there now.

[<img src="http://pics.livejournal.com/santhoshtr/pic/0000qtc3" width="50%" height="50%" border='0' />][17]

I would like to request interested developers to come forward and make this feature ready to use in free desktops. Suggestions are welcome. We need good algorithms for detecting the language too.

A sample use case: &#8220;System locale is English and I am typing a document in Hindi and want to write some Marathi sentences in between. Without manually changing the language, system detect the language of each word and check the spelling against corresponding dictionaries.&#8221;

PS: Because of the inflectional and agglutinative nature of some of the Indian languages, the spell checking is not at all effective. I will write on that later.

 [1]: http://bugs.kde.org/show_bug.cgi?id=66516
 [2]: http://brainstorm.ubuntu.com/idea/10469/
 [3]: http://help.lockergnome.com/office/SpellCheck-Detect-language-automatically-working-ftopict879615.html
 [4]: http://www.pcreview.co.uk/forums/thread-887637.php
 [5]: http://www.freepatentsonline.com/6167369.html
 [6]: http://code.activestate.com/recipes/326576/
 [7]: http://sourceforge.net/mailarchive/forum.php?thread_name=992b8210810041028r2391e433he05e2c7ccfc50f21%40mail.gmail.com&forum_name=indlinux-group
 [8]: http://languid.cantbedone.org/
 [9]: http://en.wikipedia.org/wiki/Sonnet_(KDE)
 [10]: http://blog.jacobrideout.net
 [11]: http://www.linux.com/articles/59963
 [12]: http://www.indlinux.org/wiki/index.php/LanguageNeutralInterfaces
 [13]: http://en.wikipedia.org/wiki/Proof_of_concept
 [14]: http://pyenchant.sourceforge.net/
 [15]: http://download.savannah.gnu.org/releases/smc/misc/gedit-plugin/ISpellcheck.gedit-plugin
 [16]: http://download.savannah.gnu.org/releases/smc/misc/gedit-plugin/ISpellcheck.py
 [17]: http://pics.livejournal.com/santhoshtr/pic/0000qtc3/