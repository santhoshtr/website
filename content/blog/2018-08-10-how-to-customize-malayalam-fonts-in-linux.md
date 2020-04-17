---
title: How to customize Malayalam fonts in Linux
author: Santhosh Thottingal
type: post
date: 2018-08-10T16:09:53+00:00
url: /blog/2018/08/10/how-to-customize-malayalam-fonts-in-linux/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"85dffb3a6e34";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:86:"https://medium.com/@sthottingal/how-to-customize-malayalam-fonts-in-linux-85dffb3a6e34";}'
categories:
  - Fonts
  - Tutorial
tags:
  - fontconfig
  - howto

---
Now a days GNU/Linux distributions like Ubuntu, Debian, Fedora etc comes with pre-configured fonts for Malayalam. For Sans-serif family, it is Meera and  for serif, it is Rachana. If you like to change these fonts, there is no easy way to do with configuration tools in Gnome or KDE. They provide a general font selector for the whole desktop, but not for a given language.

The advantage of setting these preference at system level is, you don&#8217;t need to choose this fonts at application level then. For example, you don&#8217;t need to set them for firefox, chrome etc. All will follow the system preferences. We will use [fontconfig][1] for this

First, create a file named **~/.config/fontconfig/conf.d/50-my-malayalam.conf.** If the folders for this file does not exist, just create them. To this file, add the following content.

```lang=xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
<match>
  <test name="lang" compare="contains">
    <string>ml</string>
  </test>
  <test name="family">
    <string>sans-serif</string>
  </test>
  <edit name="family" mode="prepend">
    <string>Manjari</string>
  </edit>
</match>
<alias>
  <family>Manjari</family>
  <default>
    <family>sans-serif</family>
  </default>
</alias>
</fontconfig>
</pre>
```

Save the file and you are done. You can check if the default font for Malayalam changed or not using the following command

<pre class="wp-block-code"><code>$ LANG=ml_IN fc-match</code></pre>

It should list Manjari. The above code we added to the file is not complicated. You can see that we are setting the sans-serif font preference for ml(Malayalam) language as Manjari. Also serif font preference as Rachana. You are free to change the fonts to whatever you prefer.

Note that you may want to close and open your applications to get this preference applied.

You may choose one of the fonts available at [smc.org.in/fonts][2], download and install and use the above configuration with it.

 [1]: https://www.freedesktop.org/software/fontconfig/fontconfig-user.html
 [2]: https://smc.org.in/fonts