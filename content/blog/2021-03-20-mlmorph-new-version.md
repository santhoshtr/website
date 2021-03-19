---
title: "New version of Malayalam morphology analyser"
author: Santhosh Thottingal
type: post
date: 2021-03-20T10:00:00+05:30
url: /blog/2021/03/20/mlmorph-new-version/
categories:
  - Malayalam
  - SFST
tags:
  - mlmorph
  - fst

---

In the previous blog post I explained my efforts to modernise SFST. Since I published SFST python binding and modernized to make it compile in all operating systems, next step was to drop HFST dependency of mlmorph and use the new version of SFST.

[mlmorph 1.3.0](https://gitlab.com/smc/mlmorph/-/tags/1.3.0) has no dependency on HFST and all installation problems in different operating systems and python versions are solved now.

Latest version is also available in pypi.org. Installing is just `pip install mlmorph`.
