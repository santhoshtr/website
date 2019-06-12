---
title: Malayalam Named Entity Recognition using morphology analyser
author: Santhosh Thottingal
type: post
date: 2019-03-10T09:25:42+00:00
url: /blog/2019/03/10/malayalam-named-entity-recognition-using-morphology-analyser/
featured_image: /wp-content/uploads/2019/03/Screenshot_20190310_144018.png
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";N;s:10:"author_url";N;s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";N;s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";N;}'
categories:
  - Linguistics
  - Malayalam
  - Projects
tags:
  - mlmorph
  - morphology
  - named entity recognition

---
[Named Entity Recognition][1], a task of identifying and classifying real world objects such as persons, places, organizations from a given text is a well known NLP problem. For Malayalam, [there were several research papers][2] published on this topic, but none are functional or [reproducible research][3].

The morphological characteristics of Malayalam has been always a challenge to solve this problem. When the named entities appear in an inflected or agglutinated complex word, the first step is to analyse such words and arrive at the root words.

As the [Malayalam morphology analyser][4] is progressing well, I attempted to build a first version of Malayalam NER on top of it. Since mlmorph gives the POS tagging and analysis, there is not much to do in NER. We just need to look for tags corresponding to proper nouns and report.

You can try the system at <https://morph.smc.org.in/ner><figure class="wp-block-image">

<a href="https://morph.smc.org.in/ner" target="_blank" rel="noreferrer noopener"><img src="/wp-content/uploads/2019/03/Screenshot_20190310_144018.png" alt="" class="wp-image-1616" srcset="/wp-content/uploads/2019/03/Screenshot_20190310_144018.png 827w, /wp-content/uploads/2019/03/Screenshot_20190310_144018-300x197.png 300w, /wp-content/uploads/2019/03/Screenshot_20190310_144018-768x504.png 768w" sizes="(max-width: 827px) 100vw, 827px" /></a><figcaption>Malayalam named entity recognition example using https://morph.smc.org.in/ner</figcaption></figure>

### Known Limitations

  * The recognition is limited by the current lexicon of mlmorph. To recognize out of lexicon entities, a POS guesser would be needed. But this is a general problem not limited to NER. A morphology analyser should also have a POS guesser. In other words as the mlmorph improves, this system also improves automatically.
  * Currently the recognition is at word level. But sometimes, the entities are written in multiple consecutive words. To resolve that we will need to write a wrapper on top of word level detection system.
  * The current system is a javascript wrapper on top the mlmorph analyse api. I think NER deserve [its own api][5].

 [1]: https://en.wikipedia.org/wiki/Named-entity_recognition
 [2]: https://scholar.google.co.in/scholar?hl=en&as_sdt=0%2C5&q=malayalam+named+entity+recognition&btnG=&oq=mala
 [3]: https://en.wikipedia.org/wiki/Reproducibility#Reproducible_research
 [4]: https://morph.smc.org.in
 [5]: https://gitlab.com/smc/mlmorph/issues/48