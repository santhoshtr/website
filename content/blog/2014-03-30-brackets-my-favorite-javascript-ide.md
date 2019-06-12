---
title: Brackets, my favorite javascript IDE
author: Santhosh Thottingal
type: post
date: 2014-03-30T05:18:52+00:00
url: /blog/2014/03/30/brackets-my-favorite-javascript-ide/
categories:
  - Projects
tags:
  - brackets
  - ide
  - javascript
  - mediawiki

---
I use [Brackets][1] for web development. I had tried several other IDEs but Brackets is my current favorite IDE. A few things I liked is listed below

  *  It is <a title="Free software" href="https://en.wikipedia.org/wiki/Free_software" data-original-title="">free software</a> licensed under the <a title="MIT License" href="https://en.wikipedia.org/wiki/MIT_License" data-original-title="">MIT License</a>
  *  written in <a title="HTML" href="https://en.wikipedia.org/wiki/HTML" data-original-title="">HTML</a>, <a title="CSS" href="https://en.wikipedia.org/wiki/CSS" data-original-title="">CSS</a> and <a title="JavaScript" href="https://en.wikipedia.org/wiki/JavaScript" data-original-title="">JavaScript</a>
  * Availability of large number of [extensions][2]

{{< youtube rvo3Mv1Z4qU >}}

Some extensions I use with Brackets are:

  1. [Markdown Preview][3] for easy editing of markdown
  2. [Brackets Git][4] for git integration
  3. [Themes for Brackets][5] For Monokai Darksoda theme I use
  4. [Brackets Linux UI][6]
  5. [Interactive Linter][7] realtime JSHint/JSLint/CoffeeLint reports into brackets as you work on your code
  6. [WD Minimap][8] for SublimeText like code overview
  7. [Beautify][9] for automatic code formatting as you save using [jsbeautify][10]

Beautify extension helps me a lot because most of the MediaWiki related code I write needs be as [MediaWiki javascript coding convention][11]. I never get it right if I format manually. The convention is a bit different from usual js code formatting. In general you need to use a lot of whitespaces. This extension was using a default jsbeautify formatting configuration and I wanted it to be customizable per project so that I can write my own .jsbeautifyrc file to get my code formatted as per conventions.

There was an [enhancement bug][12] for this. I [wrote a patch][13] for handling project specific jsbeautifyrc and [Martin Zagora][14] merged it to the repo. Here is my .jsbeautifyrc for MediaWiki <https://gist.github.com/santhoshtr/9867861>

Brackets is in [active][15] development and I look forward for more [features][16]. The most important bug I would like to get fixed, that all code editors I tried suffer including brackets is support of pain free complex script editing and rendering. Brackers uses [CodeMirror][17] for the code editor and I had [reported this issue ][18]. It is not trivial to fix and root cause is related to the core design. Along with js,css,html, php etc I have to work with files containing all kind of natural language text and this feature is important to me.

 [1]: http://brackets.io/
 [2]: https://brackets-registry.aboutweb.com/
 [3]: https://github.com/gruehle/MarkdownPreview
 [4]: https://github.com/zaggino/brackets-git
 [5]: https://github.com/Jacse/themes-for-brackets
 [6]: https://github.com/cristatus/brackets-linux-ui‎
 [7]: https://github.com/MiguelCastillo/Brackets-InteractiveLinter
 [8]: https://github.com/websiteduck/brackets-wdminimap
 [9]: https://github.com/drewhjava/brackets-beautify
 [10]: https://github.com/einars/js-beautify
 [11]: https://www.mediawiki.org/wiki/Manual:Coding_conventions/JavaScript
 [12]: https://github.com/drewhjava/brackets-beautify/issues/20
 [13]: https://github.com/drewhjava/brackets-beautify/pull/54
 [14]: https://github.com/zaggino
 [15]: https://github.com/adobe/brackets/commits/master
 [16]: https://github.com/adobe/brackets/issues?state=open
 [17]: http://codemirror.net/
 [18]: https://github.com/marijnh/CodeMirror/issues/2115