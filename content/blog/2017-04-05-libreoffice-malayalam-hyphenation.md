---
title: Libreoffice Malayalam Hyphenation
author: Santhosh Thottingal
type: post
date: 2017-04-05T03:12:12+00:00
url: /blog/2017/04/05/libreoffice-malayalam-hyphenation/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"dc9741f52605";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:78:"https://medium.com/@sthottingal/libreoffice-malayalam-hyphenation-dc9741f52605";}'
categories:
  - Malayalam
  - Projects
  - SMC
  - Tutorial
tags:
  - hyphenation
  - libreoffice

---
I had developed and [released hyphenation extension for Malayalam in Openoffice years back][1]. Libreoffice was born later. Eventhough libreoffice supported the openoffice extensions, the [extension repository][2] is freshly created for libreoffice. The old extensions were not present in the libreoffice repository.

Now, I have uploaded the Malayalam hyphenation extension in libreoffice extension repository too. I will explain the installation and configuration step by step in this blog post:

### **All Operating systems**

<li data-canvas-width="16.28">
  <a href="https://extensions.libreoffice.org/extensions/malayalam-hyphenation-dictionary">Download an extension</a> and save it anywhere on your computer.
</li>
<li data-canvas-width="16.28">
  In LibreOffice, select <strong>Tools -> Extension Manager</strong> from the menu bar.
</li>
<li data-canvas-width="16.28">
  In the Extension Manager dialog click Add.
</li>
<li data-canvas-width="16.28">
  A file browser window opens. Navigate to the folder where you saved the LibreOffice extension file(s) on your system. The extension&#8217;s files have the file extension &#8216;OXT&#8217;.
</li>
<li data-canvas-width="16.28">
  Find and select the extension you want to install and click Open.
</li>
<li data-canvas-width="16.28">
  If this extension is already installed, you&#8217;ll be prompted to press OK to confirm whether to overwrite the current version by the new one, or press Cancel to stop the installation.
</li>
<li data-canvas-width="16.28">
  After you are asked whether to install the extension only for your user or for all users. If you choose the Only for me option, the extension will be installed only for your user. If you choose For all users, you need system administrator rights. In this case the extension will be available for all users. In general, choose Only for me, that doesn&#8217;t require administration rights on the operating system.
</li>

### **Debian and Ubuntu**

The above steps works for Debian and Ubuntu too. But there is a better way. Using your package manager install **hyphen-ml** package. This will install hyphenation not only for libreoffice, but for typesetting packages like LaTeX.

{{< youtube fGb_c9d-sU8 >}}

### **Using the hyphenation**

  * To automatically hyphenate the current or selected paragraphs, choose **Format &#8211; Paragraph**, and then click the **Text Flow** tab.
    <figure id="attachment_934" aria-describedby="caption-attachment-934" style="width: 716px" class="wp-caption alignright"><img class="size-full wp-image-934" src="/wp-content/uploads/2017/04/Spectacle.Qb1642.png" alt="" width="716" height="621" srcset="https://thottingal.in/wp-content/uploads/2017/04/Spectacle.Qb1642.png 716w, https://thottingal.in/wp-content/uploads/2017/04/Spectacle.Qb1642-300x260.png 300w" sizes="(max-width: 716px) 100vw, 716px" /><figcaption id="caption-attachment-934" class="wp-caption-text">LIbreoffice Hyphenation</figcaption></figure></li>

      * To manually Hyphenate Single Words, click in the word where you want to add the hyphen, and then press **Ctrl+Hyphen**(-).
      * To manually Hyphenate Text in a Selection Select the text that you want to hyphenate. Choose **Tools &#8211; Language &#8211; Hyphenation.**</ul>

    For detailed help, read [libreoffice hyphenation documentation][3]

    <figure id="attachment_935" aria-describedby="caption-attachment-935" style="width: 857px" class="wp-caption aligncenter"><img class="size-full wp-image-935" src="/wp-content/uploads/2017/04/Spectacle.TT1968.png" alt="" width="857" height="510" srcset="https://thottingal.in/wp-content/uploads/2017/04/Spectacle.TT1968.png 857w, https://thottingal.in/wp-content/uploads/2017/04/Spectacle.TT1968-300x179.png 300w, https://thottingal.in/wp-content/uploads/2017/04/Spectacle.TT1968-768x457.png 768w" sizes="(max-width: 857px) 100vw, 857px" /><figcaption id="caption-attachment-935" class="wp-caption-text">A hyphenated paragraph</figcaption></figure>

    ### Known Issues

    Malayalam and several other languages does not use visible hypen(-) at the end of line when a word is broken. Currently there is no way to control this in libreoffice.

    I had developed hyphenation patterns for 10 other Indian languages too. Yet to upload them to libreoffice repository. But they are readily available in Debian and Ubuntu. You can install them by choosing hyphen-* package.

    &nbsp;

 [1]: http://thottingal.in/blog/2008/12/13/hyphenation-of-indian-languages-and-openoffice/
 [2]: http://extensions.libreoffice.org/
 [3]: https://help.libreoffice.org/Writer/Hyphenation_1