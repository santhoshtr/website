---
title: Hacking the GLMatrix screensaver
author: Santhosh Thottingal
type: post
date: 2007-11-06T05:51:00+00:00
url: /blog/2007/11/05/hacking-the-glmatrix-screensaver/
lj_itemid:
  - 27
lj_permalink:
  - http://santhoshtr.livejournal.com/7078.html
categories:
  - Misc
tags:
  - hack
  - Indic
  - matrix

---
I am sure that many of you are fans of &#8220;The Matrix&#8221; series. And many of you might be using the Matrix Screensavers in your system.

But did you ever think like this: &#8220;Why cant that glowing green glyphs that rains in black screen be Indic ?&#8221;

Well, Not a bad Idea. Right?

Ok, Shall we try to hack the glmatrix screen saver? Here you go!

1. Download the xscreensaver sourcecode from http://www.jwz.org/xscreensaver/download.html

2. Configure and make it(just to ensure that you have required libraries in your machine)

3. Goto hacks/images folder of that source code. You will see matrix3.xpm file there. Backup it , it is valuable:)

4. I am going to use Hindi glyphs(You can use the glyphs from your mother tongue).Now we need to create one xpm image file with same dimension and size of the original one. Write one html page with table and arrange the alphabets there. Note the table should be a 512*598 pixels 13 rows, 16 columns.

5. Refer the following Hindi table. Take a screenshot of the html and get the table alone. You may use the source code of the below table for your language.

<font color="Green" size="5"></p>

