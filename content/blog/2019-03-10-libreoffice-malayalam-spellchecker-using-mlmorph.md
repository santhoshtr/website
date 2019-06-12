---
title: LibreOffice Malayalam spellchecker using mlmorph
author: Santhosh Thottingal
type: post
date: 2019-03-10T10:16:41+00:00
excerpt: A few months back, I wrote about the spellchecker based on Malayalam morphology analyser. I was also trying to intergrate that spellchecker with LibreOffice. It is not yet ready for any serious usage, but if you are curious and would like to help me in its further development, please read on.
url: /blog/2019/03/10/libreoffice-malayalam-spellchecker-using-mlmorph/
featured_image: /wp-content/uploads/2019/03/mlmorph-libreoffice-spellcheck.png
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";N;s:10:"author_url";N;s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";N;s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";N;}'
categories:
  - Linguistics
  - Projects
  - SMC
tags:
  - libreoffice
  - mlmorph
  - spell checker

---
A few months back, I [wrote about the spellchecker][1] based on [Malayalam morphology analyser][2]. I was also trying to intergrate that spellchecker with LibreOffice. It is not yet ready for any serious usage, but if you are curious and would like to help me in its further development, please read on.<figure class="wp-block-embed is-type-rich is-provider-thoughtingal">

<div class="wp-block-embed__wrapper">
  <blockquote class="wp-embedded-content" data-secret="YWUhF1M8XF">
    <a href="https://thottingal.in/blog/2018/09/08/malayalam-spellchecker-a-morphology-analyser-based-approach/">Malayalam spellchecker &#8211; a morphology analyser based approach</a>
  </blockquote>

  <iframe title="&#8220;Malayalam spellchecker &#8211; a morphology analyser based approach&#8221; &#8212; Thoughtingal" class="wp-embedded-content" sandbox="allow-scripts" security="restricted" style="position: absolute; clip: rect(1px, 1px, 1px, 1px);" src="https://thottingal.in/blog/2018/09/08/malayalam-spellchecker-a-morphology-analyser-based-approach/embed/#?secret=YWUhF1M8XF" data-secret="YWUhF1M8XF" width="600" height="338" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div><figcaption>Blog post on spellchecker approach and pla</figcaption></figure>

### Current status

The libreoffice spellchecker for Malayalam is available at <https://gitlab.com/smc/mlmorph-libreoffice-spellchecker>. You need to get the code using git checkout or [download the master version as zip file][3]

You need LibreOffice 4.1 or later. Latest version is recommended. In the source code directory, run **make install** to install the extension.

Open libreoffice writer, add some Malayalam text. Make sure to select the language as Malayalam by choosing it from the menu or bottom status bar. You should see the spelling check in action&#8230; if everything goes as expected 😉<figure class="wp-block-image">

<img src="/wp-content/uploads/2019/03/mlmorph-libreoffice-options.jpg" alt="" class="wp-image-1621" srcset="/wp-content/uploads/2019/03/mlmorph-libreoffice-options.jpg 869w, /wp-content/uploads/2019/03/mlmorph-libreoffice-options-300x219.jpg 300w, /wp-content/uploads/2019/03/mlmorph-libreoffice-options-768x559.jpg 768w" sizes="(max-width: 869px) 100vw, 869px" /><figcaption>LibreOffice language settings, You can see mlmorph listed.</figcaption></figure> <figure class="wp-block-image"><img src="/wp-content/uploads/2019/03/mlmorph-libreoffice-spellcheck.png" alt="" class="wp-image-1622" srcset="/wp-content/uploads/2019/03/mlmorph-libreoffice-spellcheck.png 869w, /wp-content/uploads/2019/03/mlmorph-libreoffice-spellcheck-300x219.png 300w, /wp-content/uploads/2019/03/mlmorph-libreoffice-spellcheck-768x559.png 768w" sizes="(max-width: 869px) 100vw, 869px" /><figcaption>Spellchecker in action- libreoffice writer.</figcaption></figure>

### How can you help?

Theoretically, the extension should work in non-Linux platforms as well. But I have not tested it. The extension need python3 and python-hfst for the operating system. But [python-hfst][4] is not available for Windows 64 bit python installation. If you test and get the extension working, please add documentation and if anything missing to make the installation more easy, let me know.

As the mlmorph project get wider support for Malayalam vocabulary, the quality of spellchecker improves automatically.

 [1]: https://thottingal.in/blog/2018/09/08/malayalam-spellchecker-a-morphology-analyser-based-approach/
 [2]: https://morph.smc.org.in
 [3]: https://gitlab.com/smc/mlmorph-libreoffice-spellchecker/-/archive/master/mlmorph-libreoffice-spellchecker-master.zip
 [4]: https://pypi.org/project/hfst/