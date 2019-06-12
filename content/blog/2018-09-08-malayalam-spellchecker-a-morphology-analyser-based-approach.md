---
title: Malayalam spellchecker – a morphology analyser based approach
author: Santhosh Thottingal
type: post
date: 2018-09-08T09:41:11+00:00
url: /blog/2018/09/08/malayalam-spellchecker-a-morphology-analyser-based-approach/
featured_image: /wp-content/uploads/2018/09/Screenshot_20180908_143252.png
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"21674b6bee9f";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:104:"https://medium.com/@sthottingal/malayalam-spellchecker-a-morphology-analyser-based-approach-21674b6bee9f";}'
categories:
  - Misc

---
My first attempt to develop a [spellchecker for Malayalam was in 2007][1]. I was using [hunspell][2] and a word list based approach. It was not successful because of rich morphology of Malayalam. Even though I prepared a  manually curated 150K words list, it was nowhere near to cover practically infinite words of Malayalam. For languages with productive morphological processes in compounding and derivation that are capable of generating dictionaries of infinite length, a morphology analysis and generation system is required. Since my efforts towards building such a morphology analyser is progressing well, I am proposing a finite state transducer based spellchecker for Malayalam. In this article, I will first analyse the characteristics of Malayalam spelling mistakes and then explain how an FST can be used to implement the solution.

## What is a spellchecker?

The spellchecker is an application that tells whether the given word is spelled correctly as per the language or not. If the word is not spelled correctly, the spellchecker often gives possible alternatives as suggestion to correct the misspelled word. The word can be spellchecked independently or in the context of a sentence. For example, in the sentence &#8220;അസ്തമയസൂര്യൻ കടലയിൽ മുങ്ങിത്താഴ്ന്നു&#8221;, the word &#8220;കടലയിൽ&#8221; is spelled correctly if considered independently. But in the context of the sentence, it is supposed to be &#8220;കടലിൽ&#8221;.

The correctness of the word is tested by checking if that word is in the language model. The language model can be simply a list of all known words in the language. Or it can be a system which knows how a word in a language will look like and tell whether the given word is such a word. In the case of Malayalam, we saw that the finite dictionary is not possible. So we will need a system which is &#8216;aware&#8217; of all words in the language. We will see how a morphology analyser can be such a system.

If the word is misspelled, the system need to give correction. To generate the correctly spelled words from a misspelled word form, an error model is needed. The most common error model is [Levenshtein edit distance][3]. In the edit distance algorithm, the misspelling is assumed to be a finite number of operations applied to characters of a string: _deletion, insertion, change, or transposition_. The number of operations is known as &#8216;_edit distance_&#8216;. Any word from the known list of words in the language, with a minimal distance is a candidate for suggestion. Peter Norvig explains such a functional spellchecker in his article &#8220;[How to Write a spelling corrector?][4]&#8220;


There are multiple problems with the edit distance based correction mechanism

  * For a query word, to generate all candidates after applying the four operations, we can calculate the number of words we need to generate and test its correctness. For a word of length n, an alphabet size a, an edit distance d=1, there will be n deletions, n-1 transpositions, _a*n_ alterations, and _a*(n+1)_ insertions, for a total of _2n+2an+a-1_ terms at search time. In the case of Malayalam, a is 117 if we consider all encoded characters in Unicode version 11. If we remove all archaic characters, we still need about 75 characters. So, for edit distance d=1, a=75, for a word with 10 characters, 2\*10+2\*75*10+75-1 = 1594 and much larger for larger d. So, you will need to do 1594 lookups(spellchecks) in the language model to get possible suggestions.
  * The concept that the 4 edit operations are the cause for all spelling mistakes is not accurate for Malayalam. There are many common spelling mistakes in Malayalam that are 3 or 4 edit distance from the original word. Usually the edit distance based corrections won&#8217;t go beyond d=2 since the number of candidates increases.

### The problems with hunspell based spellchecker and Malayalam

