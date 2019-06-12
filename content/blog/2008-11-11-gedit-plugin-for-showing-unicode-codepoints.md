---
title: Gedit plugin for showing unicode codepoints
author: Santhosh Thottingal
type: post
date: 2008-11-12T05:52:00+00:00
url: /blog/2008/11/11/gedit-plugin-for-showing-unicode-codepoints/
lj_itemid:
  - 53
lj_permalink:
  - http://santhoshtr.livejournal.com/13815.html
lj_current_location:
  - Chennai
categories:
  - Indic
  - Projects
tags:
  - gedit
  - hack
  - plugin

---
While working with Unicode text, it is often required to get the Unicode code points of text for debugging. Using python, it is very easy to get the unicode codepoints of the text. Following examples illustrates it.

`<br />
>>> "സന്തോഷ്".decode("utf-8")<br />
u'\u0d38\u0d28\u0d4d\u0d24\u0d4b\u0d37\u0d4d'<br />
`

or

`<br />
>>> str=u"സന്തോഷ്"<br />
>>> print repr(str)<br />
u'\u0d38\u0d28\u0d4d\u0d24\u0d4b\u0d37\u0d4d'<br />
`

Well, But we need to take python console and type/paste the text etc..How can we make it more easy? What if pressing F12 key after selecting some text gives the codepoints?

So I wrote a plugin for gedit. I never knew that writing a gedit plugin is too easy. [This tutorial][1] gives all the required information.

Download the [plugin file][2] and [python module][3] and place it in .gnome2/gedit/plugins folder inside your home folder. And restart gedit. Enable the plugin from Edit->Preferences->Plugins menu. Note that you need to enable the External tools plugin too.

[<img src="http://pics.livejournal.com/santhoshtr/pic/0000pqq0/s320x240" width="236" height="240" border='0' />][4]

Select some text and press F12. If text is not selected, entire content of the document will be used.

 [1]: http://live.gnome.org/Gedit/PythonPluginHowTo
 [2]: http://download.savannah.gnu.org/releases/smc/misc/gedit-plugin/show_codepoints.gedit-plugin
 [3]: http://download.savannah.gnu.org/releases/smc/misc/gedit-plugin/show_codepoints.py
 [4]: http://pics.livejournal.com/santhoshtr/pic/0000pqq0/