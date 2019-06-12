---
title: 'Cross Language Approximate Search on Indic Languages- A demo'
author: Santhosh Thottingal
type: post
date: 2011-04-03T11:27:39+00:00
url: /blog/2011/04/03/cross-language-approximate-search-on-indic-languages-a-demo/
categories:
  - Indic
  - Projects
tags:
  - algorithms
  - search
  - silpa
  - wikipedia

---
<p style="text-align: left;">
  A demo of cross language approximate search in Indic text:<br /> <a href="http://thottingal.in/images/silpaappoximatesearch-demo-1.png"><img class="aligncenter" src="http://thottingal.in/images/silpaappoximatesearch-demo-1.png" alt="click to enlarge" width="NaN" height="NaN" /></a><br /> The Malayalam word സാമ്പാര്‍ is compared against a paragraph from <a href="http://ml.wikipedia.org/wiki/Sambar">http://ml.wikipedia.org/wiki/Sambar</a>.<br /> In the bottom half, words marked in yellow color are search results.<br /> You can see that a Kannada word ಸಾಂಬಾರ್‍ is matched for Malayalam word. And that is why this is called cross-language.<br /> The inflections of the words സാമ്പാര്‍ &#8211; സാമ്പാറും, സാമ്പാറു etc are also found as results.<br /> This is the kind of search we need in Indic languages, not just the letter by letter comparison we do for English.
</p>

<p style="text-align: center;">
  Another example showing all inflection forms of the noun പാലക്കാട്, and the same word written in Tamil, Telugu, Hindi. The search shows the results in those languages too. &#8211; <a href="http://thottingal.in/images/silpaappoximatesearch-demo-2.png"><img class="aligncenter" src="http://thottingal.in/images/silpaappoximatesearch-demo-2.png" alt="click to enlarge" width="NaN" height="NaN" /></a>
</p>

You can try it here: <http://silpa.org.in/ApproxSearch>

This is a [Fuzzy string search][1] application. This application illustrates the combined use of [Edit distance][2] and [Indic Soundex][3] algorithm.

By mixing both written like(edit distance) and sounds like(soundex), we achieve an efficient aproximate string searching. This application is capable of cross language string search too. That means, you can search Hindi words in Malayalam text. If there is any Malayalam word, which is approximate transliteration of hindi word, or sounds alike the Hindi words, it will be returned as an approximate match. The &#8220;written like&#8221; algorithm used here is a bigram average algorithm. The ratio of common bigrams in two strings and average number of bigrams will give a factor which is greater than zero and less than 1. Similarly the soundex algorithm also gives a weight. By selecting words which has comparison weight more than the threshold weight(which 0.6), we get the search results.

 [1]: http://en.wikipedia.org/wiki/Fuzzy_string_searching
 [2]: http://en.wikipedia.org/wiki/Levenshtein_distance
 [3]: http://silpa.org.in/Soundex