Hunspell has a limited compounding support, but limited to two levels. Malayalam can have more than 2 level compounding and sometimes the agglutinated words is also inflected. Hunspell system has [an affix dictionary and suffix mapping system.][5] But it is very limited to support complex morphology like Malayalam. With the help of Németh László, Hunspell developer, I had explored this path. But abandoned due to many limitation of Hunspell and lack of programmatic control of the morphological rules.


## Nature of Malayalam spelling mistakes

Malayalam uses an alphasyllabary writing system. Each letter you write corresponds to the grapheme representation of a phoneme. In broader sense Malayalam can be considered as a language with one to one  grapheme to phoneme correspondence. Where as in English and similar languages, letters might represent a variety of sounds, or the same sounds can be written in different ways. The way a person learns writing a language strongly depends on the writing system.

In Malayalam, since there is one and only one set of characters that can correspond to a syllable, the confusion of letters does not happen. For example, in English, Educa**tio**n, **Sh**ip, Ma**ch**ine, Mi**ssi**on all has sh sound [ʃ]. So a person can mix up these combinations. But in Malayalam, if it is _sh_ sound [ʃ], then it is always ഷ.

Because of this, the spelling mistakes that is resulted by four edit operations(deletion, insertion, change, or transposition) may not be an accurate classification of errors in Malayalam.  Let us try to classify and analyse the spelling mistake patterns of Malayalam.


  1. **Phonetic approximation:** The 1:1 grapheme to phoneme correspondence is the theory. But because of this the inaccurate utterance of syllables will cause incorrect spellings. For example, ബൂമി is a relaxed way of reading for ഭൂമി since it is relatively effortless. Since the relaxed way of pronunciation is normal, sometimes people think that they are writing in wrong way and will try to correct it unnecessarily പീഢനം->പീഡനം is one such example.
      * **Consonants**: Each consonant in Malayalam has aspirated, unaspirated, voiced and unvoiced variants. Between them, it is very usual to get mixed up
          * **Aspirated and Unaspirated mix-up**: Aspirated consonant can be mistakenly written as  Unaspirated consonant. For Example, ധ -> ദ, ഢ -> ഡ . Similarly Unaspirated consonant can be mistakenly written as aspirated consonant &#8211; Example, ദ ->ധ, ഡ ->ഢ.

          * **Voiced and Voiceless mix-up**. Voiced consonants like ഗ, ഘ can be mistakenly written as voiceless forms ക, ഖ. And vice versa.
          * **Gemination** of consonants is often relaxed or skipped in the speech, hence it appear in writing too. Gemination in Malayalam script is by combining two consonants using virama. നീലതാമര/നീലത്താമര is an example for this kind of mistakes. There are a few debatable words too, like സ്വർണം/സ്വർണ്ണം, പാർടി/പാർട്ടി. Another way of consonant stress indication is by using _Unaspirated Consonant + Virama + Aspirated Consonant_. അദ്ധ്യാപകൻ/അധ്യാപകൻ, തീർഥം/തീർത്ഥം, വിഡ്ഡി/വിഡ്ഢി pairs are examples.
          * Hard, Soft variants confusion. Examples: ശ/ഷ, ര/റ, ല/ള
      * **Vowels**: Vowel elongation or shortening, [gliding vowels][6] and [semi vowels][7] are the cause for vowel related mistakes in writing.
          * Each vowel in Malayalam can be a short vowel or long vowel. Local dialect can confuse people to use one for the other. ചിലപ്പൊൾ/ചിലപ്പോൾ is one example. Since many input tools place the short and long vowels forms with very close keystrokes, it is possible to cause errors. In Inscript keyboard, short and long vowels are in normal and shift position. In transliteration based input methods, long vowel is often typed by repeated keys(i, ii for ി, ീ).

          *  The vowel ഋ is close to റി or റു in pronunciation. Example: ഋതു/റിതു. The vowel sign of ഋ while appearing with a consonant is close to ്ര. Example ഗൃഹം/ഗ്രഹം. ഹൃദയം/ഹ്രുദയം.

          * [Gliding vowels][6] ഐ, ഔ get confused with its constituent vowels. കൈ/കഇ/കയ്, ഔ/അഉ/അവു are example.
          * In Malayalam, there is a tendency to use എ instead of ഇ, since the reduced effort. Examples: ചിലവ്/ചെലവ്, ഇല/എല, തിരയുക/തെരയുക. Due to wide usage of these variants, it is sometimes very difficult to say one word is wrong. See the discussion about the &#8216;Standard Malayalam&#8217; at the end of this essay.
      * **Chillus**: Chillus are pure consonants. A consonant + virama sequence sometimes has no phonetic difference from a chillu. For example, കല്പന/കൽപന, നിൽക്കുക/നില്ക്കുക combinations. The chillu ർ is sometimes confused with ഋ sign. Examples are: പ്രവർത്തി/പ്രവൃത്തി. The chillu form of മ &#8211; ം can appear are as anuswara or ma+virama forms. Examples: പംപ, പമ്പ. But it is not rare to see പംമ്പ for this. Sometimes, the anuswara get confused with ന്, and പമ്പ becomes പന്പ. There were a few buggy fonts that used ന്+പ for മ്പ ligature too.

  2. **Weak Phoneme-Grapheme correspondence:** Due to historic or evolutionary nature of the script, Malayalam also has some phonemes which has a weak relationship with the graphemes.
      * ഹ്മ/ മ്മ as in ബ്രഹ്മം/ബ്രമ്മം, ന്ദ/ന്ന as in നന്ദി/നന്നി, ഹ്ന/ന്ന  as in ചിഹ്നം/ചിന്നം are some examples where what you pronounce is not exactly same as what you write.
      * റ്റ, ന്റ &#8211; These two highly used conjuncts heavily deviate from the letters and pronunciation. While writing using pen, people don&#8217;t make much mistakes since they just draw the shape of these ligatures, but while typing, one need to know the exact key sequence and they get confused. Common mistakes for these conjuncts are ററ, ൻറ, ൻറ്റ , ൻററ
  3. **Visual similarity**: While using visual input methods such as handwriting based or some onscreen keyboards, either the users or the input tool makes mistakes due to visual similarity
      * ൃ, ്യ often get confused.
      * ജ്ഞ, ഞ്ജ is one very common sequence where people are confused. ആദരാജ്ഞലി/ആദരാഞ്ജലി.
      * ത്സ, ഝ is another combination
      * The handwriting based input methods like Google handwriting tool is known for recognizing anuswara ം as zero, English o, O etc.
      * When people don&#8217;t know how to insert visarga ഃ, and since there is a very similar key in keyboard- colon : they use it. Example: ദുഃഖം/ദു:ഖം
      * ള്ള, the geminated form of ള, is very similar to two adjacent ള. This kind of mistakes are very frequent among people whi studied Malayalam inputting informally. Two adjacent റ, is another mistake for റ്റ,
      * The informal, trial-and-error based Malayalam inputting training also introduced some other mistakes such as using open parenthesis &#8216;(&#8216; for ്ര, closing parenthesis &#8216;)&#8217; for ാ sign.
  4. **Ambiguity due to regional dialect**: A good example for this is insertion of യ് in verbs. കുറക്കുക/കുറയ്ക്കുക, ചിരിക്കുക/ചിരിയ്ക്കുക, Also in nominal inflections: പൂച്ചയ്ക്ക്/പൂച്ചക്ക്.  Usuage of Samvruthokaram to distinguish between a pure consonant and stressed consonant at the end of word is a highly debated topic. For example, അവന്/അവനു്/അവനു. All these forms are common, even though the usage of നു് is less after the script reformation. But since script reformation was not an absolute transformation, it still exist in usage
  5. **Spaces:** Malayalam is an agglutinative language. Words can be agglutinated, but nothing prevents people to put space and write in simple words. But this should be done carefully since it can alter the meaning. An example is &#8220;ആന പുറത്തു കയറി&#8221;, ആനപ്പുറത്തു കയറി&#8221;, &#8220;ആനപ്പുറത്തുകയറി&#8221;, &#8220;ആനപ്പുറത്ത് കയറി&#8221;. Another example: &#8220;മലയാള ഭാഷ&#8221;, &#8220;മലയാളഭാഷ&#8221; &#8211; Here, there is no valid word &#8220;മലയാള&#8221;. The anuswara at the end get deleted only when it joins with ഭാഷ as adjective. A morphology analyser can correctly parse &#8220;മലയാളഭാഷ&#8221; as മലയാളം<proper-noun><adjective>ഭാഷ<noun>. But since language already broke this rule and many people are liberally using space, a spellchecker would need to handle this cases.
  6. **Slip of Finger:** Accidental insertions or omissions of key presses is the common reason for spelling mistakes. For alphabetic language, mostly this type of errors are addressed. For Malayalam also, this type of accidental slip of finger can happen. For Latin based languages,  we can make some analysis since we know a QWERTY keyboard layout and do optimized checks for this kind of issues. Since Malayalam will use another level of mapping on top of QWERTY for inputting(inscript, phonetic, transliteration), it is not easy to analyse this errors. So, in general, we can expect random characters or omission of some characters in the query word. An accidental space insertion has the challenge that it will split the word to two words and if the spellchecking is done by one word at a time, we will miss it.

