---
title: A formal grammar for Malayalam syllables
author: Santhosh Thottingal
type: post
date: 2017-05-27T11:54:12+00:00
url: /blog/2017/05/27/a-formal-grammar-for-malayalam-syllables/
featured_image: /wp-content/uploads/2017/05/Spectacle.T10487.png
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"f19739d99edd";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:85:"https://medium.com/@sthottingal/a-formal-grammar-for-malayalam-syllables-f19739d99edd";}'
categories:
  - Linguistics
  - Malayalam
tags:
  - grammar
  - Malayalam
  - PEG

---
I wrote about formal grammar for Malayalam conjunct in last [blog post][1]. Continuing from there, let us discuss the syllable model.

A [syllable][2] is a unit of organization for a sequence of speech sounds. Each syllable can be considered as pronounciation units that constitutes a word pronounciation. For example, &#8220;മലയാളം&#8221; has മ, ല, യാ, ളം as 4 syllables. If you ask a native Malayalam speaker, &#8220;How many letters are in the word മലയാളം?&#8221; The answer would be 4 and it corresponds to syllable count. The &#8216;letter&#8217; concept, known as &#8216;അക്ഷരം&#8217; in Malayalam often refers to syllables.

Along with a verbal description of syllables in Malayalam we attempt to formalize a grammar using PEG &#8211; Parser Expression grammar. That grammar is then used for writing a parser to find the syllables in a given word. A web interface is also provided to try out the system.

Before starting with definition of syllable model, we need to define some terminology.

## [][3]{#user-content-definitions.anchor}Definitions

  1. `Vowel` &#8211; Vowels of Malayalam -Any of the set: [അആഇഈഉഊഋഎഏഐഒഓഔഔഅം]
  2. `VowelSign` &#8211; Vowel signs. &#8211; Any of the set [ാിീുൃെേൊോൗൂൈ]
  3. `Consonant` &#8211; Consonants &#8211; Any of the set [കഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരലവശഷസഹളഴറ]
  4. `Virama` &#8211; The sign ്.
  5. `Visarga` The sign ഃ
  6. `Anuswara` &#8211; The vowel sign of അം.ie ം. This share some properties of Chillu.
  7. `Chillu` &#8211; Pure consonants, without any vowels. Chillus are any of ൻ, ർ, ൽ, ൾ, ൺ, ൿ, ൔ, ൕ, ൖ. The last 4 chillus are rarely used or archaic. But we can consider them for our modeling. Due to historic encoding reasons, Chillus can also appear as base `Consonant`+`Virama`+`ZWJ` form. That means, ൻ = ന + ് + `ZWJ`. Chillus never appear in the begininning of word, but is not relevant for a syllable analyser.
  8. `ZWNJ` [Zero Width Non Joiner][4].\u200C
  9. `ZWJ` [Zero with Joiner][5] \u200D
 10. `Signs` A term used to address various signs that modify a `Consonant`. Any of `VowelSign`, `Virama`, `Anuswara`, `Visarga`.
 11. `Conjunct`:Refer the formal definition of this we [discussed in previous blog post][1]. We defined it as A `Consonant` combined with another `Conjunct` or `Consonant` using `Virama`. Example: സ+ ് + ത => സ്ത , സ്ത + ് + ര = സ്ത്ര. ദ്ധ + ് ര = ദ്ധ്ര, ദ്ധ്ര + ് + യ = ദ്ധ്ര്യ. But we need an advanced version. That definition did not support DotReph (ൎ) which combines with a consonant or conjunct to form Conjunct. To support `DotReph` as well, we will redefine Conjunct as `HalfConsonant Conjunct / Consonant`
 12. `DotReph` The sign (ൎ). It combines with other consonants as in this example: ൎ + യ -> ൎയ in ഭാൎയ
 13. `HalfConsonant`: A `Consonant` followed by `Virama` Example: പ്, ര്, മ് etc. Or a `DotReph`

## [][6]{#user-content-syllable-model.anchor}Syllable model

A syllable in Malayalam can be any of the following.

  1. An independent `Vowel`. Vowels are often found at the begininning of the word. Example: അമ്മ. But for the specific case of Syllables, we can relax this rule of being in the start of word and generally state that a vowel is syllable. Note that vowel appearing as vowel sign is not what we are considering here. `Vowel signs` has its own properties.
  2. A `Chillu` letter is a syllable.
  3. A `Consonant` without any `Signs` is a syllable. For example, in the word തറ, both ത and റ are Syllables.
  4. A `Consonant` or `Conjunct` with `Signs` is a syllable. Here the Signs can be repeated more than once, but not freely. This syllable has the following characteristics:
      1. `Signs` can be `Virama` only if it is the last items of a given word. For example. അത് has അ, ത് as syllables, but അത്ഭുതം has അ, ത്ഭു, തം as syllables.
      2. `Signs` can occur 2 times in folllowing cases:(a) First Sign is ു and Second is `Virama` This combination is also called Samvruthokaram. Example: തു് in അതു്. (b) First Sign is a `VowelSign` and Second is `Anuswara`. Examples: താം, തീം, തോം, തും etc.
  5. A `ZWNJ` marks a syllable boundary. A ZWNJ inserted between two blocks of text inserts a ligature as well as syllable boundary. For example: തമിഴ്‌നാട്, the ZWNJ inserted after ഴ് and before നാ prevents possible ഴ്ന Conjunct and hence also makes a point that the pronounciation should break at that point. It is a bit wierd to say a ZWNJ forms a syllable since it is just a seperator. But while analysing a series of letters from begininning to end, it is technically okey to consider ZWNJ as a syllable block.

