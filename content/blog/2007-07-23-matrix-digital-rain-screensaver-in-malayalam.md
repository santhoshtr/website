---
title: Matrix Digital Rain Screensaver In Malayalam!!!
author: Santhosh Thottingal
type: post
date: 2007-07-23T15:40:00+00:00
url: /blog/2007/07/23/matrix-digital-rain-screensaver-in-malayalam/
lj_itemid:
  - 18
lj_permalink:
  - http://santhoshtr.livejournal.com/4836.html
categories:
  - Misc
tags:
  - matrix
  - screensaver
  - SMC

---
മലയാള നാട്ടില്‍ മഴ തിമര്‍ത്തു പെയ്യുകയാണ്. കഴിഞ്ഞയാഴ്ച ഞാനൊരു മഴയുണ്ടാക്കാനുള്ള ശ്രമത്തിലായിരുന്നു. സാധാരണ മഴയല്ല. [ഡിജിറ്റല്‍ മഴ!!!][1]. അക്കഥയിങ്ങനെ:

1999 ല്‍ പുറത്തിറങ്ങിയ ഹോളിവുഡ് സൂപ്പര്‍ഹിറ്റ് ചലച്ചിത്രമായ മെട്രിക്സില്‍ അവതരിപ്പിക്കപ്പെട്ട കമ്പ്യൂട്ടര്‍ കോഡിന്റെ മായിക ദൃശ്യാവിഷ്കാരം &#8211; കറുത്ത സ്ക്രീനില്‍ ഉതിര്‍ന്നു വീഴുന്ന പച്ച അക്ഷരങ്ങള്‍, വളരെയേറെ ശ്രദ്ധപിടിച്ചു പറ്റുകയുണ്ടായി. മെട്രിക്സ് പരമ്പരയിലെ ചലച്ചിത്രങ്ങളില്‍ അവതരിപ്പിക്കപ്പെട്ട ഈ ഡിജിറ്റല്‍ മഴയുടെ അനുകരണമായി ധാരാളം സ്ക്രീന്‍ സേവറുകള്‍ പുറത്തിറങ്ങുകയുണ്ടായി. മിക്കതും കമ്പ്യൂട്ടര്‍ പ്രേമികളുടെ ഇഷ്ടപ്പെട്ട സ്ക്രീന്‍ സേവറുകളായി. ഗ്നു ലിനക്സിലും xscreensaver എന്ന സ്ക്രീന്‍സേവര്‍ പാക്കേജിന്റെ കൂടെ glmatrix എന്ന പേരില്‍ ഒരു കിടിലന്‍ സ്ക്രീന്‍സേവറുണ്ട്. എനിക്കേറെ ഇഷ്ടപ്പെട്ട ഒരു സ്ക്രീന്‍സേവറാണത്.

മെട്രിക്സ് സ്ക്രീന്‍സേവറില്‍ കാണിക്കുന്ന അക്ഷരങ്ങള്‍ റോമന്‍ , കാടകാന, അറബിക് എന്നിവയാണ്. ഈ അക്ഷരങ്ങള്‍ക്ക് പകരം നമ്മുടെ സ്വന്തം മലയാളം അക്ഷരങ്ങള്‍ ഉതിര്‍ന്നു വീണാലെങ്ങനെയുണ്ടാവും? ഇങ്ങനെയൊരു ആശയവുമായി ഞാന്‍ glmatrix ന്റെ കോഡ് ഡാണ്‍ലോഡ് ചെയ്തു വായിച്ചു നോക്കി.

എന്നിട്ട് ഞാനതങ്ങ് മലയാളത്തിലാക്കി . താഴെ കൊടുത്തിരിക്കുന്ന പടങ്ങള്‍ കണ്ടോ? എങ്ങനെയുണ്ട്?

[<img src="http://pics.livejournal.com/santhoshtr/pic/00008awq/s320x240" width="320" height="200" border='0' />][2]

[<img src="http://pics.livejournal.com/santhoshtr/pic/00006q0h/s320x240" width="320" height="200" border='0' />][3]

[<img src="http://pics.livejournal.com/santhoshtr/pic/00007e13/s320x240" width="320" height="200" border='0' />][4]

ഈ സ്ക്രീന്സേവര്‍ ഇന്സ്റ്റാള്‍ ചെയ്യാന്‍ വേണ്ടി:

Gnome 2.14 version(Debian Etch,Ubuntu 6.06) ;

https://savannah.nongnu.org/task/download.php?file_id=13434

Gnome 2.18 version(Ubuntu 7.04) ;

https://savannah.nongnu.org/task/download.php?file_id=13435

Above given versions will add the screensaver to gnome-screensaver group of screensavers.

If you want to add the screensaver to xscreensaver, after installing any of the package,

Add the following line to the .xscreensaver file in your home directory. Refer the glmatrix entry in that file for reference

&#8211; GL: mlmatrix -root \n\

Other gnu/Linux distros:

Download https://savannah.nongnu.org/task/download.php?file_id=13436

Extract it, copy the mlmatrix to /usr/lib/xscreensaver, copy mlmatrix.xml to /usr/share/xscreensaver/config folder

Add the following line to the .xscreensaver file in your home directory. Refer the glmatrix entry in that file for reference

&#8211; GL: mlmatrix -root \n\

For the technical details of this application, pls contact me at santhosh00 at gmail.com

 [1]: http://en.wikipedia.org/wiki/Matrix_digital_rain
 [2]: http://pics.livejournal.com/santhoshtr/pic/00008awq/
 [3]: http://pics.livejournal.com/santhoshtr/pic/00006q0h/
 [4]: http://pics.livejournal.com/santhoshtr/pic/00007e13/