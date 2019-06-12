---
title: Malayalam Wikisource Offline version
author: Santhosh Thottingal
type: post
date: 2011-06-11T09:11:38+00:00
url: /blog/2011/06/11/malayalam-wikisource-offline-version/
categories:
  - Community
  - Indic
  - Malayalam
  - Misc
  - Projects
tags:
  - wikipedia

---
Malayalam Wikisource community today released the first offline version of <a href="http://ml.wikisource.org" target="_blank">Malayalam wikisource</a> during the 4th annual wiki meetup of Malayalam wikimedians. To the  best of our knowledge, this is the first time a wikisource project release its offline version. Malayalam wiki community <a href="http://thottingal.in/blog/2010/04/17/mlwikioncd/" target="_blank">had released</a> the first version of Malayalam wikipedia one year back.

Releasing the offline version of a wikisource is a challenging project. The technical aspects of the project was designed and implemented by myself. So let me share the details of the project.

As you know a Wikisource contains lot of books, and each book varies in its size, it is divided to chapters or sections. There is no common pattern for books. Each having its own structure. A novel presentation is different from a collection of poems from a Poet. Wikisource also has religious books like Bible, Quran, Bhagavat Geeta, Ramayana etc.  Since books are for continuous reading for a long time, the readabilty and how we present the lengthy chapters in screen also matters. Offline wikipedia tools for example, <a href="http://www.kiwix.org/" target="_blank">Kiwix</a> does not do any layout modification of the content and present as it is shown in wikipedia/wikisource. <a href="https://github.com/santhoshtr/wiki2cd" target="_blank">The tool</a> we wrote last year for Malayalam wikipedia offline version also present scrollable vertical content in the screen. Both are not configurable to give different presentation styles depending on the nature of the book.

What we wanted is a book reader kind of application interface.  Readers should be able to easily navigate to books, chapters. The chapter content will be very lengthy. For a long time reading of this content,  a lengthy vertically scrolled text is not a good idea. We also need to take care of the width of the lines.  If each line spans 80-90% of the screen, especially for a wide screen monitor, it is a strain for neck and eyes.

&nbsp;

<figure id="attachment_361" aria-describedby="caption-attachment-361" style="width: 395px" class="wp-caption aligncenter">[<img class="size-large wp-image-361" title="2011-06-09-19-29-21" src="/wp-content/uploads/2011/06/2011-06-09-19-29-211-1024x455.png" alt="" width="395" height="175" srcset="https://thottingal.in/wp-content/uploads/2011/06/2011-06-09-19-29-211-1024x455.png 1024w, https://thottingal.in/wp-content/uploads/2011/06/2011-06-09-19-29-211-300x133.png 300w, https://thottingal.in/wp-content/uploads/2011/06/2011-06-09-19-29-211.png 1353w" sizes="(max-width: 395px) 100vw, 395px" />][1]<figcaption id="caption-attachment-361" class="wp-caption-text">Screenshot of Offline version. Click to enlarge</figcaption></figure>

<p style="text-align: center;">
  <a href="/wp-content/uploads/2011/06/2011-06-09-19-29-21.png"><br /> </a>
</p>

The selection of books for the offline version was done by the active wikimedians at Wiksource. Some of the selected books was proof read by many volunteers within the last  2 weeks.

The tools used for extracting htmls were adhoc and adapted to meet the good presentation of each book. So there is nothing much to reuse here. Extracting the html and then taking the content part alone using pyquery and removing some unwanted sections from html- basically this is what our scripts did. The content is added to predefined HTML templates with proper CSS for the UI. CSS3 multicolumn feature was used for book like interface. Since IE did not implement this standard even in IE9, for that browser the book like interface was not provided. Chrome browser with version less than 12 could not support, because of these bugs: [http://code.google.com/p/chromium/issues/detail?id][2][=45840][2] and [http://code.google.com/p/chromium/issues/detail?id][3][=78155][3]. For easy navigation, mouse wheel support and page navigation buttons provided. For solving non-availability of required fonts, webfonts were integrated with a selection box  to select favorite font. Reader can also select the font size to make the reading comfortable.

Why static html? The variety of platforms and other versions we need to support, necessity to have webfonts, complex script rendering, effort to develop and customize UI, relatively small size of the data, avoiding any installation of software in users system etc made us to choose static html+ jquery + css as the technology choice. The downside is we could not provide full text search.

Apart from the wikisource, we also included a collection of copyleft of images from wikimedia commons. Thanks to <a href="http://nishan-naseer.blogspot.com/" target="_blank">Nishan Naseer</a>, for preparing a gallery application using jquery. We selected 4 categories from Commons which are related to Kerala. We hope everybody will like the pictures and it will give  a small introduction to Wikimedia Commons.

[<img class="aligncenter size-large wp-image-364" title="2011-06-11 09-22-06" src="/wp-content/uploads/2011/06/2011-06-11-09-22-06-1024x474.png" alt="" width="453" height="209" srcset="https://thottingal.in/wp-content/uploads/2011/06/2011-06-11-09-22-06-1024x474.png 1024w, https://thottingal.in/wp-content/uploads/2011/06/2011-06-11-09-22-06-300x139.png 300w, https://thottingal.in/wp-content/uploads/2011/06/2011-06-11-09-22-06.png 1353w" sizes="(max-width: 453px) 100vw, 453px" />][4]

Even though the python scripts are not ready to reuse in any projects, if anybody want to have a look at it, please mail me. I am not putting it in public since the script does not make sense outside the context of each book and its existing presentation in Malayalam wikisource.

The CD image is available for download <a href="http://www.mlwiki.in/cdimage/mlwikisource.iso" target="_blank">here</a> and one can also browse the CD content <a href="http://www.mlwiki.in/wikisrccd" target="_blank">here</a>.

Thanks to Shiju Alex for coordinating this project. And thanks to all Malayalam wikisource volunteers for making this happen.  We have included poems, folk songs, devotional songs, novel, grammar book, tales, books on Hinduism, Islam-ism, Christianity, Communism, Philosophy. With this release, it becomes the biggest offline digital archive of Malayalam books.

 [1]: /wp-content/uploads/2011/06/2011-06-09-19-29-211.png
 [2]: http://code.google.com/p/chromium/issues/detail?id=45840
 [3]: http://code.google.com/p/chromium/issues/detail?id=78155
 [4]: /wp-content/uploads/2011/06/2011-06-11-09-22-06.png