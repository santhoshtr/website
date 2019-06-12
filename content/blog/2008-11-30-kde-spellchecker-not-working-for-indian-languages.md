---
title: KDE spellchecker not working for Indian Languages
author: Santhosh Thottingal
type: post
date: 2008-12-01T00:47:00+00:00
url: /blog/2008/11/30/kde-spellchecker-not-working-for-indian-languages/
lj_itemid:
  - 57
lj_permalink:
  - http://santhoshtr.livejournal.com/14738.html
lj_current_location:
  - Banglore
categories:
  - Bugs
tags:
  - kde
  - spell checker

---
As I mentioned in my blog post on [Language detection][1] the sonnet spellchecker of KDE is not working. I read the code of the Sonnet and found that it fails to determine the word boundaries in a sentence (or string buffer) and passes the parts of the words to backend spellcheckers like aspell or hunspell. And eventually we get all words wrong. This is the logic used in Sonnet to recognize the word boundaries

> Loop through the chars of the word, until the current char is not a letter/ anymore.

And for this , it use the QChar::.isLetter() function. This functions fails for Matra signs of our languages.

A screenshot from a text area in Konqueror:

[<img src="http://pics.livejournal.com/santhoshtr/pic/0000rw6t" width="246" height="28" border='0' />][2]

For example

`</p>
<pre>
#include <QtCore/QString>
#include <stdlib.h>
int main(){
	QChar letter ;
	letter = 'அ';
	fprintf(stdout,"%d\n", letter.isLetter());
	letter = 'ी';
	fprintf(stdout,"%d\n", letter.isLetter());
}
</pre>
<p>`

In this program, you will get true as output for அ and false for ी.

When I showed this to [Sayamindu][3] during [foss.in][4] , he showed me a [bug in glibc][5] . Eventhough the bug is about Bengali, it is applicable for all languages. It is assigned to [Pravin Satpute][6] and he told me that he got a solution and will be submitting soon to glibc.

But I am wondering why this bug in KDE unnoticed so far? Nobody used spellcheck for Indian languages in KDE?!

Let me explain why this is not happening in GNOME spellchecker if this is a glibc bug. In gnome, this word splitting will be done in application itself using gtk\_text\_iter_* and these iteration through words are done by pango words boundary detection algorithms.

[Filed a bug][7] in KDE to track it.

 [1]: http://santhoshtr.livejournal.com/13832.html
 [2]: http://pics.livejournal.com/santhoshtr/pic/0000rw6t/
 [3]: http://sayamindu.randomink.org/ramblings/
 [4]: http://foss.in
 [5]: https://bugzilla.redhat.com/show_bug.cgi?id=466912
 [6]: http://pravin-s.blogspot.com/
 [7]: https://bugs.kde.org/show_bug.cgi?id=176537