---
title: 'Frequency modulation in gnu-octave : square wave carrier and sinusoidal message'
author: Kavya Manohar
type: post
date: 2014-05-31T10:18:48+00:00
url: /blog/2014/05/31/frequencymodulation_in_octave/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:74:"https://cdn-images-1.medium.com/fit/c/200/200/1*dmbNkD5D-u45r44go_cf0g.png";s:10:"author_url";s:32:"https://medium.com/@kavyamanohar";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"d1a33f62c15a";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:123:"https://medium.com/@kavyamanohar/frequency-modulation-in-gnu-octave-square-wave-carrier-and-sinusoidal-message-d1a33f62c15a";}'
categories:
  - Electronics
tags:
  - Frequency modulation
  - gnu-octave
  - Signal Processing

---
<p style="text-align: justify;">
  <a href="https://en.wikipedia.org/wiki/Frequency_modulation">Frequency modulation</a> is a common analog modulation technique. Here the instantaneous frequency of the carrier wave is varied with the instantaneous amplitude of the message signal. That is the information regarding the message is available in the frequency of the carrier. It is a kind of more generic technique called <a href="https://en.wikipedia.org/wiki/Angle_modulation">angle modulation</a>.
</p>

<figure id="attachment_584" aria-describedby="caption-attachment-584" style="width: 680px" class="wp-caption alignnone">[<img class="wp-image-584 size-large" src="/wp-content/uploads/2014/05/fmsquare-1024x768.png" alt="fmsquare" width="680" height="510" srcset="/wp-content/uploads/2014/05/fmsquare-1024x768.png 1024w, /wp-content/uploads/2014/05/fmsquare-300x225.png 300w, /wp-content/uploads/2014/05/fmsquare.png 1200w" sizes="(max-width: 680px) 100vw, 680px" />][1]<figcaption id="caption-attachment-584" class="wp-caption-text">Sinusoidal frequency modulation of square wave carrier</figcaption></figure>

<p style="text-align: justify;">
  <a href="https://en.wikipedia.org/wiki/GNU_Octave">Gnu-octave</a> has built-in function fmmod() available in octave-communications package for implementing frequency modulation. But this function modulates the given message signal with a <strong>sinusoidal carrier </strong>of specified frequency. If we want the carrier to be a square wave as shown in the figure, the built-in function would not help.
</p>

<p style="text-align: justify;">
  Let us see how this can be done. The carrier is a square wave. It may be represented as $$A_c square(\theta_c)$$.  The angle modulated wave has the information content available in the angle part ($$\theta_c$$) of the carrier. When the carrier is angle modulated, the instantaneous value of $$\theta$$ depends on the message signal.
</p>

$$FM=A\_c square(\theta\_{i}(t))$$

<p style="text-align: justify;">
  The angle is not a constant. It varies with time depending on the message signal. In case of frequency modulation, the instantaneous value of that angle is the integral of instantaneous frequency of the modulated signal. Assume $$\omega_i(\tau)$$ is the frequency in radians per second and $$f_i(\tau)$$ is the frequency in Hz.
</p>

$$FM=A\_c square(\int\_0^t\omega_i(\tau)d\tau)$$

$$FM=A\_c square(2\pi \int\_0^t f_i(\tau) d\tau)$$

The instantaneous value of this frequency $$f\_i(\tau)$$ is the sum of the carrier frequency $$f\_c$$ and the frequency change due to the message signal amplitude. Assuming $$x(\tau)$$ is the unit normalized message and $$f\_{dev}$$ is the maximum possible deviation from carrier frequency $$f\_c$$.

$$FM=A\_c square(2\pi \int\_0^t(f\_c+f\_{dev}x(\tau) d\tau)$$

$$FM=A\_c square(2\pi f\_ct+2\pi f\_{dev}\int\_0^tx(\tau)d\tau)$$

To code the same in octave, each continuous time signal is assumed to be sampled at high sampling rate to obtain corresponding discrete time signal. The sampling frequency $$F_s$$ is kept high to avoid improper interpolation of signals while plotting them. Built-in functions can be used to define sine and square waves. The key step is in defining the modulated signal. As per the above equation the message signal has to be integrated with respect to time. For discrete time signals the integration can be replaced by using cumulative sum **cumsum()** function. The integration is along time axis. This effect can be implemented in the code by dividing cumsum() by $$F_s$$.  The plot() function can be used to display the result of modulation. See the code snippet below.

<noscript>
  <pre><code class="language-matlab matlab">%script to make a square-wave carrier modulated with a sinusoidal message
fmsg=1;	%Message signal frequency. 1 Hz
fc=25;	%carrier frequency, 25 Hz
Fs=500;	%sampling frequency, 500 Hz
t=[0:1/Fs:1/fmsg]; % Time duaration defined

%To make the amplitude vector in the same size as the duration of t
Amsg=1*ones(size(t));
Ac=5*ones(size(t));


%The message signal
x=Amsg.*sin(2*pi*fmsg*t);
subplot(3,1,1); plot(t,x); title('Message');xlabel('time(s)');ylabel('amplitude(V)');

%The carrier signal
y=Ac+Ac.*square(2*pi*fc*t);
y=y/2;
subplot(3,1,2);plot(t,y); title('Carrier');axis([0 1 0 6]);xlabel('time(s)');ylabel('amplitude(V)');

%steps for FM modulation
x_modulating=x./max(x); %unit normalized modulating signal
fdev=fc/1.5; %frequency deviation limited to a maximum of 2/3 deviation from the carrier frequency
z =Ac+Ac.* square (2*pi*fc*t + 2*pi*fdev*(cumsum(x_modulating)/Fs));%Generating FM signal
z=z/2;
subplot(3,1,3);plot(t,z);title('FM');axis([0 1 0 6]);xlabel('time(s)');ylabel('amplitude(V)');

print('fmsquare.png');</code></pre>
</noscript>

 [1]: /wp-content/uploads/2014/05/fmsquare.png