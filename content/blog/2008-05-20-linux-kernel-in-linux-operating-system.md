---
title: Linux Kernel in Linux Operating System.
author: Santhosh Thottingal
type: post
date: 2008-05-21T05:03:00+00:00
url: /blog/2008/05/20/linux-kernel-in-linux-operating-system/
lj_itemid:
  - 41
lj_permalink:
  - http://santhoshtr.livejournal.com/10581.html
categories:
  - Community
tags:
  - fedora
  - gnu
  - linux

---
Last night I decided to try out the new Fedora 9. I got the ISO image and I did not want to waste time and CD by burning it. I have Debian Lenny in my laptop. So edited the grub configuration and gave the path to the vmllinuz and initrd.img extracted from the iso image. Everything worked fine and it started installing packages and I was watching the blue progress bar with sleepy eyes&#8230;

And the following status message came while installing the linux kernel

> &#8220;The Linux kernel (the core of the Linux operating system)&#8221;

And [this page][1] explains it like this:

> &#8220;The kernel package contains the Linux kernel (vmlinuz), the core of any Linux operating system. The kernel handles the basic functions of the operating system: memory allocation, process allocation, device input and output, etc.&#8221;

So when I extracted the vmlinuz out of the ISO image, what is remaining in the ISO image? Did I extract the OS itself from ISO image? 😉

Being a Keralite, where the high school students study the free software as part of curriculum, and taught to use the word GNU or GNU/Linux for Operating system and Linux for the kernel, and as I had given [this link][2] and [this link][3] to my friends many time(well, I know about the [controversy][4] too), it forces me to ask a silly question:

Is it really painful to write those three letters (GNU) while mentioning about the OS?

 [1]: https://admin.fedoraproject.org/pkgdb/packages/name/kernel
 [2]: http://www.gnu.org/gnu/why-gnu-linux.html
 [3]: http://www.gnu.org/gnu/linux-and-gnu.html
 [4]: http://en.wikipedia.org/wiki/Linux_naming_controversy