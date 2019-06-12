---
title: Malayalam morphology analyser – First release
author: Santhosh Thottingal
type: post
date: 2018-11-25T10:55:36+00:00
url: /blog/2018/11/25/malayalam-morpholoy-analyser-first-release/
featured_image: /wp-content/uploads/2018/11/ankush-minda-545239-unsplash-e1543143244280.jpg
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"67dc82d6be8a";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:87:"https://medium.com/@sthottingal/malayalam-morpholoy-analyser-first-release-67dc82d6be8a";}'
categories:
  - Linguistics
  - Projects
  - SMC
tags:
  - mlmorph
  - morphology
  - python

---
I am happy to announce the first version of Malayalam morphology analyser.

After two years of development, I tagged [version 1.0.0][1] . 

## In this release

In this release, mlmorph can analyse and generate malayalam words using the morpho-phonotactical rules defined and based on a lexicon. We have a test corpora of Fifty thousand words and **82%** of the words in it are recognized by the analyser.

A python interface is released to make the usage of library very easy for developers. The library is available in pypi.org &#8211; <https://pypi.org/project/mlmorph/> Installing it is very easy:

Installing it is very easy:

<pre class="wp-block-code"><code>pip install mlmorph</code></pre>

It avoids all difficulties of compiling the sfst formalism and installing the required hfst, sfst packages.

For detailed python api documentation and command line utility refer <https://pypi.org/project/mlmorph/>

## Next

There are lot of known limitations with the current release. I plan to address them in future releases.

  * Expand lexicon further: The current lexicon was compiled by testing various text and adding missing words found in it. Preparing the coverage test corpora also helped to increase the lexicon. But it still need more improvement

  * Many language specific constructs which are commonly used, but consisting of multiple conjunctions, adjectives are not well covered. Some examples are മറ്റൊരു, പിന്നീട്, അതുപോലെത്തന്നെ, എന്നതിന്റെ etc.
  * Optimizing the weight calculation: As the lexicon size is increased, many rarely used words can become alternate parts in agglutination of the words. For example, പാലക്കാട് can have an analysis of പാല്, അക്ക്, ആട് -Even though this is grammatically correct, it should get less preference than പാലക്കാട്<proper noun>.
  * Standardization of POS tags: mlmorph has its own pos tags definition. These tags need documentation with examples. I tried to use [universal dependencies][2] as much as possible, but it is not enough to cover all required tags for malayalam.
  * Documentation of formalism and tutorials for developers. So far I am the only developer for the project, which I am not happy about. The learning curve for this project is too steep to attract new developers. Above average understanding of Malayalam grammar is a difficult requirement too. I am planning to write down some tutorials to help new developers to join.


## Applications

The project is meaningful only when practical applications are built on top of this.

  * A **spellchecker** based on mlmorph is being developed. See <https://gitlab.com/smc/mlmorph-spellchecker>. It is also published in pypi.org <https://pypi.org/project/mlmorph-spellchecker/>. The spellchecker also inherits the known limitations of the mlmorph as explained above.

  * A web interface for the morphology analyser and generator is available at <https://morph.smc.org.in> based on a Flask based web application <https://gitlab.com/smc/mlmorph-web>
  * The web interface of the spellchecker is available at <https://morph.smc.org.in/spellchecker>
  * A Libreoffice extension for Malayalam spelling check is being prepared at <https://gitlab.com/smc/mlmorph-libreoffice-spellchecker>
  * A number spellout demo application that uses the mlmorph web api is available at <https://codepen.io/santhoshtr/pen/MONZow/>

 [1]: https://gitlab.com/smc/mlmorph/tags/Version1.0.0
 [2]: http://universaldependencies.org/