---
title: Mediawiki moves to json based localisation file format
author: Santhosh Thottingal
type: post
date: 2014-04-02T11:22:18+00:00
url: /blog/2014/04/02/mw-localisation-format/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"aab7e04daec1";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:99:"https://medium.com/@sthottingal/mediawiki-moves-to-json-based-localisation-file-format-aab7e04daec1";}'
categories:
  - i18n
tags:
  - i18n
  - json
  - l10n
  - mediawiki

---
[Mediawiki is moving from PHP array based localisation file format to json format.][1]

This is based on the RFC: <a href="https://www.facebook.com/l.php?u=https%3A%2F%2Fwww.mediawiki.org%2Fwiki%2FRequests_for_comment%2FLocalisation_format&h=OAQHl4xg6&enc=AZOcydlzUk514kzyzVZwkFag7uqTFDtcdXC4txjUCAUEU6DQqYt9KnzqUrQGqKGWgvaL8Uk-b677aOcMbY7ZQ9dDdypftrO-ftzFN_-4JQ0lchSFLajBKxeUw6ssYBDVrqb16gsBIpB54lzK4h7zR3Wj&s=1" target="_blank" rel="nofollow">https://www.mediawiki.org/wiki/Requests_for_comment/Localisation_format</a>

A lot of extensions were also migrated to the new localisation format, thanks to <a href="https://www.facebook.com/siebrand.mazeland" data-hovercard="/ajax/hovercard/user.php?id=100001390573016&extragetparams=%7B%22directed_target_id%22%3A393039310769612%7D">Siebrand Mazeland</a>

<div>
  <p>
    The json based localization file format was first introduced in our frontend javascript i18n library <a href="https://github.com/wikimedia/jquery.i18n" target="_blank" rel="nofollow">https://github.com/wikimedia/jquery.i18n</a>
  </p>

  <p>
    If you are interested in seeing some of the sample json files see <a href="https://gerrit.wikimedia.org/r/#/c/122787/" target="_blank" rel="nofollow">https://gerrit.wikimedia.org/r/#/c/122787/</a> , claimed as &#8220;largest patch set in the history of MediaWiki&#8221; <i></i>
  </p>
</div>

 [1]: http://lists.wikimedia.org/pipermail/wikitech-l/2014-April/075587.html