---
title: Hyphenation of Indian Languages in Webpages
author: Santhosh Thottingal
type: post
date: 2008-12-17T05:27:00+00:00
url: /blog/2008/12/16/hyphenation-of-indian-languages-in-webpages/
lj_itemid:
  - 60
lj_permalink:
  - http://santhoshtr.livejournal.com/15599.html
lj_current_location:
  - Banglore
categories:
  - Indic
  - Projects
tags:
  - hack
  - hyphenation
  - javascript
  - web

---
In my last blogpost I explained [hyphenation of Indian language text in openoffice][1]. In this blogpost I will explain how hyphenation can be done in webpages.

As I explained importance of hyphenation come into picture when we justify the text. The length of the lines are controlled by the parent tags&#8230;. Unicode had defined a special character called soft hyphen for hyphenation denoted by &shy; . In HTML, the plain hy­phen is rep­re­sent­ed by the &#8220;-&#8221; char­ac­ter (&#45; or&#x2D;). The soft hy­phen is rep­re­sent­ed by the char­ac­ter en­ti­ty ref­er­ence &shy; (&#173; or &#xAD;)

User agents-browsers can break the line whenever a soft hyphen is found. So if we have a javascript based implemenation, which insert the softhyphen in between the words based on language specific rules, we can achieve hyphenation in webpages too.

[Hyphenator][2] is a project which does exactly the same. _&#8220;Hyphenator.js brings client-side hyphenation of HTML-Documents on to every browser by inserting soft hyphens using hyphenation patterns and Frank M. Liangs hyphenation algorithm commonly known from LaTeX and Openoffice. &#8220;_

Hyphenator was not tested for any non-latin languages so far. I tried to add support for Indian languages and the result was satisfactory. I used the

same rules I defined for openoffice. Unlike latin languages, the number of hyphenation patterns for Indian languages is very less and the performance is good because of that.

I have added Malayalam, Tamil, Hindi, Oriya, Kannda, Telugu, Bengali, Gujarati and Panjabi support to it. [You can see a working example here][3]. (I wanted to embed one example here. But livejournal doesnot allow javascript inside blog body ). The column layout is done by CSS. Try resizing the browser windows and try a print preview too..

Don&#8217;t forget to read the source code of that page. It is very simple. If you want hyphenation in your webpage, all you need is to include the javascript as done in the example. We need to provide the lang attributes for nodes so that the required patterns for that language can be loaded. I placed the new language patterns temporarily in download area of SMC. I will ask the author of Hyphenator to include it in upstream itself. Code is [available here][4]

* * *

**Update(18-Dec-2008):**Thanks to Mathias Nater, author of hyphenator, the patterns were added to [upstream][5].</p>

 [1]: http://santhoshtr.livejournal.com/15266.html
 [2]: http://code.google.com/p/hyphenator/
 [3]: http://download.savannah.gnu.org/releases/smc/hyphenation/web/example.html
 [4]: http://download.savannah.gnu.org/releases/smc/hyphenation/web
 [5]: http://code.google.com/p/hyphenator