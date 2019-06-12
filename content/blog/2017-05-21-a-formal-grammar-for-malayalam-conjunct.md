---
title: A formal grammar for Malayalam conjunct
author: Santhosh Thottingal
type: post
date: 2017-05-21T05:49:44+00:00
url: /blog/2017/05/21/a-formal-grammar-for-malayalam-conjunct/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"cff82f17c1ee";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:84:"https://medium.com/@sthottingal/a-formal-grammar-for-malayalam-conjunct-cff82f17c1ee";}'
categories:
  - Linguistics
  - Malayalam
tags:
  - Conjunct
  - grammar
  - Malayalam
  - PEG

---
In Malayalam a conjunct(കൂട്ടക്ഷരം) is formed by combining 2 or more consonants by Virama(ചന്ദ്രക്കല).  &#8220;ക്ക&#8221; is a conjunct with 2 consonants, formed by ക + ് + ക. സ്ത്ര is a conjuct with 3 consonants സ+ ് + ത +്+ ര. ന്ത്ര്യ  is a conjunct with 4 consonants &#8211; ന + ് + ത + ് + ര + ് + യ. Conjuncts with more than 4 consonant is rare. ഗ്ദ്ധ്ര്യ is formed by 5 consonants.

Can we define this formation in a [formal grammar][1]?

Let us try. For the simplicity, I am using [Parser Expression Grammar][2] formalism since we can quickly write a parser for that to test and evaluate.

Before that let us define the conjuct in plain English in a bit more concise and unambigous way.

> **Conjunct**: A **Consonant** combined with another **Conjunct** or **Consonant** using **Virama**

We need to define Consonant and Virama also.

  * **Virama**:   ്.
  * **Consonants** &#8211; Any of the set [കഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരലവശഷസഹളഴറ]

Writing this in PEG syntax



You can try this in a PEG evaluator and try various conjucts to see if they all getting parsed. Use <https://pegjs.org/online>, copy paste the above grammar try inputs like ന്ത്ര്യ.

<img class="aligncenter wp-image-946 size-large" src="/wp-content/uploads/2017/05/photo_2017-05-21_11-23-46-1024x329.jpg" alt="" width="840" height="270" srcset="/wp-content/uploads/2017/05/photo_2017-05-21_11-23-46-1024x329.jpg 1024w, /wp-content/uploads/2017/05/photo_2017-05-21_11-23-46-300x96.jpg 300w, /wp-content/uploads/2017/05/photo_2017-05-21_11-23-46-768x247.jpg 768w, /wp-content/uploads/2017/05/photo_2017-05-21_11-23-46-1200x386.jpg 1200w, /wp-content/uploads/2017/05/photo_2017-05-21_11-23-46.jpg 1201w" sizes="(max-width: 840px) 100vw, 840px" />

Let us look at the definition again.

<pre>Conjunct = Consonant Virama (Conjunct / Consonant )</pre>

This is a [tail recursion][3]. Meaning, The **Conjuct ** get expanded towards the end of the expression. Can we rewrite this using a [Left recursion][4]? We can. see:

<pre>Conjunct = (Conjunct / Consonant ) Virama Consonant</pre>

This will have the same result of our previous expression. We can also rewrite our plain English definition as well accordingly:

**Conjunct**: A **Conjunct** or **Consonant**  combined with another **Consonant** using **Virama**

There is a problem with this new definition since it is [Left recursion][4], depending up on the parser implementation, it can cause infinite recursion. The PEGjs parser which we used above for testing and evaluation does not support Left recursion since it is a top down parser([recursive descent parser][5]). You can try modify the above pegjs grammar in the online evaluation tool, you will see the parser warns about ininite recursion.

But if the parser is capable of avoiding this issue, nothing stops you to write the grammar using Left recursion. [LALR parsers][6] such as GNU Bison can very well support left recursion. But big issue here is GNU Flex/Bison used for writing such grammars does not support Unicode!. You can make it working by doing some low level byte manipulation. I did not try.

One more thing: I wrote ( Conjunct / Consonant ) instead of (Consonant / Conjunct ). The order was chosen intentionally since the matches are done left to right. Since a Conjunct anyway start with a Consonant, the parsing will proceed with that path. We avoid it by using the Conjunct, Consonant order.

 [1]: https://en.wikipedia.org/wiki/Formal_grammar
 [2]: https://en.wikipedia.org/wiki/Parsing_expression_grammar
 [3]: https://en.wikipedia.org/wiki/Tail-recursion&redirect=no
 [4]: https://en.wikipedia.org/wiki/Left_recursion
 [5]: https://en.wikipedia.org/wiki/Recursive_descent_parser
 [6]: https://en.wikipedia.org/wiki/LALR_parser