## Parser Expression Grammar



You can try this in a PEG evaluator and try various conjucts to see if they all getting parsed. Use <https://pegjs.org/online>, copy paste the above grammar try inputs like &#8216;ശാസ്ത്രവിഷയങ്ങൾ&#8217;.

## Characteristics of the Grammar

There are a few important characteristics of this grammar.

It does certain validations against the `signs`. For example, it does not allow a `VowelSign`, `virama` or `anuswara` after a `visarga`. If that happens, the parser will fail to parse a word. It permits a `virama` after a `VowelSign`, but that is only for Samvruthokaram(vowel sign = ു ).

Among the signs, you can see Virama, but it is permitted only at the end of the word. For example: അത്. If `virama` comes in between a word, it has the nature of consonant combining.

The order of `Signs` is also enforced. For example, you cannot have a `virama` and then `VowelSign` ു even though the reverse order is permitted.

Above rules creates some strictness for the parser. At the same time, there are some relaxed rules too. There is no maximum limit on a possible conjuct.  A nonsense conjunct like &#8216;ക്ച്ട്ത്പ്ബ്ഭ്മ്ജ്ത്ക്&#8217; will be accepted by parser. Malayalam has valid conjuncts upto 5 as far as I know(Example: ഗ്ദ്ധ്ര്യ ). Usually the longer conjuncts will have the ending consonants as യ, ര, ല, വ.

In informal Malayalam, vowel sign duplication is sometimes used to denote elongation. For example, വാടാാാ. Our parser won&#8217;t accept that.

## Syllable boundaries

If you want to know syllable boundaries and don&#8217;t care about anything else, there is an easy way to find boundaries.

A syllable boundary is after:

  1. A vowel. Note that this not vowel sign. Example: അ|റ, ഇ|ര, ഉ|പ്പ്
  2. A vowel sign, if not followed by virama, anuswara or visarga. Example: ത്തി|ൽ, പു|ക,
  3. A consonant if followed by another consonant or chillu. Example: ത|റ, ഷ്ട|മി, ക|ൽ
  4. A chillu. Example: സ|ർ|പ്പം
  5. An Anuswara. Example: കു|ടും|ബം,
  6. A Visarga_._ Example: ദുഃ|ഖം
  7. A ZWNJ is syllable boundary.

## Web interface

I prepared a web interface if you just want to try out the syllable analyser and dont want to play with PEG.

<https://phon.smc.org.in/syllables/>

<figure id="attachment_965" aria-describedby="caption-attachment-965" style="width: 652px" class="wp-caption aligncenter">[<img class="size-full wp-image-965" src="/wp-content/uploads/2017/05/Spectacle.T10487.png" alt="" width="652" height="368" srcset="/wp-content/uploads/2017/05/Spectacle.T10487.png 652w, /wp-content/uploads/2017/05/Spectacle.T10487-300x169.png 300w" sizes="(max-width: 652px) 100vw, 652px" />][7]<figcaption id="caption-attachment-965" class="wp-caption-text">Malayalam syllable analyser</figcaption></figure>

Now that comes with a JS API too, just include the following file in your web application:

<https://phon.smc.org.in/syllables/lib/malayalam-syllables.js>

Then use the following method to split a word to syllables.

<pre>malayalamSyllableParser.parse(inputWord)</pre>

I prepared a codepen project to demonstrate this.

<p class="codepen" data-height="265" data-theme-id="light" data-slug-hash="BRmJoB" data-default-tab="result" data-user="santhoshtr" data-embed-version="2" data-pen-title="Malayalam syllable analyser">
  See the Pen <a href="https://codepen.io/santhoshtr/pen/BRmJoB/">Malayalam syllable analyser</a> by Santhosh Thottingal (<a href="https://codepen.io/santhoshtr">@santhoshtr</a>) on <a href="https://codepen.io">CodePen</a>.
</p>



## Source code

<https://github.com/santhoshtr/malayalam-syllable-analyser>

Please report any issues or ideas to improve this model there. Thanks!

 [1]: http://thottingal.in/blog/2017/05/21/a-formal-grammar-for-malayalam-conjunct/
 [2]: https://en.wikipedia.org/wiki/Syllable
 [3]: https://github.com/santhoshtr/malayalam-syllable-analyser#definitions
 [4]: https://en.wikipedia.org/wiki/Zero-width_non-joiner
 [5]: https://en.wikipedia.org/wiki/Zero-width_joiner
 [6]: https://github.com/santhoshtr/malayalam-syllable-analyser#syllable-model
 [7]: /wp-content/uploads/2017/05/Spectacle.T10487.png