---
title: "Introducing Nupuram, new Malayalam typeface"
author: Santhosh Thottingal
type: post
date: 2022-10-05T9:45:00+05:30
url: /blog/2022/10/05/nupuram
categories:
  - Malayalam
  - Fonts
  - Typography
tags:
  - fonts
  - Nupuram
  - metapost

---

I am happy to introduce Nupuram, a new Malayalam typeface that I have been designing and developing for several months. The typeface is not ready for a stable release, but pre-release versions are available for early testing.

Nupuram is a [superfamily](https://fonts.google.com/knowledge/glossary/superfamily) typeface.
![Nupuram variable font animation](/wp-content/uploads/2022/10/nupuram-var.gif)

## Nupuram variable font

Taking full advantage of [variable font](https://fonts.google.com/knowledge/introducing_type/introducing_variable_fonts) technology, Nupuram offers an unprecedented level of flexibility, all from a single font file. Nupuram has 4 [variation axes](https://fonts.google.com/knowledge/glossary/axis_in_variable_fonts): Weight, Width, Slant and Softness.
As a variable font, Nupuram gives you fine-grained control over each one of its styles. However, it also comes with 64 predefined styles that are easy to access through your font menu. Called named instances¹, these work just like regular static fonts do.

![Nupuram variation axes](/wp-content/uploads/2022/10/width-weight-grid.jpg)

## Nupuram Calligraphy

Nupuram Calligraphy is a font with wide nib Calligraphy pen strokes.![Nupuram Calligraphy](/wp-content/uploads/2022/10/nupuram-calligraphy.png)

## Nupuram Display

**Nupuram Display** is suitable for large size usages.

![Nupuram Display](/wp-content/uploads/2022/10/nupuram-display.png)

## Nupuram Color

**Nupuram Color** is a [Color font](https://developer.chrome.com/blog/colrv1-fonts/) with shadow-like rendering. Contrary to usual fonts that can have any but single color, Color fonts have multiple colors in single glyph. Nupuram Color font supports both ColrV0 and Colrv1 spec of opentype. ColrV1 variant has gradient color and allows user side customization of colors and selection of predefined color pallettes. ![Nupuram Color](/wp-content/uploads/2022/10/nupuram-color.png)

## Nupuram Arrows
**Nupuram Arrows** is an educational font with arrows showing the writing path. Nupuram Arrows is again a color font. ![Nupuram Arrows](/wp-content/uploads/2022/10/nupuram-arrows.png)

## Nupuram Dots
**Nupuram Dots** is another education font with dots on glyphs, may be useful for workbooks. ![Nupuram Dots](/wp-content/uploads/2022/10/nupuram-dots.png)

## Design Inspiration

Nupuram is inspired by the title posters of early Malayalam movies around 1960-1970, specifically by title designer S Appukkuttan Nair(Popularly known as [SA Nair](https://m3db.com/sa-nair)).  These title designs featured wide, flat, sharp terminals, thin vertical strokes and thick horizontal strokes(Examples: [1](https://m3db.com/film/thakilu-kottampuram), [2](https://m3db.com/film/vilakkum-velichavum), [3](https://m3db.com/film/angadi), [4](https://m3db.com/film/1283)). Even though there are hundreds of posters done by SA Nair with same design concept, there is no strict uniformity in these designs as they are all handmade. Adpating it to a typeface required many customization. I avoided the sharpness of terminals, but retained the wide strokes with reduced thickness. The Nupuram Display may be the style that is more close to these designs.

Nupuram is the third Malayalam typeface I am designing. The style is between the [Chilanka](https://smc.org.in/fonts/Chilanka) handwriting font and [Manjari](https://smc.org.in/fonts/Manjari) typeface. Chilanka is raw and handwriting. It is very informal. Manjari is regular font for formal style, but with a humanistic design. Nupuram is neither too formal nor too informal.

Nupuram is primarily a Malayalam typeface, but it also has latin support. The matching design for latin is a [reverse contrast](https://en.wikipedia.org/wiki/Reverse-contrast_typefaces) design. I made my best effort. I would love to hear the feedback.

The word Nupuram means '[anklet](https://en.wikipedia.org/wiki/Anklet)'.

![Example content rendered in Nupuram](/wp-content/uploads/2022/10/nupuram-sample.jpg)

## Technology

The Technology used to develop these fonts deviates from usual type design practices. All the glyphs are defined in [Metapost](https://en.wikipedia.org/wiki/MetaPost). MetaPost produces vector graphic diagrams from a geometric/algebraic description. The language shares [Metafont](https://en.wikipedia.org/wiki/Metafont)'s declarative syntax for manipulating lines, curves, points and geometric transformations. Unlike Metafont, MetaPost can produce SVG output.

The parametric generation of curves by MetaPost enables changing a few internal variables and producing glyphs with varying design characteristics such as glyph weight, stroke modulation, glyph width, custom terminal shapes etc. The concept of custom pens that draw over the defined path can produce the outlines that is required for the glyphs. For example a pen defined by a line with given width and rotation can produce calligraphic strokes of wide pen calligraphic pen. Picking  pens with different strokes during the path can produce the stroke modulation. Drawing patterns like arrows or dots on the defined path is also possible.

![Example metapost code for Letter ഗ](/wp-content/uploads/2022/10/vscode-metapost-ga.jpg)

Above image shows the metapost definition of letter ഗ. The SVG generated is shown on rightside. Setting up a compile-on-file-change is easy in VSCode and you can instant preview of the glyph while you write the glyph definition. Understanding this code may be difficult if you are not familiar with metafont concepts. Basically it has an import statement to import required macros, another set of macros to define begin and end of glyph def, metafont style definition of coordinates and path and direction, definition of pens that will produce an outline, macros to define anchor points. For helping development and debugging, grid and coordinates are printed in SVG. They won't be present in actual SVGs used for font. `m` in the code defines the height of a Malayalam letter, `w` is width, `thick` is thickness of thickest part of strokes.

Metafont based fonts are known for its style variants. They existed many years before the new Opentype variable font technology. Defining an interpolation between the glyphs produced by MetaPost with varying property like weight enables us to produce opentype variable fonts. With some attention to the nodes in the glyphs they are easily interpolatable.

SVGs prepared by MetaPost definition of each glyphs are then converted to [glif](https://unifiedfontobject.org/versions/ufo3/glyphs/glif/) format of [UFO font format](https://unifiedfontobject.org).

The opentype features, glyph to unicode mapping, kerning and font meta information - these are all part of the prepared UFO. A set of programs prepares all of these based on a simple configuration file. Preparing the opentype features used to be a major task for typeface design for Malayalam. We used to manually write them. Here they are automatically generated based on the script grammar encoded in application logic.

You are welcome to take a look at these scripts in the [source code repository of of Nupuram](https://gitlab.com/smc/fonts/Nupuram)

UFOs are then compiled to Opentype fonts using [fontmake](https://github.com/googlefonts/fontmake).

I am planning to write the details of each of the subfamily in separate blog posts. This will describe the pens used, the variables that produced the glyph variants and some tricks that created shadow, arrows etc.
To help producing strokes, pens a set of macros need to be written on top of Plain version of MetaPost. The macros defined in [Metatype1](https://en.wikipedia.org/wiki/MetaType1) package helped a lot in this process.

## Source code and early releases

Nupuram is a free and open source project. The typeface is licensed as OFL.

Source code is available at https://gitlab.com/smc/fonts/Nupuram

Early versions for testing is available at [Releases page of repo](https://gitlab.com/smc/fonts/Nupuram/-/releases)

You may [try the font in the online playground](https://smc.gitlab.io/fonts/Nupuram/tests/)

I need to rework on a few glyphs, do thorough testing before the first release to users.