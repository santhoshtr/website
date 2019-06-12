---
title: Identifiers In Indic Languages
author: Santhosh Thottingal
type: post
date: 2011-01-08T11:27:00+00:00
url: /blog/2011/01/08/identifiers-in-indic-languages/
categories:
  - Indic
  - Malayalam
tags:
  - CDAC
  - icann
  - idn
  - Malayalam
  - python
  - standards
  - zwj
  - zwnj

---
Recently, while preparing a critique for  <a href="http://wiki.smc.org.in/CDAC-IDN-Critique" target="_blank">IDN Policy for Malayalam </a>language prepared by CDAC,  I noticed that ICANN does not allow control characters in the domain names.  Sometime back I noticed Python 3 identifiers also does not allow control characters in the Identifiers. This blog post attempts to analyze the issue by looking at the Unicode and ICANN specifications about these special characters.

Apart from the existing characters in Indic languages,  <a href="http://en.wikipedia.org/wiki/Zero-width_joiner" target="_blank">Zero width Joiner</a> and <a href="http://en.wikipedia.org/wiki/Zero-width_non-joiner" target="_blank">Zero width non joiners</a> are widely used in Indic languages to control how the ligatures are formed. For some samples on how they are used, refer the wikipedia links. Being control characters and invisible characters, they are often removed while doing normalization , particularly before doing a string comparison, or collation (sort).

Identifiers, the strings that uniquely represent some data often has a policy on what kind of characters it can contain. For example, email address is an identifier, which unambiguously defines somebody&#8217;s email address, does not allow &#8216;space&#8217; characters in between. Some examples for this kind of identifiers are: email ids, web domain address, variables in programming languages etc.

Gone are the days where identifiers can be represented only using English characters. Python 3.0+ allows  you to define a variable in program using any words that can be represented in Unicode. For more details on this Python feature read <a href="http://www.python.org/dev/peps/pep-3131/" target="_blank">PEP 3131 &#8211; Supporting Non Ascii Identifiers</a> . Some samples : <a href="http://wiki.python.org/moin/MalayalamLanguage" target="_blank">Program written in Malayalam.</a> <a href="http://wiki.python.org/moin/TamilLanguage" target="_blank">In tamil</a> , and <a href="http://wiki.python.org/moin/HindiLanguage" target="_blank">In Hindi </a>

Same is the case of Web addresses. With the advent of Internationalized Domain Names(IDN) that allows you register web addresses in your own languages, the English only web address scene is changing.

But this change brings some issues in the definition of &#8216;Identifiers&#8217; &#8211; just like English, what are the characters allowed in using a domain name or programming language identifier that can be used? Standards and specifications are being drafted on this for each language. For Internationalized domain names in Indian languages, <a href="http://cdac.in/" target="_blank">CDAC</a> is drafting the policy. For python, the PEP 3131 has specification.

As a general rule, Unicode standard and the standards based on Unicode does not allow you use Unicode control characters such as zwj and zwnj in identifiers. Based on that <a href="http://icann.org/" target="_blank">The <em>Internet Corporation for Assigned Names and Numbers</em> (<em>ICANN</em>)</a> , in <a href="http://tools.ietf.org/html/rfc3454#page-12" target="_blank">RFC 3454</a> , it prohibits a list of control characters. RFC 3454 is used as a specification for converting a Unicode encoded domain name to its <a href="http://en.wikipedia.org/wiki/Punycode" target="_blank">Punicode </a>version for doing the validation.  For example,Thottingal, in Malayalam- തോട്ടിങ്ങല്‍ (0D24 0D4B 0D1F 0D4D 0D1F 0D3F 0D19 0D4D 0D19 0D32 0D4D 200D), when converted to punicode becomes xn--fwcaqax2g2d7dtadc . This conversion excludes the zwj at the end of the word. If I do a reverse conversion from xn--fwcaqax2g2d7dtadc to unicode what I get is തോട്ടിങ്ങല് (0D24 0D4B 0D1F 0D4D 0D1F 0D3F 0D19 0D4D 0D19 0D32 0D4D). Note that codepoint 200D &#8211; ZWJ is removed. That means I cannot register my domain thottingal.in in Malayalam properly. You can verify this using <a href="http://demo.icu-project.org/icu-bin/idnbrowser?t=%E0%B4%A4%E0%B5%8B%E0%B4%9F%E0%B5%8D%E0%B4%9F%E0%B4%BF%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B4%B2%E0%B5%8D%E2%80%8D" target="_blank">ICU online converter</a>.  Now another example, Tamilnadu &#8211; in Malayalam തമിഴ്‌നാട് (0D24 0D2E 0D3F 0D34 0D4D 200C 0D28 0D3E 0D1F 0D4D) becomes xn--lwcjmx4a2de7id. When I do a reverse conversion, I getതമിഴ്നാട് (0D24 0D2E 0D3F 0D34 0D4D 0D28 0D3E 0D1F 0D4D) . Now ZWNJ(200C) is missed. Try yourself using <a href="http://demo.icu-project.org/icu-bin/idnbrowser?t=%E0%B4%A4%E0%B4%AE%E0%B4%BF%E0%B4%B4%E0%B5%8D%E2%80%8C%E0%B4%A8%E0%B4%BE%E0%B4%9F%E0%B5%8D" target="_blank">the converter </a>. This means one cannot register a website with Tamilnadu written in Malayalam properly. The IDN policies for Indic languages are based on this exclusion rules for zwj, zwnj.

