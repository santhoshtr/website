---
title: Translating HTML content using a plain text supporting machine translation engine
author: Santhosh Thottingal
type: post
date: 2015-02-09T11:54:12+00:00
url: /blog/2015/02/09/translating-html-content-using-a-plain-text-supporting-machine-translation-engine/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"cb83e0a81ed8";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:126:"https://medium.com/@sthottingal/translating-html-content-using-a-plain-text-supporting-machine-translation-engine-cb83e0a81ed8";}'
categories:
  - i18n
  - Projects
tags:
  - algorithms
  - machine translation
  - mediawiki
  - wikimedia
  - wikipedia

---
At Wikimedia, I am currently working on [ContentTranslation][1] tool, a machine aided translation system to help translating articles from one language to another. The tool is [deployed in several wikipedias now][2] and people are creating new articles sucessfully.

The ContentTranslation tool provides machine translation as one of the translation tool, so that editors can use it as an initial version to improve up on. We used [Apertium][3] as machine translation backend and planning to support more machine translation services soon.

A big difference in editing using ContentTranslation, is it does not involve Wiki Markup. Instead, editors can edit rich text. Basically it is contenteditable HTML elements. This also means, what you translate is HTML sections of articles.

{{< youtube nHTDeKW3hV0 >}}

The HTML contains all possible markups that a typical Wikipedia article has. This means, the machine translation is on HTML content. But, not all MT engines support HTML content.

Some MT engines, such as Moses, output subsentence alignment information directly, showing which source words correspond to which target words.

<pre>$ echo 'das ist ein kleines haus' | moses -f phrase-model/moses.ini -t
this is |0-1| a |2-2| small |3-3| house |4-4|
</pre>

The Apertium MT engine does not translate formatted text faithfully. Markup such as HTML tags is treated as a form of blank space. This can lead to semantic changes (if words are reordered), or syntactic errors (if mappings are not one-to-one).

<pre>$ echo 'legal &lt;b&gt;persons&lt;/b&gt;' | apertium en-es -f html
Personas &lt;b&gt;legales&lt;/b&gt;</pre>

<pre>$ echo 'I &lt;b&gt;am&lt;/b&gt; David' | apertium en-es -f html
Soy&lt;/b&gt; David
</pre>

Other MT engines exhibit similar problems. This makes it challenging to provide machine translations of formatted text. This blog post explains how this challenge is tackled in ContentTranslation.

As we saw in the examples above, a machine translation engine can cause the following errors in the translated HTML. The errors are listed in descending order of severity.

  1. _Corrupt markup_ &#8211; If the machine translation engine is unaware of HTML structure, they can potentially move the HTML tags randomly, causing corrupted markup in the MT result
  2. _Wrongly placed annotations_ &#8211; The two examples given above illustrate this. It is more severe if content includes links and link targets were swapped or randomly given in the MT output.
  3. _Missing annotations_ &#8211; Sometimes the MT engine may eat up some tags in the translation process.
  4. _Split annotations_ -During translation a single word can be translated to more than one word. If the source word has a mark up, say <a> tag. Will the MT engine apply the <a> tag wrapping both words or apply to each word?

All of the above issues can cause bad experience to translators.

Apart from potential issues with markup transfer, there is another aspect about sending HTML content to MT engines. Compared to plain text version of a paragraph, HTML version is bigger in terms of size(bytes). Most of these extra addition is tags and attributes which should be unaffected by the translation. This is unnecessary bandwidth usage. If the MT engine is a metered engine(non-free, API access is measured and limited), we are not being economic.

An outline of the algorithm we used to transfer markups from source content to translated content is given below.

  1. The input HTML content is translated into a [LinearDoc][4], with inline markup (such as bold and links) stored as attributes on a linear array of text chunks. This linearized format is convenient for important text manipulation operations, such as reordering and slicing, which are challenging to perform on an HTML string or a DOM tree.
  2. Plain text sentences (with all inline markup stripped away) are sent to the MT engine for translation.
  3. The MT engine returns a plain text translation, together with subsentence alignment information (saying which parts of the source text correspond to which parts of the translated text).
  4. The alignment information is used to reapply markup to the translated text.

This make sure that MT engines are translating only plain text and mark up is applied as a post-MT processing.

Essentially the algorithm does a fuzzy match to find the target locations in translated text to apply annotations. Here also content given to MT engines is plain text only.

The steps are given below.

  1. For the text to translate, find the text of inline annotations like bold, italics, links etc. We call it subsequences.
  2. Pass the full text and subsequences to the plain text machine translation engine. Use some delimiter so that we can do the array mapping between source items(full text and subsequences) and translated items.
  3. The translated full text will have the subsequences somewhere in the text. To locate the subsequence translation in full text translation, use an approximate search algorithm
  4. The approximate search algorithm will return the start position of match and length of match. To that range we map the annotation from the source html.
  5. The approximate match involves calculating the edit distance between words in translated full text and translated subsequence. It is not strings being searched, but ngrams with n=number of words in subsequence. Each word in ngram will be matched independently.

