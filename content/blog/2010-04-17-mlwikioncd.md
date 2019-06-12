---
title: Malayalam Wikipedia releases selected articles on CD
author: Santhosh Thottingal
type: post
date: 2010-04-17T05:03:47+00:00
url: /blog/2010/04/17/mlwikioncd/
categories:
  - Malayalam
  - Projects
tags:
  - wikipedia

---
As part of <a href="http://ml.wikipedia.org/wiki/Meetup-2010_April" target="_blank">Malayalam Wikipedia Meetup 2010</a> , today  Malayalam wikipedia releases 500 selected articles on a CD ROM. This is the first time in India, a Wikipedia on local language releasing its articles for offline usage. I handled the technology part  of the project.

The idea was to get the selected articles in static form to the CD. But this is not easy as we imagine. It is not like saving each  page from browser to the local machine. Following were the challenges:

  * Automate the process of getting the page and the images in it. Wikipedia articles changes frequently. So we need the program to fetch the latest article from wiki whenever it is executed.
  * Fix all the links, css, javascript, image references so that all resolves within CD itself
  * Provide an categorized index of the articles for easily locating the article.
  * Provide a search in the article titles.
  * ISO 9660 filesystem of CD/DVD has lots of limitations. There are restrictions on unicode names of the files, length of the file names, directory depth, special characters in filenames etc. Wikipedia has its article and image names with unicode, special characters and most of the time they exceeds the filename length. To avoid all these, we should rename most of the files and then fix the cross references in all files.
  * It should work on all Operating systems. All the content should be presented with HTML, Javascript and CSS. Being the content in Malayalam, even if the user does not have required fonts in her/his machine, there should not be any problem for reading the content(font embedding required).

Manually solving all these challenges is not the way to go. So I wrote a program, which just takes the article titles and does all the above tasks and finally creates a repository ready for burning to CD ROM.

Wget disappointed me in fetching the content from wiki. There is an <a href="http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=411290" target="_blank">open bug</a> in wget which make the download of non-latin URLs impossible.

Have a look at the CD content we created : <a href="http://thottingal.in/projects/mlwikioncd/wiki/" target="_blank">Malayalam Wikipedia Selected 500 Articles</a> . <a href="http://hiran.in" target="_blank">Hiran</a> helped me with the artworks.

[<img class="aligncenter size-medium wp-image-257" title="mlwikioncd" src="/wp-content/uploads/2010/04/mlwikioncd-300x291.png" alt="The CD cover image designed by Hiran" width="300" height="291" srcset="/wp-content/uploads/2010/04/mlwikioncd-300x291.png 300w, /wp-content/uploads/2010/04/mlwikioncd.png 518w" sizes="(max-width: 300px) 100vw, 300px" />][1]

Since entire process is automated, the program can be used for any other language.  I am releasing the program for the benefit of everybody. You can get the program from <a href="http://github.com/santhoshtr/wiki2cd" target="_blank">here</a>. It is written on Python. Jquery was used for the UI.  For details on the usage, customization etc read the <a href="http://wiki.github.com/santhoshtr/wiki2cd/" target="_blank">wiki page</a> of the project.

For those who can&#8217;t read Malayalam, here is a <a href="http://thottingal.in/projects/wiki2cd/samplewiki/" target="_blank">sample wiki </a>created  by the wiki2cd program from English wikipedia by selecting 10 articles.

Malayalam Wikipedia Community  hope that this is a big step to reach the majority of the people who does not have internet access. If printed, this 500 articles will be at least 5000 pages. CDROM also includes information about commonly used free software based tools for Malayalam computing. Some writing tools and fonts are distributed in the same CD ROM.

Thanks to Malayalam Wikipedia for giving this great opportunity to wok on this project.

The ISO image of the CD is available <a href="http://www.mlwiki.in/mlwikicd/img/MLWikipediaCD-2010.iso" target="_blank">here</a> for download.

 [1]: /wp-content/uploads/2010/04/mlwikioncd.png