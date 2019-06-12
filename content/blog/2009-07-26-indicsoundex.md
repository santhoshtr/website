---
title: Phonetic Comparison Algorithm for Indian Languages
author: Santhosh Thottingal
type: post
date: 2009-07-26T11:14:08+00:00
url: /blog/2009/07/26/indicsoundex/
categories:
  - Indic
tags:
  - soundex

---
<p style="text-align: justify;">
  <a href="http://en.wikipedia.org/wiki/Soundex">Soundex</a> is a phonetic indexing algorithm. It is used to search/retrieve words having similar pronunciation but slightly different spelling. Soundex was developed by Robert C. Russell and Margaret K. Odell. A variation called American Soundex was used in the 1930s for a retrospective analysis of the US censuses from 1890 through 1920. It is also described in <a title="Donald Knuth" href="http://en.wikipedia.org/wiki/Donald_Knuth">Donald Knuth&#8217;s</a> <em><a title="The Art of Computer Programming" href="http://en.wikipedia.org/wiki/The_Art_of_Computer_Programming">The Art of Computer Programming</a></em>. The <a title="National Archives and Records Administration" href="http://en.wikipedia.org/wiki/National_Archives_and_Records_Administration">National Archives and Records Administration</a> (NARA) maintains the current rule set for the official implementation of Soundex used by the U.S. Government.
</p>

The soundex code for a word is an english alphabet followed by a number of digits. The algorithm is explained  with examples [here][1]

<p style="text-align: justify;">
  By this algorithm, if my name is written as Santhosh , Santosh , Santhos or Santos , the soundex code remains same and it is <strong>S532 </strong>
</p>

<p style="text-align: justify;">
  Soundex had many limitations and sometimes creates <a href="http://en.wikipedia.org/wiki/Type_I_and_type_II_errors">false positive </a>or false negative errors<strong>. </strong>There are variants for soundex and one important variant is <a href="http://en.wikipedia.org/wiki/Metaphone">Metaphone alogirthm </a>by <a href="http://en.wikipedia.org/wiki/Lawrence_Philips">Lawrence Philip</a> . Metaphone have another improved version called <a href="http://en.wikipedia.org/wiki/Double_Metaphone">Double Metaphone.</a>
</p>

<p style="text-align: justify;">
  Well,  it works fine, but only for English. Just like our languages also have varying spelling. But more than spelling, in India , we have another issue to be addressed: Words(often nouns) getting transliterated among Indian Languages. Let me give some examples: In railway reservation chart, your name will be written in English as well as in Hindi. You are from Kerala(or some other state) and your name is transliterated to some other language. The only thing remain same is its pronunciation.  It will be great if we can search on this data based on pronunciation, right?
</p>

<p style="text-align: justify;">
  We see a lot of discussions happening around e-governance and other computerization projects such as national UID etc now a days. Projects that handle Indic text heavily will require efficient search and string processing algorithms.
</p>

<p style="text-align: justify;">
  You got a list of names in Bengali and you dont know Bengali but you know Malayalam. Obviously you can&#8217;t search on Bengali text using Malayalam. But can&#8217;t we develop such algorithm?
</p>

<p style="text-align: justify;">
  So our requirement is this:
</p>

  1. <div style="text-align: justify;">
      Language Independent Search on Indic text.
    </div>

  2. <div style="text-align: justify;">
      Comparison should be based on pronunciation
    </div>

  3. <div style="text-align: justify;">
      Should be tolerant to spelling variation
    </div>

<p style="text-align: justify;">
  The above discussed soundex algorithm just fits to the solution. Only issue is that algorithm is defined only for English. So time to design soundex for our languages!.
</p>

<p style="text-align: justify;">
  Original Soundex algorithm is not multilingual. And not designed for language independent indexing.  And the digits to represent phonetic categories for Indian languages will not fit into 6. We have more phonetical families. So our algorithm will not be exact &#8220;localization&#8221; of English soundex, but we will use the concept. Let us call it as IndicSoundex 🙂 . Infact Metaphone algorithm uses 16 families for English.
</p>

