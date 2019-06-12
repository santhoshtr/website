---
title: 'Experimenting eSim- A tool for Electronic Circuit Simulation'
author: Kavya Manohar
type: post
date: 2015-12-04T08:58:55+00:00
url: /blog/2015/12/04/experimenting-esim-a-tool-for-electronic-circuit-simulation/
categories:
  - Electronics
tags:
  - EDA
  - electronics
  - eSim
  - FOSSEE
  - kicad
  - labmanual
  - ngspice
  - opentextbook

---
I did not have much exposure to open source Electronic Design Automation tools during my graduation course in Electronics and Communication Engineering. My institute had proprietary EDA tools in the lab and all my experiences were limited to them.  I must confess I never tried to explore the FOSS world for alternatives until I was in a ne<img class="alignright" src="/wp-content/uploads/2015/12/bridge_rectifier.jpg" alt="" width="433" height="283" />ed to offer a lab course on basic circuit simulation.

Web searches took me to the  design suite <a href="http://esim.fossee.in/" target="_blank">eSim</a> . It  is an open source EDA tool for circuit design, simulation, analysis and PCB design. It is an integrated tool built using open source software such as <a href="http://www.kicad-pcb.org" target="_blank">KiCad</a> and <a href="http://ngspice.sourceforge.net/" target="_blank">Ngspice</a>. eSim is released under GPL. It’s GUI guides the user through the steps of schematic creation, netlist generation, PCB design and simulation. eSim source code iis hosted at: <https://github.com/FOSSEE/eSim> .

eSim is developed by <a href="http://fossee.in" target="_blank">FOSSEE</a> (Free and Open Source Software for Education) &#8211; an initiative of <a href="http://mhrd.gov.in/" target="_blank">MHRD,</a> Govt. of India. FOSSEE promotes the migration of labs in educational institutions from proprietary tools to FOSS only ones through [lab migration projects][1]. The source code of lab experiments are crowd sourced from faculties and students under lab migration project. These are made available by FOSSEE under  Creative Commons Attribution-ShareAlike 4.0 International Licence.

<img class="alignleft" src="/wp-content/uploads/2015/12/series_clipper.jpg" alt="" width="527" height="296" />

My proposal for migrating the basic electronics lab to eSim is under review. There was good technical support from the eSim team during solving various experimental issues. The first version of user’s guide for carrying out the experiments proposed under this project is published [here][2].   It is under  Creative Commons Attribution-ShareAlike 4.0 India Licence.This guide provides solutions to specific simulation problems using eSim. Experimental procedures are explained with screen shots.

Have a look and propose suggestions. If you have ideas on improving the contents, feel free to contribute. Git repository of user guide: <https://github.com/kavyamanohar/e-design-simulation-guide>

&nbsp;

 [1]: http://fossee.in/activities/lab-migration-project
 [2]: http://thottingal.in/documents/esim-emulation-guide.pdf