---
title: New version of Malayalam fonts released
author: Santhosh Thottingal
type: post
date: 2012-03-10T13:24:05+00:00
url: /blog/2012/03/10/new-version-of-malayalam-fonts-released/
categories:
  - Community
  - Malayalam
  - Projects
  - SMC
tags:
  - fonts
  - Malayalam
  - SMC
  - webfonts
  - wikipedia

---
<a href="http://smc.org.in" target="_blank">Swathanthra Malayalam Computing</a> project <a href="http://lists.smc.org.in/pipermail/discuss-smc.org.in/2012-March/013428.html" target="_blank">announced the release</a> of new version of Malayalam unicode fonts this week. In this version, there are many improvements for popular Malayalam fonts Rachana and Meera. Dyuthi font has some bug fixes. I am listing the changes below.

  1. Meera font was small compared to other fonts. This was not really a problem in Gnome environment since <a href="http://www.freedesktop.org/software/fontconfig/" target="_blank">fontconfig</a> allows you to define a scaling factor to match other font size. But it was an issue in Libreoffice, KDE and mainly in Windows where this kind of scaling feature does not work. Thanks to <a href="http://suruma.freeflux.net/" target="_blank">P Suresh</a> for a rework on glyphs and fixing this issue.
  2. Rachana, Meera and Dyuthi had wrong glyphs used as placeholder glyphs. <a href="https://savannah.nongnu.org/bugs/?35098" target="_blank">Bugs</a> <a href="http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=661898" target="_blank">like</a> these are fixed.
  3. Virama 0D4D had a wrong LSB that cause the cursor positioning and glyph boundary go wrong. Fixed that <a href="https://bugzilla.redhat.com/show_bug.cgi?id=616324" target="_blank">bug</a>

    [<img class="alignnone size-full wp-image-393" title="meera-virama-cursor" src="/wp-content/uploads/2012/03/meera-virama-cursor.png" alt="" width="147" height="63" />][1]
  4. Atomic Chilu code points introduced in Unicode 5.1 was missing in all the fonts that SMC maintained because of the controversial decision by Unicode and SMC&#8217;s stand against that. Issues still exist, but content with code point is present, to avoid any difficulties to users, added those characters to Meera and Rachana fonts.

    [<img class="alignnone size-full wp-image-394" title="chillus" src="/wp-content/uploads/2012/03/chillus.png" alt="" width="439" height="68" srcset="https://thottingal.in/wp-content/uploads/2012/03/chillus.png 439w, https://thottingal.in/wp-content/uploads/2012/03/chillus-300x46.png 300w" sizes="(max-width: 439px) 100vw, 439px" />][2]
  5. Rupee Symbols added to Meera and Rachana. Thanks to <a href="http://hiran.in" target="_blank">Hiran</a> for designing Sans and Serif glyphs for Rupee.

    [<img class="alignnone size-full wp-image-392" title="rupee-meera" src="/wp-content/uploads/2012/03/rupee-meera.png" alt="" width="181" height="55" />][3]
  6. Dot Reph(0D4E) &#8211; The glyphs for this was already present in Meera but unmapped to any unicode point. GSUB Lookup tables added to the glyphs according to unicode specification.

    [<img class="alignnone  wp-image-391" title="dotrepha" src="/wp-content/uploads/2012/03/dotrepha.png" alt="" width="635" height="119" srcset="https://thottingal.in/wp-content/uploads/2012/03/dotrepha.png 1039w, https://thottingal.in/wp-content/uploads/2012/03/dotrepha-300x56.png 300w, https://thottingal.in/wp-content/uploads/2012/03/dotrepha-1024x192.png 1024w" sizes="(max-width: 635px) 100vw, 635px" />][4]

For a more detailed change description see <a href="http://lists.smc.org.in/pipermail/discuss-smc.org.in/2012-February/013317.html " target="_blank">this</a> mail thread. There are some minor changes as well.

Thanks to Hussain K H (designer of both Meera and Rachana) , P Suresh, Hiran for their valuable contribution. And thanks to SMC community and font users for using the fonts and reporting bugs. We hope that we can bring this new version in your favorite GNU/Linux distros soon. Wikimedia&#8217;s <a href="https://www.mediawiki.org/wiki/Extension:WebFonts" target="_blank">WebFonts</a> extension uses Meera font and the font will be updated there soon. Next release of <a href="http://www.gnu.org/software/freefont/sources/" target="_blank">GNU Freefont </a>is expected to update Malayalam glyphs using Meera and Rachana for freefont-sans and freefont-serif font respectively. We plan to update other fonts we maintain also with these changes in next versions. There are still some glyphs missing in these fonts with respect to the latest unicode version.

&nbsp;

 [1]: /wp-content/uploads/2012/03/meera-virama-cursor.png
 [2]: /wp-content/uploads/2012/03/chillus.png
 [3]: /wp-content/uploads/2012/03/rupee-meera.png
 [4]: /wp-content/uploads/2012/03/dotrepha.png