To understand this, let us try the algorithm in some example sentences.

  1. Translating the Spanish sentence `<p>Es <s>además</s> de Valencia.</p>` to Catalan: The plain text version is `Es además de Valencia.`. And the subsequence with annotation is  `además` . We give both the full text and subsequence to MT. The full text translation is `A més de València.`. and the word  `además`  is translated as `a més`. We do a search for `a més` in the full text translation. The search will be successfull and the <s> tag will be applied, resulting `<p>És <s>a més</s> de València.</p>`.The seach performed in this example is plain text exact search. But the following example illustrate why it cannot be an exact search.
  2. Translating an English sentence `<p>A <b>Japanese</b> <i>BBC</i> article</p>` to Spanish. The full text translation of this is `Un artículo de BBC japonés`  One of the subsequence`Japanese` will get translated as `Japonés`. The case of `J` differs and search should be smart enough to identify `japonés` as a match for `Japonés.` The word order in source text and translation is already handled by the algorithm. The following example will illustrate that is not just case change that happens.
  3. Translating `<p>A <b>modern</b> Britain.</p>` to Spanish. The plain text version get translated as `Una Gran Bretaña moderna`.  and the word with annotation modern get translated as  `Moderno`. We need a match for `moderna` and `Moderno`. We get `<p>Una Gran Bretaña <b>moderna</b>.</p>`. This is a case of word inflection. A single letter at the end of the word changes.
  4. Now let us see an example where the subsequence is more than one word and the case of nested subsequences. Translating English sentence `<p>The <b>big <i>red</i></b> dog</p>` to Spanish. Here, the subsequnce `Big red` is in bold, and inside that, the red is in italics. In this case we need to translate the full text, sub sequence `big red` and `red`. So we have,   El perro rojo grande as full translation, Rojo grande and Rojo as translations of sub sequences. `Rojo grande` need to be first located and bold tag should be applied. Then search for `Rojo` and apply Italic. Then we get `<p>El perro <b><i>rojo</i> grande</b></p>.`
  5. How does it work with heavily inflected languages like Malayalam? Suppose we translate <p>I am from <a href=&#8221;x&#8221;>Kerala<a></p> to Malayalam. The plain text translation is ഞാന്‍ കേരളത്തില്‍ നിന്നാണു്. And the sub sequence Kerala get translated to കേരളം. So we need to match കേരളം and കേരളത്തില്‍. They differ by an edit distance of 7 and changes are at the end of the word. This shows that we will require language specific tailoring to satisfy a reasonable output.

The algorithm to do an approximate string match can be a simple [levenshtein distance][5] , but what would be the acceptable edit distance? That must be configurable per language modules. And the following example illustrate that just doing an edit distance based matching wont work.

Translating `<p>Los Budistas no <b>comer</b> carne</p>` to English. Plain text translation is `The Buddhists not eating meat.` `Comer` translates as `eat`. With an edit distance approach, `eat` will match more with `meat` than `eating`. To address this kind of cases, we mix a second criteria that the words should start with same letter. So this also illustrate that the algorithm should have language specific modules.

Still there are cases that cannot be solved by the algorithm we mentioned above. Consider the following example

Translating `<p>Bees <b>cannot</b> swim</p>.` Plain text translation to Spanish is `Las Abejas no pueden nadar` and the phrase `cannot` translates as `Puede no`. Here we need to match `Puede no` and`no pueden` which of course wont match with the approach we explained so far.

To address this case, we do not consider sub sequence as a string, but an n-gram where n= number of words in the sequence. The fuzzy matching should be per word in the n-gram and should not be for the entire string. ie. `Puede` to be fuzzy matched with `no` and `pueden`, and `no` to be fuzzy matched wth `no` and `pueden`&#8211; left to right, till a match is found. This will take care of word order changes as welll as inflections

Revisiting the 4 type of errors that happen in annotation transfer, with the algorithm explained so far, we see that in worst case, we will miss annotations. There is no case of corrupted markup.

As and when ContentTranslation add more language support, language specific customization of above approach will be required.

You can see the algorithm in action by watching the video linked above. And here is a ascreenshot:

<figure style="width: 1028px" class="wp-caption aligncenter"><img class="" src="https://upload.wikimedia.org/wikipedia/mediawiki/a/a6/Cx-annotation-mapping.png" alt="" width="1028" height="219" /><figcaption class="wp-caption-text">Translation of a paragraph from Palak Paneer article of Spanish Wikipedia to Catalan. Note the links, bold etc applied in correct position in translation at right side</figcaption></figure>

If anybody interested in the code, See <https://github.com/wikimedia/mediawiki-services-cxserver/tree/master/mt> &#8211; It is a javascript module in a nodejs server which powers ContentTranslation.

Credits: **David Chan**, my colleague at Wikimedia,  for extensive help on providing lot of example sentences with varying complexity to fine tune the algorithm. The [LinearDoc][4] model that make the whole algorithm work is written by him. David also wrote an algorithm to handle the HTML translation using an upper casing algorithm, you can [read it from here][6]. The approximation based algorithm explained above replaced it.

 [1]: https://www.mediawiki.org/wiki/Content_translation
 [2]: https://blog.wikimedia.org/2015/01/20/try-content-translation/
 [3]: https://blog.wikimedia.org/2014/11/14/apertium-and-wikimedia-a-collaboration-that-powers-the-content-translation-tool/
 [4]: https://www.mediawiki.org/wiki/Content_translation/LinearDoc
 [5]: https://en.wikipedia.org/wiki/Levenshtein_distance
 [6]: https://www.mediawiki.org/wiki/Content_translation/Markup#Deriving_subsentence_alignment_from_case_change_observations