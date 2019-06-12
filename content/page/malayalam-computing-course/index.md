---
title: Applied Malayalam Computing
author: Santhosh Thottingal
type: page
date: 2018-02-15T16:45:33+00:00

---
References, reading material and excercises for applied Malayalam computing course

## Digital Definition of Malayalam

  * What is ASCII, why such a standard was required, history of ASCII, 7-Bit and extended version. What is the problem with that? 
      * <https://en.wikipedia.org/wiki/ASCII>
      * <https://en.wikipedia.org/wiki/Extended_ASCII>
  * How other languages tried to extend ASCII? What is ISCII? How to represent Malayalam in it? History of ISCII? What is the problem with ISCII? 
      * <https://en.wikipedia.org/wiki/ISCII>
  * How many languages are in the world? How many in India? How many characters are in each language? What about chinese? Which is most spoken language in the world? How many people speak English in the world? 
      * <https://www.ethnologue.com/>
      * Who documents all these languages? See <https://en.wikipedia.org/wiki/SIL_International>
  * What is unicode? History, Format, Varying length encoding. 
      * <https://en.wikipedia.org/wiki/Unicode>
      * <https://en.wikipedia.org/wiki/UTF-8>
  * Malayalam letters in Unicode. Familiarise with Malayalam code points. How many bytes? What are all these letters that I never seen before. Why they are encoded? Why vowel signs are seperate? Why two AU signs? Why no അം in the chart? Why no ക്ക? 
      * Open Character map application in Linux desktop &#8211; gucharmap or kcharselect. Explore the scripts, code points. What is hexadecimal value of അ? What is xml entity?
      * Excercise: Write &#8216;cat&#8217; in a text file and save. Without checking, try to predict the file size. Do the same with a malayalam word like കടല. Explain the file size.
  * What is byte, unicode codepoint and അക്ഷരം? How many അക്ഷരം in word മലയാളം? How many code points? Why the difference? 
      * How do you calculate the word length of a string, especially if it is in Malayalam. Write a program in your favorite language.
      * Why do you want to know to predict byte length of a word? Some examples in real world applications.
      * Tried writing a hello-word program instead of Hello world with നമസ്കാരം? Try it in your favorite language.
      * When twitter allows 280 characters in Malayalam, what does it mean? Can you write 280 അക്ഷരങ്ങൾ?
  * What is a conjuct? How conjucts are formed? What connects them? Try out various conjucts in Malayalam. 
      * How do you write ക്ക, ങ്ക, ന്റ, ഞ്ച, റ്റ, ണ്ട, മ്പ etc. What is റ്റ actually?
      * What are the code points in your name? How many bytes are there in your name?
      * How many conjuncts can be there in Malayalam? <https://github.com/santhoshtr/malayalam-conjuncts>
  * What is a syllable? How is it related to അക്ഷരം? How many code points can be in a syllable? 
      * Try joining consonants by Chandrakkala. What is the longest familiar conjunct you can create?
      * A trick to find out syllables using curser.
      * How does content selection works in Malayalam? Try out and observe its nature in your favorite editor, browser.
  * What are these chillus? What is the nature of Chillu? 
      * Heard about Atomic chillu and non-atomic chillu?
      * What is ZWJ? <https://en.wikipedia.org/wiki/Zero-width_joiner>
  * Conjunct formation &#8211; preventing it &#8211; some examples, ZWNJ 
      * <https://en.wikipedia.org/wiki/Zero-width_non-joiner>
  * Observe the way syllables are formed in Malayalam. Can a vowel appear at the end of a word? Can a vowel sign repeat? Why vowel signs has this dotted circle? What are the special cases where a vowel sign can repeat? 
      * The case of Samvruthokaram. What is the difference between കാൽ, കാല്, കാലു് . Observe the difference in pronunciation.
      * u-sign and anuswaram
      * എടാാാാ &#8211; why this is a special case? How many ാ signs you can write repeatedly?
      * 8ാം &#8211; What is this special case?
  * Can we try to model a syllable of Malayalam? Remember the parsers, grammars, lex, yacc you practiced in Compiler theory 
      * <http://thottingal.in/blog/2017/05/27/a-formal-grammar-for-malayalam-syllables/>
      * <https://phon.smc.org.in/syllables/>
      * <https://github.com/santhoshtr/malayalam-syllable-analyser>
  * A practical use of Syllable splitting &#8211; Hyphenation. what is hyphenation? 
      * Try automatic hyphenation in Malayalam using Libre office
      * Observe the hyphenation in a Malayalam news paper?
      * How poeple do it if computers don&#8217;t help?
      * Why you did not notice this large spaces in un-hyphenated text in English?
      * How does hyphenation algorithm works <http://thottingal.in/blog/2008/12/13/hyphenation-of-indian-languages-and-openoffice/>
      * See how hyphenation is implemented in various applications <http://thottingal.in/blog/tag/hyphenation/> 

### Additional discussion:

  * Who works on Malayalam computing? What is the use of studying Computational linguistics?
  * How I got involved into Malayalam computing?
  * Heard about free software? What is the importance of it in Malayalam computing?