For python 3.0+ ,  you cannot have an identifier in programming language with zwj, zwnj  or any control character in it. See this bug report for more details: <a href="http://bugs.python.org/issue5358" target="_blank">Issue 5358 </a>

All of the above issues are because of the assumption that zwj,zwnj is prohibited from Identifiers for all cases. But that is not true. Look at the <a href="http://unicode.org/reports/tr31" target="_blank">Unicode Standard Annex 31</a> &#8211; &#8220;Unicode Identifier and Pattern Syntax&#8221;(TR31). TR31 is based on <a href="http://unicode.org/review/pr-96.html" target="_blank">Public Review 96</a> &#8211; &#8220;Allowing Special Characters in Identifiers&#8221;

> _This annex describes specifications for recommended defaults for the use of Unicode in the definitions of identifiers and in pattern-based syntax. It also supplies guidelines for use of normalization with identifiers. [&#8230;]_
>
> _default-ignorable characters are normally excluded from Unicode identifiers. However, visible distinctions created by certain format characters (particularly the_ _Join_Control characters) are necessary in certain languages. A blanket exclusion of these characters makes it impossible to create identifiers with the correct visual appearance for common words or phrases in those languages. Identifier systems that attempt to provide more natural representations of terms in modern, customary use should allow these characters in input and display, but limit them to contexts in which they are necessary. [&#8230;]_

But since the characters are invisible, to meet the security considerations,  It should be clearly defined where and all we can use them. What if a domain is registered with 5 zwnj  continuously in it? It will look same to a string with 4 zwnjs. So TR31 defines 3 valid cases where zwnj and zwj can be used in an Identifier.

  * Allow ZWNJ in breaking a cursive connection
  * Allow ZWNJ in a conjunct context (example:  തമിഴ്‌നാട് , ദൃക്‌സാക്ഷി)
  * Allow ZWJ in a conjunct context (examples:  ന + ് + zwj -> ന്‍ ,  <big>क+  ् +  zwj -> </big> <big>क्‍</big> )

These 3 cases covers all zwj,zwnj usage patterns in our languages.

So now it is clear that Unicode standard allows them in Identifiers. In that case, there should not be a conflict between Unicode Identifier policy and ICANN policy or any other identifier policy such as PEP 3131. Blanket exclusion of these characters are not allowed. So RFC 3454 should be compatible with TR31. The IDN policy of Indic languages should be based on that new specification and not based on the existing RFC 3454. Since CDAC is responsible of Indic Domain policy, they should take responsibility for bringing this change.

For making a change in PEP 3131, myself and <a href="http://www.muthukadan.net/" target="_blank">Baiju M</a> started a wiki page explaining what change need to be done. <a href="http://wiki.python.org/moin/ZwjAndZwnjAsIdentifiers" target="_blank">Read it from here</a>.

Having said that, is it desirable to have  two domains,  one with a valid zwj/zwnj usage and another without them? Of course, they will be visually different, avoiding any possibilities for spoofing. Now the question is whether those  two words represent two words in the language?

As far as Malayalam is concerned there are three cases here:

  1. Missing ZWJ is considered as a spelling mistake &#8211; തമിഴ്‌നാട് (correct), തമിഴ്നാട് (incorrect) pair is an example for that.  Should we allow both domains ? I don&#8217;t know any case where a missing ZWNJ form another valid word with different meaning.
  2. Missing ZWJ means , the word is a different word with different meaning. This is very rare &#8211; വന്‍യവനിക , വന്യവനിക pair is often cited an example for this. But many people argues this is not a valid case.
  3. Missing ZWJ never means a spelling mistake, but just a writing style. There are many examples for this. നന്‍മ-നന്മ is one obvious one.

So the question is whether a domain differing by a valid zwj/zwnj use  to an existing registered domain to be allowed or not? I would suggest to use existing policy for domain comparison for this. ie, If the collation weights of existing domain and to-be registered domains are same ,  don&#8217;t register the new one. ZWJ, ZWNJ are characters with zero collation weight and in collation or string comparison they are ignored.

<div id="_mcePaste" style="overflow: hidden; position: absolute; left: -10000px; top: 10px; width: 1px; height: 1px;">
  http://www.python.org/dev/peps/pep-3131/PEP
</div>