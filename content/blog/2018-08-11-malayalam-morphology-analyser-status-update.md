---
title: Malayalam morphology analyser – status update
author: Santhosh Thottingal
type: post
date: 2018-08-11T12:43:20+00:00
url: /blog/2018/08/11/malayalam-morphology-analyser-status-update/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"1bd72eea2412";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:88:"https://medium.com/@sthottingal/malayalam-morphology-analyser-status-update-1bd72eea2412";}'
categories:
  - Linguistics
  - Malayalam
  - Projects
tags:
  - mlmorph
  - morphology

---
For the last several months, I am actively working on the [Malayalam morphology analyser][1] project. In case you are not familiar with the project, my [introduction blog post][2] is a good start. I was always skeptical about the approach and the whole project as such looked very ambitious. But, now  I am almost confident that the approach is viable. I am making good progress in the project, so this is some updates on that.

## Analyser coverage statistics

Recently I added a large corpora to frequently monitor the percentage of words the analyser can parse.  The [corpora][3] was selected from two large chapters of ഐതിഹ്യമാല, some news reports, an art related essay, my own technical blog posts to have some diversity in the vocabulary.

<table class="wp-block-table">
  <tr>
    <td style="width: 437px;">
      Total words<br />
    </td>

    <td style="width: 142px;">
      15808
    </td>
  </tr>

  <tr>
    <td style="width: 437px;">
      Analysed words
    </td>

    <td style="width: 142px;">
      10532<br />
    </td>
  </tr>

  <tr>
    <td style="width: 437px;">
      Coverage
    </td>

    <td style="width: 142px;">
      66.62%<br />
    </td>
  </tr>

  <tr>
    <td style="width: 437px;">
      Time taken<br />
    </td>

    <td style="width: 142px;">
      0.443 seconds<br />
    </td>
  </tr>
</table>

This is a very encouraging. Achieving a 66% for such a morphologically rich language Malayalam is no small task. From my reading, Turkish and Finnish, languages with same complexity of morphology achieved about 90% coverage. It may be more difficult to increase the coverage for me compared to achieving this much so far. So I am planning some frequency analysis on words that are not parsed by analyser, and find some patterns to improve.

The performance aspect is also notable. Once the automata is loaded to memory, the analysis or generation is super fast. You can see that ~16000 words were analyzed under half of a second.

## Tests

From the very beginning the project was test driven. I now has 740 test cases for various word forms

## The transducer

The compiled transducer now is 6.2 MB.  The transducer is written in SFST-PL and compile using SFST. It used to be compiled using hfst, but hfst is now [severely broken][4] for SFST-PL compilation, so I switched to SFST. But the compiled transducer is read using hfst python binding.

<table class="wp-block-table">
  <tr style="height: 43px;">
    <td style="height: 43px;">
      Fst type<br />
    </td>

    <td style="height: 43px;">
      SFST
    </td>
  </tr>

  <tr style="height: 45px;">
    <td style="height: 45px;">
      arc type
    </td>

    <td style="height: 45px;">
      SFST<br />
    </td>
  </tr>

  <tr style="height: 45px;">
    <td style="height: 45px;">
      Number of states <br />
    </td>

    <td style="height: 45px;">
      200562
    </td>
  </tr>

  <tr style="height: 45px;">
    <td style="height: 45px;">
      Number or arcs<br />
    </td>

    <td style="height: 45px;">
      732268
    </td>
  </tr>

  <tr style="height: 45px;">
    <td style="height: 45px;">
      Number of final states<br />
    </td>

    <td style="height: 45px;">
      130<br />
    </td>
  </tr>
</table>

## The Lexicon

The POS tagged lexicon I prepared is from various sources like wiktionary, wikipedia(based on categories), CLDR. While developing I had to improve the lexicon several times since none of the above sources are accurate. The wiktionary also introduced a large amount of archaic or sanskrit terms to the lexicon. As of today, following table illustrates the lexicon status

