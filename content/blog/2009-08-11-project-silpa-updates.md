---
title: Project Silpa Updates
author: Santhosh Thottingal
type: post
date: 2009-08-11T10:47:04+00:00
url: /blog/2009/08/11/project-silpa-updates/
categories:
  - Indic
  - Projects

---
[Please read the [Silpa project annoucement][1]  before reading this blogpost]

[Project silpa][2] is getting ready for a 0.1 version.

  1. The web framework got many changes to support [JSON based RPC][3] calls from external applications. That means,  web/desktop applications can use the APIs of Silpa through RPC calls.
  2. Page rendering logic is moved from server to client. Web interface use javascript based synchronous [JSON based RPC][4] calls to get the results from server. Jquery is used for render the page.
  3. Uses [PyMeld][5] Templating Engine for modules having web interface(Not all modules will not have web interface)
  4. Framework is now Python [WSGI][6] application. Initially it was plain CGI. WSGI reduces the response time and allows the server to be executed as daemon
  5. Many new modules are getting added- [Spellchecker][7] : which is not based on aspell or hunspell  and I am going to try out some algorithms to get optimal suggestions. Not completed.
  6. Soundex Algorithm- webbased demo and APIs as I explained in my  [previous blog post][8]
  7. [An Inexact search algorithm][9] and its implementation based on visual and phonetic distance between two words is getting ready. I will explain it in another blogpost
  8. Hyphenation &#8211; [Online tool][10] as well as APIs
  9. [N-gram for Indic languages][11]&#8211; API, web interface
 10. [API documentation][12] is going on, but not completed. I have plans to make silpa as a python library for offline use too.
 11. Moved from [SMC][13]&#8216;s git repo to a [seperate git repo][14]. After 0.1 baseline, I will create branches for stable and development.
 12. Application is running on a git controlled deployment workflow. Thanks to [Joe Maller][15]  for nice [documentation on this][16].

That&#8217;s all for now!.  There are too many things to be done. Some of the modules does not support all languages as of now.  If anybody interested in contributing to the project, please contact me.  Try out the application, read the code and let me know your comments.

 [1]: http://thottingal.in/blog/2009/06/16/announcing-project-silpa/
 [2]: http://smc.org.in/silpa
 [3]: http://json-rpc.org/wiki/python-json-rpc
 [4]: http://code.google.com/p/json-xml-rpc
 [5]: http://entrian.com/PyMeld/
 [6]: http://wsgi.org
 [7]: http://smc.org.in/silpa/Spellcheck
 [8]: http://thottingal.in/blog/2009/07/26/indicsoundex/
 [9]: http://smc.org.in/silpa/ApproxSearch
 [10]: http://smc.org.in/silpa/Hyphenate
 [11]: http://smc.org.in/silpa/NGram
 [12]: http://smc.org.in/silpa/apis.html
 [13]: http://smc.org.in
 [14]: http://smc.org.in/silpa/source.html
 [15]: http://joemaller.com
 [16]: http://joemaller.com/2008/11/25/a-web-focused-git-workflow/