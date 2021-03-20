---
title: "New version of Malayalam morphology analyser"
author: Santhosh Thottingal
type: post
date: 2021-03-20T09:30:00+05:30
url: /blog/2021/03/20/mlmorph-new-version/
categories:
  - Malayalam
  - SFST
tags:
  - mlmorph
  - fst

---

In the [previous blog post](/blog/2021/03/20/sfst-new-version/) I explained my efforts to modernize SFST. Since I published[ SFST python binding](https://pypi.org/project/sfst/) and [modernized](https://github.com/santhoshtr/sfst/) to make it compile in all operating systems, next step was to drop HFST dependency of mlmorph and use the new version of SFST 1.5.0.

[mlmorph 1.3.0](https://gitlab.com/smc/mlmorph/-/tags/1.3.0) has no dependency on HFST and all installation problems in different operating systems and python versions are solved now.

Latest version is also available in pypi.org. It can be installed using `pip install mlmorph`. You can [try it in the collab notebook.](https://colab.research.google.com/drive/1rDqsFe0sN3tl-tCM9hcewqjO7dg4h3vT)