<p style="text-align: justify;">
  One of the characteristcs of Indian languages is that all languages share same phonetic features. We have vowels a, aa, i, ii, u&#8230;. then consonant families ka, cha, ta, tha, pa..  etc.  What we need to do is mapping all these sets to a common representation which is independent of language. And we call that representation as soundex for an Indic word.
</p>

<p style="text-align: justify;">
  While grouping and mapping Indic letters to phonetic codes, the following are facts are taken into consideration.
</p>

  1. <div style="text-align: justify;">
      Group short and long vowel to a single code. e and ee is considered as equal
    </div>

  2. <div style="text-align: justify;">
      Consider half consonants as full consonants. For this ignore halants.
    </div>

  3. <div style="text-align: justify;">
      Group consonant families. ka, kha,ga,gha, nga becomes a single family. Same is the case of cha, ta, tha,pa
    </div>

  4. <div style="text-align: justify;">
      Group ra, Ra,
    </div>

  5. <div style="text-align: justify;">
      Group la,La, zha
    </div>

  6. <div style="text-align: justify;">
      Group sa,Sa,sha
    </div>

<p style="text-align: justify;">
  When I grouped like this I got 20 groups.  I have prepared a table for all Indic letters and corresponding code here <a href="http://thottingal.in/soundex/soundex.html">http://thottingal.in/soundex/soundex.html</a>
</p>

<p style="text-align: justify;">
  <strong>Algorithm:</strong>
</p>

  1. For each letter in the word except first letter, get the corresponding soundex digit from the character map, which is nothing but a table [like this.][2]
  2. If the letter is not found in character map, the  soundex digit for that letter is 0
  3. Duplicate consecutive soundex codes are skipped. ie, effectively क्क will be considered as क.
  4. Replace first digit with first alpha character.
  5. remove all 0s from the soundex code.
  6. Return soundex code padded to the required length (ie, if required length of code is 5 and soundex is സBCD, then soundex returned will be സBCD0.

<p style="text-align: justify;">
  Of cource, we need an implementation. Get the python code for this from <a href="https://github.com/libindic/soundex">here</a>. If you don&#8217;t care about the code,  try the online soundex converter from here: <a href="http://libindic.org/Soundex">http://libindic.org/Soundex</a>
</p>

<p style="text-align: justify;">
  From the above algorithm , the soundex code for സന്തോഷ് is സLKES000. and for सन्तौष , it is सLKES000 . So if I need to compare सन्तौष and സന്തോഷ് and need a positive result, we should do something in comparison logic and there by making the comparison language independent
</p>

An example :

കാര്‍തിക്, കാര്‍ത്തിക്,  കാര്‍തിഗ് = കAPKBF00

கார்திக்= கAPKBF00

<p style="text-align: justify;">
  <strong>Comparison</strong>
</p>

  1. Compare the two string without calculating the soundex codes. If there are same return 0
  2. Calculate the sounedx codes for both strings, if the match return 1. ie, both strings are from same language and sounds alike
  3. If the soundex of strings has different fist letter and rest of the part is same, check whether the first letters are with same soundex digit. If so, both words from different languages, but sounds alike. Return code for this will be 2
  4. If none of the above conditions match, return -1, indicating both strings are completely different.

<p style="text-align: justify;">
  Use <a href="http://libindic.org/Soundex">http://libindic.org/Soundex</a> to experiment with this algorithm. Following screenshot shows how കാര്‍ത്തിക് and કાર્તિક્ are found to be phonetically similar or &#8220;sounds alike&#8221;
</p>

<p style="text-align: justify;">
  <img title="soundexcomparison" src="/wp-content/uploads/2009/07/soundexcomparison.png" alt="soundexcomparison" width="337" height="235" />
</p>

<p style="text-align: justify;">
  Ok,  we got the soundex code. The soundex code itself is not useful. We need to implement a search utility based on this. As I explained above, an intra-indic search program. We will see it later.
</p>

<p style="text-align: justify;">
  Feel free to comment on algorithm and please suggest any improvement we can do.
</p>

 [1]: http://www.archives.gov/genealogy/census/soundex.html
 [2]: http://thottingal.in/soundex/soundex.html