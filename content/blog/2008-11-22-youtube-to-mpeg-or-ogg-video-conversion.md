---
title: Youtube to MPEG or Ogg video conversion
author: Santhosh Thottingal
type: post
date: 2008-11-23T05:37:00+00:00
url: /blog/2008/11/22/youtube-to-mpeg-or-ogg-video-conversion/
lj_itemid:
  - 56
lj_permalink:
  - http://santhoshtr.livejournal.com/14350.html
lj_current_location:
  - Banglore
categories:
  - Misc

---
Here is the two line method to convert a youtube video to oggvorbis video.

Locate clive and ffmpeg2theora in your package and install

`$clive <a href="http://in.youtube.com/watch?v=6JeZ5oeAEyU">http://in.youtube.com/watch?v=6JeZ5oeAEyU </a>`(replace this with the youtube address you want)

It will create a flv file.

**Convert to mpeg video file**

 `$ffmpeg -i AmericaAmerica.flv  AmericaAmerica.mpg`

**Convert to ogg video file**

`$ffmpeg2theora AmericaAmerica.mpg` (replace it with the name of the flv file the previous command created)

Done. You can see the .ogg file in the directory from where you executed the above commands