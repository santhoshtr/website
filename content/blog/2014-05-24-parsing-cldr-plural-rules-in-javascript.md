---
title: Parsing CLDR plural rules in javascript
author: Santhosh Thottingal
type: post
date: 2014-05-24T11:26:54+00:00
url: /blog/2014/05/24/parsing-cldr-plural-rules-in-javascript/
categories:
  - i18n
  - Projects
tags:
  - cldr
  - javascript
  - mediawiki
  - nodejs
  - plural
  - wikipedia

---
English and many other languages have only 2 plural forms. Singular if the count is one and anything else is plural including zero.

But for some other languages, the plural forms are more than 2. Arabic, for example has 6 plural forms, sometimes referred as &#8216;zero&#8217;, &#8216;one&#8217;, &#8216;two&#8217;, &#8216;few&#8217;, &#8216;many&#8217;, &#8216;other&#8217; forms. Integers 11-26, 111, 1011 are of &#8216;many&#8217; form, while 3,4,..10 are &#8216;few&#8217; form.

While preparing the interface messages for application user interfaces, grammatically correct sentences are must. &#8220;Found 1 results&#8221; or &#8220;Found 1 result(s)&#8221; are bad interface messages. For a developer, if the language in the context is English or languages having similar plural forms, it may be a matter of an _if condition to_ conditionally choose one of the messages.

But that approach is not scalable if we want to deal with lot of languages. Some applications come with their own plural handling mechanism, probably by a module that tells you the plural form, given a number, and language. The plural forms per language and the rules to determine it is defined in <a title="CLDR - Unicode Common Locale Data Repository" href="http://cldr.unicode.org/" target="_blank">CLDR</a>. CLDR <a href="http://cldr.unicode.org/index/cldr-spec/plural-rules" target="_blank">defines the plural rules</a> in a markup language named LDML and <a href="http://cldr.unicode.org/index/downloads" target="_blank">releases</a> the collections frequently.

If you look at the <a style="color: #4183c4;" href="http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html#pl">CLDR plural rules table</a> you can easily understand this. The rules are defined in a particular syntax. For example, the Russian plural rules are given below.

<noscript>
  <pre><code class="language-xml xml"> &lt;pluralRules locales="ru uk"&gt;
            &lt;pluralRule count="one"&gt;v = 0 and i % 10 = 1 and i % 100 != 11 @integer 1, 21, 31, 41, 51, 61, 71, 81, 101, 1001, &hellip;&lt;/pluralRule&gt;
            &lt;pluralRule count="few"&gt;v = 0 and i % 10 = 2..4 and i % 100 != 12..14 @integer 2~4, 22~24, 32~34, 42~44, 52~54, 62, 102, 1002, &hellip;&lt;/pluralRule&gt;
            &lt;pluralRule count="many"&gt;v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14 @integer 0, 5~19, 100, 1000, 10000, 100000, 1000000, &hellip;&lt;/pluralRule&gt;
            &lt;pluralRule count="other"&gt;   @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, &hellip;&lt;/pluralRule&gt;
&lt;/pluralRules&gt;</code></pre>
</noscript>

One need to pass the value of the number to the variable in the above expressions and evaluate. If the expression evaluates to a boolean true, then the corresponding plural form should be used.

So, an expression like <span style="color: #000000;"> n = 0 or n != 1 and n mod 100 = 1..19 mapped to &#8216;many&#8217; holds true if the value of n=0,119, 219, 319. So we say that they are of &#8216;few&#8217; plural form.</span>

But in the Russian example given above, we don&#8217;t see n, but we see variables v, i etc. The meaning of these variables are [defined in the standard][1] as:

<table style="color: #000000;">
  <tr>
    <th>
      Symbol
    </th>

    <th>
      Value
    </th>
  </tr>

  <tr>
    <td>
      n
    </td>

    <td>
      absolute value of the source number (integer and decimals).
    </td>
  </tr>

  <tr>
    <td>
      i
    </td>

    <td>
      integer digits of n.
    </td>
  </tr>

  <tr>
    <td>
      v
    </td>

    <td>
      number of visible fraction digits in n, <em>with</em> trailing zeros.
    </td>
  </tr>

  <tr>
    <td>
      w
    </td>

    <td>
      number of visible fraction digits in n, <em>without</em> trailing zeros.
    </td>
  </tr>

  <tr>
    <td>
      f
    </td>

    <td>
      visible fractional digits in n, <em>with</em> trailing zeros.
    </td>
  </tr>

  <tr>
    <td>
      t
    </td>

    <td>
      visible fractional digits in n, <em>without</em> trailing zeros.
    </td>
  </tr>
</table>

Keeping these definitions in mind, the expression v = 0 and i % 10 = 1 and i % 100 != 11 evaluates true for 1,21,31, 41 etc and false for 11. In other words, number 1,21,31 are of plural form &#8220;one&#8221; in Russian.

