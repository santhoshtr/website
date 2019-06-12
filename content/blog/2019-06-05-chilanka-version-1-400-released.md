---
title: Chilanka version 1.400 released
author: Santhosh Thottingal
type: post
date: 2019-06-05T14:58:50+00:00
url: /blog/2019/06/05/chilanka-version-1-400-released/
featured_image: /wp-content/uploads/2019/06/Screen-Shot-2019-06-05-at-13.39.45.png
categories:
  - Fonts
  - Malayalam
  - Projects
  - SMC
tags:
  - fonts

---
A [new version of Chilanka][1] typeface is available now. Version 1.400 is available for download from SMC&#8217;s font download and preview site [smc.org.in/fonts][2]

For users, there is not much changes, but the source and code build system got a major upgrade.

  * Source code updated to [UFO format][3] from [fontforge sfd format][4]. This allows to work with modern font editors.
  * Use cubic beziers for master design, generate OTF along with TTF. The original drawings for Chilanka was using cubic beziers.
  * [fontmake][5] is used for building the ttf and otf, similar to the latest font projects by SMC
  * [fontbakery][6] is used for tests, all tests are passing now
  * Added a few important latin glyphs missing, reported by fontbakery

 [1]: https://gitlab.com/smc/fonts/chilanka/tags/Version1.400
 [2]: http://smc.org.in/fonts
 [3]: http://unifiedfontobject.org/
 [4]: https://fontforge.github.io/sfdformat.html
 [5]: https://github.com/googlei18n/fontmake
 [6]: https://github.com/googlefonts/fontbakery