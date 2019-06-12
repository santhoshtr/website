---
title: 'Browser language preferences: navigator.languages is coming'
author: Santhosh Thottingal
type: post
date: 2014-05-17T15:41:08+00:00
url: /blog/2014/05/17/navigator-languages-is-coming/
categories:
  - i18n
tags:
  - browsers
  - i18n

---
Browsers provide an option to choose the preferred language a website to be shown, often named as &#8220;[Accept language][1]&#8220;.

<figure id="attachment_512" aria-describedby="caption-attachment-512" style="width: 300px" class="wp-caption alignright">[<img class="wp-image-512 size-medium" src="/wp-content/uploads/2014/05/FirefoxLanguageSelection-300x277.png" alt="FirefoxLanguageSelection" width="300" height="277" srcset="https://thottingal.in/wp-content/uploads/2014/05/FirefoxLanguageSelection-300x277.png 300w, https://thottingal.in/wp-content/uploads/2014/05/FirefoxLanguageSelection.png 621w" sizes="(max-width: 300px) 100vw, 300px" />][2]<figcaption id="caption-attachment-512" class="wp-caption-text">Firefox accept language preference</figcaption></figure>

These preference values allows websites to deliver a suitable language version to the user.

For the developers, to read this value, the existing options is to check the Accept-Language http header value.  It works and many websites use it already. But this value was never exposed at client side. Javascript cannot access the value of these preferences. There are many use cases where this is preferred. Handling i18n at client side is one of this.

<figure id="attachment_511" aria-describedby="caption-attachment-511" style="width: 300px" class="wp-caption alignleft">[<img class="wp-image-511 size-medium" src="/wp-content/uploads/2014/05/ChromeLanguageSelection-300x254.png" alt="Chrome accept language preference" width="300" height="254" srcset="https://thottingal.in/wp-content/uploads/2014/05/ChromeLanguageSelection-300x254.png 300w, https://thottingal.in/wp-content/uploads/2014/05/ChromeLanguageSelection.png 694w" sizes="(max-width: 300px) 100vw, 300px" />][3]<figcaption id="caption-attachment-511" class="wp-caption-text">Chrome accept language preference</figcaption></figure>

`navigator.language` does exist, but that does not give the correct values. For chrome, it gives browsers UI language and it differs from what is meant by accept-languages. [Firefox 5 onwards][4] this property&#8217;s value is based on the value of the Accept-Language header value. It returns a string value, but accept-language is usually a list of language values in the order of preference.

The good news is, [a patch just landed][5] in Firefox to support `navigator.languages`

It returns an array of language tags representing the user&#8217;s preferred languages, with the most preferred language first.

The most preferred language is the one returned by `navigator.language`

See [specification][6].

Now that it is landed in Firefox, Blink developers are also [considering the implementation.][7]

This will definitely improve the web experience to users and help a lot for internationalization developers.

 [1]: https://en.wikipedia.org/wiki/List_of_HTTP_header_fields
 [2]: /wp-content/uploads/2014/05/FirefoxLanguageSelection.png
 [3]: /wp-content/uploads/2014/05/ChromeLanguageSelection.png
 [4]: https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage.language
 [5]: https://bugzilla.mozilla.org/show_bug.cgi?id=889335
 [6]: http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#navigatorlanguage
 [7]: https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/UfPxUV7RFn8