---
title: Internationalized Top Level Domain Names in Indian Languages
author: Santhosh Thottingal
type: post
date: 2016-04-27T17:33:17+00:00
url: /blog/2016/04/27/internationalized-top-level-domain-names-in-indian-languages/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"e9619e78d089";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:105:"https://medium.com/@sthottingal/internationalized-top-level-domain-names-in-indian-languages-e9619e78d089";}'
categories:
  - i18n
  - Indic
  - Malayalam
tags:
  - idn
  - unicode

---
Medianama recently published a news report- &#8220;[ICANN approves Kannada, Malayalam, Assamese & Oriya domain names][1]&#8220;, which says:

> ICANN (Internet Corporation for Assigned Names and Numbers) has approved four additional proposed Indic TLDs (top level domain names), in Malayalam, Kannada, Assamese and Oriya languages. The TLDs are yet to be delegated to NIXI (National Internet exchange of India). While Malayalam, Kannada and Oriya will use their own scripts, Assamese TLDs will use the Bengali script.

The news title says &#8220;domain names&#8221; and the report talks about TLDs. For many people domain name is simply something like &#8220;google.com&#8221; or &#8220;amazon.in&#8221; etc. So people may misinterpret the news report as approval for domain names like &#8220;കേരളസർവ്വകലാശാല.ഭാരതം&#8221;. Many people asked me if that is the case.  We are going to have such domain names in future, but not yet.

<img class="alignright size-medium wp-image-584" src="/wp-content/uploads/2016/04/IDN_TLD.png" width="300" height="225" />I will try to explain the concept of TLD and IDN and the current status in this post.

The [**Internet Corporation for Assigned Names and Numbers** (][2]**ICANN) **is a non-profit organization which takes care of the whole internet domain name system and registration process. It achieves this with the help of lot of domain process and policies and domain registrars. In India [NIXI][3] owns the .in registration process.

A [domain name][4] is a string, used to identify member of a network based on a well defined [Domain Name System][5](DNS). So, &#8220;google.com&#8221;, &#8220;thottingal.in&#8221; etc are domain names. There are dots in the domain name. They indicate the hierarchy from right to left. In the domain name &#8220;thottingal.in&#8221;, &#8220;.in&#8221; indicates a top level or root in naming and under that there is &#8220;thottingal&#8221;. If there is &#8220;blog.thottingal.in&#8221;, &#8220;blog&#8221; is a subdomain under &#8220;thottingal.in&#8221; and so on.

The top level domains are familiar to us. &#8220;.org&#8221;, &#8220;.com&#8221;, &#8220;.in&#8221;, &#8220;.uk&#8221;, &#8220;.gov&#8221; are all examples. Out of these &#8220;.com&#8221;, &#8220;.org&#8221; and &#8220;.gov&#8221; are [generic top level domains][6]. &#8220;.in&#8221; and &#8220;.uk&#8221; are country code top level domains, often abbreviated as **ccTLD. ** &#8220;.in&#8221; is obviously for India.

In November 2009, ICANN decided to allow these domain name strings in the script used in countries. So &#8220;.in&#8221; should be able to represent in Indian languages too. They are called Internationalized country code Top Level Domain names, abbreviated as **IDN ccTLD.**

ICANN also defined a fast track process to do the definition of these domains and delegation to registrars so that website owners can register such domain names. The actual policy document on this is available at [ICANN website][7][pdf], but in short, the steps are (1) preparation, (2) string validation and approval, (3) delegation to registrars.

So far the following languages finished all 3 steps in 2014.

  1. Hindi:  .भारत
  2. Urdu: بھارت
  3. Telugu: .భారత్
  4. Gujarati: .ભારત
  5. Punjabi: .ਭਾਰਤ
  6. Bengali: .ভারত
  7. Tamil: .இந்தியா

What this means is, NIXI owns this TLDs and can assign domains to website owners. But as far as I know, NIXI is yet to start that.

And the following languages, just got approval for second step &#8211; string validation. ICANN [announced][8] this on April 13, 2016. String validation means,  Requests are evaluated in accordance with the technical and linguistic requirements for the IDN ccTLD string(s) criteria.  IDN ccTLD requesters must fulfill a number of requirements:

  * The script used to represent the IDN ccTLDs must be non-Latin;
  * The languages used to express the IDN ccTLDs must be official in the corresponding country or territory; and
  * A specific set of technical requirements must be met.

The languages passed the second stage now are:

  1. Kannada: .ಭಾರತ
  2. Malayalam: .ഭാരതം
  3. Assamese: .ভাৰত
  4. Oriya: .ଭାରତ

As a next step, these languages need delegation- NIXI as registrar. So in short, nothing ready yet for people want to register domain names with the above TLDs.

We were talking about TLDs- top level domain names. Why there is a delay in allowing people to register domains once we have TLD? It is not easy. The domain names are unique identifiers and there should be well defined rules to validate and allow registering a domain. The domain should be a valid string based on linguistic characteristics of the language. There should be a [de-duplication][9] process- nobody should be allowed to take a domain that is already registered. You may think that it is trivial, string comparison, but nope, it is very complex. There are visually similar characters in these scripts, there are rules about how a consonant-vowel combination can appear, there are [canonically equivalent][10] letters. There are [security issues][11][pdf] to consider.

Before allowing domain names, the IDN policy for each script need to be defined and approved. You can see a sample here: [Draft IDN Policy for Tamil][12][PDF]. The definition of these rules were initially attempted by CDAC and was controversial and did not proceed much. I had reviewed the Malayalam policy in 2010 and participated in the discussion meetings based on a [critique we prepared][13].

ICANN has created [Generation Panels][14] to Develop Root Zone Label Generation Rules with specific reference to Neo-Brahmi scripts. I am a member of this panel as volunteer. Once the rules are defined, registration will start, but I don&#8217;t know exactly when it will happen.  The Khmer Generation Panel has completed their proposal for the Root Zone LGR. The proposal has been [released for public comments][15].

 [1]: http://www.medianama.com/2016/04/223-icann-approves-indic-tlds/
 [2]: https://en.wikipedia.org/wiki/ICANN
 [3]: https://en.wikipedia.org/wiki/National_Internet_Exchange_of_India
 [4]: https://en.wikipedia.org/wiki/Domain_name
 [5]: https://en.wikipedia.org/wiki/Domain_Name_System
 [6]: https://en.wikipedia.org/wiki/Generic_top-level_domain
 [7]: https://www.icann.org/en/system/files/files/idn-cctld-implementation-plan-05nov13-en.pdf
 [8]: https://www.icann.org/news/announcement-2016-04-13-en
 [9]: https://en.wikipedia.org/wiki/Punycode
 [10]: http://thottingal.in/blog/2008/06/02/canonical-equivalence-in-unicode-some-notes/
 [11]: http://www.unicode.org/L2/L2007/07035-idn-issues.pdf
 [12]: https://registry.in/system/files/INTERNATIONALIZED_DOMAIN_NAMES-TAMIL.pdf
 [13]: https://wiki.smc.org.in/CDAC-IDN-Critique
 [14]: https://www.icann.org/news/announcement-2013-07-11-en
 [15]: https://www.icann.org/public-comments/khmer-lgr-2016-04-15-en