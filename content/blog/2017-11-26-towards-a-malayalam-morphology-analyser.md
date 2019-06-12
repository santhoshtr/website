---
title: Towards a Malayalam morphology analyser
author: Santhosh Thottingal
type: post
date: 2017-11-26T06:50:45+00:00
url: /blog/2017/11/26/towards-a-malayalam-morphology-analyser/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"31ea03457756";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:84:"https://medium.com/@sthottingal/towards-a-malayalam-morphology-analyser-31ea03457756";}'
categories:
  - Linguistics
  - Malayalam
  - Misc
  - Projects
  - SMC
tags:
  - morphology

---
Malayalam is a highly [inflectional][1] and [agglutinative][2] language. This has posed a challenge for all kind of language processing. Algorithmic interpretation of Malayalam&#8217;s words and their formation rules continues to be an untackled problem.  My own attempts to study and try out some of these characteristics was big failure in the past. Back in 2007, when I tried to develop a [spellchecker for Malayalam][3], the infinite number of words this language can have by combining multiple words together and those words inflected was a big challenge. The dictionary based spellechecker was a failed attempt. I had [documented these issues][4].

I was busy with my type design  projects for last few years, but continued to search for the solution of this problem. Last year(2016), during [Google summer of code mentor summit][5] at Google campus, California, mentors working on language technology had a meeting and I explained this challenge. It was suggested that I need to look at Finnish, Turkish, German and such similarly inflected and agglutinated languages and their attempts to solve this. So, after the meeting, I started studying some of the projects &#8211; [Omorfi][6] for Finnish, [SMOR][7] for German, [TRMorph][8] for Turkish. All of them use [Finite state transducer][9] technology.

There are multiple FST implementation for linguistic purposes &#8211; [foma][10], [XFST][11]{.new} &#8211; The Xerox Finite State Toolkit, [SFST][12]{.new} &#8211; The Stuttgart Finite State Toolkit and [HFST][13] &#8211; The Helsinki Finite State Toolkit. I chose SFST because of good documentation(in English) and availability of reference system(TRMorph, SMOR).  And now we have **mlmorph  &#8211; Malayalam morphology analyser** project in development here:  <https://github.com/santhoshtr/mlmorph>

I will document the system in details later. Currently it is progressing well. I was able to solve arbitrary level agglutination with inflection. Nominal inflection and Verbal inflections are being solved one by one. I will try to provide a rough high level outline of the system as below.

  * **Lexicon:** This is a large collection of root words, collected and manually curated, classified into various part of speech categories. So the collection is seperated to nouns, verbs, conjunctions, interjections, loan words, adverbs, adjectives, question words, affirmatives, negations and so on. Nouns themselves are divided to pronouns, person names, place names, time names, language names and so on. Each of them get a unique tag and will appear when you analyse such words.
  * **Morphotactics:** Morphology rules about agglutination and inflection. This includes agglutination rules based on Samasam(സമാസം) &#8211; accusative, vocative, nominative, genitive, dative, instrumental, locative and sociative. Also plural inflections, demonstratives(ചുട്ടെഴുത്തുകൾ) and indeclinables(അവ്യയങ്ങൾ). For verbs, all possible tense forms, converbs, adverbal particles, concessives(അനുവാദകങ്ങൾ) and so on.
  * **Phonological rules**: This is done on top of the results from morphotactics. For example, from morphotactics, ആൽ<noun>, തറ<noun>, ഇൽ<locative> will give ആൽ<noun>തറ<noun>ഇൽ<locative>. But after the phonological treatment it becomes, ആൽത്തറയിൽ with consonant duplication after ൽ, and ഇ becomes യി.
  * Automata definition for the above: This is where you say nouns can be concatenated any number of times, following optional inflection etc in regular expression like language.
  * Programmable interface, web api, command line tools, web interface for demos.

What it can do now? Following screenshot is from its web demo. You can see complex words get analysed to its stems, inflections, tense etc.

[<img class="aligncenter size-full wp-image-1179" src="/wp-content/uploads/2017/11/Spectacle.jd3382.png" alt="" width="744" height="489" srcset="https://thottingal.in/wp-content/uploads/2017/11/Spectacle.jd3382.png 744w, https://thottingal.in/wp-content/uploads/2017/11/Spectacle.jd3382-300x197.png 300w" sizes="(max-width: 744px) 100vw, 744px" />][14]Note that this is bidirectional. You can give a complex word, it will give analysis. Similarly when you give root words and POS tags, it will generate the complex word from it. For example:

**ആടുക<v><past>കൊണ്ടിരിക്കുക<v><present>** =>  **ആടിക്കൊണ്ടിരിക്കുന്ന**

Covering all possible word formation rules for Malayalam is an ambitious project, but let us see how much we can achieve. Now the effort is more on linguistic aspects of Malayalam than technical. I will update about the progress of the system here.

&nbsp;

&nbsp;

 [1]: https://en.wikipedia.org/wiki/Inflectional_language
 [2]: https://en.wikipedia.org/wiki/Agglutinative_language
 [3]: http://thottingal.in/blog/2007/05/28/malayalam-spellchecker/
 [4]: http://thottingal.in/documents/MalayalamComputingChallenges.pdf
 [5]: https://sites.google.com/site/2016gsocmentorsummit/home
 [6]: https://github.com/flammie/omorfi
 [7]: http://www.cis.uni-muenchen.de/~schmid/tools/SMOR/
 [8]: https://github.com/coltekin/TRmorph
 [9]: https://en.wikipedia.org/wiki/Finite_state_transducer
 [10]: http://thottingal.in/blog/2014/05/17/navigator-languages-is-coming/
 [11]: https://en.wikipedia.org/w/index.php?title=XFST&action=edit&redlink=1 "XFST (page does not exist)"
 [12]: http://www.ims.uni-stuttgart.de/projekte/gramotron/SOFTWARE/SFST.html "SFST (software) (page does not exist)"
 [13]: https://en.wikipedia.org/wiki/HFST ""
 [14]: /wp-content/uploads/2017/11/Spectacle.jd3382.png