I must add that the above classification is not based on a systematic study of any test data that I can share. Ideally, this classification should done with real sample of Malayalam written on paper and computer. It should be then manually checked for spelling mistakes, list down the mistakes and analyse the patterns. This exercise would be very beneficial for spellcheck research. In my case, even since I released my word list based spellchecker, noticing spelling errors in internet(social media, mainly) has been my obsession. Sometimes I also tried to point out spelling mistakes to authors and that did not give much pleasant experience to me &#x1f601; . The above list is based on my observation from such patterns.

## Malayalam spelling checker

To check if a word is valid, known, correctly spelled word, a simple look up using morphology analyser is enough. If the morphology analyser can parse the word, it is correctly spelled. Note that the word can be an agglutinated at arbitrary levels and inflected at same time.

### Out of lexicon words

Compared to the finite set word list, the FST based morphology analyser and generator system covers large number of words using its generation system based on morpho-phonotactics. For a discussion on this see my previous [blog post about the coverage test.][8] Since every language vocabulary is a dynamic system, it is still impossible to cover 100% words in a language all the time. New words get added to language every now and then. There are nouns related to places, people names, product names etc that is not in the lexicon of Morphology analyser. So, these words will be reported as unknown words by the spellchecker. Unknown word is interpreted as misspelled word too. This issue is a known problem. But since a spellchecker is often used by a human user, the severity of the issue depends whether the spellchecker does not know about lot of commonly used words or not. Most of the spellcheckers provide an option to add to dictionary to avoid this issue.

