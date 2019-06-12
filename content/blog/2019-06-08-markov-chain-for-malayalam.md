---
title: Markov chain for Malayalam
author: Santhosh Thottingal
type: post
date: 2019-06-08T04:23:49+00:00
url: /blog/2019/06/08/markov-chain-for-malayalam/
categories:
  - Linguistics
  - Malayalam
  - Projects
  - SMC
tags:
  - markov

---


I have been trying to generate a Markov chain for Malayalam content. A Markov chain is a stochastic model describing a sequence of possible events in which the probability of each event depends only on the state attained in the previous event.([wikipedia][1]). For natural language, it represents a probabilistic model of words- the probability that one word can come after another word. This model can be prepared by feeding large amount of text to system that learns the probabilities of each words.

For Malayalam, I used the [SMC Malayalam corpora][2]. I used the [markovchain python library][2] as the tool to build the model. I had to do some bug fixes and customization to get it working for Malayalam, but the developer of the library was generous to merge my pull requests.

A markov chain is not interesting to a general user since as such it does not provide any direct benefits. But this is a foundation for many applications like speech recognition, handwriting recognition, automatic text generation etc. Mainly, it is used a tool that predict the next word given a prompt word. So I built a web application and web api that predict the next Malayalam word<figure class="wp-block-image">

<img src="/wp-content/uploads/2019/06/Screenshot_20190608_093906.png" alt="" class="wp-image-1649" /></figure>

This application is available at https://predict.smc.org.in/ and source code is at https://gitlab.com/smc/mlpredict

Another interesting application is automatic text generation. Some sample texts generated:

<blockquote class="wp-block-quote">
  <p>
    നാളെ വീണ്ടും ഉപേക്ഷിയ്ക്കപ്പെടുകതന്നെയായിരിക്കില്ലേ അവരുടെ ഉല്പന്നങ്ങളെക്കുറിച്ചുള്ള വിശദാംശങ്ങൾ പ്രസിദ്ധീകരിക്കാനായി കമ്പനിയെ സമ്മതിപ്പിക്കാൻ നമുക്കാകുന്നുണ്ടു്. ചിലപ്പോൾ സമൂഹവുമായി സഹകരിച്ചും നമ്മുടെ കമ്പ്യൂട്ടറുകളിലും ഡിജിറ്റൽ.&#8217;<br />
  </p>
</blockquote>

<blockquote class="wp-block-quote">
  <p>
    നാളെ കാലത്തു കുറച്ചു വെള്ളം കോരിയൊഴിച്ചു കുടം നിറച്ചു കഞ്ഞിയുണ്ടായി. അതു വരുമ്പോൾ കുട്ടികളുടെ ഒന്നും ചേർന്നു തന്നെ. വരികളോർമ്മിച്ച് ആസ്വദിച്ച് കൊണ്ടുള്ള കഞ്ഞിയോ പുഴുക്കോ ആയിരുന്നു വലിയൊരു കൂട്ടത്തിന്റെ വിലാപത്തിന്റെ സംഗീതികതന്നെയായി മാറുകയാണ് ഈ.
  </p>
</blockquote>

<blockquote class="wp-block-quote">
  <p>
    ഇനിയും വല്ലതും തിന്നുകയും ചെയ്തതിന്റെശേഷം കൊട്ടാരംവക ആനയെ അതുവരെ ഇവിടെ വന്നു തുടങ്ങി. എങ്കിലും നിന്റെ കമ്പ്യൂട്ടറിനെ അനുഗ്രഹിക്കുന്നു കുട്ടീ. വികസിപ്പിക്കാവുന്ന ടെക്സ്റ്റ് ബുക്കായി ഉപയോഗിക്കാവുന്ന തരത്തിൽ അതിനെപറ്റി സങ്കൽപ്പിക്കാൻ സാധ്യമല്ല. അതുകൊണ്ട്, ആസന്നമായിരിക്കുന്നുവെന്ന് എല്ലാ ജില്ലകളിലും കളക്ടർമാരുടെ നേതൃത്വത്തിൽ നടത്തിയ നിക്ഷേപവുമാണു്, അല്ലാതെ മറ്റൊരു സുഖം. സ്കൂൾജീവിതം കഴിഞ്ഞപ്പോൾ അതു് നിങ്ങളുടെ പിന്തുണ ഉറപ്പാക്കാനായിട്ടില്ല. ഇതു് നിസ്സാരകാര്യമല്ല. ഭാരതി എയർടെൽ സീറോയുടെ ഭാഗമായി ബിയർ പാർലറിന്റെ ചുമരിടിച്ചു തകർത്താണ് സർജെന്റ് ഐസക്കും, കൂട്ടാളികളും ചെക്കോസ്ലോവാക്യൻ മണ്ണിൽ പിറക്കണമെന്ന് ജനിക്കാനിരിക്കുന്ന പെൺകുഞ്ഞ് ഭീതി കലർന്ന വാർത്തകൾ വിശ്വസിച്ച് ഈ വിവരങ്ങൾ നിങ്ങൾക്കു നശിപ്പിക്കാം, തോല്പിക്കാനാവില്ല എന്ന ചോദ്യം 3: പ്രോലിറ്റേറിയന്മാർ എക്കാലത്തുമുണ്ടായിരുന്നില്ലെന്നല്ലേ ഇതിന്റെ ഏഴിരട്ടിയുണ്ടെന്നോർക്കുക. ചുറ്റോടുചുറ്റുമുള്ള കടലോരങ്ങളുടെ ചാരുത മുതൽ അവസാനംവരെ അവന്റെ കചക്കയറിന്മേൽ കെട്ടി ചിലപ്പോഴൊക്കെ നമ്മളെ ഭയപ്പെടുത്തുന്നതാണെന്നു് നാം ഭൂമിക്കുചുറ്റും മണിക്കൂറിൽ 1600 &#8211; ൽ കൂടുതൽ.
  </p>
</blockquote>

Have fun!

 [1]: https://en.wikipedia.org/wiki/Markov_chain
 [2]: https://blog.smc.org.in/malayalam-corpus/