<table class="wp-block-table">
  <tr style="height: 45px;">
    <td style="width: 329px; height: 45px;">
      Nouns<br />
    </td>

    <td style="width: 250px; height: 45px;">
      64763<br />
    </td>
  </tr>

  <tr style="height: 45px;">
    <td style="width: 329px; height: 45px;">
      Person names<br />
    </td>

    <td style="width: 250px; height: 45px;">
      505<br />
    </td>
  </tr>

  <tr style="height: 45px;">
    <td style="width: 329px; height: 45px;">
      Place names<br />
    </td>

    <td style="width: 250px; height: 45px;">
      2031<br />
    </td>
  </tr>

  <tr style="height: 45px;">
    <td style="width: 329px; height: 45px;">
      Postpositions<br />
    </td>

    <td style="width: 250px; height: 45px;">
      85<br />
    </td>
  </tr>

  <tr style="height: 45px;">
    <td style="width: 329px; height: 45px;">
      Pronouns<br />
    </td>

    <td style="width: 250px; height: 45px;">
      33<br />
    </td>
  </tr>

  <tr style="height: 45px;">
    <td style="width: 329px; height: 45px;">
      Quantifiers<br />
    </td>

    <td style="width: 250px; height: 45px;">
      57<br />
    </td>
  </tr>

  <tr style="height: 45px;">
    <td style="width: 329px; height: 45px;">
      Abbreviations<br />
    </td>

    <td style="width: 250px; height: 45px;">
      27<br />
    </td>
  </tr>

  <tr style="height: 45px;">
    <td style="width: 329px; height: 45px;">
      Adjectives<br />
    </td>

    <td style="width: 250px; height: 45px;">
      18<br />
    </td>
  </tr>

  <tr style="height: 45px;">
    <td style="width: 329px; height: 45px;">
      Adverbs<br />
    </td>

    <td style="width: 250px; height: 45px;">
      14<br />
    </td>
  </tr>

  <tr>
    <td style="width: 329px;">
      Affirmatives<br />
    </td>

    <td style="width: 250px;">
      6<br />
    </td>
  </tr>

  <tr>
    <td style="width: 329px;">
      Conjunctions<br />
    </td>

    <td style="width: 250px;">
      75<br />
    </td>
  </tr>

  <tr>
    <td style="width: 329px;">
      Demonstratives<br />
    </td>

    <td style="width: 250px;">
      9<br />
    </td>
  </tr>

  <tr>
    <td style="width: 329px;">
      English borrowed nouns<br />
    </td>

    <td style="width: 250px;">
      657<br />
    </td>
  </tr>

  <tr>
    <td style="width: 329px;">
      Interjections<br />
    </td>

    <td style="width: 250px;">
      36<br />
    </td>
  </tr>

  <tr>
    <td style="width: 329px;">
      Language names(nouns)<br />
    </td>

    <td style="width: 250px;">
      639<br />
    </td>
  </tr>

  <tr>
    <td style="width: 329px;">
      Affirmations and negations<br />
    </td>

    <td style="width: 250px;">
      8<br />
    </td>
  </tr>

  <tr>
    <td style="width: 329px;">
      Verbs<br />
    </td>

    <td style="width: 250px;">
      3844<br />
    </td>
  </tr>
</table>

As you can see, the lexicon is not that big. Especially it is very limited for proper nouns like names, places. I think the verb lexicon is much better. I need to find a way to expand this further.

## POS Tagging

There is no agreement or standard on the POS tagging schema to be used for Malayalam. But I refused to set this is as a blocker for the project. I defined my own POS tagging schema and worked on the analyser. The general disagreement is about naming, which is very trivial to fix using a tag name mapper. The other issue is classification of features, which I found that there no elaborate schema that can cover Malayalam.

I started referring <http://universaldependencies.org/> and provided links to the pages in it from the web interface.  But UD is also missing several tags that Malayalam require. So far I have [defined 85 tags][5]

## Challenges

The main challenge I am facing is not technical, it is linguistic. I am often challenged by my limited understanding of Malayalam grammar. Especially about the grammatical classifications, I find it very difficult to come up with an agreement after reading [several grammar books][6]. These books were written in a span of 100 years and I miss a common thread in the approach for Malayalam grammar analysis. Sometimes a logical classification is not the purpose of the author too. Thankfully, I am getting some help from Malayalam professors whenever I am stuck.

The other challenge is I hardly got any contributor to the project except some bug reporting. There is a big entry barrier to this kind of projects. The SFST-PL is not something everybody familiar with. I need to write some simple examples for others to practice and join.

I found that some practical applications on top of the morphology analyser is attracting more people. For example, the [number spellout application][7] I wrote caught the attention of many people. I am excited to present the upcoming spellchecker that I was working recently. I will write about the theory of that soon.

 [1]: http://gitlab.com/smc/mlmorph/
 [2]: http://thottingal.in/blog/2017/11/26/towards-a-malayalam-morphology-analyser/
 [3]: https://gitlab.com/smc/mlmorph/tree/master/tests
 [4]: https://github.com/hfst/hfst/issues/369
 [5]: https://gitlab.com/smc/mlmorph/blob/master/tags.json
 [6]: https://gitlab.com/smc/mlmorph/blob/master/CONTRIBUTING.md#books-to-refer
 [7]: http://thottingal.in/blog/2017/12/10/number-spellout-and-generation-in-malayalam-using-morphology-analyser/