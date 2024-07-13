---
title: Teaching AI in Schools
author: Santhosh Thottingal
type: post
date: 2024-07-13T9:00:00+05:30
url: /blog/2024/07/13/ai-schools
categories:
  - Education
  - AI
tags:
  - education
cover:
  image: /wp-content/uploads/2024/07/ai-for-kids.jpg
---

Artificial Intelligence (AI) is a hot topic these days, and it's natural to wonder how it fits into education. In this article, we will explore the best practices, concerns, and recommendations for integrating AI into school curriculums. I will also provide references to useful tools and learning materials.


![My 4year old daughter trying to learn AI before she learns to read](/wp-content/uploads/2024/07/ai-for-kids.jpg)

## Importance of AI education at schools

Why is there a growing interest in teaching AI in schools? AI has become deeply integrated into society, creating new applications and possibilities while also introducing ethical concerns. Whether they are aware of it or not, children use AI-based applications daily: product recommendation systems, predictive text, face recognition, and more. Understanding AI is essential for students to navigate the digital world and make informed decisions. It helps them understand the technology they use and be critical of it.

There are growing misconceptions about AI. For example, students might believe that AI systems can summarize a book so they can learn a topic in an hour. They are becoming overly reliant on AI chatbots for answers, and an [epistemic shift](https://miniver.blogspot.com/2024/07/ai-students-and-epistemic-crisis.html)[^8]. is occurring as search engines transform into chatbots .

There are also many opportunities for students to create their own AI applications, which can be a fun and engaging way to learn programming for those interested.


> This article continues from my previous article: ["Concerns on using AI in classrooms"](https://thottingal.in/blog/2024/04/24/ai-in-classrooms/) which outlined basic principles to consider before introducing AI tools in classrooms. Here, we focus on teaching students about Artificial Intelligence.


### The History and Terms: Artificial Intelligence vs. Machine Learning

Students often hear the terms AI and Machine Learning (ML) used interchangeably, though AI is more commonly mentioned these days. It's important to understand the distinction and relationship between Artificial Intelligence (AI) and Machine Learning (ML).


{{% figure
  src="https://upload.wikimedia.org/wikipedia/commons/1/17/Alan_Turing_%281912-1954%29_in_1936_at_Princeton_University.jpg"
  caption="Alan Turing: English mathematician, computer scientist, logician, cryptanalyst, philosopher and theoretical biologist. He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation"
  class="align-middle"
%}}


ML is considered a subfield of AI, and the AI is a subfield of Computer Science and almost as old as Computer Science itself. In 1950, [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing) wrote a seminal paper [“Computing Machinery and Intelligence,”](https://en.wikipedia.org/wiki/Computing_Machinery_and_Intelligence) posing the question, “Can machines think?”. This paper laid the foundation for AI and introduced the Turing Test, designed to compare computer intelligence and human intelligence.[^1]. Turing introduced a test, known as the "Turing Test" or "Imitation game", invented to compare computer intelligence and human intelligence.

{{% figure
src="/wp-content/uploads/2024/07/turing-can-computers-think.jpg"
caption="Alan Turing's paper “Computing Machinery and Intelligence” posing the question, “Can machines think?”"
%}}

In 1956, [John McCarthy](https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist)), [Marvin Minsky](https://en.wikipedia.org/wiki/Marvin_Minsky), [Nathaniel Rochester](https://en.wikipedia.org/wiki/Nathaniel_Rochester_(computer_scientist)), and [Claude Shannon](https://en.wikipedia.org/wiki/Claude_E._Shannon) led a [workshop at Dartmouth College](https://en.wikipedia.org/wiki/Dartmouth_workshop) which aimed to gather scientists to work on the hypothesis that every aspect of learning or any other feature of intelligence can be precisely described and simulated by a machine. Their proposal was titled “[A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence](http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf),” marking the first use of the term AI.

{{% figure
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/John_McCarthy_Stanford.jpg/800px-John_McCarthy_Stanford.webp"
  caption="John McCarthy: American computer scientist and cognitive scientist. He was one of the founders of the discipline of artificial intelligence. He co-authored the document that coined the term artificial intelligence, developed the programming language family Lisp in 1958, initially used primarily by the AI community"
  class="align-middle"
%}}


![Dartmouth Proposal](/wp-content/uploads/2024/07/dartmouth-proposal.jpg "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence - John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon")

Introducing Alan Turing[^10], the Turing Test, John McCarthy, and Dartmouth proposal to students provides a historical perspective on AI. Merely stating that *John McCarthy coined the term AI in 1956* does not do justice to the history of AI, which is a collective effort of many individuals over many years. I also generally dismiss the idea of "Father of AI" as it is a collective effort of many people over many years. There was no single person who invented AI.

Artificial Intelligence is the broad idea that describes the various tools and algorithms that enable machines to replicate human behavior and intelligence.
One such tool is Machine Learning. Other tools include Natural Language Processing, Computer Vision, and Deep Learning. In practice, solving a particular problem often involves using multiple AI tools.

![AI, ML, DL](https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Unraveling_AI_Complexity_-_A_Comparative_View_of_AI%2C_Machine_Learning%2C_Deep_Learning%2C_and_Generative_AI.png/776px-Unraveling_AI_Complexity_-_A_Comparative_View_of_AI%2C_Machine_Learning%2C_Deep_Learning%2C_and_Generative_AI.webp "A Comparative View of AI, Machine Learning, Deep Learning, and Generative AI [source](https://en.wikipedia.org/wiki/File:Unraveling_AI_Complexity_-_A_Comparative_View_of_AI,_Machine_Learning,_Deep_Learning,_and_Generative_AI.webp)")

For example, In 1996, IBM's [Deep Blue](https://en.wikipedia.org/wiki/Deep_Blue_(chess_computer)) defeated [Garry Kasparov](https://en.wikipedia.org/wiki/Garry_Kasparov) in Chess. At the time, this was celebrated as a significant leap in AI[^5]. However, the AI used in Deep Blue was not Deep Learning or Machine Learning; it was primarily a large set of rules and fast search and evaluation using specialized hardware.

**AGI vs Narrow AI**

Much of the media hype around AI is focussed on hypothetical [General AI or AGI (Artificial General Intelligence)](https://en.wikipedia.org/wiki/Artificial_general_intelligence) - a machine that can perform any intellectual task that a human can. This is a long way off, and it is important to make this clear to students. The AI tools we have today are [narrow AI or Weak AI](https://en.wikipedia.org/wiki/Weak_artificial_intelligence) - they are good at specific tasks but not general tasks. Anthropomorphizing AI is a common mistake. AI is not a human, and it does not think like a human.

## Introducing AI programming

AI education in schools is not new. The first efforts to make AI programming tools accessible to children began in the early 1970s with the [Logo programming language](https://en.wikipedia.org/wiki/Logo_(programming_language)), continuing through the 1980s[^3]. However, AI education experienced [a cold period](https://en.wikipedia.org/wiki/AI_winter)  from the 1990s until 2012 when public perception changed due to the success of ML in solving problems such as image recognition, language translation, speech transcription, game playing, and natural language processing.[^4]

### Traditional programming vs Machine Learning

Students learn programming as a set of instructions for the computer, writing code that tells the computer what to do. For example, they might write a program to add two numbers, sort a list, or draw a shape. This is called algorithmic programming, where the computer follows a definite set of rules to solve a problem, producing deterministic outputs.

Some problems, however, don't have clear-cut rules, such as recognizing a cat in a picture. These problems require creativity and contextual understanding, which is where Machine Learning comes in. Instead of giving step-by-step instructions, we provide data and let the computer learn from it, a process called Machine Learning.

Discussing the differences between problems solvable by rules and those requiring Machine Learning can introduce the concept to students. For instance, recognizing a cat in a picture, understanding human speech, or predicting the weather are problems where Machine Learning is useful.

Such discussions help students understand that the output of a Machine Learning model is probabilistic, offering likely answers based on the data it has seen. This differs from algorithmic programming, which produces deterministic outputs.

There are similar problems that you cannot solve with the algorithms students learn in early stages. For example, if we want to share a photo to a friend, we need to store it somewhere that is accessible to your friend. Similarly, to keep track of examination results, you need to track and store it somewhere. These are problems that can be solved by databases. You can introduce the concept of databases in a similar way.

Classroom discussions and textbook outlines on these topics help students think critically about problems and choose the right tools to solve them. They will also understand that there is no "magic" in these solutions.

Discussing the cost of solutions is also important. If we want to store data, we need to have a computer to store it. If we want to train a Machine Learning model, we need a lot of data and a lot of computing power. This is a good discussion to have in the classroom.

Some AI programming courses teach how to use a tool that performs Machine Learning. This is not AI programming; it is using a tool. It's important to make this distinction clear to students. AI programming involves creating, training, and understanding models, not just using tools.

### The Input, processing, and Output

When teaching programming, it's essential to clarify the input, output, and processing required. This applies to Machine Learning as well.

Imagine writing a program to recognize a mango and a banana in a picture. The input is the picture, and the program should determine if it contains a mango or banana.

In algorithmic programming, we write a program that looks at the picture and checks if there is a mango or banana. Have a discussion on how we can write such a program. Students will try to figure out what makes a mango different from a banana. They will come up with rules like "Mango is yellow and banana is green". Then they will soon come with an exception - "But there are green mangoes too". "Riped banana is yellow too". They will figure out that size of the object can be used. For example, mango is usually smaller than a banana. But there are exceptions. They will soon realize that it is not easy to write a program that can recognize a mango or banana.

{{% figure
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Banana_Mango.jpg/337px-Banana_Mango.jpg?20190709111603"
  caption="Banana Mango. Banana or Mango? Source: commons.wikimedia.org/wiki/File:Banana_Mango.jpg"
  class="align-right"
%}}

However, in the discussion, a certain set of features will emerge. For example, color, size, shape, texture. These are the features that can be used to recognize a mango or banana. In machine learning terms, this is called the features of the data. Identifying these features can be called as feature extraction.

Stundents who wrote programs like adding number or sorting a list will know that the inputs were numbers or list of numbers. But for Banana and Mango, the input is a picture. This is a good way to introduce the concept of different types of data and how we can process them. No need to go into depth, but it is important know that there are different types of data and different ways to process them.

In Machine Learning, instead of writing rules, we provide the computer with many pictures of mangoes and bananas, letting it learn from the data. This is called training the model. The processing involves learning patterns from the data to recognize the objects.

How do you get the data? You can take pictures of mangoes and bananas. You can also download pictures from the internet. You can ask your friends to give you pictures. This is a good way to introduce the concept of collecting training data.

At this stage, you need a tool to label the data. You need to tell the computer which picture is a mango and which picture is a banana. This is called labeling the data. This is a good way to introduce the concept of labeling the data.

Block programming is usually introduced to students at this stage. They can use block programming to write a program that trains the model. Scratch is often introduced in early stages. There are well known scratch extensions that can be used to train Machine Learning models. The best scratch based tool I came across was [Machine Learning for Kids](https://machinelearningforkids.co.uk/).

### The Machine Learning for Kids project

Machine Learning for Kids is an opensource project by [Dane Lane](http://dalelane.co.uk/), a developer at IBM[^7]. This builds on existing efforts to introduce and teach coding to children, by adding these models to educational coding platforms [Scratch](https://scratch.mit.edu/about) and [EduBlocks](https://edublocks.org/), and helping children create projects and build games with the machine learning models they train.

![Machine learning for kids training interface](/wp-content/uploads/2024/07/face-detection.png)


The tool was first made available in 2017, and is now being used by thousands of schools, code clubs, and families around the world. The tool is entirely web-based and requires no installs or complicated setup to be able to use. The [source code is available on GitHub](https://github.com/IBM/taxinomitis/), licensed under Apache 2.0.

{{% figure
  src="https://machinelearningforkids.co.uk/static/images/machinelearningforkids.gif"
  caption="Machine Learning for Kids website"
%}}


There is also an accompanying textbook that can be used to teach AI to kids. [amazone.in link](https://www.amazon.in/dp/1718500564)

{{% figure
  src="/wp-content/uploads/2024/07/machinelearningforkids-textbook.png"
  caption="Machine Learning for Kids textbook"
  class="align-middle"
%}}


How many pictures do you need? You need a lot of pictures. The more pictures you have, the better the model will be. This is a good way to introduce the concept of how the training data affects the model. If you have more pictures of mangoes than bananas, the model will be better at recognizing mangoes than bananas. This is called bias in the data. This is a good way to introduce the concept of bias in the data.

![Machine learning for kids training interface](/wp-content/uploads/2024/07/car-cup.png "Machine learning for kids training interface")

I consider going through the training process is essential part of AI programming. There are many things to learn from the training process. The students will understand the pros and cons of training data, the bias in the data, and the effect of training data on the model. They will also understand the privacy concerns in collecting data. They will understand the concept of crowdsourcing too.

The ML4K tool also comes with pretrained models too since model training is an expensive process. However, if students just use these pretrained models and use it as a block in scratch, they are not learning AI programming. They are just using blackboxed abstraction. Not introducing the training with hands own experience, but using the pretrained model in a scratch interface cannot be called learning AI programming.

**The trained model and output**

While using the trained model, students will also understand that Machine Learning can go wrong. Just like any programming, Machine Learning can make mistakes. Seeing the kind of mistakes it makes is a good lesson. The Cars will be labeled as cups, the red tomatoes will be labeled as Apples. This is a good way to introduce the concept of mistakes in Machine Learning. The idea that the output of a machine learning model is a probability - an estimate of the likelihood - is essential concept to understand. Learning this will avoid lot of misconceptions about AI.

The idea that this probability is based on the data it has seen is another important concept. Train with red tomatoes and green apples. Then give a red apple - It will fail. Have a discussion on why it failed. Also discuss how to improve the model.

Have a discussion on how big AI tools are collecting these pictures or text to train their model.

ML4K also has lot of examples - face detection, chat bots, tic-tac-toe, question answering, book recommendation,gesture detection, etc. All of these comes with worksheets for students and teachers. I also found that [they have a forum to discuss the problems and solutions](https://groups.google.com/g/mlforkids). The tool, being opensource can be localized to any language[^9].

**Does it understand my language?**

Much of the AI tools are in English. This is a good opportunity to discuss the language bias in AI. The students will understand that the model is trained with English text and it may not understand other languages. Having a discussion on why AI tools are not generally available for our mother tongue and what can be done to improve it is a good discussion to have.

### Other AI learning tools for kids

There are also other similar programming tools.

* [Raise Playground](https://playground.raise.mit.edu/) - Created by the MIT RAISE Initiative and the Personal Robots Group at the MIT Media Lab - it is a block-based programming platform that we developed to support hands-on learning about AI and robotics for students and beginning programmers. It is a free and opensource tool.
* ecraft2learn - The [eCraft2Learn](https://ecraft2learn.github.io/ai/) project developed a set of extensions to the [Snap! programming language](https://snap.berkeley.edu/) to enable children (and non-expert programmers) to build AI programs. The blocks are available as projects with examples of using the blocks as well as libraries to download and then import into Snap!. It is possible to run Snap! with many of the AI blocks without an Internet connection. It is a free and opensource tool.
* **Pictoblox**. Pictoblox is a proprietary freeware that is used to teach AI programming. It has similar features of ML4K. However, it is not opensource. It is important to use opensource tools that are transparent and allows students to explore and experiment[^6].

### Avoiding Misconceptions

When teaching AI, it is important to avoid some common misconceptions. Here are a few to keep in mind- these are real misconceptions that I have seen in some AI teaching materials.

**“You don’t need to learn math to learn AI programming”**


**“You don’t need to learn programming.”**

Math is fundamental to understanding AI or any kind of programming for that matter. Students need to know math to understand how AI models work. If you just use a tool, you may not need Math, but that is not the context of AI programming in schools.

More importantly, any such "You don't need to learn x" is a dangerous statement for school students. There is no shortcut to learning especially when we are talking about fundamental concepts we are teaching in schools.

Students are also exposed to the news and hype around AI. They hear things like AI is taking away jobs, No need for teachers in future, AI can solve any maths problem and so on. If students understand how AI systems are working, by going through the above mentioned steps, they will be more critical of such news and hype. They will understand the limitations and opportunities of AI. They will be more innovative in their problem-solving approaches. They will be better prepared for the future.

A block based visual programming tool advertisement like 'students can learn AI programming without learning maths with our tool" is a lie. All it provides is a blackboxed pretrained model. It is not AI programming.

Programming is essential for creating AI models. Students need to know how to code to build and train AI models. Otherwise, they are just using a tool.

## Conclusion

Teaching AI in schools is not just about equipping students with technical skills but about fostering a deeper understanding of the digital world they inhabit. By introducing AI and Machine Learning concepts early, students can better grasp the technology they use daily, appreciate its potential, and recognize its limitations. Understanding the historical context and foundational principles of AI helps demystify the field and places current advancements in perspective.

Engaging students in discussions about deterministic versus probabilistic problem-solving, the importance of data, and the cost of solutions prepares them for real-world applications. It also emphasizes critical thinking and ethical considerations, essential in an era where AI's impact is profound and far-reaching.

Incorporating AI education into the curriculum not only prepares students for future careers but also empowers them to become informed citizens. They will be better equipped to navigate and contribute to a world increasingly shaped by artificial intelligence. As educators, our goal should be to demystify AI, making it accessible, comprehensible, and exciting, sparking curiosity and innovation in the next generation.

## References

* Understanding computing education - April 2021 by the Raspberry Pi Foundation Research Seminars [pdf](https://www.raspberrypi.org/app/uploads/2021/05/Understanding-computing-education-Volume-1-%E2%80%93-Raspberry-Pi-Foundation-Research-Seminars.pdf)
* Moreno-Guerrero, A. J., López-Belmonte, J., Marín-Marín, J. A., & Soler-Costa, R. (2020). [Scientific Development of Educational Artificial Intelligence in Web of Science](https://www.mdpi.com/1999-5903/12/8/124). Future Internet, 12(8), 124
* https://web.learningml.org/en/resources-for-learning-ai-and-ml/ - A curated list of resources for learning AI and ML

[^1]: Turing, A. M. (2004). Computing machinery and intelligence (1950). The Essential Turing: The Ideas that Gave Birth to the Computer Age. Ed. B. Jack
Copeland. Oxford: Oxford UP, 433-64
[^2]: McCarthy, J., Minsky, M. L., Rochester, N., & Shannon, C. E. (2006). A Proposal for the Dartmouth Summer Research Project on Artific
ial Intelligence, August 31, 1955. AI magazine, 27(4), 12.
[^3]: Kahn, K. & Winters, N. (2017) Child-friendly programming interfaces to AI cloud services, Proceedings of EC-TEL 2017: Data Driven Approaches in Digital Education, 10474, 566-570
[^4]: Kahn, K. & Winters, N. (2018) AI Programming by Children, Proceedings of Constructionism 2018, Vilnius, Lithuania, 2018
[^5]: News paper reporting of Deep Blue vs Garry Karsparov: https://www.nydailynews.com/wp-content/uploads/migration/2015/05/10/TBKBQNXXLSJKKX4QBNYWGRIV5I.jpg
[^6]: 7th standard ICT textbook by Kerala Educational Department - Chapter  9 - Computer vision - [pdf - in Malayalam language](https://samagra.kite.kerala.gov.in/files/samagra-resource/uploads/tbookscmq/Class_VII/IT_7_M/1-64.pdf) - Uses pictoblox tool to teach AI programming. However, the chapter content is focussed on using a pretrained model and not on AI programming.
[^7]: Dale Lane provided valuable inputs to writing this article. Dale Lane actively publish and talk about AI for students. See [Education in the age of AI (Artificial Intelligence)](https://www.youtube.com/watch?v=m6dyCRS8EmI) | Dale Lane | TEDxWinchester - video
[^8]: Further reading AI and Epistemic Risk: A Coming Crisis? https://www.techpolicy.press/ai-and-epistemic-risk-a-coming-crisis/
[^9]: taxinomitis is the name of the software behind "machinelearningforkids" website. The source code is under IBM's github repository: https://github.com/IBM/taxinomitis. The worksheets are in a different repository: https://github.com/IBM/taxinomitis-docs
[^10]: I had written a long essay on Alan Turing and his contributions to computer science in Malayalam. https://thottingal.in/documents/turing/. I am also a fan of the movie ["The Imitation Game"](https://en.wikipedia.org/wiki/The_Imitation_Game) which is a biographical drama film about Alan Turing. The movie is based on the biography "Alan Turing: The Enigma" by Andrew Hodges. The movie is a good introduction to Alan Turing's life and his contributions to computer science. The movie is not a documentary and has some inaccuracies. But it is a good movie to watch to get an idea about Alan Turing's life and his contributions to computer science.
