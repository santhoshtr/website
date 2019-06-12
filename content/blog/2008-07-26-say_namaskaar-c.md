---
title: say_namaskaar.c
author: Santhosh Thottingal
type: post
date: 2008-07-27T05:07:00+00:00
url: /blog/2008/07/26/say_namaskaar-c/
lj_itemid:
  - 47
lj_permalink:
  - http://santhoshtr.livejournal.com/12092.html
categories:
  - Projects
tags:
  - dhvani
  - hack

---
<pre><font color="#444444">/* say_namaskaar.c
 *  This is a sample C code using dhvani text to speech API which I am
 *  developing now and planning to release soon. New version of dhvani
 *  will provide a shared library libdhvani and it allows other C or C++
 *  applications to use dhvani synthesizer. Tamil and Marathi modules, pitch, tempo
 *  control etc are the features for the coming release.
 *  I need to prepare documentation, fix many bugs, test, commit the files in cvs ...
 *  Looking for some free time for all these...
 *  Visit <a href ="http://dhvani.sourceforge.net" >http://dhvani.sourceforge.net</a>
 */</font>

<font color="#444444">/* compile with gcc -ldhvani -o namaskaar say_namaskaar.c */</font>
<font color="0000ff"><strong>#include <font color="#008000">&lt;dhvani/dhvani_lib.h&gt;</font></strong></font>
<strong>int</strong> <font color="#2040a0">main</font><font color="4444FF">(</font><strong>int</strong> <font color="#2040a0">argc</font>, <strong>char</strong> <font color="4444FF">*</font><font color="#2040a0">argv</font><font color="4444FF">[</font><font color="4444FF">]</font><font color="4444FF">)</font> <font color="4444FF"><strong>{</strong></font>
    <font color="#2040a0">dhvani_options</font> <font color="#2040a0">options</font><font color="4444FF">;</font>
    <font color="#444444">/* Set the pitch and tempo of the speech */</font>
    <font color="#2040a0">options</font>.<font color="#2040a0">tempo</font> <font color="4444FF">=</font> <font color="4444FF">-</font><font color="#FF0000">10.0</font><font color="4444FF">;</font> <font color="#444444">/* reduce the speed by 10%  */</font>
    <font color="#2040a0">options</font>.<font color="#2040a0">pitch</font> <font color="4444FF">=</font> <font color="#FF0000">2.0</font><font color="4444FF">;</font>    <font color="#444444">/* increase the pitch b 2 semitons */</font>
    <font color="#2040a0">options</font>.<font color="#2040a0">rate</font> <font color="4444FF">=</font> <font color="#FF0000">16000</font><font color="4444FF">;</font>  <font color="#444444">/* 16KHz Sampling rate */</font>
    <font color="#444444">/* Initialize dhvani */</font>
    <font color="#2040a0">dhvani_init</font><font color="4444FF">(</font><font color="4444FF">&</font><font color="#2040a0">options</font><font color="4444FF">)</font><font color="4444FF">;</font>
    <font color="#444444">/* Say Namaskar */</font>
    <font color="#2040a0">dhvani_say</font><font color="4444FF">(</font><font color="#008000">"नमसकार"</font>,  <font color="4444FF">&</font><font color="#2040a0">options</font><font color="4444FF">)</font><font color="4444FF">;</font>
    <font color="#444444">/* close the synthesizer */</font>
    <font color="#2040a0">dhvani_close</font><font color="4444FF">(</font><font color="4444FF">)</font><font color="4444FF">;</font>
    <strong>return</strong> <font color="#FF0000"></font><font color="4444FF">;</font>
<font color="4444FF"><strong>}</strong></font>
 <font color="#444444">
/*  We can write a blog post in C too :P . Syntax highlighted by <a href="http://www.palfrader.org/code2html">Code2HTML</a> */</font>
</pre>