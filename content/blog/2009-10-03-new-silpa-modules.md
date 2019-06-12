---
title: Approximate Search, Sakavarsha and Katapayadi Number system
author: Santhosh Thottingal
type: post
date: -001-11-30T00:00:00+00:00
draft: true
url: /?p=229
categories:
  - Misc

---
There are a few applications added to [Silpa Project][1] recently

1. [Approximate Search][2] : Sometime back when I explained [indic soundex algorithm,][3] I have mentioned that a search implementation based on that is  required. I found that to get more results,  in addition to soundex approximation we need edit distance approximation too. Edit distance is the method to measure how many letters are differing between two words. And this is the basic principle in retrieving spelling candidates in spellcheck.  By mixing both written like(edit distance) and sounds like(soundex), we achieve an efficient aproximate string searching. This application is capable of cross language string search too. That means, you can search Hindi words in Malayalam text. If there is any Malayalam word, which is approximate transliteration of hindi word, or sounds alike the hindi words, it will be returned as an approximate match. The &#8220;written like&#8221; algorithm used here is a bigram average algorithm. The ratio of common bigrams in two strings and average number of bigrams will give a factor which is greater than zero and less than 1. Similarly the soundex algorithm also gives a weight. By selecting words which has comparison weight more than the threshold weight(which 0.6), we get the search results.

2. [Sakavarsha Calendar][4] : Conversion between Sakavarsha and Gregorian calendar. Other indian calendards are also planned to implement

3. [Katapayadi Number system][5] : [Katapayadi sankhya][6] is a simplification of [Aryabhata&#8217;s][7] [Sanskrit numerals][8], due probably to [Haridatta][9] from Kerala. In Malayalam it is also known as &#8216;Paralperu&#8217;. Same is used to name the Melakartha Raga names

 [1]: http://smc.org.in/silpa
 [2]: http://smc.org.in/silpa/ApproxSearch
 [3]: http://thottingal.in/blog/2009/07/26/indicsoundex/
 [4]: http://smc.org.in/silpa/Calendar
 [5]: http://smc.org.in/silpa/Katapayadi
 [6]: http://en.wikipedia.org/wiki/Katapayadi_sankhya
 [7]: http://en.wikipedia.org/wiki/Aryabhata
 [8]: http://en.wikipedia.org/wiki/Sanskrit_numerals
 [9]: http://www.google.com/search?hl=en&q=Haridatta&btnG=Google+Search