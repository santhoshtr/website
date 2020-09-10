---
title: "Opentype feature file support for VS Code"
author: Santhosh Thottingal
type: post
date: 2020-09-10T15:44:00+05:30
url: /blog/2020/09/10/afdko-vscode/
categories:
  - Typography
tags:
  - vscode
  - afdko

---

I just published a [VS Code language extension][1] to support [OpenType feature files](https://adobe-type-tools.github.io/afdko/OpenTypeFeatureFileSpecification.html) in the Adobe "[AFDKO](https://github.com/adobe-type-tools/afdko)" format.

The extension provides syntax highlighting and code snippet support.

![](/wp-content/uploads/2020/09/vscode-afdko.png)
(Screenshot From Amiri font)

The syntax highlighting patterns for AFDKO is based on the [opentype-feature-bundle](https://github.com/kennethormandy/opentype-feature-bundle) for Atom Editor by Kennet Ormandy  which is based upon [Brook Elgie’s original Textmate bundle](https://github.com/brew/opentype-feature-bundle).

The code snippets are based on the snippets prepared by Simon Cozens for [AFDKO-SublimeText](https://github.com/simoncozens/AFDKO-SublimeText)

* [Download and install the extension][1]
* [Source code][2]

I hope this will be useful for font developers using VS Code for opentype programming and automation.

[1]: https://marketplace.visualstudio.com/items?itemName=santhoshthottingal.vscode-afdko
[2]: https://github.com/santhoshtr/vscode-afdko
