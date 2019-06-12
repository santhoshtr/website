---
title: Indesign CC automatic hyphenation for Indian languages
author: Santhosh Thottingal
type: post
date: 2017-10-29T06:57:00+00:00
url: /blog/2017/10/29/indesign-cc-automatic-hyphenation-for-indian-languages/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"5f241c17be90";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:99:"https://medium.com/@sthottingal/indesign-cc-automatic-hyphenation-for-indian-languages-5f241c17be90";}'
categories:
  - Indic
  - Malayalam
  - Tutorial
tags:
  - hyphenation
  - indesign

---
More and more publishers are starting to use Indesign CC and Unicode. One of the many adavantages the publishers get with unicode and Indesign cc is automatic hyphenation. A few of my friends told me that they don&#8217;t know how to use hyphenation. Eventhough I never used Indesign before, I decided to figure out. In my Windows 10 virtual machine, I installed Indesign CC 2018.

Following is a tutorial on how to get perfect hyphenation for text in Indian languages in Indesign. I use Malayalam as example.

Indesign CC 2018 comes with Hunspell hyphenation dictionaries. These hyphenation dictionaries are written by me long time back. See <https://github.com/smc/hyphenation>

From menu Edit-> Preferences->Dictionary, set Language and Hyphenation as &#8220;Hunspell&#8221;

[<img class="aligncenter wp-image-1157 size-full" src="/wp-content/uploads/2017/10/Spectacle.C27633.png" alt="" width="748" height="746" srcset="/wp-content/uploads/2017/10/Spectacle.C27633.png 748w, /wp-content/uploads/2017/10/Spectacle.C27633-150x150.png 150w, /wp-content/uploads/2017/10/Spectacle.C27633-300x300.png 300w" sizes="(max-width: 748px) 100vw, 748px" />][1]

Create a text frame and add content to it. Make sure that the composer is set as Adobe World-Ready paragraph composer. You can access it from Paragraph settings as shown below. Without this settings, the Indic text won&#8217;t render correctly.

[<img class="aligncenter wp-image-1159 size-full" src="/wp-content/uploads/2017/10/Spectacle.A27633-1.png" alt="" width="617" height="263" srcset="/wp-content/uploads/2017/10/Spectacle.A27633-1.png 617w, /wp-content/uploads/2017/10/Spectacle.A27633-1-300x128.png 300w" sizes="(max-width: 617px) 100vw, 617px" />][2]

Tick the &#8220;Hyphenation&#8221; from the paragraph settings. Select an appropriate font for the content. Choose the language of the content as Malayalam or other Indic language you are working on. See screenshot below. Justify the content.

[<img class="aligncenter wp-image-1158 size-large" src="/wp-content/uploads/2017/10/Spectacle.A27633-1024x528.png" alt="" width="840" height="433" srcset="/wp-content/uploads/2017/10/Spectacle.A27633-1024x528.png 1024w, /wp-content/uploads/2017/10/Spectacle.A27633-300x155.png 300w, /wp-content/uploads/2017/10/Spectacle.A27633-768x396.png 768w, /wp-content/uploads/2017/10/Spectacle.A27633-1200x619.png 1200w, /wp-content/uploads/2017/10/Spectacle.A27633.png 1598w" sizes="(max-width: 840px) 100vw, 840px" />][3]

The content will get automatically hyphenated. If you resize the column width or insert more content, text will get automatically hyphenated.

The exported PDF will look like:

[<img class="aligncenter wp-image-1160 size-full" src="/wp-content/uploads/2017/10/Spectacle.s27633.png" alt="" width="544" height="749" srcset="/wp-content/uploads/2017/10/Spectacle.s27633.png 544w, /wp-content/uploads/2017/10/Spectacle.s27633-218x300.png 218w" sizes="(max-width: 544px) 100vw, 544px" />][4]

You can see the hyphenation rules in Installation folder: C:\Program Files\Adobe\Adobe InDesign CC 2018\Resources\Dictionaries\LILO\Linguistics\Providers\Plugins2\AdobeHunspellPlugin\Dictionaries

Patterns are available for Assamese, Bengali, Panjabi, Gujarati, Assamese, Marathi, Tamil, Telugu, Odia, Kannada and Malayalam.

I have not tried older Indesign versions, so I don&#8217;t know from which version this feature is available. But I don&#8217;t see a reason for not using latest version either.

 [1]: /wp-content/uploads/2017/10/Spectacle.C27633.png
 [2]: /wp-content/uploads/2017/10/Spectacle.A27633-1.png
 [3]: /wp-content/uploads/2017/10/Spectacle.A27633.png
 [4]: /wp-content/uploads/2017/10/Spectacle.s27633.png