### Additional Reading

  * Unicode chapter for Malayalam &#8211; find it from Unicode website
  * Read a traditional grammar book like Keralapanineeyam, it is online, search and find out. Find out how it explains the Malayalam letters. Try to connect it with the unicode chart.
  * Students, teachers, people from all sectors of society are writing on Malayalam wikipedia. Have you visited it yet?
  * Have a look at Malayalam wikisource.
  * What is Unicode version? What is the latest Unicode version? Was there any changes to Malayalam in latest unicode version? <http://thottingal.in/blog/2017/06/22/unicode-10-malayalam/>
  * Do you know our beloved coconut has a unicode code point? What is emoji?

## Inputting Malayalam

  * Do you know typing in Malayalam? Do you writing your name using Pen? 
      * How typing is different from writing? Discuss the differences.
      * Understanding the need to differentiate between data and what you see.
      * What happens when you write റ്റ as ററ?
      * Can you type ദുഃഖം as ദു:ഖo?
  * Do you write in പഴയ ലിപി or പുതിയ ലിപി? How do you differentiate them? Are we going to type in പഴയ ലിപി or പുതിയ ലിപി? 
      * How did this two(?) different orthography come into existence?
      * How people use typewriters in Malayalam?
  * What is an input method? Different methods of inputting. What happens internally?
  * Keyboard based: One to one keymapping, phonetic, Transliteration based input methods
  * Voice recognition based, Handwriting recognition based inputmethod 
      * How do they differ from keyboard(physical/virtual) based input methods? Discuss pros and cons of both
  * Illustration of how do you install, configure and choose input methods, 
      * <http://malayalam.kerala.gov.in/index.php/InputMethods>
      * Inscript layout <img class="aligncenter" src="https://upload.wikimedia.org/wikipedia/mediawiki/c/c2/MalayalamInscript.jpg" />
      * Inscript in Ubuntu Video: <https://www.youtube.com/watch?v=8HfCjFfPW0I>
      * Swanalekha in Ubuntu <https://www.youtube.com/watch?v=aBF2kyXB8v8>
      * Windows input methods &#8211; Inscript, <https://www.google.com/inputtools/> 
  * Illustration of typing in mobile phones. Detailed tutorial videos to be shared as additional material 
      * Indic keyboard by SMC &#8211; has Inscript and swanalekha <https://play.google.com/store/apps/details?id=org.smc.inputmethod.indic>
      * Google Indic keyboard <https://play.google.com/store/apps/details?id=com.google.android.apps.inputmethod.hindi>
  * Auto completion, Cursor behavior
  * Conjuncts and conjunct prevention 
      * ZWJ and ZWNJ

### Additional Reading

  * What is ന്റ, റ്റ actually? Read and find their description in Keralapanineeyam
  * How these two special conjucts work in computers? 
      * [https://blog.smc.org.in/nta-rendering-rules/ ][1]
      * <https://blog.smc.org.in/tta-rendering/>
  * What happens when the shape of letter alone considered in inputting? Read this story about voters list <https://blog.smc.org.in/electoral-malayalam-mistakes/>
  * You will need to install fonts before you learn typing in Malayalam. Refer <https://blog.smc.org.in/fonts-in-ubuntu/>

### Practical notes:

  * The moment you start using computers with Malayalam, you will start realizing some of the practical aspects that prevent you from &#8220;Ideal&#8221; Malayalam. Things you need to check before cursing Malayalam technology: 
      * Which operating system you are using? Whether it is old version or new?
      * What are the fonts installed in your computer? How are they configured?
      * Are these fonts latest or not?
      * Are you typing correctly
      * Discuss why old operating systems cannot display Malayalam properly and need for having latest operating systems

## Rendering of Malayalam

  * Digital definition of Malayalam using unicode &#8211; Recap
  * Visualizing the digital data in Malayalam using fonts

### Complex script features of Malayalam

  * Conjunct formation
  * Reordering of glyph sequence: vowel signs െ, േ, ൊ, ോ
  * Formation of consonant signs: ല്ല, വ്യ,
  * Reordering of consonant signs: ക്ര
  * Combination of signed consonants, vowels and conjuncts: ന്ത്ര്യ , സ്ത്രീ
  * Effects of orthography variation and rendering

### Fonts

  * Glyph drawings + Rendering rules

### Rendering Engine

  * Converting Unicode text to glyph indices and positions
  * eg: Harfbuzz
  * Harfbuzz Developer &#8211; [Behdad Esfahbod][2]
  * Many applications use  Harfbuzz for text rendering

### Text Layout Engine

  * Takes care of line breaks, paragraph formatting etc.
  * eg: Pango

### Presentation Slides:

[https://thottingal.in/presentations/Malayalam\_Text\_Rendering_GECSKP.pdf][3]

## Digital Typography

## Searching and sorting

## Word structure and morphology

 [1]: https://blog.smc.org.in/nta-rendering-rules/
 [2]: http://behdad.org/
 [3]: https://thottingal.in/presentations/Malayalam_Text_Rendering_GECSKP.pdf