As part of the Morphology analyser, the expansion of the lexicon is a never ending task. As the lexicon grows, the spellchecker improves automatically.

## Malayalam spelling correction

To provide spelling suggestions, the FST based morphology analyser can be used. This is a three step process


  1. Generate a list of candidate words from the query word. The words in this list may be incorrect too. The words are generated based on the patterns we defined based on the nature of spelling mistakes. We scan the query word for common patterns of errors and apply fix for that pattern. Since there dozens of patterns, we will have many candidate words.
  2. From the candidate list, find out the correctly spelled word using spellcheck method. This will result a very small number of words. These words are the probable replacements for the misspelled query word.

  3. Sort the candidate words to provide more probable suggestion as the first one. For this, we can do a ranking on the suggestion strategies. A very common error pattern get high priority at step 1. So the suggestions from that appear first in the candidate list. A more sophisticated approach would use a frequency model for the words. So candidate words that are very frequent in the language will appear as first candidate.

One thing I observed from the above approach is, in reality the candidate words after all the above steps for Malayalam is most of the time one or two. This make step 3 less relevant. At the same time, an edit distance based approach would have generated more than 5 candidate words for each misspelled word. The candidates from the edit distance based suggestion mechanism would be very diverse, meaning, they won&#8217;t have be related to the indented word at all.  The following images illustrates the difference.<figure class="wp-block-image">

