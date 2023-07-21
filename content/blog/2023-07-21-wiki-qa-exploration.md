---
title: "Natural language question answering in Wikipedia - an exploration - Part 3"
author: Santhosh Thottingal
type: post
date: 2023-07-21T9:45:00+05:30
url: /blog/2023/07/21/wikiqa
categories:
  - wikipedia
tags:
  - wikipedia

---

I wrote about the exploration on Natural language querying for wikipedia in previous two blog posts.

In [Part 1](https://thottingal.in/blog/2023/03/10/wikiqa/), I was suggesting that building such a collection of question and answers can help natural language answering. One missing piece was actually suggesting an answer for a new question that is not part of QA set for article.

In [Part 2](https://thottingal.in/blog/2023/03/25/wikiqa/), I tried using  distilbert-base-cased-distilled-squad with ONNX optimization to answer the questions. I used a hybrid approach of Named Entity recognition on the question to find relevant titles. I also feed this question to Wikipedia search api and extract the titles returned by it.  The results were not optimal. The answers were just a word or phrase. If that is found in the retrieved context. Context retrieval based on NER or Wikipedia search was also not giving related wikipedia articles.

As a continuation of that experiment, I was exploring the [Retrieval Augmented Generation](https://www.google.com/search?q=Retrieval+Augumented+Generation) approach. RAG require a Large Language Model at the last step to prepare the answer. I also wanted this to be highly compute optimized so that it can run on CPUs.

> Related reading: [Paper: Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401)

Before I explain the approach, here is a quick demo:

## Demo

<video width="100%" height="100%" controls>
  <source src="/wp-content/uploads/2023/07/wq.dodo.mp4" type="video/mp4">
</video>

The system is loaded with 500 most popular English wikipedia articles for the purpose of demo. All running from my laptop(intel CPU, 8 cores, no GPU)

## Approach

### Retrieval Augmented Generation
With RAG, the external data used to augment your prompts can come from multiple data sources, such as a document repositories, databases, or APIs.

The first step is to convert your documents and any user queries into a compatible format to perform relevancy search. To make the formats compatible, a document collection, or knowledge library, and user-submitted queries are converted to numerical representations using embedding language models.

Embedding is the process by which text is given numerical representation in a vector space. RAG model architectures compare the embeddings of user queries within the vector of the knowledge library.

The original user prompt is then appended with relevant context from similar documents within the knowledge library. This augmented prompt is then sent to the foundation model. You can update knowledge libraries and their relevant embeddings asynchronously.

![Retrieval Augmented Generation (RAG)](https://docs.aws.amazon.com/images/sagemaker/latest/dg/images/jumpstart/jumpstart-fm-rag.jpg)

Courtesy: [AWS documentation](https://docs.aws.amazon.com/sagemaker/latest/dg/jumpstart-foundation-models-customize-rag.html)

For Wikipedia context, following are the steps to get this working:

* Vector embedddings of sections of Wikipedia articles are prepared and stored
* Calculate the vector embedding for the given query
* Do a vector search in the vector store with Hierarchical Navigable Small World (HNSW) to find vectors that are similar
* Retrieve the corresponding article and narrowed down section
* Use the narrowed down context with an LLM to articulate the answer.

## Vector store

For the [https://en.wikipedia.org/wiki/Wikipedia:Popular_pages](most popular) 500 articles of English Wikipedia, extract sections(paragraphs), create vector embedding and strore it in a vector database. I used [Chroma vector store](https://github.com/chroma-core/chroma) for this purpose. It uses [ONNX optimized Sentence Transformer](https://github.com/chroma-core/onnx-embedding) for calculating the embeddings. Chroma also has document store to save associated metadata like language, title, URL, actual section content etc. Sqlite3 is used for that purpose. The ids of embeddings in vector store is mapped with the document store.

The embedding calculation for an article is super fast in CPUs because of the ONNX optimized model. I observed ~4seconds for a large article. This is important since Wikipedia articles are not static, they get updated often and updating vector store for each such revision should be super fast.

I expect this much faster on GPUs, but as I said earlier, I wanted everything running without GPU.

> Related reading: (a) [What are Vector Embeddings](https://www.pinecone.io/learn/vector-embeddings/), (b) [Vector Embeddings Explained](https://weaviate.io/blog/vector-embeddings-explained)

## Query embedding

For the given question, calculate the vector embedding. This is calculated using the same system for articles.

## Context retrieval

The vector embedding of the query is used to find most similar vector embeddings in database. Chrome does this using [HNSW](https://github.com/nmslib/hnswlib) algorithm.

> Related reading: (a) [Hierarchical Navigable Small Worlds (HNSW)](https://www.pinecone.io/learn/series/faiss/hnsw/), (b) [What is Similarity Search?](https://archive.pinecone.io/learn/what-is-similarity-search/)

We can retrieve multiple contexts for the question. These contexts are paragraphs that are close the question.

Now we got a few paragraphs that has the answer for the question. These paragraphs are already helpful for a reader to figure out the answer for the question. But let us try to paraphrase the answer from these contexts. For that articulation job, we use a large language model.

## Articulate the answer from retrieved context

First we need to prepare a prompt for LLM so that it will base the answer only from the retrieved context. This is crucial. Otherwise, the LLM will generate answer from its training and that is very prone to hallucination.

This is the prompt I prepared after several experiments:

```
Use the following pieces of context to answer the question. Answer should be short. If you don't know the answer, just say that you don't know, don't try to make up an answer.
Question: {question}
context: {context}

Answer:
```

For LLM, I used the [llama-cpp](https://github.com/ggerganov/llama.cpp) optimized Orca Mini 3 Billion param model(orca-mini-3b.ggmlv3.q4_0.bin) along with [llama-cpp-python](https://github.com/abetlen/llama-cpp-python) library so that I can run it on CPUs. Since we are not using any "knowledge" from the LLM, but just asking it to articulate an answer from the given context, any LLM that can do reasonable instruction prompting should work.

## Source code

Source code: https://github.com/santhoshtr/wq

## More examples

### Question: What happened to the Titan submersible?

<video width="100%" height="100%" controls>
  <source src="/wp-content/uploads/2023/07/wq.titan.mp4" type="video/mp4">
</video>

### Question: How far is Andromeda Galaxy from earth?

<video width="100%" height="100%" controls>
  <source src="/wp-content/uploads/2023/07/wq.andromeda.mp4" type="video/mp4">
</video>

### Question: What is the population of Brazil?

<video width="100%" height="100%" controls>
  <source src="/wp-content/uploads/2023/07/wq.brazil.mp4" type="video/mp4">
</video>

## Prospects

* This experiment demonstrated that RAG with vector store can produce reasonable answers for the questions. The answers are based on the wikipedia extracts and that avoids the hallucination issues. The approach used in the recent [Wikipedia ChatGPT plugin](https://diff.wikimedia.org/2023/07/13/exploring-paths-for-the-future-of-free-knowledge-new-wikipedia-chatgpt-plugin-leveraging-rich-media-social-apps-and-other-experiments/) experiment follows the same approach to avoid hallucination.
* However, the questions should be answerable from a given context. If the question requiring going through multiple articles and analysing or performing computation, this approach will not work. Abstractive summarization for question answering is completely different problem to solve.
* The size of the context is also important for LLM. Just because an LLM support large context size for inputs, [does not mean it will produce well articulated answer from it](https://arxiv.org/pdf/2307.03172.pdf).
* Whether the vector store can be scaled to the Wikipedia's size and dynamic nature is an engineering question not explored here. Vector store solutions had published various benchmarks on the scalability and performance.
* Even though I got this working in CPUs does not mean, a bigger system can work just from CPUs.
* Wikipedia is present in 320 languages. To create vector embedding for another language we need a transformer model for that language. This is not difficult to train and prepare. The vector similarity search is language independent - it works on numbers. The articulation of answer from narrowed context require an LLM that supports the language. This might be difficult. There are LLMs that supports about a dozen of languages, but nothing beyond that. I hope the situation change in future. Or, we can also try translation approach, but that can introduce translation related factual errors.

## Disclaimers

* This is just a prototype of a concept and does not discard all product design and community interaction efforts that need to happen, in case this becomes reality one day. I am curious to hear various prospects, product design ideas you may have.
* There are many important considerations that I omitted for simplicity in this prototype. For example, the dynamic nature of wikipedia articles and need for updating the question list.
* I work at Wikimedia Foundation. However, this proposal and approach are my personal views and does not reflect my employers view.

Have fun!