A module to support the plural forms for any language can manually(or semi automatically) convert this expressions to programming language one time and use it. [Twitter-cldr][2] a CLDR abstraction library by twitter follows this method. It converted the above given plural rules to the following javascript expression using a compiler.

<noscript>
  <pre><code class="language-javascript javascript">PluralRules.rules = {
    "keys": ["one", "few", "many", "other"],
    "rule": function (n) {
        return (function () {
            if (n % 10 == 1 && !(n % 100 == 11)) {
                return "one"
            } else {
                return (function () {
                    if ([2, 3, 4].indexOf(n % 10) &gt;= 0 && !([12, 13, 14].indexOf(n % 100) &gt;= 0)) {
                        return "few"
                    } else {
                        return (function () {
                            if (n % 10 == 0 || [5, 6, 7, 8, 9].indexOf(n % 10) &gt;= 0 || [11, 12, 13, 14].indexOf(n % 100) &gt;= 0) {
                                return "many"
                            } else {
                                return "other"
                            }
                        })();
                    }
                })();
            }
        })();
    }
};</code></pre>
</noscript>

This works. But CLDR updates the plural rules in every releases. Most of the time, it contains additional language support. Sometimes the rules are changed or improved too. The maintainer of the module need to recompile them to javascript expression in such cases.

If we can write a compiler to generate javascript from this expressions, can&#8217;t we write a parser-evaluator for the expressions? So that we just need to pass the rule and the number to that evaluator  and it returns the plural form?

### **CLDRPluralRuleParser**

<figure id="attachment_524" aria-describedby="caption-attachment-524" style="width: 427px" class="wp-caption alignright">[<img class="wp-image-524" src="/wp-content/uploads/2014/05/CLDR-Plural-Rule-Evaluator-300x203.png" alt=" CLDR Plural Rule Evaluator" width="427" height="293" />][3]<figcaption id="caption-attachment-524" class="wp-caption-text">CLDR Plural Rule Evaluator</figcaption></figure>

[CLDRPluralRuleParser][4] is that evaluator. I wrote this parser when we at Wikimedia foundation wanted a data driven plural rule evaluation for the 300+ languages we support. It started as a free time project in June 2012. Later it [became part of MediaWiki core][5] to support front-end internationalization. We wanted a PHP version also to support interface messages constructed at server side. Tim Starling wrote a [PHP CLDR plural rule evaluator][6].

It is javascript library that takes the standardized plural rule and an integer and returning true or false depending on whether the rule pass for the given integer. It is written with UMD/common.js pattern and available as a [node module too.][7]

The node module comes with command line interface, just to experiment with rules.

`$ cldrpluralruleparser 'n is 1' 0`

 `false<br />
`

The module does not self contain the plural rules collection or data. Developers need to have that collection as an xml or json inside the application and need to pass to the module. In that sense, one cannot offload the whole i18n message processing task to this module. For a more handy internationalization with javascript, that takes care of plural, gender, grammar etc, you may consider [jquery.i18n][8] which contains CLDRPluralRuleParser.

An example showing how to use the CLDR supplied plural rule data and this library is [included][9] in the repository. You can play with that application [here][3].

<noscript>
  <pre><code class="language-javascript javascript">var parser = require(__dirname + '/CLDRPluralRuleParser.js');
var rule = 'v = 0 and n != 0..10 and n % 10 = 0';
var result = parser(rule, 20);
console.log(result);
//outputs true</code></pre>
</noscript>

**License:** Initially the license of the module was GPL, but as per some of the collaboration discussion between Wikimedia, [cldrjs][10], [jQuery.globalize][11], [moment.js][12], [it was decided to change the license to MIT][13].

 [1]: http://unicode.org/reports/tr35/tr35-numbers.html#Language_Plural_Rules
 [2]: https://github.com/twitter/twitter-cldr-js/blob/master/lib/assets/javascripts/twitter_cldr/ru.js
 [3]: http://thottingal.in/projects/js/plural/demo/
 [4]: https://github.com/santhoshtr/CLDRPluralRuleParser
 [5]: https://github.com/wikimedia/mediawiki-core/blob/master/resources/src/mediawiki.libs/CLDRPluralRuleParser.js
 [6]: https://github.com/wikimedia/mediawiki-core/tree/master/languages/utils
 [7]: https://www.npmjs.org/package/cldrpluralruleparser
 [8]: https://github.com/wikimedia/jquery.i18n
 [9]: https://github.com/santhoshtr/CLDRPluralRuleParser/tree/master/demo
 [10]: https://github.com/rxaviers/cldrjs
 [11]: https://github.com/jquery/globalize
 [12]: http://momentjs.com/
 [13]: https://github.com/santhoshtr/CLDRPluralRuleParser/pull/13