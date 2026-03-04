---
title: Typesetting Malayalam using XeTeX
author: Santhosh Thottingal
type: post
date: 2014-07-20T06:05:19+00:00
url: /blog/2014/07/20/typesetting-malayalam-using-xetex/
categories:
  - Malayalam
  - Tutorial
tags:
  - TeX
  - xetex

---
<a href="http://scripts.sil.org/xetex">XeTeX</a> is an extension of TeX with built-in support for Unicode and OpenType. In this tutorial, we are going to learn how to typeset Malayalam using XeTeX. With some learning effort, we can produce high quality typesetting using XeTeX. 

Installing XeTeX
----------------

XeTeX is packaged for all famous GNU/Linux distros. The installation method depends your distro. For ease of installation and configuration, we suggest to use a TeXLive version 2012 or above &#8211; either standalone TeXLive distribution or install from your distribution&#8217;s package manager. Windows and OSX versions are also available.

Following packages are required to install to get a working xetex environment in your computer. Note that these packages are relatively large in size and will take time and bandwidth.

- texlive-xetex
- texlive-latex-extra
- texlive-lang-other

You also need reasonably good unicode compatible Malayalam fonts. These fonts also comes with GNU/Linux distros. Search for malayalam fonts in your package manager and install if not already installed. Eg fonts: Meera, Rachana etc.

Creating documents using XeTeX
------------------------------

A simple document to learn usage of xetex is given below.

Using a text editor like gedit or kate, create a new file with .tex as file extension. Eg: example.tex. Copy the following content as the content for that file and save.


{{< gist santhoshtr 2e8748ce440ab0a16349 >}}


Now you need to compile this document to generate PDF.

```lang=bash
xelatex example.tex
```

Output of the above content can be seen <a href="http://wiki.smc.org.in/File:Gold.pdf">here</a>.

<img class="aligncenter" src="/wp-content/uploads/2014/07/GoldXetex.png" alt="" width="816" height="758" />

The above tutorial is a very basic tutorial on using XeTeX with Malayalam. For detailed tutorial, please refer any tutorial available freely in internet. Example: <a class="external free" style="color: #663366;" href="https://en.wikibooks.org/wiki/LaTeX" rel="nofollow">https://en.wikibooks.org/wiki/LaTeX</a>
