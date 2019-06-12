---
title: Feedback on KTU Syllabus of Electronics and Communication Engineering
author: Kavya Manohar
type: post
date: 2016-05-18T15:03:50+00:00
url: /blog/2016/05/18/feedback-on-ktu-syllabus-ece/
medium_post:
  - 'O:11:"Medium_Post":11:{s:16:"author_image_url";s:74:"https://cdn-images-1.medium.com/fit/c/200/200/1*dmbNkD5D-u45r44go_cf0g.png";s:10:"author_url";s:32:"https://medium.com/@kavyamanohar";s:11:"byline_name";N;s:12:"byline_email";N;s:10:"cross_link";s:2:"no";s:2:"id";s:12:"8c362747d0b8";s:21:"follower_notification";s:3:"yes";s:7:"license";s:11:"cc-40-by-sa";s:14:"publication_id";s:2:"-1";s:6:"status";s:6:"public";s:3:"url";s:115:"https://medium.com/@kavyamanohar/feedback-on-ktu-syllabus-of-electronics-and-communication-engineering-8c362747d0b8";}'
categories:
  - Community
  - Electronics
tags:
  - Education
  - Elctronics
  - FOSSEE
  - KTU
  - Open Education
  - Open Source

---
Kerala Technological University ([KTU][1]) published a draft syllabus for the third and fourth semesters of Electronics and Communication Engineering for the coming academic year. It raised widespread concerns regarding:

<li style="padding-left: 30px;">
  The depth and vastness of contents
</li>
<li style="padding-left: 30px;">
  The obsoleteness of contents
</li>
<li style="padding-left: 30px;">
  Sequence of introducing concepts and the pedagogy involved
</li>
<li style="padding-left: 30px;">
  FOSS friendliness
</li>

To discuss the matter and collect feedback from a wider academic community, KTU called for a syllabi discussion meeting at its office on 13th May, 2016. More than a hundred faculties from various engineering colleges in Kerala came over and expressed their genuine concerns, comments and suggestions. I got opportunity to attend the same.

The syllabi committee agreed to wait till 20th May, to receive more comments before they publish the revised draft by 25th of May. Theare collaboratively created document on the changes to be incorporated to the content of various courses can be found [here][2].

##### Concerns on Electronic Design Automation Lab

As per the draft syllabi published, KTU plans to introduce a new course &#8216;ELECTRONICS DESIGN AUTOMATION LAB&#8217; to its third Semester Electronics and Communication Engineering syllabus. Its well and good to familiarize the software tools needed to automate many tasks like design and simulation of electronic circuits, introduction to numerical computations, PCB Designing, Hardware Description using HDL etc.

Many pedagogical concerns were raised in the meeting about the introduction of all these diverse EDA tools as a single course. The need of the tools should be obvious to the students while they learn it. It was proposed that SPICE simulations should go along with the Network Theory and Electronic Circuits. Also Logic Circuit Design should be taught with the aid of HDL.

What is more of  a concern is that the syllabus is not FOSS friendly. It clearly specifies some proprietary tools like MATLAB for numerical computation, analysis and plotting. It specifies PSICE for electronic circuit simulation and  VHDL for logic design. This proposal would be like forcing every technology institute to buy a licensed version of these software.

The Govt. of India has an Open Source Software adoption [policy][3]. Kerala State Govt. too has a  policy to adopt Free and Open Source software. As per this policy  use of proprietary tools are allowed only when there are no open source alternatives. There are open source software like Scilab and xcos, Octave, Scipy and Numpy etc. that can be used for the numerical computation experiments specified in the syllabus.

**Why FOSS adoption is important?**

Teaching and learning should not be tool/product specific. Syllabus should be neutral and should not endorse a brand. The students should not be locked on to a specific vendor. The learners who wish to install the software and experiment further shouldn&#8217;t  be restricted by any licensing terms and high cost. It would otherwise encourage unethical practices like usage of pirated copies of software.

Development of open source software is through open collaboration.  The algorithmic implementations are not black boxes as in proprietary tools. They are openly licensed for learning and modifications, for the enthusiasts. Learning an EDA tools should not end with the lab course. Students should acquire the skill necessary to solve any engineering problem that comes on their way using these tools.

There are [MHRD][4] initiatives like [FOSSEE][5] (Free and Open Software in Education) project to promote the use of FOSS tools to improve the quality of education in our country. The aim is to reduce dependency on proprietary software in educational institutions. FOSSEE encourages the use of FOSS tools through various activities to ensure commercial software is replaced by equivalent FOSS tools. They even develop new FOSS tools and upgrade existing tools to meet requirements in academia and research. FOSSEE supports academic institutions for FOSS adoption through lab migration and textbook companion projects.

**Why not KTU collaborate with FOSSEE?**

FOSS adoption might not be a very easy task. There might be a need for technical support to institutions and faculty members. KTU can collaborate with FOSSEE in this regard. They have created a repository of [spoken tutorials][6] for various FOSS tools for numerical computations, analog and digital circuit simulation etc.

Free software will have cost for training, maintenance just like proprietary software. But the learning curve can be smoothed through joint efforts.

If the tools and software used are open source, KTU can plan to create an open repository of solved simulation experiments, which can be continuously enriched by contributions from faculties and students. Hope KTU takes some steps in this direction as per the suggestions submitted.

 [1]: https://ktu.edu.in/home.htm
 [2]: https://docs.google.com/document/d/11xY6DqjrJ0-PKuGMOG86Hu_sxQ0DYDhWxkKmSNGNJfI/edit?usp=sharing
 [3]: http://fossee.in/sites/default/files/MHRD_policy.pdf
 [4]: http://mhrd.gov.in/
 [5]: http://fossee.in/
 [6]: http://spoken-tutorial.org/