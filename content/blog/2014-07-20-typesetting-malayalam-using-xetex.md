---
title: Typesetting Malayalam using XeTeX
author: Santhosh Thottingal
type: post
date: 2014-07-20T06:05:19+00:00
url: /blog/2014/07/20/typesetting-malayalam-using-xetex/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"5436bc1f40d4";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:78:"https://medium.com/@sthottingal/typesetting-malayalam-using-xetex-5436bc1f40d4";}'
categories:
  - Malayalam
  - Tutorial
tags:
  - TeX
  - xetex

---
<span style="color: #000000;"><a href="http://scripts.sil.org/xetex">XeTeX</a> is an extension of TeX with built-in support for Unicode and OpenType. In this tutorial, we are going to learn how to typeset Malayalam using XeTeX. With some learning effort, we can produce high quality typesetting using XeTeX. </span>

<h2 style="color: #000000;">
  <span id="Installing_XeTeX" class="mw-headline">Installing XeTeX</span>
</h2>

<p style="color: #000000;">
  XeTeX is packaged for all famous GNU/Linux distros. The installation method depends your distro. For ease of installation and configuration, we suggest to use a TeXLive version 2012 or above &#8211; either standalone TeXLive distribution or install from your distribution&#8217;s package manager. Windows and OSX versions are also available.
</p>

<p style="color: #000000;">
  Following packages are required to install to get a working xetex environment in your computer. Note that these packages are relatively large in size and will take time and bandwidth.
</p>

<ol style="color: #000000;">
  <li>
    texlive-xetex
  </li>
  <li>
    texlive-latex-extra
  </li>
  <li>
    texlive-lang-indic
  </li>
</ol>

<p style="color: #000000;">
  You also need reasonably good unicode compatible Malayalam fonts. These fonts also comes with GNU/Linux distros. Search for malayalam fonts in your package manager and install if not already installed. Eg fonts: Meera, Rachana etc.
</p>

<h2 style="color: #000000;">
  <span id="Creating_documents_using_XeTeX" class="mw-headline">Creating documents using XeTeX</span>
</h2>

<p style="color: #000000;">
  A simple document to learn usage of xetex is given below.
</p>

<p style="color: #000000;">
  Using a text editor like gedit or kate, create a new file with .tex as file extension. Eg: example.tex. Copy the following content as the content for that file and save.
</p>

<p style="color: #000000;">
  <noscript>
    <pre><code class="language-tex tex">\documentclass[11pt]{article}
\usepackage{fontspec}
\usepackage{polyglossia}
\setdefaultlanguage{malayalam}
\setmainfont[Script=Malayalam, HyphenChar="00AD]{Rachana}
% In the above line we customized Hyphenation characters since
% visbile hyphen, aka Soft Hyphen is not used for Malayalam
\lefthyphenmin=3
\righthyphenmin=4
\linespread{1.2}
\widowpenalty=10000
\clubpenalty=10000
\raggedbottom
\sloppy
\title{\textbf{സ്വർണം}}
\author{മലയാളം വിക്കിപീഡിയ}
\date{}
\begin{document}

\maketitle

\section{സ്വർണം}

മൃദുവും തിളക്കമുള്ളതുമായ മഞ്ഞലോഹമാണ് സ്വർണം. വിലയേറിയ ലോഹമായ സ്വർണം, നാണയമായും, ആഭരണങ്ങളുടെ രൂപത്തിലും നൂറ്റാണ്ടുകളായി മനുഷ്യൻ ഉപയോഗിച്ചു പോരുന്നു.
ചെറിയ കഷണങ്ങളും തരികളുമായി സ്വതന്ത്രാവസ്ഥയിൽത്തന്നെ പ്രകൃതിയിൽ ഈ ലോഹം കണ്ടുവരുന്നു. ലോഹങ്ങളിൽ വച്ച് ഏറ്റവും നന്നായി രൂപഭേദം വരുത്താവുന്ന ലോഹമാണിത്.
\footnote{http://www.webelements.com/webelements/elements/text/Au/key.html "Key properties of gold" (in ഇംഗ്ലീഷ്). ശേഖരിച്ചത് 2007-06-18.}

\section{ഗുണങ്ങൾ}
സ്വർണത്തിന്റെ അണുസംഖ്യ 79-ഉം പ്രതീകം Au എന്നുമാണ്. ഔറം എന്ന ലത്തീൻ വാക്കിൽ നിന്നാണ് Au എന്ന പ്രതീകം ഉണ്ടായത്.
ഏറ്റവും നന്നായി രൂപഭേദം വരുത്താൻ സാധിക്കുന്ന ലോഹമാണ് സ്വർണ്ണം. ഒരു ഗ്രാം സ്വർണ്ണം അടിച്ചു പരത്തി ഒരു ചതുരശ്രമീറ്റർ വിസ്തീർണ്ണമുള്ള ഒരു തകിടാക്കി മാറ്റാൻ സാധിക്കും.
അതായത് 0.000013 സെന്റീമീറ്റർ വരെ ഇതിന്റെ കനം കുറക്കാൻ കഴിയും. അതു പോലെ വെറും 29 ഗ്രാം സ്വർണ്ണം ഉപയോഗിച്ച് 100 കിലോ മീറ്റർ നീളമുള്ള കമ്പിയുണ്ടാക്കാനും സാധിക്കും.

\section{ചരിത്രം}
ചരിത്രാതീത കാലം മുതൽക്കേ അറിയപ്പെട്ടിരുന്ന അമൂല്യലോഹമാണ്&zwnj; സ്വർണ്ണം. ഒരുപക്ഷേ മനുഷ്യൻ ആദ്യമായി ഉപയോഗിച്ച ലോഹവും ഇതുതന്നെയായിരിക്കണം.
ബി.സി.ഇ. 2600 ലെ ഈജിപ്ഷ്യൻ ഹീറോഗ്ലിഫിക്സ് ലിഖിതങ്ങളിൽ ഈജിപ്തിൽ സ്വർണ്ണം സുലഭമായിരുന്നെന്ന് പരാമർശിക്കുന്നുണ്ട്.
ചരിത്രം പരിശോധിച്ചാൽ ഈജിപ്തും നുബിയയുമാണ്&zwnj; ലോകത്തിൽ ഏറ്റവുമധികം സ്വർണ്ണം ഉല്പ്പാദിപ്പിച്ചിരുന്ന മേഖലകൾ. ബൈബിളിലെ പഴയ നിയമത്തിൽ സ്വർണ്ണത്തെപ്പറ്റി പലവട്ടം പരാമർശിക്കുന്നുണ്ട്.

\end{document}</code></pre>
  </noscript>
</p>

<p style="color: #000000;">
  Now you need to compile this document to generate PDF.
</p>

<pre>xelatex example.tex</pre>

<span style="color: #000000;">Output of the above content can be seen <a href="http://wiki.smc.org.in/File:Gold.pdf">here</a>.</span>

<img class="aligncenter" src="/wp-content/uploads/2014/07/GoldXetex.png" alt="" width="816" height="758" />

<p style="text-align: left;">
  The above tutorial is a very basic tutorial on using XeTeX with Malayalam. For detailed tutorial, please refer any tutorial available freely in internet. Example: <a class="external free" style="color: #663366;" href="https://en.wikibooks.org/wiki/LaTeX" rel="nofollow">https://en.wikibooks.org/wiki/LaTeX</a>
</p>