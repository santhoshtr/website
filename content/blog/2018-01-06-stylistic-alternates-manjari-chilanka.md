---
title: Stylistic Alternates for ച്ച, ള്ള in Manjari and Chilanka fonts
author: Santhosh Thottingal
type: post
date: 2018-01-06T09:35:26+00:00
url: /blog/2018/01/06/stylistic-alternates-manjari-chilanka/
featured_image: /wp-content/uploads/2018/01/font-style-variants-demo.gif
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"13be1483f19d";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:155:"https://medium.com/@sthottingal/stylistic-alternates-for-%E0%B4%9A%E0%B5%8D%E0%B4%9A-%E0%B4%B3%E0%B5%8D%E0%B4%B3-in-manjari-and-chilanka-fonts-13be1483f19d";}'
categories:
  - Fonts
  - Projects
  - SMC
tags:
  - fonts
  - inkscape
  - libreoffice
  - Manjari
  - xetex

---
The ligatures for the Malayalam conjuncts ച്ച, ള്ള have less popular variants as shown below

[<img class="aligncenter size-full wp-image-1264" src="/wp-content/uploads/2018/01/Spectacle.C23916.png" alt="" width="362" height="208" srcset="/wp-content/uploads/2018/01/Spectacle.C23916.png 362w, /wp-content/uploads/2018/01/Spectacle.C23916-300x172.png 300w" sizes="(max-width: 362px) 100vw, 362px" />][1]The second form is not seen in print but often in handwritten Malayalam. I have seen it a lot in bus boards especially at Thiruvananthapuram. There are no digital typefaces with the second style, except the Chilanka font I designed. It uses the second variant of ച്ച. I got lot of appreciation for that style variant, but also recieved request for the first form of ച്ച. I had a private copy of Chilanka with that variant and had given to whoever requested. I also recieved some requests for the second style of ള്ള. For the Manjari font too, I recieved requests for second variant.

Today I am announcing the new version of Manjary and Chilanka font, with these two forms as optional variants without the need for a different copy of a font. In a single font, you will get both these variants using the [Opentype stylistic alternatives feature][2].

The default styles of ച്ച and ള്ള are not changed in new version. The fonts comes with an option to chose a different form.

[<img class="aligncenter size-full wp-image-1269" src="/wp-content/uploads/2018/01/font-style-variants-demo.gif" alt="" width="600" height="339" />][3]

## Choosing the style for webfonts using CSS

Use the font-feature-settings CSS style to choose a style. For the element or class in the html, use it as follows:

For style 1:

<pre>font-feature-settings: "salt" 1;</pre>

For style 2:

<pre>font-feature-settings: "salt" 2;</pre>

## Choosing the style variant in LibreOffice

In the place of the font name in font selector, append :salt=1 for first style, :salt=2 for second style. So you need to give **Manjari Regular:salt=2** as the font name for example to get second style.

[<img class="aligncenter size-full wp-image-1272" src="/wp-content/uploads/2018/01/Spectacle.F23916.png" alt="" width="684" height="317" srcset="/wp-content/uploads/2018/01/Spectacle.F23916.png 684w, /wp-content/uploads/2018/01/Spectacle.F23916-300x139.png 300w" sizes="(max-width: 684px) 100vw, 684px" />][4]

## Choosing the style variant in XeLaTeX

fontspec [allows to choose alterate style variants][5]. Use Alternate=N syntax. Note that N starts from 0. So for style1, use Alternate=0 and for style2 use Alternate=2. [Refer section 2.8.3 of fontspec documentation.][6]

<pre>\documentclass[11pt]{article}
\usepackage{polyglossia}
\newfontfamily{\manjari}[Script=Malayalam]{Manjari}
\begin{document}

\manjari{\addfontfeature{Alternate=1}കാച്ചാണി, വെള്ളയമ്പലം}

\end{document}
</pre>

This will produce the following rendering:

[<img class="size-full wp-image-1275 aligncenter" src="/wp-content/uploads/2018/01/Spectacle.q23916.png" alt="" width="377" height="190" srcset="/wp-content/uploads/2018/01/Spectacle.q23916.png 377w, /wp-content/uploads/2018/01/Spectacle.q23916-300x151.png 300w" sizes="(max-width: 377px) 100vw, 377px" />][7]

## Choosing the style variant in Inkscape

Inkscape font selection dialog has a [feature to chose font style variants][8]. It uses the property values of CSS font-feature-settng.

[<img class="aligncenter size-full wp-image-1279" src="/wp-content/uploads/2018/01/Spectacle.b23916.png" alt="" width="641" height="422" srcset="/wp-content/uploads/2018/01/Spectacle.b23916.png 641w, /wp-content/uploads/2018/01/Spectacle.b23916-300x198.png 300w" sizes="(max-width: 641px) 100vw, 641px" />][9]

In Adobe, Indesign, selecting the ligature will give stylistic alternative(s) if any to choose.

## Updated fonts

Updated fonts are available in SMC&#8217;s font download microsite <https://smc.org.in/fonts>

  * Manjari 1.4 source: <https://gitlab.com/smc/manjari/tags/Version1.4>
  * Chilanka 1.3 source: <https://gitlab.com/smc/chilanka/tags/Version1.3>

 [1]: /wp-content/uploads/2018/01/Spectacle.C23916.png
 [2]: https://en.wikipedia.org/wiki/List_of_typographic_features#Ligation_and_alternate_forms_features_intended_for_all_scripts
 [3]: /wp-content/uploads/2018/01/font-style-variants-demo.gif
 [4]: /wp-content/uploads/2018/01/Spectacle.F23916.png
 [5]: http://nitens.org/taraborelli/TeXOpenType
 [6]: http://ctan.imsc.res.in/macros/xetex/latex/fontspec/fontspec.pdf
 [7]: /wp-content/uploads/2018/01/Spectacle.q23916.png
 [8]: http://tavmjong.free.fr/blog/?p=1442
 [9]: /wp-content/uploads/2018/01/Spectacle.b23916.png