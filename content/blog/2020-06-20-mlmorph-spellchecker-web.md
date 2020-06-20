---
title: "Morphology analyser based spellchecker - Web version"
author: Santhosh Thottingal
type: post
date: 2020-06-20T15:10:00+05:30
url: /blog/2020/06/20/malayalam-spellchecker-web/
categories:
  - Projects
  - Malayalam
---

I prepared a web frontend for the Malayalam spellchecker based on the [Malayalam morphology analyser][2].

It is available at [https://morph.smc.org.in/spellcheck][3].

[![](/wp-content/uploads/2020/06/mlmorph-spellchecker.gif)][3]

I had written an [article about its technology][1] two years ago. There s also an incomplete [extension to LibreOffice][4].

The spellchecker is available as an API too. If you want to use it, please refer [a minimal code snippet available at codepen][5].

The quality of spellcheck and suggestions provided depend on the completeness of [mlmorph][2] project. Since mlmorph is ongoing and highly complex project, this will take time.

[1]: https://thottingal.in/blog/2018/09/08/malayalam-spellchecker-a-morphology-analyser-based-approach
[2]: https://morph.smc.org.in
[3]: https://morph.smc.org.in/spellcheck
[4]: https://thottingal.in/blog/2019/03/10/libreoffice-malayalam-spellchecker-using-mlmorph/
[5]: https://codepen.io/santhoshtr/pen/PoZzOvO