[<img src="/wp-content/uploads/2018/09/image.png" alt="" class="wp-image-1513" srcset="/wp-content/uploads/2018/09/image.png 358w, /wp-content/uploads/2018/09/image-300x112.png 300w" sizes="(max-width: 358px) 100vw, 358px" />][9]<figcaption>Spelling suggestion from the morphology analyser based system.</figcaption></figure> <figure class="wp-block-image">[<img src="/wp-content/uploads/2018/09/image-2.png" alt="" class="wp-image-1515" srcset="/wp-content/uploads/2018/09/image-2.png 390w, /wp-content/uploads/2018/09/image-2-300x221.png 300w" sizes="(max-width: 390px) 100vw, 390px" />][10]<figcaption>Spelling suggestions from edit distance based candidates</figcaption></figure>

## Context sensitive spellchecking

Usually the spellchecking and suggestion are done at one word at a time. But if we know the context of the word, the spellchecking will be further useful. The context is usually the words before and after the word. An example from English is &#8220;I am in Engineer&#8221;. Here the word &#8220;in&#8221; is a correct word, but with in the context, it is wrong. To mark the word &#8220;in&#8221; wrong, and provide &#8216;an&#8217; as suggestion, one approach is ngram model of part of speech for the language. In simple words, what kind of word can appear in between a known kind of words. If we build this model for a language, that will surely tell that the a locative POS &#8220;in&#8221; before Engineer is rare or not seen before.


## The Standard Malayalam or lack thereof

How do you determine which is the &#8220;correct&#8221; or &#8220;standard&#8221; way of writing a word? Malayalam has lot of orthographic variants for words which were introduced to language as genuine mistakes that later became common words(രാപ്പകൽ/രാപകൽ, ചിലവ്/ചെലവ്), phonetic simplification(അദ്ധ്യാപകൻ/അധ്യാപകൻ, സ്വർണ്ണം/സ്വർണം), or old spelling(കർത്താവ്/കൎത്താവു്) and so on. A debate about the correctness of these words will hardly reach conclusion. For our case, this is more of an issue of selecting words in the lexicon. Which one to include, which one to exclude? It is easy to consider these debates as blocker for the progress of the project and give up: &#8220;well, these things are not decided by academics so far, so we cannot do anything about it till they make up their mind&#8221;.

I did not want to end up in that deadlock. I decided to be liberal about the lexicon. If people are using some words commonly, they are valid words the project need to recognize as much as possible. That is the very liberal definition I have. I leave the standardization discussion to linguists who care about it.<figure class="wp-block-image">

<img src="/wp-content/uploads/2018/08/spellcheck.jpg" alt="" class="wp-image-1504" srcset="/wp-content/uploads/2018/08/spellcheck.jpg 1024w, /wp-content/uploads/2018/08/spellcheck-300x182.jpg 300w, /wp-content/uploads/2018/08/spellcheck-768x465.jpg 768w" sizes="(max-width: 1024px) 100vw, 1024px" /><figcaption>The news report from Mathrubhumi daily in 2007 about my old spelling checker</figcaption></figure>

Back in 2007, when I developed the old Malayalam spellchecker, these debates came up.  Dr. P Somanathan, who helps me a lot now a days with this project, wrote about the issue of Malayalam spelling inconsistencies: &#8220;[ചരിത്രത്തെ വീണ്ടെടുക്കുക:][11]&#8221; and &#8220;[വേണം നമുക്ക് ഏകീകൃതമായ ഒരെഴുത്തുരീതി][12]&#8220;


