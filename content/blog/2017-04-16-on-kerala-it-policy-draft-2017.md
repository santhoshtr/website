---
title: On Kerala IT Policy Draft 2017
author: Santhosh Thottingal
type: post
date: 2017-04-16T06:16:35+00:00
url: /blog/2017/04/16/on-kerala-it-policy-draft-2017/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:75:"https://cdn-images-1.medium.com/fit/c/200/200/1*As1EIgy-TLEcibTNPBApCQ.jpeg";s:10:"author_url";s:31:"https://medium.com/@sthottingal";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"b57678cec057";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:75:"https://medium.com/@sthottingal/on-kerala-it-policy-draft-2017-b57678cec057";}'
categories:
  - Misc
  - Standards
tags:
  - e-governance
  - Kerala
  - policy

---
[The Kerala IT Policy Draft 2017(draft)][1] was published in March 2017 for public feedback. It has many progressive elements in it and are crucial for the rapidly changing IT ecosystem in the context of  Government  IT Policy.

Continuing earlier Kerala gov. policy on Free and Open source software, this version also [emphasis the usage and promotion of free and opensource software][2]. The policy also mentions about the importance of [Malayalam computing and local language content][3]. These are all good, even though planning and implementation of specific items in these sections need wider discussions.

One important topic I wanted to comment in this post is about e-governance. There are detailed mentions about e-governance in the policy. There is a plan to have [single government poral for participatory e-governance][4]. About government service delivery, [it says:][5]

> State is embarking on its journey to offer an “Omni-channel experience” of all its e-Governance services through web portal, mobile applications, Akshaya / CSCs and through Integrated Citizen call centres. The objective is to setup and operationalise an effective Single Window for services supported by the core infrastructure and systems.

> It shall be ensured that all government applications are compliant to Deity guidelines and thereby interoperable.

In my experience with government services and their digital services, one important issue is lack of high level information system planning. I often see each department develop websites, service portal and mobile apps and release with lot of PR every time a government changes or even under same government. A state goverment has serveral departments and the amount of data it handles and kind of services it provides is huge. By nature, these departments share a lot of data mostly interdependent. Every digital service on top of this is not connected. A citizen need to register and login to multiple government websites. A central web portal is the quick solution that comes out in every IT polciy acknowledging the above issue. Even then we see lot of apps for government, lot of websites inauguarated now and then.

I think it is time to think about the information system of all these departments and see how we can architect them. Having scattered information systems is natural in the early developing stage of a government IT infrastructure. But at one stage, they should get a strucutre and start communicating each other avoiding the need to rebuild every year or 5 years.

Of course it is not trivial to have a clarity on such system. But I don&#8217;t see an effort in IT policy in this direction. I feel that each departments will continue running their IT systems independently and the connection between each department will be the responsibility of the citizen. For example, get the certificate with sign and seal from this department, go to the other department office, submit the application with the previous ceritificate, get the approval , go to other department, get the stuff done(And as people always say, have a nice chappel). Oh, have [your copy of ID proof in every department][6] and prove that it is you and nobody else paying your tax. This happens when each of these department is _completely digital_.

The wish for well connected IT infrastructure for goverments is nothing new. This wish always ends up in centralized citizen data repositories with unique citizen ids.  That is the traditional modeling of this problem. Now a days it is very clear that this kind of system attracts lot of interest from govenrment and non-goverment entities. Surveillance is becoming the primary goal of the systems, replacing the goal of better citizen service.

There are lot of things to learn from the deficiencies of existing e-governance system. This is not a time to go silient about this in IT policy. The vulnerability of this centralized IT systems with Aadhaar like primary key systems is widely discussed in media now a days. These systems are highly insecure with exclusion and mistrust of citizen. This will infiltrate to state IT systems soon, lack of political will will accelerate it.  There are lot of e-governance space in Kerala in developing stage. Can this be better modelled?

One of the biggest problems in e-governance is the security which demands the greatest protection to be government information from the third party attacker or opponents.  It is of no doubt that it can not be secured with another highly insecure authentication systems like Aadhaar as widely promoted. The need of a well modelled e-Authentication framework is required and that need to learn from mistakes.

&nbsp;

 [1]: http://itmission.kerala.gov.in/it-policy/
 [2]: http://itmission.kerala.gov.in/it-policy/comment/view/58/s/EN
 [3]: http://itmission.kerala.gov.in/it-policy/comment/view/39/m/EN
 [4]: http://itmission.kerala.gov.in/it-policy/comment/view/25/m/EN
 [5]: http://itmission.kerala.gov.in/it-policy/comment/view/28/m/EN
 [6]: http://thottingal.in/blog/2017/03/31/name-matching/