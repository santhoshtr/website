---
title: "Malayalam Spellchecker version 1.1.1 released"
author: Santhosh Thottingal
type: post
date: 2020-08-29T17:24:00+05:30
url: /blog/2020/09/29/mlmorph-spellchecker-new-version/
categories:
  - Projects
  - Malayalam
---

A new version of Malayalam spell checker based on [mlmorph][2] is available as [python library][1].

## Install the library

```bash
$ pip install mlmorph_spellchecker
```

## Sample usage

```python
>>> from mlmorph_spellchecker import SpellChecker
>>> spellchecker = SpellChecker()
>>> word = "ഉച്ഛാരണം"
>>> spellchecker.spellcheck(word)
False
>>> spellchecker.candidates(word)
['ഉച്ചാരണം']
>>> spellchecker.spellcheck("ചിത്രകാരൻ")
True
```

The new version adds a database of commonly mistaken words of Malayalam for quick checks and correction. If the given word is present in that common list, spellcheck result and correction suggestions will be based on that database. This database is based on [Malayalam Wikipedia's commonly mistaken words][6] and [Kerala government glossary of such words][7]. Source code is at [gitlab][10]

A web version of the same library is available for online usage at https://morph.smc.org.in/spellcheck. I had written about this in [previous blog post][5]

[![](/wp-content/uploads/2020/06/mlmorph-spellchecker.gif)][3]

I had written an [article about its technology][8] two years ago. There is also an incomplete [extension to LibreOffice][9].

The efficiency of the spellchecker depends on the coverage of Malayalam vocabulary by morphology analyser. As Malayalam is a morphologically rich language, it has infinite vocabulary and the [morphology analyser that address this nature][11] is an ongoing project.

[1]: https://pypi.org/project/mlmorph-spellchecker
[2]: https://morph.smc.org.in/
[3]: https://thottingal.in/blog/2018/09/08/malayalam-spellchecker-a-morphology-analyser-based-approach/
[4]: https://morph.smc.org.in/spellcheck
[5]: https://thottingal.in/blog/2020/06/20/malayalam-spellchecker-web/
[6]: https://ml.wikipedia.org/wiki/വിക്കിപീഡിയ:അക്ഷരത്തെറ്റോടുകൂടി_സാധാരണ_ഉപയോഗിക്കാറുള്ള_പദങ്ങൾ
[7]: https://glossary.kerala.gov.in/t_and_f.php
[8]: https://thottingal.in/blog/2018/09/08/malayalam-spellchecker-a-morphology-analyser-based-approach
[9]: https://thottingal.in/blog/2019/03/10/libreoffice-malayalam-spellchecker-using-mlmorph/
[10]: https://gitlab.com/smc/mlmorph-spellchecker
[11]: https://www.aclweb.org/anthology/W19-6801/
