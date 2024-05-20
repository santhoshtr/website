---
title: MetaPost sandbox
author: Santhosh Thottingal
type: post
date: 2024-05-20T10:00:00+05:30
url: /blog/2024/05/20/metapost-sandbox
categories:
  - Projects
tags:
  - metapost
---

While working with [MetaPost](https://tug.org/metapost.html) for typeface design([Nupuram](https://gitlab.com/smc/fonts/Nupuram), [Malini](https://gitlab.com/smc/fonts/Malini)), I frequently felt the need for a quick and easy way to test code snippets. This mirrors the functionality of popular online sandboxes like CodeSandbox or JSBin, which many developers are already familiar with. These platforms provide a web-based environment where you can edit code, see the output instantly, and avoid the hassle of setting up a complete application or environment.

Inspired by this concept, I've been developing a MetaPost sandbox, and I'm excited to share it with you in this blog post.

The MetaPost sandbox is available at https://mpost.thottingal.in/

![](/wp-content/uploads/2024/05/mpost-screenshot.jpg)

## Features

* **Code Editing**: Edit your MetaPost code with syntax highlighting for better readability. Compile and preview the output SVG by pressing Control+R or using the Run button.
* **Error Handling**: Compilation logs are displayed at the bottom of the page. If there's a compilation error, you can easily identify the specific line and issue causing the failure by checking the logs.
* **Saving and Sharing (Logged-in Users)**: You can save your snippets for later use, but this requires logging in. The platform offers GitHub OAuth-based login for your convenience.
* **Shareable Snippets**: Once a snippet is saved, you can copy the unique URL and share it with others for them to access and view your work.
* **Personal Workspace**: Logged-in users have access to a dedicated work dashboard that displays all their saved snippets. You can even share your entire dashboard for others to see your complete collection. Here's an example of my dashboard https://mpost.thottingal.in/u/santhoshtr
* **Forking**: Shared snippets can be edited and run by anyone who has access to the link. If a user wants to save their modifications, the system creates a "fork" of the original work and adds it to their account, preserving the original version.

## Embedding

Similar to CodePen or JSBin, the MetaPost sandbox allows you to embed snippets and their results directly into web pages. You can copy the embed code using the "Share" option. Here's an example of an embedded snippet:

```html
<iframe height="600" width="800" scrolling="no" title="Triangle Transformations" src="https://mpost.thottingal.in/m/3j984ctwqbcwqes/embed" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>
```

<iframe height="600" width="800" scrolling="no" title="Triangle Transformations" src="https://mpost.thottingal.in/m/3j984ctwqbcwqes/embed" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
</iframe>

## Documentation

The platform also provides a set of tutorials to help you learn MetaPost: https://mpost.thottingal.in/documentation

## Contribute

If you're interested in contributing to the project, the source code is available on GitHub:  https://github.com/santhoshtr/metapost-sandbox.

Troy Henderson also has a similar application at http://www.tlhiv.org/mppreview/, I was using that while I was starting with MetaPost, but wanted more features like syntax highlighting, dashboard, sharing etc.