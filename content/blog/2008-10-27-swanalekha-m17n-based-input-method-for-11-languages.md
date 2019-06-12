---
title: Swanalekha M17N based Input Method for 11 Languages
author: Santhosh Thottingal
type: post
date: 2008-10-27T19:57:00+00:00
url: /blog/2008/10/27/swanalekha-m17n-based-input-method-for-11-languages/
lj_itemid:
  - 51
lj_permalink:
  - http://santhoshtr.livejournal.com/13149.html
categories:
  - Indic
  - Projects
tags:
  - scim swanalekha input_methods

---
Swanalekha is an Input method originally designed for Malayalam. It is works with [scim][1]. as well as [m17n][2]. The input method scheme is transliteration based and it has a unique feature of candidate list menu(which I will explain shortly). Now I have extended it to 10 other Indian languages.

Before explaining how swanalekha is different from other phonetic/transliteration based input methods, let me explain some of the characteristics of transliteration. Transliteration based input methods were following a strict one to one mapping from english letters to another Indian language. For eg: The ka=क ,pa = प , ti = टि etc.. when you write bharath, you will easily transliterate it to hindi as भारत. But for a rule based transliteration system it is भरत unless the english is bhaarath. Some times it may be Bhaarat too.. See another example: Kartik. it should be transliterated to കാര്‍ത്തിക് in Malayalam. So some people write it as Karthik, and some others write it as karthick too. All these are based on personal preferences. But when it use transliteration based input methods, people find difficulty with using a strict rule based writing method. There they have to write kaa for കാ or કા or கா or কা. Users like to get what they mean without the difficulty following the strict rules of transliteration. In an Intelligent transliteration based system when somebody write linux they should be able to map it to लिनक्स . Some times a choice to select लैनक्स is also preferable. This is what [google transliteration][3] does. No rules, no learning.. just type in english&#8230;

Google&#8217;s Transliteration is based on machine learning and statistical approach. And it works only when we are online and only in webpages. Now I will explain how swanalekha tries to provide a solution for the above problem.

For each english letter or pattern , we saw that there are multiple choices . ka can be क, का . ga can be ക, ഗ, ഖ, ഘ, ഗാ in Malayalam. sa can be स, श etc.. So swanalekha provides all these candidates as a suggestion menu under the cursor while typing. See the below image of Hindi swanalekha version.

[<img src="http://pics.livejournal.com/santhoshtr/pic/0000kfp7/s320x240" width="223" height="240" border='0' />][4]

The differences between google transliteration and swanalekha are:

a) Google transliterate is web based and works in webpages when you are online. Swanalekha works in all applications in your GNU/Linux desktop such as gedit, openoffice, kwrite, firefox&#8230;

b) Google transliterate gives suggestions as words, but swanalekha works in letter level (not exactly a single letter. but like का, કા etc. )

c) Google transliterate is machine learning based. But swanalekha is rule based with &#8216;one to many&#8217; pattern mapping in m17n

The candidates are mapped to English string patterns inside the source code- the m17n input method files &#8211; .mim files.

You can download the .mim files from [here][5]. Icons for each language is also provided. You can see .mim files for Malayalam, Hindi, Telugu, Oriya, Tamil, Bengali, Assamese, Panjabi, Gujarati, Marathi and Kannada. Note that other than Malayalam all other source files are not complete. They are generated using a small python script from Malayalam mapping file. They are just templates with approximate mapping. And should be corrected and modified by a person who know that language very well. Malayalam mapping is tested and it is already packaged for Fedora and already present in m17n upstream as part of m17n-contrib package. It is widely used by GNU/Linux users in Kerala too.

Candidate selection based Input methods are very common in CJK(Chinese, Japanese, Korean) languages. Swanalekha is first implementation of candidate list outside CJK using scim and m17n.

So if anybody is interested in testing and correcting the mappings for your language, please continue reading 🙂

How to Install :

download the tar ball containing all .mim files and icons from [here][5]. Extract it and copy all .mim to /usr/share/m17n

sudo cp *.mim /usr/share/m17n

sudo cp *.png /usr/share/m17n/icons

Note that you need to install scim-m17n before doing this. Most of the distros will have it pre installed

After copying these , restart your X by pressing alt+ctrl+del or do a logout+login

Open gedit, select input method as scim, and select your language from the scim menu. Start typing

How to correct the maps?

Open the .mim file for your language using any text editor.

You will see lines in lisp syntax. No, You need not know Lisp 🙂

For example in hi-swanalekha.mim, you will see a line like this

(&#8220;sa&#8221; ((&#8220;स&#8221;) (&#8220;श&#8221;)))

This means, for &#8216;sa&#8217;, show स and श as candidates with स as default option. If you want to add सा as third option just change the line like this

(&#8220;sa&#8221; ((&#8220;स&#8221;) (&#8220;श&#8221;) (&#8220;सा&#8221;)))

If any pattern is not found in .mim file just add one more line there following the above syntax. Only thing is you should be careful about opening and closing parenthesis since it is Lisp.

Once you are done, install it by just copying it to /usr/share/m17n folder. Restarting X is required to restart scim. or even a &#8216;killall scim&#8217; will do sometimes

Don&#8217;t change any other code(code for candidate selection using up/down arrow, and using number keys) unless you know what you are doing.

Let me know if you face any issues..

Happy Hacking and Happy Deepavali !!!

 [1]: http://sourceforge.net/projects/scim
 [2]: http://m17n.org/
 [3]: http://www.google.co.in/transliterate/indic
 [4]: http://pics.livejournal.com/santhoshtr/pic/0000kfp7/
 [5]: http://download.savannah.gnu.org/releases/smc/Swanalekha/m17n/swanalekha-m17n-04.tar.gz