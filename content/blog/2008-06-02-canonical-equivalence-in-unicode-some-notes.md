---
title: 'Canonical Equivalence in Unicode: Some notes'
author: Santhosh Thottingal
type: post
date: 2008-06-03T05:22:00+00:00
url: /blog/2008/06/02/canonical-equivalence-in-unicode-some-notes/
lj_itemid:
  - 45
lj_permalink:
  - http://santhoshtr.livejournal.com/11701.html
categories:
  - Indic
tags:
  - unicode

---
Some Notes on Canonical Equivalence in Unicode:

Unicode defines canonical equivalence as follows:

From [UAX #15][1]

> Canonical Equivalence

> This section describes the relationship of normalization to respecting (or preserving) canonical equivalence. A process (or function) respects canonical equivalence when canonical-equivalent inputs always produce canonical-equivalent outputs. For a function that transforms one string into another, this may also be called preserving canonical equivalence. There are a number of important aspects to this concept:

>
>
>   1. The outputs are not required to be identical, only canonically equivalent.
>   2. Not all processes are required to respect canonical equivalence. For example:
>       * A function that collects a set of the General_Category values present in a string will and should produce a different value for < angstrom sign, semicolon > than for < A, combining ring above, greek question mark >, even though they are canonically equivalent.
>       * A function that does a binary comparison of strings will also find these two sequences different.
>   3. Higher-level processes that transform or compare strings, or that perform other higher-level functions, must respect canonical equivalence or problems will result.

One good example for this is

Ά = U+0386 GREEK CAPITAL LETTER ALPHA WITH TONOS and its canonical decomposition is defined as U+0391 GREEK CAPITAL LETTER ALPHA + U+0301 COMBINING ACUTE ACCENT = Α + ‍́

Following are the defined canonically equivalent unicode sequences for some Indic Languages



**Bengali:**

  1. U+09CB BENGALI VOWEL SIGN O = U+09C7 BENGALI VOWEL SIGN E + U+09BE BENGALI VOWEL SIGN AA
  2. U+09CC BENGALI VOWEL SIGN AU = U+09C7 BENGALI VOWEL SIGN E + U+09D7 BENGALI AU LENGTH MARK
  3. U+09DC BENGALI LETTER RRA = U+09A1 BENGALI LETTER DDA + U+09BC BENGALI SIGN NUKTA
  4. U+09DD BENGALI LETTER RHA = U+09A2 BENGALI LETTER DDHA + U+09BC BENGALI SIGN NUKTA
  5. U+09DF BENGALI LETTER YYA = U+09AF BENGALI LETTER YA + U+09BC BENGALI SIGN NUKTA

**Devanagari**

  1. U+0929 DEVANAGARI LETTER NNNA= U+0928 DEVANAGARI LETTER NA + U+093C DEVANAGARI SIGN NUKTA
  2. U+0931 DEVANAGARI LETTER RRA = U+0930 DEVANAGARI LETTER RA + U+093C DEVANAGARI SIGN NUKTA
  3. U+0934 DEVANAGARI LETTER LLLA = U+0933 DEVANAGARI LETTER LLA + U+093C DEVANAGARI SIGN NUKTA
  4. U+0958 DEVANAGARI LETTER QA = U+0915 DEVANAGARI LETTER KA + U+093C DEVANAGARI SIGN NUKTA
  5. U+0959 DEVANAGARI LETTER KHHA = U+0916 DEVANAGARI LETTER KHA + U+093C DEVANAGARI SIGN NUKTA
  6. U+095A DEVANAGARI LETTER GHHA = U+0917 DEVANAGARI LETTER GA + U+093C DEVANAGARI SIGN NUKTA
  7. U+095B DEVANAGARI LETTER ZA = U+091C DEVANAGARI LETTER JA + U+093C DEVANAGARI SIGN NUKTA
  8. U+095C DEVANAGARI LETTER DDDHA = U+0921 DEVANAGARI LETTER DDA + U+093C DEVANAGARI SIGN NUKTA
  9. U+095D DEVANAGARI LETTER RHA = U+0922 DEVANAGARI LETTER DDHA + U+093C DEVANAGARI SIGN NUKTA
 10. U+095E DEVANAGARI LETTER FA = U+092B DEVANAGARI LETTER PHA + U+093C DEVANAGARI SIGN NUKTA
 11. U+095F DEVANAGARI LETTER YYA = U+092F DEVANAGARI LETTER YA + U+093C DEVANAGARI SIGN NUKTA

_(Note: I saw the ॻ U+097B DEVANAGARI LETTER GGA, ॼ U+097C DEVANAGARI LETTER JJA , and ॾ U+097E DEVANAGARI LETTER DDDA in Debanagari. I am not sure where these letters will be used and whether these are related to GHA, JHA and DDHA )_</p>

**Gujarati:
**

Gujarati doesnot have any characters with canonically equivalent sequence.

**Gurmukhi :**

  1. U+0A36 GURMUKHI LETTER SHA = U+0A38 GURMUKHI LETTER SA + U+0A3C GURMUKHI SIGN NUKTA
  2. U+0A59 GURMUKHI LETTER KHHA = U+0A16 GURMUKHI LETTER KHA + U+0A3C GURMUKHI SIGN NUKTA
  3. U+0A5A GURMUKHI LETTER GHHA = U+0A17 GURMUKHI LETTER GA + U+0A3C GURMUKHI SIGN NUKTA
  4. U+0A5B GURMUKHI LETTER ZA = U+0A1C GURMUKHI LETTER JA + U+0A3C GURMUKHI SIGN NUKTA
  5. U+0A5E GURMUKHI LETTER FA = U+0A2B GURMUKHI LETTER PHA + U+0A3C GURMUKHI SIGN NUKTA

**Kannada:**

  1. U+0CC0 KANNADA VOWEL SIGN II = U+0CBF KANNADA VOWEL SIGN I + U+0CD5 KANNADA LENGTH MARK
  2. U+0CC7 KANNADA VOWEL SIGN EE = U+0CC6 KANNADA VOWEL SIGN E + U+0CD5 KANNADA LENGTH MARK
  3. U+0CC8 KANNADA VOWEL SIGN AI = U+0CC6 KANNADA VOWEL SIGN E + U+0CD6 KANNADA AI LENGTH MARK
  4. U+0CCA KANNADA VOWEL SIGN O = U+0CC6 KANNADA VOWEL SIGN E + U+0CC2 KANNADA VOWEL SIGN UU
  5. U+0CCB KANNADA VOWEL SIGN OO = U+0CC6 KANNADA VOWEL SIGN E + U+0CC2 KANNADA VOWEL SIGN UU + U+0CD5 KANNADA LENGTH MARK

**Malayalam :**

  1. U+0D4A MALAYALAM VOWEL SIGN O= U+0D46 MALAYALAM VOWEL SIGN E + U+0D3E MALAYALAM VOWEL SIGN AA
  2. U+0D4B MALAYALAM VOWEL SIGN OO = U+0D47 MALAYALAM VOWEL SIGN EE + U+0D3E MALAYALAM VOWEL SIGN AA
  3. U+0D4C MALAYALAM VOWEL SIGN AU = U+0D46 MALAYALAM VOWEL SIGN E + U+0D57 MALAYALAM AU LENGTH MARK

**Oriya :**

  1. U+0B48 ORIYA VOWEL SIGN AI = U+0B47 ORIYA VOWEL SIGN E + U+0B56 ORIYA AI LENGTH MARK
  2. U+0B4B ORIYA VOWEL SIGN O = U+0B47 ORIYA VOWEL SIGN E + U+0B3E ORIYA VOWEL SIGN AA
  3. U+0B4C ORIYA VOWEL SIGN AU = U+0B47 ORIYA VOWEL SIGN E + U+0B57 ORIYA AU LENGTH MARK
  4. U+0B5C ORIYA LETTER RRA = U+0B21 ORIYA LETTER DDA + U+0B3C ORIYA SIGN NUKTA
  5. U+0B5D ORIYA LETTER RHA = U+0B22 ORIYA LETTER DDHA + U+0B3C ORIYA SIGN NUKTA

**Tamil:**

  1. U+0B94 TAMIL LETTER AU = U+0B92 TAMIL LETTER O + U+0BD7 TAMIL AU LENGTH MARK
  2. U+0BCA TAMIL VOWEL SIGN O = U+0BC6 TAMIL VOWEL SIGN E + U+0BBE TAMIL VOWEL SIGN AA
  3. U+0BCB TAMIL VOWEL SIGN OO = U+0BC7 TAMIL VOWEL SIGN EE + U+0BBE TAMIL VOWEL SIGN AA
  4. U+0BCC TAMIL VOWEL SIGN AU = U+0BC6 TAMIL VOWEL SIGN E + U+0BD7 TAMIL AU LENGTH MARK

**<u>Notes:</u>**

  1. When you search a decomposed form of codepoints, you are also getting the search results of the atomic codepoint. Eg:

    മ + േ + ാ == മോ and മ + ോ == മോ

    Eventhough the code points are differnt for both of them, since there is a canonical equivalence between them, when you search one, you should get the second.
  2. When you sort the words with canonically equivalent codes, they should come adjacent.
  3. There are some languages where unicode defined the atomic code points obsolete and corresponding sequence as valid one without defining the canonical equivalence. One example is Khmer language. There

    U+17A8 KHMER INDEPENDENT VOWEL QUK was the atomically enocoded letter for the sequence U+17A7 KHMER INDEPENDENT VOWEL QU U+1780 KHMER LETTER KA. But now the description of U+17A8 KHMER INDEPENDENT VOWEL QUK says &#8221; obsolete ligature for the sequence U+17A7 KHMER INDEPENDENT VOWEL QU U+1780 KHMER LETTER KA

    , use of the sequence is now preferred &#8220;
  4. Unicode 5.1 defined new codepoints for the 6 chillu letters in Malayalam which are currently represented by consonant + virama + ZWJ. So a single letter can be represented in both ways. But unicode did not define the canonical equivalence for them. This results in dual encoding and users will not able to get the search results with one representation if they search with other representation.
  5. Windows does not implement the canonical equivalence at all(when tested in windows XP Sp2 for the above mentioned scripts).
  6. Google search gives the correct search results for words with canonical equivalent sequence. Example used is മോഷണം <=> മോഷണം
  7. Yahoo search gives the correct search results for words with canonical equivalent sequence. Example word used is മോഷണം <=> മോഷണം. But unlike google, the search key highlighted in search results uses a decomposed sequence. i.e Yahoo replaces the search key in the search results with decomposed unicode sequence while showing the results.

**<u>References:</u>**

  1. http://en.wikipedia.org/wiki/Canonical_equivalence
  2. http://unicode.org/reports/tr15/

 [1]: http://unicode.org/reports/tr15/#Canonical_Equivalence