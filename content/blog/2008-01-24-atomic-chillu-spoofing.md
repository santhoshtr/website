---
title: ആണവചില്ലും സ്പൂഫിങ്ങും
author: Santhosh Thottingal
type: post
date: 2008-01-24T22:45:00+00:00
url: /blog/2008/01/24/atomic-chillu-spoofing/
blogger_blog:
  - santhoshspeaking.blogspot.com
blogger_author:
  - സന്തോഷ് തോട്ടിങ്ങല്‍http://www.blogger.com/profile/04221571197873023782noreply@blogger.com
blogger_permalink:
  - /2008/01/blog-post_24.html
categories:
  - Malayalam

---
ന്‍, ര്‍,ല്‍, ള്‍,ണ്‍ എന്നീ ചില്ലക്ഷരങ്ങള്‍ക്ക് ഇപ്പോളുള്ള യഥാക്രമം ന+ചന്ദ്രക്കല+ZWJ, ര+ചന്ദ്രക്കല+ZWJ ,ല+ചന്ദ്രക്കല+ZWJ ,ള+ചന്ദ്രക്കല+ZWJ ണ+ചന്ദ്രക്കല+ZWJ എന്നീ യൂണിക്കോഡ് എന്‍‌കോഡിങ്ങിനു് പകരം ഒരൊറ്റ കോഡ് പോയിന്റ് മാത്രം ഉപയോഗിക്കുന്നതിനെയാണ് ആണവചില്ലു് അഥവാ അറ്റോമിക് ചില്ലെന്നു പറയുന്നത്. ഈ വസ്തുത എല്ലാവര്‍ക്കുമറിയാമെന്നു വിചാരിക്കുന്നു. ഇതെങ്ങനെ സ്പൂഫിങിന് കാരണമാകും എന്ന് വിശദമാക്കുകയാണ് ഈ ലേഖനത്തിന്റെ വിഷയം. പലര്‍ക്കുമറിയാവുന്ന കാര്യമായിരിയ്ക്കും. എന്നാലും അറിയാത്തവരുടെ അറിവിലേയ്ക്കായി എഴുതുന്നു.

ആദ്യം സ്പൂഫിങ് എന്താണെന്നു് ആദ്യം നോക്കാം
ഒരു പോലെയെന്നു് തോന്നിക്കുന്ന വിലാസം ഉള്ള വ്യാജസൈറ്റുകളുണ്ടാക്കുന്നതിനെയാണു് സ്പൂഫിങ് എന്നതുകൊണ്ട് ഉദ്ദേശിക്കുന്നതു്. ഇതിനെക്കുറിച്ച് വിശദമായി [Spoofed URL][1],[Spoofing Attack][2] എന്നീ വിക്കിപ്പീഡിയ പേജുകളില്‍ നിന്നു് മനസ്സിലാക്കാം. ഇത്തരം തട്ടിപ്പുകളിലൂടെ ഉപയോക്താക്കളെ വ്യാജസൈറ്റിലേക്കു് ആ‍കര്‍ഷിച്ചു് പണം തട്ടുന്നത് പതിവാ‍ണു്. ICICI Bank ഉപയോക്താക്കളോട് സ്പൂഫിങ്ങിനെക്കുറിച്ചു് മുന്നറിയിപ്പു നല്‍കുന്ന [ഈ പേജ് കാണൂ][3]..

ആണവ് ചില്ലു് വരുമ്പോള്‍ നമ്മുടെ ചില്ലക്ഷരങ്ങളെല്ലാം രണ്ടു് രീതിയില്‍ എന്‍‌കോഡ് ചെയ്യപ്പെടും. യൂണിക്കോഡിന്റെ ബാക്ക്‌വേര്‍ഡ് കമ്പാറ്റിബിലിറ്റി നയമനുസരിച്ചു് നിലവിലുള്ള തരം ചില്ലു് കോഡുകളും, അറ്റോമിക് ചില്ലുകളും വരും. ഇതിലേതു് ഉപയോഗിച്ചാലും കാഴ്ചയില്‍ ഒരു പോലിരിയ്ക്കും. തിരിച്ചറിയാന്‍ പറ്റില്ല.

സര്‍ക്കാര്‍.com എന്ന ഒരു സൈറ്റ് ഉണ്ടെന്നിരിയ്ക്കട്ടെ. ഇതു് 4 പേര്‍ക്കു് രജിസ്റ്റര്‍ ചെയ്യാന്‍ പറ്റും യഥാര്‍ത്ഥ സൈറ്റ് നിലവിലെ ചില്ലുപയോഗിച്ചു് സര്‍ക്കാര്‍.com എന്നു രജിസ്റ്റര്‍ ചെയ്തു എന്നിരിക്കട്ടെ.താഴെപ്പറയുന്നവയാണ് സ്പൂഫ് ചെയ്ത വ്യാജന്മാര്‍
1. സ[അറ്റോമിക് ര്‍]ക്കാ[നിലവിലെ ര്‍].com
2. സ[നിലവിലെ ര്‍]ക്കാ[അറ്റോമിക് ര്‍].com
3. സ[അറ്റോമിക് ര്‍]ക്കാ[അറ്റോമിക് ര്‍].com
കണ്ടാല്‍ ഒരുപോലെയിരിയ്ക്കുന്ന മൂന്നു് വ്യാജന്മാര്‍!
ഇതു പോലെ ഫെഡറല്‍ബാങ്ക് 2 പേര്‍ക്കു രെജിസ്റ്റര്‍ ചെയ്യാം. അങ്ങനെയങ്ങനെ&#8230;
ഇതിന്റെ ഒരു ഡെമോണ്‍സ്ട്രേഷന്‍ റാല്‍മിനോവ് ചെയ്തിട്ടുണ്ടു്
site 1: <http://റാല്‍മിനോവ്.blogspot.com>
site 2: <http://റാൽമിനോവ്.blogspot.com> [അറ്റോമിക് ചില്ലു്]

[വ്യാജന്മാരുടെ ചാകര][4] എന്ന പോസ്റ്റും കാണുക.

 [1]: http://en.wikipedia.org/wiki/Spoofed_URL
 [2]: http://en.wikipedia.org/wiki/Spoofing_attack
 [3]: http://www.icicibank.com/pfsuser/spoofs/bewareoffrauds.html
 [4]: http://pravi.livejournal.com/19722.html