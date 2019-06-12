---
title: 'Creating a new Language ecosystem- Sourashtra as example'
author: Santhosh Thottingal
type: post
date: 2011-05-07T06:31:39+00:00
url: /blog/2011/05/07/language-ecosystem-sourashtra/
categories:
  - Indic
  - Projects
tags:
  - fonts
  - glibc
  - sourashtra
  - wikipedia

---
<a href="http://en.wikipedia.org/wiki/Saurashtra_language" target="_blank">Sourashtra</a> is a language spoken by Sourashtra  people living in South Tamilnadu and Gujarat of India. Originated from Brahmi and then Grandha, this language is mother tongue for half a million people. But most of them are not familiar with <a href="http://en.wikipedia.org/wiki/Saurashtra_script" target="_blank">the script</a> of this language. Very few people knows reading and writing on Sourashtra script. Sourashtra has a ISO 639-3 language code saz and  Unicode range  U+A880 &#8211; U+A8DF

Recently Sourashtra wikipedia project was started in the wikimedia incubator : <a href="http://incubator.wikimedia.org/wiki/Wp/saz" target="_blank">http://incubator.wikimedia.org/wiki/Wp/saz</a> and Mediawiki localization <a href="http://ultimategerardm.blogspot.com/2011/03/saurashtra-language-from-india-new-to.html" target="_blank">started in translatewiki</a> Since the language did not had any proper fonts or input tools, this was not going well.

When we add a  new language support in Mediawiki or start a new language wikipedia,  we need to develop the language technology ecosystem to support its growth. This ecosystem comprises of Unicode code points for the script, proper fonts, rendering support,  input tools, availability of these fonts and input tools in operating systems or alternate ways to get it working in operating system etc.

Sourashtra language had a unicode font developed by <a href="http://www.khenikeri.com/" target="_blank">Prabu M Rengachari</a>, named &#8216;Sourashtra&#8217; itself. The font <a href="http://khenikeri.blogspot.com/2011/01/test-sourashtra-unicode-font-versions.html" target="_blank">had problems</a> with browsers/operating systems. We fixed to make it work properly. The font was not licensed properly. Prabu agreed to release it in <a href="http://www.gnu.org/licenses/gpl-3.0.txt" target="_blank">GNU GPLV3</a> license with <a href="http://www.gnu.org/licenses/gpl-faq.html#FontException" target="_blank">font exception</a>. He also agreed to rename the font to another name other than the script name itself.

The font was <a href="http://khenikeri.blogspot.com/2011/04/pagul-web-font.html" target="_blank">renamed to Pagul</a>, meaning &#8216;Footstep&#8217; in Sourashtra and <a href="https://sourceforge.net/projects/pagul/" target="_blank">hosted in sourceforge</a>

Once we have a font with proper license, we wanted it to be available in operating systems. I filed a <a href="http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=623944" target="_blank">packaging request</a> in Debian. <a href="http://blog.copyninja.info/" target="_blank">Vasudev Kamath</a> of Debian India Team packaged it and now it is available in <a href="http://packages.debian.org/sid/fonts-pagul" target="_blank">debian unstable</a>(sid).  Parag Nemade of Fedora India <a href="https://bugzilla.redhat.com/show_bug.cgi?id=699587" target="_blank">packaged the font for Fedora</a> and will be avialable in upcoming Fedora 15.

To add a new language support in operating system, we need <a href="http://en.wikipedia.org/wiki/Locale" target="_blank">a locale definition</a>. In GNU Linux this is GLibc locale definition. With the help of Prabu, I prepared the saz_IN locale file for glibc, and filed as <a href="https://bugzilla.redhat.com/show_bug.cgi?id=698346" target="_blank">bug report to add to glibc</a>. I hope, soon it will be part of Glibc.

Well, all of these was possible since it was GNU/Linux or Free software. Things are a bit difficult on the other side, proprietary operating system world. There is nothing we can do with those operating systems. Since there is no &#8216;market&#8217; for these minority language, it won&#8217;t come to the priority of those companies to add support for these languages. Users will see squares or question marks when they visit sourashtra wikipedia.

We are working on a solution for this, not only for sourashtra, but a common solution for all languages. We are developing a webfonts extension for Mediawiki to provide font embedding in wiki pages to avoid the necessity of having fonts installed in user&#8217;s computers. The extension is <a href="http://svn.wikimedia.org/viewvc/mediawiki/trunk/extensions/WebFonts" target="_blank">in development</a> and one can preview it in <a href="http://thottingal.in/wiki/" target="_blank">my test wiki</a>. For Sourashtra, we added webfonts support(<a href="http://thottingal.in/wiki/index.php?title=Sourashtra&setlang=saz" target="_blank">preview</a>) .

Input tools needs to be developed and packaged. For mediaiwki, with the help of Narayam extension, we can easily add this support.

With the <a href="http://silpa.org.in" target="_blank">silpa project</a>, I added a server side, PDF/PNG/SVG <a href="http://silpa.org.in/Render" target="_blank">rendering support</a> for Sourashtra as well.

&nbsp;