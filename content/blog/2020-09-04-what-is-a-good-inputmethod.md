---
title: "What is a good input method?"
author: Santhosh Thottingal
type: post
date: 2020-09-04T16:10:00+05:30
url: /blog/2020/09/04/good-inputmethod/
draft: true
categories:
  - Malayalam
  - Input methods
tags:
  - input-methods
  - handwriting

---

As more and more people enter to the Malayalam digital world, the issue of not having any formal training for Malayalam computing is more observed. People sometimes just search for input methods in web, ask friends, try to use whatever coming with the devices they have. Since I myself is an author of two input methods, sometimes people ask me too. This essay is about the characteristics of good input method aimed to help people to make right choice. This essay does not recommend any particular input method though. I will focus on Malayalam language, but some concepts may be applicable for similar languages.

## What is an input method?

An [input method][1] or Input Method Editor(IME) is a program that helps to enter characters that are not natively present in the keyboard of computer(computing devices). An IME is necessary when the script has more characters than the number of keys available in the keyboard. Malayalam need an IME to generate Malayalam content because it is not present as native keys in a keyboard or it has more characters than any keyboard.

## Why the selection of input method is important?

Learning an input method and practicing typing Malayalam with that is as important as you learn to write using a pen when you were a kid. You learned that skill once, by taking time, once for your life time. Writing using pen used to be the only way to communicate in written form. Now onwards it is typing. You should master this skill to express freely. You should own the pen, you should own the input method. It should not spy you. I will explain these concepts in detail in this essay.

Now a days, people learn Malayalam typing based on social needs. "I want to chat with my friends in Malayalam", "I want to participate in whatsapp discussions in Malayalam", "I am a Malayalam teacher, it is bad if I don't know typing in Malayalam", "I am a software engineer, it is bad if I don't know typing in my mother tongue" and so on. There will be a tendency to learn this skill quickly and start using it. The immediate need to write your name or write some informal chat message can be met by any kind of input method, but soon you will realize that you need to write serious things also. You will realize I need to prepare a formal document, I need to typeset a report or a notice and so on. You should not require relearning a new input method at that point. So don't take the learning Malayalam typing lightly.

## Inscript

There is a misconception that one should use a government prescribed official keyboard for typing in Malayalam. First of all, there is no such official prescription.

Historically, for Indian languages, [InScript][2] keyboard was designed as a layout that can be directly mapped to the available keys in the keyboard. The Inscript standard went through a revision in 2010 to accommodate more characters that were added later to unicode and also to fix several usability issues and bugs. It also aimed to add Rupee symbol(₹) to the keyboard. But this revision, known as [Enhanced InpScript specification][3] had several issues for Malayalam, and [we pointed out them to CDAC][4] who were designing it. Mainly it broke the backward compatibility with previous version. Remember that, by 2010, students in Kerala schools started learning Inscript. So it raised the issue of relearning the changed key positions. As more characters were added to unicode Malayalam codeblock, to accommodate some of them, a third layer was introduced in Inscript Malayalam.

![](/wp-content/uploads/2020/09/InscriptForMalayalam.png)
Malayalam Inscript old version layout

![](/wp-content/uploads/2020/09/MalayalamInscript2.png)
Malayalam Inscript enhanced layout with 3 layers

CDAC did not finalize or release this version officially. Some operating systems started adding this input method specification since support for Rupee sign was important.

![](/wp-content/uploads/2020/09/input_sources_gnome.png)
Input method selection screen in Ubuntu.

Because of the quasi-official status of Inscript, it is taught as part of Malayalam typing training, but some teach old version of Inscript, some teach new version and complaints about key position change is common. The usability issues and learning effort makes it less attractive. Occassionally I see people customizing the key layout(Example: [Peruma][5] -A Malayalam Inscript Keyboard for Windows). Interestingly, the customized keyboards are called with same name Inscript to add more confusion.

## Choices

If you just do a web search for Malayalam keyboard in Google or its playstore, you get dozens of options. That is good and bad. For an uninformed user, it is difficult to chose the right one and that is why I write this essay.

There are three main types of input methods available now a days:

* Keyboard based input methods
* Speech recognition based input methods
* Handwriting recognition based input methods

## Features of good input methods

### Control

You should master this skill to express freely. Just like the pen does not
interfere with what you write, the input methods should just do what you wanted to write. It should not control what you can type, where you can type.

### Privacy

Can an input method keep what you type private? No one knows that unless the source code of the input method is available to inspect. Free and open source software is a prerequisite for data privacy. Think twice before choosing proprietary input methods from suspicious sources, requiring internet access for use.

### Availability and ownership

An input method should be available always in your device. It should not stop working if device is offline. The input method should be available in all devices and operating systems you use. You don't want to learn a new input method for your phone, another for your office computer. A good input method will be available in maximum platforms.

An input method is primary way to use your language. [Just like you own your pen, you should own the input method][7]. Input methods that require licensing fee and become unavailable based on the conditions of its vendor is not owned by you. You should make sure that input methods are expected to continue even after the original author is not maintaining it. A couple of years back, [Google withdrew its input methods for desktops][6]. There were lot of users for that input method and they were all stuck with the last release. I even see some of those users, save the installation programs in their computers and share with their friends while Google just abandoned them.

Make sure that your input method is not an experiment of some developer who just want to play with a technology. Make sure it is well maintained and expected to be available for long time.

### Correctness

The ultimate goal of an input method is to generate data in unicode. You may be using voice, handwriting, transliteration, autocompletion or such methods. But the end result should be correct according to the language. If an input method produce 0(zero) for ം(anuswaram) or o(English o) for Malayalam TTA(ഠ), you may not notice it immediately because they are visually same. But they are completely different. The content generated become unsuitable for any language processing. Malayalam unicode has interesting characteristics and complexities. The language written in digital form, sometimes may use invisible characters like Zero Width Joiner and Zero width non-joiners. If [an input method adds these invisible characters in unwanted places][8], then also it is buggy.

Since input method is a software, like any software, bugs are often present. But the difference is whether you can report bugs and get it fixed. For that the software should be well maintained.

### Well maintained software

A well maintained input method will have a bug tracker where people can report issues. The maintainers will respond to the issues and release new versions with bug fixes. There will be a forum or similar places where people can go and ask questions. The input method will require updates as the operating systems get new versions. There should be a community or maintainer who release new versions regularly. You should not use an input method that is not maintained by anybody.

### Documentation

A well maintained input method will also have accompanied up to date documentation. This is helpful for you to refer, learn the input method, solve technical issues.


[1]: https://en.wikipedia.org/wiki/Input_method
[2]: https://en.wikipedia.org/wiki/InScript_keyboard
[3]: http://malayalam.kerala.gov.in/images/8/80/Qwerty_enhancedinscriptkeyboardlayout.pdf
[4]: https://wiki.smc.org.in/CDAC-Inscript-Critique
[5]: https://sourceforge.net/projects/peruma/
[6]: https://support.google.com/chrome/thread/32057437?hl=en
[7]: https://thottingal.in/blog/2017/08/16/your-language-your-pen/
[8]: https://thottingal.in/blog/2007/10/11/%E0%B4%B5%E0%B4%B0%E0%B4%AE%E0%B5%8A%E0%B4%B4%E0%B4%BF%E0%B4%AF%E0%B4%BF%E0%B4%B2%E0%B5%81%E0%B4%82-%E0%B4%AE%E0%B5%8A%E0%B4%B4%E0%B4%BF-%E0%B4%95%E0%B5%80%E0%B4%AE%E0%B4%BE%E0%B4%A8%E0%B4%BF%E0%B4%B2/
