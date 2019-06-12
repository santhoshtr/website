---
title: Inkscape hyphenation extension
author: Santhosh Thottingal
type: post
date: 2009-10-03T14:33:03+00:00
url: /blog/2009/10/03/inkscape-hyphenation-extension/
categories:
  - Indic
  - Projects
tags:
  - extensions
  - hyphenation
  - inkscape

---
<p style="text-align: justify;">
  One year back I wrote about <a href="http://thottingal.in/blog/2008/04/10/using-inkscape-for-dtp-in-indic-scripts/">how to use Inkscape as a workaround solution for DTP in indic scripts</a>. Still we don&#8217;t have any DTP software which supports Indic scripts in Unicode. <a href="http://www.scribus.net/">Scribus</a> still does not have the Indic support.
</p>

<p style="text-align: justify;">
  One issue with inkscape when used as DTP for indic script was, a few indic scripts always wanted hyphenation when text is justified. For example Malayalam has lengthy words and often space is wasted in lines if the text is not automatically hyphenated. But this feature was not available in inkscape. There is a <a href="https://bugs.launchpad.net/inkscape/+bug/171140">wishlist bug</a> for adding this feature to Inkscape.  I tried to develop an extension for Inkscape to achieve this.
</p>

<p style="text-align: justify;">
  It is on top of the python hyphenation code written by Wilbert  Berendsen. The hyphenation rules, also called as patterns is TeX or<br /> Openoffice itself. So  I can support any language which has TeX hyphenation rules. But, since the hyphenation rules are language specific we need a language selection mechanism for the text first. Then only we can select the rules and do the hyphenation. But it is very tricky to implement.  Asking the language of the text every time it is justified is not a good idea. Setting a language for document is another choice, but what if the text contains multiple languages?  But for Indian languages it is very easy, we can automatically detect the scripts using unicode codepoints and load the rules accordingly. So for the time being, my extension support only English and all Indian languages.
</p>

<p style="text-align: justify;">
  Download the extension from <a href="http://thottingal.in/projects/inkscape_hyphenation/inkscape-hyphenation.zip">http://thottingal.in/projects/inkscape_hyphenation/inkscape-hyphenation.zip</a> . In GNU/Linux machines,  extract the zip file and copy to /usr/share/inkscape/extensions folder. In Windows , extract to [inkscape installation directory]\extensions folder.  After this close and reopen inkscape. You will see a menu named Hyphenate in Effects->Text menu.    In the document, add a text field, enter text in any indian language. Select the text and apply hyphenation by Effects->Text->Hyphenate. Then change the alignment of text to justify. You will see the text get hyphenated and occupying maximum possible space in the text field
</p>

<p style="text-align: justify;">
  I got satisfactory result with Malayalam and Tamil. I did not test other languages. Following images illustrates hyphenated, justified, two column layout of text done in Inkscape
</p>

<div class="mceTemp" style="text-align: justify;">
  <dl class="wp-caption alignnone" style="width: 417px;">
    <dt class="wp-caption-dt">
      <a href="http://thottingal.in/projects/inkscape_hyphenation/hyphenated-inkscape.png"><img title="Malayalam Hyphenation In inkscape " src="http://thottingal.in/projects/inkscape_hyphenation/hyphenated-inkscape.png" alt="Malayalam Hyphenation In inkscape " width="407" height="574" /></a>
    </dt>

    <dd class="wp-caption-dd">
      Malayalam Hyphenation In inkscape
    </dd>
  </dl>
</div>

<div class="mceTemp" style="text-align: justify;">
  <dl class="wp-caption alignnone" style="width: 420px;">
    <dt class="wp-caption-dt">
      <a href="http://thottingal.in/projects/inkscape_hyphenation/hyphenated-inkscape-tamil.png"><img title="Tamil Hyphenation in Inkscape" src="http://thottingal.in/projects/inkscape_hyphenation/hyphenated-inkscape-tamil.png" alt="Tamil Hyphenation in Inkscape" width="410" height="577" /></a>
    </dt>

    <dd class="wp-caption-dd">
      Tamil Hyphenation in Inkscape
    </dd>
  </dl>
</div>

<p style="text-align: justify;">
  We had a discussion about this in<a href="me: OK, Once you read it http://sourceforge.net/mailarchive/forum.php?thread_name=20090924155717.GC4250%40bowman.infotech.monash.edu.au&forum_name=inkscape-devel"> inkscape mailing list </a>. Some developers suggested to have this feature built in, not as extension.  There are few issues to be solved for that. One thing is language selection as I explained. The other issue is regarding the hyphenation character to be used. <a href=" http://www.unicode.org/unicode/reports/tr14/#SoftHyphen">Unicode standard insists to use soft hyphen</a> &#8211; u00AD as hyphenation character. This is an invisible character. For Malayalam, visible hyphens are not required. But some other languages require the hyphen sign where the word is broken at the end of the line. The rules for whether the soft hyphen should be visible or not visible is not clear in Unicode&#8217;s specification. Pango never displays a the soft hyphen. There are criticism on this specification of softhyphen
</p>

<ul style="text-align: justify;">
  <li>
    Jukka Korpela, Soft hyphen (SHY) &#8211; a hard problem?  <a href="http://www.cs.tut.fi/%7Ejkorpela/shy.html" target="_blank">http://www.cs.tut.fi/~jkorpela/shy.html</a>
  </li>
  <li>
    Markus Kuhn, Unicode interpretation of SOFT HYPHEN breaks ISO 8859-1   compatibility. Unicode Technical Committee document L2/03-155R, June 2003. <a href="http://www.cl.cam.ac.uk/%7Emgk25/ucs/L2/03155r-kuhn-soft-hyphen.pdf" target="_blank">http://www.cl.cam.ac.uk/~mgk25/ucs/L2/03155r-kuhn-soft-hyphen.pdf</a>
  </li>
</ul>

<p style="text-align: justify;">
  So I think there is something to be done from Rendering engine or Unicode need to clarify the confusions.  But Openoffice and HTML rendering engines always make soft hyphen at the end of the line, which is not desired for some languages.
</p>

<p style="text-align: justify;">
  Try this extension, let me know the comments. For small scale DTP works, such as pamphlets, notices, brochures  inkscape is enough. But since inkscape is not primarily a DTP software and does not have paging support, for books and large scale DTP works, it may not work well.
</p>

<p style="text-align: justify;">