## References

  1. _A Data-Driven Approach to Checking and Correcting Spelling Errors in Sinhala_. Asanka Wasala, Ruvan Weerasinghe, Randil Pushpananda,
    Chamila Liyanage and Eranga Jayalatharachchi [[pdf][13]] This paper discuss the phonetic similarity based strategies to create a wordlist, instead of edit distance approach.

  2. _Finite-State Spell-Checking with Weighted Language and Error_ _Models—Building and Evaluating Spell-Checkers with Wikipedia as Corpus_ Tommi A Pirinen, Krister Lindén [[pdf][14]] This paper outlines the usage of Finite state transducer technique to address the issue of infinite dictionary of morphologically rich languages. They use Finnish as the example language

  3. The Malayalam morphology analyser project by myself [https://gitlab.com/smc/mlmorph][15] is the foundation for the spellchecker.

  4. The common Malayalam spelling mistakes and confusables were presented in great depth by Renowned linguist and author [Panmana Ramachandran Nair][16] in his books  ‘തെറ്റില്ലാത്ത മലയാളം’, ‘തെറ്റും ശരിയും’, ‘ശുദ്ധ മലയാളം’ and ‘നല്ല മലയാളം’.

  5.  _Improving Finite-State Spell-Checker Suggestions with Part of Speech N-Grams_ Tommi A Pirinen and Miikka Silfverberg and Krister Lindén [[pdf][17]] &#8211; This paper discuss the context sensitive spellchecker approach.


## Where can I try the spellchecker?

If you curious about the implementation of this approach, please refer <https://gitlab.com/smc/mlmorph> and <https://gitlab.com/smc/mlmorph/wikis/Spellchecker-Plan>. Since the implementation is not complete, I will write a new article about it later. Thanks for reading!<figure class="wp-block-image">

<img src="/wp-content/uploads/2018/09/image-3.png" alt="" class="wp-image-1521" srcset="/wp-content/uploads/2018/09/image-3.png 717w, /wp-content/uploads/2018/09/image-3-300x208.png 300w" sizes="(max-width: 717px) 100vw, 717px" /><figcaption>A screenshot of Malayalam spellchecker in action. Along with incorrect words, some correct words are marked as misspelled too. This is because of the incomplete morphology analyser. As it improves, more words will be covered.</figcaption></figure>

 [1]: https://wiki.smc.org.in/Spellchecker
 [2]: https://hunspell.github.io/
 [3]: https://en.wikipedia.org/wiki/Levenshtein_distance
 [4]: https://norvig.com/spell-correct.html
 [5]: https://sourceforge.net/p/hunspell/bugs/94/
 [6]: https://en.wikipedia.org/wiki/Diphthong
 [7]: https://en.wikipedia.org/wiki/Semivowel
 [8]: https://thottingal.in/blog/2018/08/11/malayalam-morphology-analyser-status-update/
 [9]: /wp-content/uploads/2018/09/image.png
 [10]: /wp-content/uploads/2018/09/image-2.png
 [11]: http://www.chintha.com/node/3003
 [12]: http://chintha.com/node/2967
 [13]: https://www.researchgate.net/profile/Ruvan_Weerasinghe/publication/235931937_A_Data-Driven_Approach_to_Checking_and_Correcting_Spelling_Errors_in_Sinhala/links/5893524daca27231daf61993/A-Data-Driven-Approach-to-Checking-and-Correcting-Spelling-Errors-in-Sinhala.pdf
 [14]: http://www.ling.helsinki.fi/~klinden/pubs/PirinenLrec2010.pdf
 [15]: https://gitlab.com/smc/mlmorph%20
 [16]: https://panmana.com/
 [17]: http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.302.9371&rep=rep1&type=pdf