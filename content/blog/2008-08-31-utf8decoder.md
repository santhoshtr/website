---
title: UTF8Decoder
author: Santhosh Thottingal
type: post
date: 2008-09-01T04:27:00+00:00
url: /blog/2008/08/31/utf8decoder/
lj_itemid:
  - 49
lj_permalink:
  - http://santhoshtr.livejournal.com/12655.html
categories:
  - Projects
tags:
  - dhvani
  - unicode

---
[zabeehkhan][1] was trying to code a Pashto (ps_AF) module for [dhvani][2]. And he told me that &#8220;it is not saying anything&#8221; :). So I took the code and found the problem. Dhvani has a UTF-8 decoder and UTF-16 converter. It was written by Dr. Ramesh Hariharan and was tested only with the unicode range of the languages in India. It was buggy for most of the other languages and there by the language detection logic and text parsing logic was failing. So I did some googling, went through the code tables of gucharmap and got some helpful information from [here][3] and [here][4]



So here is my new UTF8Decoder and converter



<pre><font color="#444444">/*
UTF8Decoder.c
This program converts a utf-8 encoded string to utf-16 hexadecimal code sequence

UTF-8 is a variable-width encoding of Unicode.
UTF-16 is a fixed width encoding of two bytes

A UTF-8 decoder must not accept UTF-8 sequences that are longer than necessary to
encode a character. For example, the character U+000A (line feed) must be accepted from
a UTF-8 stream only in the form 0x0A, but not in any of the following five possible overlong forms:

  0xC0 0x8A
  0xE0 0x80 0x8A
  0xF0 0x80 0x80 0x8A
  0xF8 0x80 0x80 0x80 0x8A
  0xFC 0x80 0x80 0x80 0x80 0x8A

Ref: UTF-8 and Unicode FAQ for Unix/Linux http://www.cl.cam.ac.uk/~mgk25/unicode.html

Author: Santhosh Thottingal &lt;santhosh.thottingal at gmail.com&gt;
License: This program is licensed under GPLv3 or later version(at your choice)
*/</font>
<font color="0000ff"><strong>#include<font color="#008000">&lt;stdlib.h&gt;</font></strong></font>
<font color="0000ff"><strong>#include<font color="#008000">&lt;stdio.h&gt;</font></strong></font>
<font color="0000ff"><strong>#include<font color="#008000">&lt;string.h&gt;</font></strong></font>
<strong>unsigned</strong> <strong>short</strong>
<font color="#2040a0">utf8_to_utf16</font> <font color="4444FF">(</font><strong>unsigned</strong> <strong>char</strong> <font color="4444FF">*</font><font color="#2040a0">text</font>, <strong>int</strong> <font color="4444FF">*</font><font color="#2040a0">ptr</font><font color="4444FF">)</font>
<font color="4444FF"><strong>{</strong></font>

  <strong>unsigned</strong> <strong>short</strong> <font color="#2040a0">c</font><font color="4444FF">;</font>		<font color="#444444">/*utf-16 character */</font>
  <strong>int</strong> <font color="#2040a0">i</font> <font color="4444FF">=</font> <font color="#FF0000"></font><font color="4444FF">;</font>
  <strong>int</strong> <font color="#2040a0">trailing</font> <font color="4444FF">=</font> <font color="#FF0000"></font><font color="4444FF">;</font>
  <strong>if</strong> <font color="4444FF">(</font><font color="#2040a0">text</font><font color="4444FF">[</font><font color="4444FF">*</font><font color="#2040a0">ptr</font><font color="4444FF">]</font> <font color="4444FF">&lt;</font> <font color="#FF0000">0x80</font><font color="4444FF">)</font>	<font color="#444444">/*ascii character till 128 */</font>
    <font color="4444FF"><strong>{</strong></font>
      <font color="#2040a0">trailing</font> <font color="4444FF">=</font> <font color="#FF0000"></font><font color="4444FF">;</font>
      <font color="#2040a0">c</font> <font color="4444FF">=</font> <font color="#2040a0">text</font><font color="4444FF">[</font><font color="4444FF">(</font><font color="4444FF">*</font><font color="#2040a0">ptr</font><font color="4444FF">)</font><font color="4444FF">+</font><font color="4444FF">+</font><font color="4444FF">]</font><font color="4444FF">;</font>
    <font color="4444FF"><strong>}</strong></font>
  <strong>else</strong> <strong>if</strong> <font color="4444FF">(</font><font color="#2040a0">text</font><font color="4444FF">[</font><font color="4444FF">*</font><font color="#2040a0">ptr</font><font color="4444FF">]</font> <font color="4444FF">&gt;</font><font color="4444FF">&gt;</font> <font color="#FF0000">7</font><font color="4444FF">)</font>
    <font color="4444FF"><strong>{</strong></font>
      <strong>if</strong> <font color="4444FF">(</font><font color="#2040a0">text</font><font color="4444FF">[</font><font color="4444FF">*</font><font color="#2040a0">ptr</font><font color="4444FF">]</font> <font color="4444FF">&lt;</font> <font color="#FF0000">0xE0</font><font color="4444FF">)</font>
	<font color="4444FF"><strong>{</strong></font>
	  <font color="#2040a0">c</font> <font color="4444FF">=</font> <font color="#2040a0">text</font><font color="4444FF">[</font><font color="4444FF">*</font><font color="#2040a0">ptr</font><font color="4444FF">]</font> <font color="4444FF">&</font> <font color="#FF0000">0x1F</font><font color="4444FF">;</font>
	  <font color="#2040a0">trailing</font> <font color="4444FF">=</font> <font color="#FF0000">1</font><font color="4444FF">;</font>
	<font color="4444FF"><strong>}</strong></font>
      <strong>else</strong> <strong>if</strong> <font color="4444FF">(</font><font color="#2040a0">text</font><font color="4444FF">[</font><font color="4444FF">*</font><font color="#2040a0">ptr</font><font color="4444FF">]</font> <font color="4444FF">&lt;</font> <font color="#FF0000">0xF8</font><font color="4444FF">)</font>
	<font color="4444FF"><strong>{</strong></font>
	  <font color="#2040a0">c</font> <font color="4444FF">=</font> <font color="#2040a0">text</font><font color="4444FF">[</font><font color="4444FF">*</font><font color="#2040a0">ptr</font><font color="4444FF">]</font> <font color="4444FF">&</font> <font color="#FF0000">0x07</font><font color="4444FF">;</font>
	  <font color="#2040a0">trailing</font> <font color="4444FF">=</font> <font color="#FF0000">3</font><font color="4444FF">;</font>
	<font color="4444FF"><strong>}</strong></font>

      <strong>for</strong> <font color="4444FF">(</font><font color="4444FF">;</font> <font color="#2040a0">trailing</font><font color="4444FF">;</font> <font color="#2040a0">trailing</font><font color="4444FF">-</font><font color="4444FF">-</font><font color="4444FF">)</font>
	<font color="4444FF"><strong>{</strong></font>
	  <strong>if</strong> <font color="4444FF">(</font><font color="4444FF">(</font><font color="4444FF">(</font><font color="4444FF">(</font><font color="#2040a0">text</font><font color="4444FF">[</font><font color="4444FF">+</font><font color="4444FF">+</font><font color="4444FF">*</font><font color="#2040a0">ptr</font><font color="4444FF">]</font><font color="4444FF">)</font> <font color="4444FF">&</font> <font color="#FF0000">0xC0</font><font color="4444FF">)</font> <font color="4444FF">!</font><font color="4444FF">=</font> <font color="#FF0000">0x80</font><font color="4444FF">)</font><font color="4444FF">)</font>
	    <strong>break</strong><font color="4444FF">;</font>
	  <font color="#2040a0">c</font> <font color="4444FF">&lt;</font><font color="4444FF">&lt;</font><font color="4444FF">=</font> <font color="#FF0000">6</font><font color="4444FF">;</font>
	  <font color="#2040a0">c</font> <font color="4444FF">|</font><font color="4444FF">=</font> <font color="#2040a0">text</font><font color="4444FF">[</font><font color="4444FF">*</font><font color="#2040a0">ptr</font><font color="4444FF">]</font> <font color="4444FF">&</font> <font color="#FF0000">0x3F</font><font color="4444FF">;</font>
	<font color="4444FF"><strong>}</strong></font>

    <font color="4444FF"><strong>}</strong></font>
  <strong>return</strong> <font color="#2040a0">c</font><font color="4444FF">;</font>

<font color="4444FF"><strong>}</strong></font>


