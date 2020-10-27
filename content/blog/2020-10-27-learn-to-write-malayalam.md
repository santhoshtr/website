---
title: "Animated SVGs for learning Malayalam writing"
author: Santhosh Thottingal
type: post
date: 2020-10-27T20:10:00+05:30
url: /blog/2020/10/27/learning-to-write-malayalam-svg-animation/
categories:
  - Malayalam
tags:
  - malayalam
  - learning
  - svg

---

I wanted to make an educational typeface with writing directions in each glyphs. Something like this:

{{< figure src="/wp-content/uploads/2020/10/ma-path.png">}}

But considering the effort it takes I was bit confused whether it is really necessary to have a typeface or just images like this will suffice.

Recently, I read about SVG path animations and I thought animating the path inside each letters will be more helpful than static image with drawing directions.

The Chilanka and Manjari typefaces I designed have SVG images with strokes as master designs and in most of the cases, the stroke path directions are the writing directions. That makes my job easy as I can just reuse all those SVGs and apply path animations.

So I tried to build a quick prototype of Malayalam writing learning application. The trick of animating svg paths is clearly explained in this [article](https://jakearchibald.com/2013/animated-line-drawing-svg/) by Jake Archibald.

You can try an early prototype of this application at https://mlmash.netlify.app/. Source code: https://github.com/santhoshtr/mlmash

{{< figure src="/wp-content/uploads/2020/10/learn-malayalam-writing.gif">}}

It is possible to enhance this with sample words with each letters and any such extra information useful for teaching Malayalam script. Please let me know if anybody interested in enhancing it.

