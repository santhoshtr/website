---
title: 'HOWTO: Wacom Bamboo CTH301K in Debian'
author: Santhosh Thottingal
type: post
date: 2014-10-26T13:53:07+00:00
url: /blog/2014/10/26/howto-wacom-bamboo-cth301k-in-debian/
categories:
  - Misc
tags:
  - howto
  - tablet
  - wacom

---
This is a short documentation on getting <a href="http://www.wacom.com/en/de/everyday/bamboo-pad-usb" target="_blank">Wacom Bamboo CTH301K</a> working in Debian. I use Debian Sid with Linux kernel 3.16 at the time of writing this. But this should work with latest Ubuntu(14.04 or 14.10) and new kernels.

Wacom Bamboo CTH301K is an entry level touch pad with stylus &#8211; you can use it as a mouse, or drawing pad with stylus. It has multitouch features like pinch zoom and all. I got all working.

Eventhough wacom has drivers for their many models in linux kernel, this particular model with device id: 056a:0318 does not have a driver in kernel. When you connect it, you will see it is listed in the lsusb output as

`Bus 003 Device 016: ID 056a:0318 Wacom Co., Ltd`

But touch or stylus wont work because of missing driver. First step to get stylus working is adding `usbhid.quirks=0x056a:0x0318:0x40000000` to the grub boot cmdline. For this, edit /etc/default/grub. Append the above string to GRUB\_CMDLINE\_LINUX_DEFAULT. In my system it looked like as follows:

`GRUB_CMDLINE_LINUX_DEFAULT="quiet init=/bin/systemd usbhid.quirks=0x056a:0x0318:0x40000000"`

You need to save this file and run update-grub command to get this updated in grub. There are alternate ways to pass this string to modprob, but this method make sure it works always in every system restart. Once done, you will see the stylus getting detected and working. Touch will not work still-This is because the default wacom driver picked up does not know about this device.

To get touch working, open /usr/share/X11/xorg.conf.d/50-wacom.conf and add  `MatchIsTablet "on"` to the first section of that file. In my machine it looked like

``

<pre>Section "InputClass"
        Identifier "Wacom USB device class"
        MatchUSBID "056a:*"
        MatchIsTablet "on"
        MatchDevicePath "/dev/input/event*"
        Driver "wacom"
EndSection
</pre>

With this the &#8220;evdev&#8221; driver will be managing the device&#8217;s touch part. Restart your X &#8211; like restrarting KDM or GDM. Or just restart the machine.

You will see stylus and touch working now. You may need to use xsetwacom command to adjust the preferences, but you can find documentation of that elsewhere.

The above method also works with wireless model, just replace the device id 0x056a:0x0318 with 0x056a:0x0319

###  Update

  * 24/04/2015: Bamboo Pad pen support accepted into Linus&#8217; repository on the &#8220;master&#8221; branch (commit 61e9e7e). Expected release: Linux 4.0.
  * Bamboo Pad touch support accepted into Jiri&#8217;s HID repository on the &#8220;for-4.1/wacom&#8221; branch (commit 8c97a76). Expected release: Linux 4.1.