<table align="center"  bgcolor="black"  border="0" width="512px" height="598px">
  <tr>
    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
      <b><font color="Green" size="5" size="5"size="5"size="20"> </font> </td>

      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
        <b><font color="Green" size="5">!</font> </td>

        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
          <b><font color="Green" size="5">@</font> </td>

          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
            <b><font color="Green" size="5">#</font> </td>

            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
              <b><font color="Green" size="5">$</font> </td>

              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                <b><font color="Green" size="5">%</font> </td>

                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                  <b><font color="Green" size="5">^</font> </td>

                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                    <b><font color="Green" size="5">&</font> </td>

                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                      <b><font color="Green" size="5">*</font> </td>

                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                        <b><font color="Green" size="5">(</font> </td>

                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                          <b><font color="Green" size="5">)</font> </td>

                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                            <b><font color="Green" size="5">_</font> </td>

                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                              <b><font color="Green" size="5">+</font> </td>

                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                <b><font color="Green" size="5">,</font> </td>

                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                  <b><font color="Green" size="5">/</font> </td>

                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                    <b><font color="Green" size="5">.</font> </td> </tr>

                                    <tr>
                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                        <b><font color="Green" size="5" >अ</font> </td>

                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                          <b><font color="Green" size="5">ॐ</font> </td>

                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                            <b><font color="Green" size="5">इ</font> </td>

                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                              <b><font color="Green" size="5">ई </font> </td>

                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                <b><font color="Green" size="5">उ</font> </td>

                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                  <b><font color="Green" size="5">ऊ</font> </td>

                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                    <b><font color="Green" size="5">ऋ </font> </td>

                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                      <b><font color="Green" size="5">ऍ</font> </td>

                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                        <b><font color="Green" size="5">ऎ</font> </td>

                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                          <b><font color="Green" size="5">ऍ</font> </td>

                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                            <b><font color="Green" size="5">ओ</font> </td>

                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                              <b><font color="Green" size="5">औ</font> </td>

                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                <b><font color="Green" size="5">ओ</font> </td>

                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                  <b><font color="Green" size="5">त</font> </td>

                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                    <b><font color="Green" size="5">य</font> </td>

                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                      <b><font color="Green" size="5">क</font> </td> </tr>

                                                                      <tr>
                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                          <b><font color="Green" size="5">कु</font> </td>

                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                            <b><font color="Green" size="5">नु</font> </td>

                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                              <b><font color="Green" size="5">रु</font> </td>

                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                <b><font color="Green" size="5">प</font> </td>

                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                  <b><font color="Green" size="5">न</font> </td>

                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                    <b><font color="Green" size="5">भ</font> </td>

                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                      <b><font color="Green" size="5">ह</font> </td>

                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                        <b><font color="Green" size="5">ज</font> </td>

                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                          <b><font color="Green" size="5">प</font> </td>

                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                            <b><font color="Green" size="5">र</font> </td>

                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                              <b><font color="Green" size="5">चु</font> </td>

                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                <b><font color="Green" size="5">स</font> </td>

                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                  <b><font color="Green" size="5">पु</font> </td>

                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                    <b><font color="Green" size="5">ध</font> </td>

                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                      <b><font color="Green" size="5">य</font> </td>

                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                        <b><font color="Green" size="5">म</font> </td> </tr>

                                                                                                        <tr>
                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                            <b><font color="Green" size="5">न</font> </td>

                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                              <b><font color="Green" size="5">ल</font> </td>

                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                <b><font color="Green" size="5">र‍</font> </td>

                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                  <b><font color="Green" size="5">अ</font> </td>

                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                    <b><font color="Green" size="5">इ</font> </td>

                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                      <b><font color="Green" size="5">उ</font> </td>

                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                        <b><font color="Green" size="5">ल</font> </td>

                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                          <b><font color="Green" size="5">र</font> </td>

                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                            <b><font color="Green" size="5">म</font> </td>

                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                              <b><font color="Green" size="5">व</font> </td>

                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                <b><font color="Green" size="5">कू</font> </td>

                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                  <b><font color="Green" size="5">ऋ</font> </td>

                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                    <b><font color="Green" size="5">उ</font> </td>

                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                      <b><font color="Green" size="5">आ</font> </td>

                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                        <b><font color="Green" size="5">य</font> </td>

                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                          <b><font color="Green" size="5">न</font> </td> </tr>

                                                                                                                                          <tr>
                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                              <b><font color="Green" size="5">न</font> </td>

                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                <b><font color="Green" size="5">ज</font> </td>

                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                  <b><font color="Green" size="5">त</font> </td>

                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                    <b><font color="Green" size="5">ग</font> </td>

                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                      <b><font color="Green" size="5">धा</font> </td>

                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                        <b><font color="Green" size="5">न</font> </td>

                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                          <b><font color="Green" size="5">अ</font> </td>

                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                            <b><font color="Green" size="5">त</font> </td>

                                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                              <b><font color="Green" size="5">०</font> </td>

                                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                <b><font color="Green" size="5">४</font> </td>

                                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                  <b><font color="Green" size="5">क</font> </td>

                                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                    <b><font color="Green" size="5">त</font> </td>

                                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                      <b><font color="Green" size="5">झ</font> </td>

                                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                        <b><font color="Green" size="5">ध</font> </td>

                                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                          <b><font color="Green" size="5">ऴ</font> </td>

                                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                            <b><font color="Green" size="5">क</font> </td> </tr>

                                                                                                                                                                            <tr>
                                                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                <b><font color="Green" size="5">२</font> </td>

                                                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                  <b><font color="Green" size="5">क</font> </td>

                                                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                    <b><font color="Green" size="5">म</font> </td>

                                                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                      <b><font color="Green" size="5">क्ष</font> </td>

                                                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                        <b><font color="Green" size="5">छ</font> </td>

                                                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                          <b><font color="Green" size="5">क</font> </td>

                                                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                            <b><font color="Green" size="5">छ</font> </td>

                                                                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                              <b><font color="Green" size="5">क</font> </td>

                                                                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                <b><font color="Green" size="5">@</font> </td>

                                                                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                  <b><font color="Green" size="5">(</font> </td>

                                                                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                    <b><font color="Green" size="5">)</font> </td>

                                                                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                      <b><font color="Green" size="5">_</font> </td>

                                                                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                        <b><font color="Green" size="5">+</font> </td>

                                                                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                          <b><font color="Green" size="5">,</font> </td>

                                                                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                            <b><font color="Green" size="5">/</font> </td>

                                                                                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                              <b><font color="Green" size="5">.</font> </td> </tr>

                                                                                                                                                                                                              <tr>
                                                                                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                  <b><font color="Green" size="5">*</font> </td>

                                                                                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                    <b><font color="Green" size="5">!</font> </td>

                                                                                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                      <b><font color="Green" size="5">@</font> </td>

                                                                                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                        <b><font color="Green" size="5">#</font> </td>

                                                                                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                          <b><font color="Green" size="5">$</font> </td>

                                                                                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                            <b><font color="Green" size="5">​​​​~</font> </td>

                                                                                                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                              <b><font color="Green" size="5">÷</font> </td>

                                                                                                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                <b><font color="Green" size="5">ॐ</font> </td>

                                                                                                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                  <b><font color="Green" size="5">६</font> </td>

                                                                                                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                    <b><font color="Green" size="5">७</font> </td>

                                                                                                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                      <b><font color="Green" size="5">८</font> </td>

                                                                                                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                        <b><font color="Green" size="5">¾</font> </td>

                                                                                                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                          <b><font color="Green" size="5">¶</font> </td>

                                                                                                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                            <b><font color="Green" size="5">,</font> </td>

                                                                                                                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                              <b><font color="Green" size="5">¼</font> </td>

                                                                                                                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                <b><font color="Green" size="5">½</font> </td> </tr>

                                                                                                                                                                                                                                                <tr>
                                                                                                                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                    <b><font color="Green" size="5">१</font> </td>

                                                                                                                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                      <b><font color="Green" size="5">२</font> </td>

                                                                                                                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                        <b><font color="Green" size="5">३</font> </td>

                                                                                                                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                          <b><font color="Green" size="5">४</font> </td>

                                                                                                                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                            <b><font color="Green" size="5">५</font> </td>

                                                                                                                                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                              <b><font color="Green" size="5">ओ</font> </td>

                                                                                                                                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                <b><font color="Green" size="5">आ</font> </td>

                                                                                                                                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                  <b><font color="Green" size="5">छ</font> </td>

                                                                                                                                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                    <b><font color="Green" size="5">य़</font> </td>

                                                                                                                                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                      <b><font color="Green" size="5">फ</font> </td>

                                                                                                                                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                        <b><font color="Green" size="5">थ</font> </td>

                                                                                                                                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                          <b><font color="Green" size="5">क्ष</font> </td>

                                                                                                                                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                            <b><font color="Green" size="5">च</font> </td>

                                                                                                                                                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                              <b><font color="Green" size="5">क</font> </td>

                                                                                                                                                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                <b><font color="Green" size="5">पो</font> </td>

                                                                                                                                                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                  <b><font color="Green" size="5">नु</font> </td> </tr>

                                                                                                                                                                                                                                                                                  <tr>
                                                                                                                                                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                      <b><font color="Green" size="5">क</font> </td>

                                                                                                                                                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                        <b><font color="Green" size="5">त</font> </td>

                                                                                                                                                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                          <b><font color="Green" size="5">त</font> </td>

                                                                                                                                                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                            <b><font color="Green" size="5">रू</font> </td>

                                                                                                                                                                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                              <b><font color="Green" size="5">भू</font> </td>

                                                                                                                                                                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                <b><font color="Green" size="5">र</font> </td>

                                                                                                                                                                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                  <b><font color="Green" size="5">जुु</font> </td>

                                                                                                                                                                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                    <b><font color="Green" size="5">गुु</font> </td>

                                                                                                                                                                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                      <b><font color="Green" size="5">सु</font> </td>

                                                                                                                                                                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                        <b><font color="Green" size="5">मु</font> </td>

                                                                                                                                                                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                          <b><font color="Green" size="5">नि</font> </td>

                                                                                                                                                                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                            <b><font color="Green" size="5">षि</font> </td>

                                                                                                                                                                                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                              <b><font color="Green" size="5">वी</font> </td>

                                                                                                                                                                                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                <b><font color="Green" size="5">उ</font> </td>

                                                                                                                                                                                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                  <b><font color="Green" size="5">ऋ</font> </td>

                                                                                                                                                                                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                    <b><font color="Green" size="5">त</font> </td> </tr>

                                                                                                                                                                                                                                                                                                                    <tr>
                                                                                                                                                                                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                        <b><font color="Green" size="5" >अ</font> </td>

                                                                                                                                                                                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                          <b><font color="Green" size="5">आ</font> </td>

                                                                                                                                                                                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                            <b><font color="Green" size="5">इ</font> </td>

                                                                                                                                                                                                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                              <b><font color="Green" size="5">ई</font> </td>

                                                                                                                                                                                                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                <b><font color="Green" size="5">उ</font> </td>

                                                                                                                                                                                                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                  <b><font color="Green" size="5">ऊ</font> </td>

                                                                                                                                                                                                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                    <b><font color="Green" size="5">ऋ </font> </td>

                                                                                                                                                                                                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                      <b><font color="Green" size="5">ऍ</font> </td>

                                                                                                                                                                                                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                        <b><font color="Green" size="5">ऎ</font> </td>

                                                                                                                                                                                                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                          <b><font color="Green" size="5">ऍ</font> </td>

                                                                                                                                                                                                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                            <b><font color="Green" size="5">ओ</font> </td>

                                                                                                                                                                                                                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                              <b><font color="Green" size="5">औ</font> </td>

                                                                                                                                                                                                                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                <b><font color="Green" size="5">ओ</font> </td>

                                                                                                                                                                                                                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                  <b><font color="Green" size="5">अ</font> </td>

                                                                                                                                                                                                                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                    <b><font color="Green" size="5">त</font> </td>

                                                                                                                                                                                                                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                      <b><font color="Green" size="5">स</font> </td> </tr>

                                                                                                                                                                                                                                                                                                                                                      <tr>
                                                                                                                                                                                                                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                          <b><font color="Green" size="5">ह</font> </td>

                                                                                                                                                                                                                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                            <b><font color="Green" size="5">ळ </font> </td>

                                                                                                                                                                                                                                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                              <b><font color="Green" size="5">क्ष</font> </td>

                                                                                                                                                                                                                                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                <b><font color="Green" size="5">र</font> </td>

                                                                                                                                                                                                                                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                  <b><font color="Green" size="5">औ </font> </td>

                                                                                                                                                                                                                                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                    <b><font color="Green" size="5">ठ</font> </td>

                                                                                                                                                                                                                                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                      <b><font color="Green" size="5">ळ‍</font> </td>

                                                                                                                                                                                                                                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                        <b><font color="Green" size="5">ण</font> </td>

                                                                                                                                                                                                                                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                          <b><font color="Green" size="5">क</font> </td>

                                                                                                                                                                                                                                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                            <b><font color="Green" size="5">ॐ</font> </td>

                                                                                                                                                                                                                                                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                              <b><font color="Green" size="5">ट</font> </td>

                                                                                                                                                                                                                                                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                <b><font color="Green" size="5">ब</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                  <b><font color="Green" size="5">फ</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                    <b><font color="Green" size="5">३</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                      <b><font color="Green" size="5">५</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                        <b><font color="Green" size="5">ॐ</font> </td> </tr>

                                                                                                                                                                                                                                                                                                                                                                                        <tr>
                                                                                                                                                                                                                                                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                            <b><font color="Green" size="5">क</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                              <b><font color="Green" size="5">ख </font> </td>

                                                                                                                                                                                                                                                                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                <b><font color="Green" size="5">ग</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                  <b><font color="Green" size="5">घ</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                    <b><font color="Green" size="5">ध</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                      <b><font color="Green" size="5">च</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                        <b><font color="Green" size="5">छ</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                          <b><font color="Green" size="5">ज</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                            <b><font color="Green" size="5">झ</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                              <b><font color="Green" size="5">ण</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                <b><font color="Green" size="5">&</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                  <b><font color="Green" size="5">ऍ</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                    <b><font color="Green" size="5">ऑ</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                      <b><font color="Green" size="5">ज्ञ</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                        <b><font color="Green" size="5">श्र</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                          <b><font color="Green" size="5">ऎ</font> </td> </tr>

                                                                                                                                                                                                                                                                                                                                                                                                                          <tr>
                                                                                                                                                                                                                                                                                                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                              <b><font color="Green" size="5">थ</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                                <b><font color="Green" size="5">द</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                                  <b><font color="Green" size="5">ध </font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                                    <b><font color="Green" size="5">ण </font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                                      <b><font color="Green" size="5">प </font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                                        <b><font color="Green" size="5">क </font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                                          <b><font color="Green" size="5">ब </font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                                            <b><font color="Green" size="5">भ</font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                            <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                                              <b><font color="Green" size="5">म </font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                              <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                <b><font color="Green" size="5">य </font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                  <b><font color="Green" size="5">र </font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                  <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                    <b><font color="Green" size="5">ल </font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                    <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                      <b><font color="Green" size="5">व </font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                      <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                        <b><font color="Green" size="5">श </font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                        <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                          <b><font color="Green" size="5">ङ </font> </td>

                                                                                                                                                                                                                                                                                                                                                                                                                                                          <td width="6.25%" height="7.69%" bgcolor="black" align="center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                            <b><font color="Green" size="5">ष </font> </td> </tr> </tbody> </table>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                              </font><br /> 6. Open GIMP and create a new image with image with 512*598 pixel size. paste the table screenshot on the blank image. You can save it as matrix3.xpm file.
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                              7. From my experiments I found that the image should be the mirror copy of the the table image.So flip the image horizontally to get the mirror image and save
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                              8. You can see that the size of the image around 601 KB. But the actual image should be around 301 KB file. Go to Layers-> Colours->posterize. And give the number of colours as 91 (some value around 90). Save it.
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                              9. Now you have the matrix glyph image ready.
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                              10. goto hacks/glx folder. Apply the below patch to glmatrix.c
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            <blockquote>
                                                                                                                                                                                                                                                                                                                                                                                                                                                              <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                1079c1079<br /> < XSCREENSAVER_MODULE_2 ("GLMatrix", glmatrix, matrix) --- > XSCREENSAVER_MODULE_2 (&#8220;Hindi Matrix&#8221;, glmatrix, matrix)
                                                                                                                                                                                                                                                                                                                                                                                                                                                              </p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </blockquote>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                              11. Recompile it! Done? No, wait. We need to add this as a screensaver to Gnome-screensaver<br /> 12. Create one Hindi Matrix.desktop file in usr/share/applications/screensavers folder. Here is my file
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            <blockquote>
                                                                                                                                                                                                                                                                                                                                                                                                                                                              <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                [Desktop Entry]<br /> Encoding=UTF-8<br /> Name=Hindi Matrix<br /> Comment=Draws 3D dropping characters similar to what is seen in the title sequence of &#8220;The Matrix&#8221;, written by Jamie Zawinski. This is a Hindi glyph version written by Santhosh Thottingal.<br /> TryExec=himatrix<br /> Exec=himatrix -root -speed 5.0 -density 50<br /> StartupNotify=false<br /> Terminal=false<br /> Type=Application<br /> Categories=Screensaver<br /> X-Ubuntu-Gettext-Domain=xscreensaver
                                                                                                                                                                                                                                                                                                                                                                                                                                                              </p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </blockquote>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                              13. Copy the glmatrix binary to usr/lib/xscreensaver/himatrix.
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                              14. Now go to System-> preferences -> Screensave. Your screensaver should be listed there. See my screenshot
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                              <a href="http://pics.livejournal.com/santhoshtr/pic/0000b173/"><img src="http://pics.livejournal.com/santhoshtr/pic/0000b173" width="75%" height="75%" border='0' /></a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                              You can download Hindi and Malayalam matrix deb package from <a href="http://download.savannah.nongnu.org/releases/smc/Screensaver">here </a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            <p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                              Happy Hacking!!!
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </p>