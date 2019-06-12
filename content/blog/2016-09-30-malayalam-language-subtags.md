---
title: Proposal for Malayalam language subtags for orthography variants rejected
author: Santhosh Thottingal
type: post
date: 2016-09-30T03:07:15+00:00
url: /blog/2016/09/30/malayalam-language-subtags/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"d5a042013744";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:118:"https://medium.com/@sthottingal/proposal-for-malayalam-language-subtags-for-orthography-variants-rejected-d5a042013744";}'
categories:
  - i18n
  - Malayalam
  - Standards
tags:
  - ietf
  - Malayalam
  - standards

---
[The _Internet Engineering Task Force_ (_IETF_) &#8211; Languages][1] is responsible for the registration of language tags, subtags and script variants. These registered language tags are used in a wide set of internet standards and applications to identify and annotate language uniquely.

[<img class="wp-image-858 size-medium alignright" src="/wp-content/uploads/2016/09/script-reformation-gov-order-1971-300x158.png" alt="script-reformation-gov-order-1971" width="300" height="158" srcset="/wp-content/uploads/2016/09/script-reformation-gov-order-1971-300x158.png 300w, /wp-content/uploads/2016/09/script-reformation-gov-order-1971-768x406.png 768w, /wp-content/uploads/2016/09/script-reformation-gov-order-1971.png 924w" sizes="(max-width: 300px) 100vw, 300px" />][2]

Recently [Sascha Brawer][3](currently working at Google) submitted a [proposal][4] to register two new language subtags for Malayalam to denote the orthography variations. Malayalam orthography had a diverging moment in history when Kerala government decided to [script reformation in 1971][2]. The decision was to accommodate the Malayalam orthography for the then existing typewriters and typesetting devices. These devices had limitations to accomodate the wide character set of Malayalam at that time.

So, [the proposal][4] was to introduce two subtags as follows:

  1. ml-puthiya:  Reformed Malayalam orthography-Malayalam that is  w ritten in the orthography of the 1971 reform. In Malayalam (transcribed to English), the term for this variant is “puthiya lipi”.
  2. ml-pazhaya:  Traditional Malayalam orthography- Malayalam that is written using the orthographic conventions that were in place before the 1971 reform. In Malayalam (transcribed to English), the term for this variant is “pazhaya lipi”.

Sascha Brawer correctly explained the missing part in this classification:

> According to my contact, this reform was a continuum; the Kerala government order of 1971 did not immediately affect the common practice. Instead, the transition from traditional to reformed has happened over the period of 20-30 years. There is a lot of variation in the specifics for any year one could pick in the last century.
>
> Again according to my contact, there is a common overall understanding among Malayalam speakers that the orthography of the language has moved from ‘traditional’ to ‘reformed.’ However, my contact did not know of an authoritative reference that would describe this transition in more detail.

I [replied to the proposal][5] as follows:

<figure id="attachment_859" aria-describedby="caption-attachment-859" style="width: 300px" class="wp-caption alignright"><img class="wp-image-859 size-medium" src="/wp-content/uploads/2016/09/Spectacle.w21415-300x68.png" alt="Mathrubhumi-title" width="300" height="68" srcset="/wp-content/uploads/2016/09/Spectacle.w21415-300x68.png 300w, /wp-content/uploads/2016/09/Spectacle.w21415.png 451w" sizes="(max-width: 300px) 100vw, 300px" /><figcaption id="caption-attachment-859" class="wp-caption-text">Mathrubhumi daily uses a mixed orthography, except the ു sign, it mostly follows traditional writing style with many conjuncts and stacked ligatures</figcaption></figure>

<figure id="attachment_860" aria-describedby="caption-attachment-860" style="width: 300px" class="wp-caption alignright"><img class="wp-image-860 size-medium" src="/wp-content/uploads/2016/09/Spectacle.X21623-300x77.png" alt="Manorama-Title" width="300" height="77" srcset="/wp-content/uploads/2016/09/Spectacle.X21623-300x77.png 300w, /wp-content/uploads/2016/09/Spectacle.X21623.png 543w" sizes="(max-width: 300px) 100vw, 300px" /><figcaption id="caption-attachment-860" class="wp-caption-text">Malayala Manoarma daily follows a style more close to reformed orthography and avoids many ligatures.</figcaption></figure>

[&#8230;] This is true, there is no defnition or authoritative reference about this

differences. And that is my concern. Given a set of printed samples from

say, todays news paper in Malayalam, one cannot say this is new'(puthiya) or this is &#8216;old'(pazhaya). The contemporary Malayalam usage is a mixed one. It borrows some reformation from 1971 order and some from the practices that existed before

The reason for mixed mode is because the main intention behind the 1971

reformation was to get Malayalam &#8216;usable&#8217; with then type writers and composing machines. As technology progressed and when these limitations vanished, nothing stopped people from using the types similar to what they will write using pen on paper. The modern opentype technology completely removed this limitation and many modern and famous [typefaces of Malayalam][6] uses this &#8216;old&#8217;/ml-pazhaya style.

So defining two variants ml-puthiya, ml-pazhaya without a clear way to

distinguish one from another and having a wide range of ununamed variants exist, is concerning.[&#8230;]

Later,  Michael Everson, the registrar for IETF language tags said he is [rejecting the proposals][7].

> For a Malayalam subtag to be approvable, it really should refer to an orthographic standard. So far it appears that there isn’t anything very precise for either the traditional or the newer spelling to be specified, so it would be best to reject this now (rather than extending it little by little) until revised proposals with solid references can be put forward.

 [1]: https://en.wikipedia.org/wiki/IETF_language_tag
 [2]: http://www.unicode.org/L2/L2008/08039-kerala-order.pdf
 [3]: http://brawer.ch/
 [4]: http://www.alvestrand.no/pipermail/ietf-languages/2016-August/013441.html
 [5]: http://www.alvestrand.no/pipermail/ietf-languages/2016-August/013443.html
 [6]: https://smc.org.in/fonts/
 [7]: http://www.alvestrand.no/pipermail/ietf-languages/2016-September/013455.html