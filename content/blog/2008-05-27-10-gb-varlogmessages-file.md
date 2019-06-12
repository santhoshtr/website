---
title: 10 GB /var/log/messages file
author: Santhosh Thottingal
type: post
date: 2008-05-28T06:11:00+00:00
url: /blog/2008/05/27/10-gb-varlogmessages-file/
lj_itemid:
  - 42
lj_permalink:
  - http://santhoshtr.livejournal.com/10848.html
categories:
  - Bugs
tags:
  - fedora

---
Again fedora! 🙂

After the installation of [linux kernel and linux operating system][1], I installed some libraries, some small applications that I usually use&#8230; I have a partition for Fedora 9 with 14 GB size. After installing all those softwares, when I rebooted the system today, the gdm was not starting. GDM kept on restarting and I could not take a user session by pressing ALT + CTRL + F1. hmm&#8230; So added single at the kernel argument in the grub, and got the shell.

To my surprise I saw that df -a is saying the partition is 100% full..!. I just installed a few application and not anything for 14 GB..

So tried to figure out who is taking the full diskspace and I caught him.

/var/log/messages 🙂

Yes!

$ls -l messages

-rw&#8212;&#8212;-+ 1 root root 10450239682 2008-05-27 20:39 messages

Ok, 9.7 GB. so who is writing to messages?

$tail -n 100 messages

This gave me some hint. Some sample lines from messages file:

May 27 20:39:23 thottingal gdm-simple-slave[2523]: DEBUG: GdmSignalHandler: Adding handler 5: signum=8 0x804c520

May 27 20:39:23 thottingal gdm-simple-slave[2523]: DEBUG: GdmSignalHandler: Registering for 8 signals

May 27 20:39:23 thottingal gdm-simple-slave[2523]: DEBUG: GdmSignalHandler: Adding handler 6: signum=1 0x804c520

May 27 20:39:23 thottingal gdm-simple-slave[2523]: DEBUG: GdmSignalHandler: Registering for 1 signals

GDM was writing all debug messages to the /var/log/messages. can somebody help me to figure out what is wrong with my GDM?

(the [debug] section of /etc/gdm/custom.conf is empty)

 [1]: http://santhoshtr.livejournal.com/10581.html