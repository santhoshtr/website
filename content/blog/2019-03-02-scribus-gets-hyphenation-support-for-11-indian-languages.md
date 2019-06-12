---
title: Scribus gets hyphenation support for 11 Indian languages
author: Santhosh Thottingal
type: post
date: 2019-03-02T04:49:08+00:00
url: /blog/2019/03/02/scribus-gets-hyphenation-support-for-11-indian-languages/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";N;s:10:"author_url";N;s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";N;s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";N;}'
categories:
  - Indic
  - Projects
tags:
  - hyphenation
  - scribus

---
Support for hyphenating in 11 Indian languages is now available in [Scribus, desktop publishing system][1]. Two years back [I had written how Malayalam hyphenation support][2] was added to Scribus. Later, I had filed a bug to [add support for more Indian languages][3]. That is now fixed.

Scribus has a new way to download and use these hyphenation dictionaries. You can now use this feature right away in your installed scribus. The languages with hyphenation support are the following:

  * Malayalam
  * Tamil
  * Telugu
  * Kannada
  * Marathi
  * Hindi
  * Bengali
  * Gujarati
  * Assamese
  * Panjabi
  * Odia

### How to Add Hyphenation Dictionary?

Navigate to Windows -> Resources in the menu bar. You will see a window as given below. You may want to press &#8220;Update Available List&#8221;. Then you can see all the languages with hyphenation dictionaries available. Select the download checkbox and press &#8220;Download&#8221; button. The dictionary will get installed to your system.
<figure class="wp-block-image">

<img src="/wp-content/uploads/2019/03/image-1024x751.png" alt="" class="wp-image-1605" srcset="/wp-content/uploads/2019/03/image-1024x751.png 1024w, /wp-content/uploads/2019/03/image-300x220.png 300w, /wp-content/uploads/2019/03/image-768x563.png 768w, /wp-content/uploads/2019/03/image.png 1042w" sizes="(max-width: 1024px) 100vw, 1024px" /><figcaption>Scribus Resource Manager</figcaption></figure>

## How to use?

  * Start a new document. Add text frames and content. You may need narrow columns to have wordbreaking contexts.
  * Select the text and set appropriate font(Unicode) for your language. Make sure the language is selected as your preferred language.
  * In Hyphenation properties, set hyphenation character as blank, otherwise visible hyphens will appear.
  * Set the text justified.
  * From menu Extras->Hyphenate text. Done.<figure class="wp-block-image">

<img src="/wp-content/uploads/2017/10/ml-hyph-scribus-1024x575.png" alt="" class="wp-image-1154" srcset="/wp-content/uploads/2017/10/ml-hyph-scribus-1024x575.png 1024w, /wp-content/uploads/2017/10/ml-hyph-scribus-300x169.png 300w, /wp-content/uploads/2017/10/ml-hyph-scribus-768x431.png 768w, /wp-content/uploads/2017/10/ml-hyph-scribus-1200x674.png 1200w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure> <figure class="wp-block-image"><img src="/wp-content/uploads/2017/10/Spectacle.B22246.png" alt="" class="wp-image-1153" srcset="/wp-content/uploads/2017/10/Spectacle.B22246.png 588w, /wp-content/uploads/2017/10/Spectacle.B22246-218x300.png 218w" sizes="(max-width: 588px) 100vw, 588px" /><figcaption>Hyphenated two column content</figcaption></figure>

## How does it work?

The resource manager based hyphenation libraries are easier way to add new hyphenation dictionaries. Earlier, these files need to add to Scribus source code. Now these files are defined in scribus server &#8211; [http://services.scribus.net/scribus\_hyph\_dicts.xml][4]. It maps the languages to files to download. So if I update the dictionaries in the github repo, a new installation will take that updated file.

## Reporting issues

If you find any issues in the hyphenation rules, you can file at <https://github.com/smc/hyphenation/>

 [1]: https://www.scribus.net/
 [2]: https://thottingal.in/blog/2017/10/29/scribus-malayalam-hyphenation-support/
 [3]: https://bugs.scribus.net/view.php?id=15348
 [4]: http:// http://services.scribus.net/scribus_hyph_dicts.xml