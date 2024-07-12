---
title: Thoughts on AI teaching in schools
author: Santhosh Thottingal
type: post
date: 2024-07-13T10:00:00+05:30
url: /blog/2024/07/13/ai-schools
categories:
  - Projects
tags:
  - metapost
---

Artificial intelligence (AI) is a hot topic these days, and it's natural to wonder how it fits into education. So, let's explore the idea of AI teaching in schools. In this article, I will go through the best practices, concerns, things to avoid and references to tools and learning material.

## Importance of AI education

Why this growing interest in teaching AI at school? AI has erupted in society, creating new applications and possibilities while also introducing some ethical problems. Whether they are conscious of it or not, children use software
applications based on AI on a daily basis: product recommendation systems, predictive
writing, face recognition, and many more. Understanding AI is essential for students to be able to navigate the digital world and make informed decisions. It helps them to understand the technology they use and to be critical of it.

There are growing miconceptions about AI. For example, students might think that AI system can summarize a book so that they can learn a topic in an hour. They are becoming over reliant on AI Chatbots for answers(And then search engines are becoming Chatbots) and an [epistemic shift is happening](https://miniver.blogspot.com/2024/07/ai-students-and-epistemic-crisis.html).

There are also many opportunities for students to create their own AI applications, which can be a fun and engaging way to learn programming for those interested.


> This is a continuation of my previous article: ["Concerns on using AI in classrooms"](https://thottingal.in/blog/2024/04/24/ai-in-classrooms/) in which I outlined some basic principles to consider before introducing AI tools in classrooms. In this article, I am not talking about tools, but teaching students about Artificial intelligence.


### The History, and the terms: Artifical Intelligence vs Machine Learning

Students hear the term AI and ML interchangeably. Although, these days, they might hear AI more than ML. It is important to understand the difference and relation between the terms Artificial Intelligence(AI) and Machine Learning(ML).

ML is considered a subfield of AI, and the AI is a subfield of Computer Science and almost as old as Computer Science itself. In 1950, [Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing) wrote a seminal paper “Computing Machinery and Intelligence”. Turing did not use the term "Artificial Intelligence" but he posed the big question  “Can machines think?” which laid the foundations for AI. Turing introduced a test, known as the "Turing Test" or "Imitation game", invented to compare computer intelligence and human intelligence.

A few years later, in 1956, [McCarthy](https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist)), [Minsky](https://en.wikipedia.org/wiki/Marvin_Minsky), [Rochester](https://en.wikipedia.org/wiki/Nathaniel_Rochester_(computer_scientist)), and [Shannon](https://en.wikipedia.org/wiki/Claude_E._Shannon) led a [workshop at Dartmouth College](https://en.wikipedia.org/wiki/Dartmouth_workshop) which aimed to gather a selected group of scientists to work “on the basis of conjecture that every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it”. Their proposal where the goal of the workshop was described was titled “A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence”, which was the first use of the term AI.

John McCarthy created the computer programming language LISP in 1958. LISP was initially used primarily by the AI community.

> I would introduce Alan Turing and the Turing test, and the Dartmouth workshop to students. This will give them a historical perspective on AI. Merely saying John McCarthy coined the term AI in 1956 is not doing justice to the history of AI. I also generally dismiss the idea of "Father of AI" as it is a collective effort of many people over many years. There was no single person who invented AI.

Artificial Intelligence is the broad idea that describes the various tools and algorithms that enable machines to replicate human behavior and intelligence.
One such tool is Machine Learning. Other tools are Natural Language Processing, Computer Vision,Deep Learning. For solving a particular problem, in practice, all these tools are used as required.

For example, In 1996, IBM's [Deep Blue](https://en.wikipedia.org/wiki/Deep_Blue_(chess_computer)) defeated [Garry Kasparov](https://en.wikipedia.org/wiki/Garry_Kasparov) in Chess. At that time, it was celebrated as a big leap in Artificial Intelligence. However, the AI that was used in DeepBlue was not Deep Learning or Machine Learning, it was mostly a large set of rules, possible next moves selected using a very fast search and evaluation with specialized hardware.

## Introducing AI programming

AI education in schools is not new. The first efforts to make AI programming tools accessible to children took place in the early 1970s, with the [Logo programming language](https://en.wikipedia.org/wiki/Logo_(programming_language)), and continued through the 1980s. However, AI education suffered [a cold period](https://en.wikipedia.org/wiki/AI_winter) from the 1990s until 2012, when educators, AI
researchers, and the general public changed their view about AI due to the big success achieved by ML in solving problems such as image recognition, language translation, transcription of speech, game playing, and natural language
processing[3][4]

### Traditional programming vs Machine Learning

Stundents learn programming as a set of instructions to the computer. They learn to write code that tells the computer what to do. For example, they write a program to add two numbers, sort a list, or draw a shape. This is called algorithmic programming. In algorithmic programming, we give the computer step-by-step instructions to solve a problem. There is a definite set of rules to follow. Humans know these rules very well too. The output of the program is deterministic - it will always give the same output for the same input.

Now, there are problems that don't have clear-cut rules. For example, recognizing a cat in a picture. There are patterns to learn, but there is also room for creativity and understanding the context. This is where Machine Learning comes in. In Machine Learning, we don't give the computer step-by-step instructions. Instead, we give it data and let it learn from that data. This is called Machine Learning.

Having a discussion in the classroom on the problems that can be solved by rules vs Machine Learning is a good way to introduce the concept. Ask students to think about problems that don't have clear-cut rules. For example, recognizing a cat in a picture, understanding human speech, or predicting the weather. These are problems where Machine Learning can be useful.

From such discussions, students will understand that the output of a Machine Learning model is not deterministic. It is probabilistic. It gives a likely answer based on the data it has seen. This is different from algorithmic programming where the output is deterministic.

There are similar problems that you cannot solve with the algorithms students learn in early stages. For example, if we want to share a photo to a friend, we need to store it somewhere that is accessible to your friend. Similarly, to keep track of examination results, you need to store it somewhere. These are problems that can be solved by databases. You can introduce the concept of databases in a similar way.

Having these discussion in classrooms and outlined in textbooks will help students to think about problems and how to pick the right tool to solve them. They will also understand that there is no "magic" in any of these solutions.

A discussion on the cost of solution is also important. If we want to store data, we need to have a computer to store it. If we want to train a Machine Learning model, we need a lot of data and a lot of computing power. This can be expensive. But compared to traditional methods, Machine Learning can sometimes be more efficient in the long run, especially when dealing with large amounts of data. This is a good discussion to have in the classroom.


> There are some AI programming courses these days that teach how to use a tool that does Machine Learning. This is not AI programming. This is using a tool. It is important to make this distinction clear to students. AI programming is about creating the model, training it, and understanding how it works. Using a tool is just using a tool.

### The input, the processing, and the output

When teaching programming, we always have clarity on what is the input, what is the output, and what is the processing required. This is true for Machine Learning too.

Imagine that we are going to write a program to recognize a mango and banana in a picture. The input is the picture. The program should tell if the picture has mango or banana.

In algorithmic programming, we write a program that looks at the picture and checks if there is a mango or banana. Have a discussion on how we can write such a program. Students will try to figure out what makes a mango different from a banana. They will come up with rules like "Mango is yellow and banana is green". Then they will soon come with an exception - "But there are green mangoes too". "Riped banana is yellow too". They will figure out that size of the object can be used. For example, mango is usually smaller than a banana. But there are exceptions. They will soon realize that it is not easy to write a program that can recognize a mango or banana.

However, in the discussion, a certain set of features will emerge. For example, color, size, shape, texture. These are the features that can be used to recognize a mango or banana. In machine learning terms, this is called the features of the data. Identifying these features can be called as feature extraction.

Stundents who wrote programs like adding number or sorting a list will know that the inputs were numbers or list of numbers. But for Banana and Mango, the input is a picture. This is a good way to introduce the concept of different types of data and how we can process them. No need to go into depth, but it is important know that there are different types of data and different ways to process them.

In Machine Learning, we don't write a program that checks if there is a mango or banana. Instead, we give the computer many pictures of mangoes and bananas and let it learn from the data. The computer will learn the patterns in the data and recognize the mangoes and bananas. This is called training the model. The processing required is to learn from the data and recognize the patterns.

How do you get the data? You can take pictures of mangoes and bananas. You can also download pictures from the internet. You can ask your friends to give you pictures. This is a good way to introduce the concept of collecting training data.

At this stage, you need a tool to label the data. You need to tell the computer which picture is a mango and which picture is a banana. This is called labeling the data. This is a good way to introduce the concept of labeling the data.

Block programming is usually introduced to students at this stage. They can use block programming to write a program that trains the model. Scratch is often introduced in early stages. There are well known scratch extensions that can be used to train Machine Learning models. The best scratch based tool I came across was [Machine Learning for Kids](https://machinelearningforkids.co.uk/).

### Machine Learning for Kids

Machine Learning for Kids is an opensource project by [Dane Lane](http://dalelane.co.uk/), a developer at IBM. This builds on existing efforts to introduce and teach coding to children, by adding these models to educational coding platforms [Scratch](https://scratch.mit.edu/about) and [EduBlocks](https://edublocks.org/), and helping children create projects and build games with the machine learning models they train.

![Machine learning for kids training interface](/wp-content/uploads/2024/07/face-detection.png)


The tool was first made available in 2017, and is now being used by thousands of schools, code clubs, and families around the world. The tool is entirely web-based and requires no installs or complicated setup to be able to use. The [source code is available on GitHub](https://github.com/IBM/taxinomitis/), licensed under Apache 2.0.

![alt text](https://machinelearningforkids.co.uk/static/images/machinelearningforkids.gif)

There is also an accompanying textbook that can be used to teach AI to kids. [amazone.in link](https://www.amazon.in/dp/1718500564)

![alt](/wp-content/uploads/2024/07/machinelearningforkids-textbook.png)

How many pictures do you need? You need a lot of pictures. The more pictures you have, the better the model will be. This is a good way to introduce the concept of how the training data affects the model. If you have more pictures of mangoes than bananas, the model will be better at recognizing mangoes than bananas. This is called bias in the data. This is a good way to introduce the concept of bias in the data.

![Machine learning for kids training interface](/wp-content/uploads/2024/07/car-cup.png)

I consider going through the training process is essential part of AI programming. There are many things to learn from the training process. The students will understand the pros and cons of training data, the bias in the data, and the effect of training data on the model. They will also understand the privacy concerns in collecting data. They will understand the concept of crowdsourcing too.

The ML4K tool also comes with pretrained models too since model training is an expensive process. However, if students just use these pretrained models and use it as a block in scratch, they are not learning AI programming. They are just using blackboxed abstraction. Not introducing the training with hands own experience, but using the pretrained model in a scratch interface cannot be called learning AI programming.

While using the trained model, students will also understand that Machine Learning can go wrong. Just like any programming, Machine Learning can make mistakes. Seeing the kind of mistakes it makes is a good lesson. The Cars will be labeled as cups, the red tomatoes will be labeled as Apples. This is a good way to introduce the concept of mistakes in Machine Learning. The idea that the output of a machine learning model is a probability - an estimate of the likelihood - is essential concept to understand. Learning this will avoid lot of misconceptions about AI.

The idea that this probability is based on the data it has seen is another important concept. Train with red tomatoes and green apples. Then give a red apple - It will fail. Have a discussion on why it failed. Also discuss how to improve the model.

Have a discussion on how big AI tools are collecting these pictures or text to train their model.

ML4K also has lot of examples - face detection, chat bots, tic-tac-toe, question answering, book recommendation,gesture detection, etc. All of these comes with worksheets for students and teachers. I also found that they have a forum to discuss the problems and solutions. The tool,being opensource can be localized to any language.

### Other tools

There are also other similar programming tools.

* [Raise Playground](https://playground.raise.mit.edu/) - Created by the MIT RAISE Initiative and the Personal Robots Group at the MIT Media Lab - it is a block-based programming platform that we developed to support hands-on learning about AI and robotics for students and beginning programmers. It is a free and opensource tool.
* ecraft2learn - The eCraft2Learn project developed a set of extensions to the [Snap! programming language](https://snap.berkeley.edu/) to enable children (and non-expert programmers) to build AI programs. The blocks are available as projects with examples of using the blocks as well as libraries to download and then import into Snap!. It is possible to run Snap! with many of the AI blocks without an Internet connection. It is a free and opensource tool.
* **Pictoblox**. Pictoblox is a proprietary freeware that is used to teach AI programming. It has similar features of ML4K. However, it is not opensource. It is important to use opensource tools that are transparent and allows students to explore and experiment.

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
AI teaching in schools is important but should be approached carefully. It’s not about replacing traditional education but enhancing it. By understanding the basics of AI and ML, students can become better prepared for the future, more critical of technology, and more innovative in their problem-solving approaches.

## References and additional reading

* [1] Turing, A. M. (2004). Computing machinery and intelligence (1950). The Essential Turing: The Ideas that Gave Birth to the Computer Age. Ed. B. Jack
Copeland. Oxford: Oxford UP, 433-64
* [2] McCarthy, J., Minsky, M. L., Rochester, N., & Shannon, C. E. (2006). A Proposal for the Dartmouth Summer Research Project on Artific
ial Intelligence, August 31, 1955. AI magazine, 27(4), 12.
* [3] Kahn, K. & Winters, N. (2017) Child-friendly programming interfaces to AI cloud services, Proceedings of EC-TEL 2017: Data Driven Approaches in Digital Education, 10474, 566-570
* [4] Kahn, K. & Winters, N. (2018) AI Programming by Children, Proceedings of Constructionism 2018, Vilnius, Lithuania, 2018
* Understanding computing education - April 2021
by the Raspberry Pi Foundation Research Seminars [pdf](https://www.raspberrypi.org/app/uploads/2021/05/Understanding-computing-education-Volume-1-%E2%80%93-Raspberry-Pi-Foundation-Research-Seminars.pdf)
* Moreno-Guerrero, A. J., López-Belmonte, J., Marín-Marín, J. A., & Soler-Costa, R. (2020). [Scientific Development of Educational Artificial Intelligence in
Web of Science](https://www.mdpi.com/1999-5903/12/8/124). Future Internet, 12(8), 124
* [Education in the age of AI (Artificial Intelligence)](https://www.youtube.com/watch?v=m6dyCRS8EmI) | Dale Lane | TEDxWinchester - video
* AI and Epistemic Risk: A Coming Crisis? https://www.techpolicy.press/ai-and-epistemic-risk-a-coming-crisis/
* 7th standard ICT textbook by Kerala Educational Department - Chapter  9 - Computer vision - [pdf - in Malayalam language](https://samagra.kite.kerala.gov.in/files/samagra-resource/uploads/tbookscmq/Class_VII/IT_7_M/1-64.pdf) - Uses pictoblox tool to teach AI programming. However, the chapter content is focussed on using a pretrained model and not on AI programming.
