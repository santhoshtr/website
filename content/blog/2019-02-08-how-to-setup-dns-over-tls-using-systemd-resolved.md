---
title: How to setup DNS over TLS using systemd-resolved
author: Santhosh Thottingal
type: post
date: 2019-02-08T05:36:20+00:00
url: /blog/2019/02/08/how-to-setup-dns-over-tls-using-systemd-resolved/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";N;s:10:"author_url";N;s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";N;s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";N;}'
categories:
  - Misc
  - Tutorial
tags:
  - dns
  - howto

---


DNS over TLS is a security protocol that forces all connections with DNS servers to be made securely using TLS. This effectively keeps ISPs from seeing what website you’re accessing.

For the GNU/Linux distributions using systemd, you can setup this easily by following the below steps.

First, edit the /etc/systemd/resolved.conf and changed the value of DNSOverTLS as :

<pre class="wp-block-code"><code>DNSOverTLS=opportunistic</code></pre>

Now, configure your DNS servers. You need to use DNS server that support DNS over TLS. Examples are Cloudflare DNS 1.1.1.1 or 1.0.0.1. Google DNS 8.8.8.8 also support it. To configure you can use Network manager graphical interface.

Then restart the systemd-resolved using:

<pre class="wp-block-code"><code>sudo systemctl restart systemd-resolved</code></pre>

You are done. To check whether settings are correctly applied, you can try:

<pre class="wp-block-code"><code>$ resolvectl status
Global
       LLMNR setting: no
MulticastDNS setting: no
  DNSOverTLS setting: opportunistic</code></pre>

If you really want to see how DNS resolution requests are happening, you may use wireshark and inspect port 53 &#8211; the usual DNS port. You should not see any traffic on that port. Instead, if you inspect port 853, you can see DNS over TLS requests.