<font color="#444444">/* for testing */</font>
<strong>int</strong>
<font color="#2040a0">main</font> <font color="4444FF">(</font><font color="4444FF">)</font>
<font color="4444FF"><strong>{</strong></font>
  <strong>char</strong> <font color="4444FF">*</font><font color="#2040a0">instr</font> <font color="4444FF">=</font> <font color="#008000">"സന്തോഷ് തോട്ടിങ്ങല്‍"</font><font color="4444FF">;</font>	<font color="#444444">/* my name :) */</font>
  <strong>int</strong> <font color="#2040a0">length</font> <font color="4444FF">=</font> <font color="#2040a0">strlen</font> <font color="4444FF">(</font><font color="#2040a0">instr</font><font color="4444FF">)</font><font color="4444FF">;</font>
  <strong>int</strong> <font color="#2040a0">i</font> <font color="4444FF">=</font> <font color="#FF0000"></font><font color="4444FF">;</font>

  <strong>for</strong> <font color="4444FF">(</font><font color="4444FF">;</font> <font color="#2040a0">i</font> <font color="4444FF">&lt;</font> <font color="#2040a0">length</font><font color="4444FF">;</font><font color="4444FF">)</font>
    <font color="4444FF"><strong>{</strong></font>
      <font color="#2040a0">printf</font> <font color="4444FF">(</font><font color="#008000">"0x%.4x "</font>, <font color="#2040a0">utf8_to_utf16</font> <font color="4444FF">(</font><font color="#2040a0">instr</font>, <font color="4444FF">&</font><font color="#2040a0">i</font><font color="4444FF">)</font><font color="4444FF">)</font><font color="4444FF">;</font>
    <font color="4444FF"><strong>}</strong></font>
  <font color="#2040a0">printf</font> <font color="4444FF">(</font><font color="#008000">"<font color="#77dd77">\n</font>"</font><font color="4444FF">)</font><font color="4444FF">;</font>
<font color="#444444">/* output is:
0x0d38 0x0d28 0x0d4d 0x0d24 0x0d4b 0x0d37 0x0d4d 0x0020 0x0d24 0x0d4b 0x0d1f 0x0d4d 0x0d1f 0x0d3f 0x0d19 0x0d4d 0x0d19 0x0d32 0x0d4d 0x200d
*/</font>

  <strong>return</strong> <font color="#FF0000"></font><font color="4444FF">;</font>
<font color="4444FF"><strong>}</strong></font>

</pre>

There may be already existing libraries for this, but writing a simple one ourself is fun and good learning experience.

For example, in python, to get the UTF-16 code sequence for a unicode string, we can use this:

`<br />
str=u"സന്തോഷ്‌"<br />
print repr(str)<br />
`

This gives the following output

`<br />
u'\u0d38\u0d28\u0d4d\u0d24\u0d4b\u0d37\u0d4d'<br />
`

 [1]: http://zabeehkhan.blogspot.com
 [2]: http://dhvani.sourceforge.net
 [3]: http://www.cl.cam.ac.uk/~mgk25/unicode.html
 [4]: http://blogs.oreilly.com/digitalmedia/2005/11/using-c-intrinsic-functions-2.html