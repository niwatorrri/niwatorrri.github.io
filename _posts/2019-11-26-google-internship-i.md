---
layout: post
title: "My Google Internship (I): Get the Offer"
author: "Tori"
header-style: text
comments: true
tags: 
- Essay
---

I'm so excited to get a summer 2020 software engineering internship at Google! This is a post that records my experience along the way, from application to final offer.

### 9.17 Application submitted

I think Sep 17 was the first day that Google opened its summer internship positions to the public. It was opened actually pretty late compared to many other companies. Honestly, I wasn't even seriously considering Google when searching for the internship as I heard it was fairly difficult, and Google did not even appear at my school's career fair. Okay. But anyway I submitted my application online for an internship at Google. --- It didn't hurt to click some buttons on their website after all. And one never knew.

### 9.25 Coding exercise received

About a week later, I received the online assessment (OA), what they preferred to call the "coding exercise", from Google. I admit I was very excited at that time as it was totally beyond my expectations, but I still dared not to finish the exercise right away cuz typically I would put off anything that could potentially take me a lot of time and I was pretty fearful of this exercise imagining it might be freaking hard. Only three days later on 9.28, I tried the "practice coding exercise" they offered, and it was really not easy, I cannot remember exactly what they were about (and it wasn't really important as of the whole process). But it somehow confirmed my belief that these OAs are going to be insane. And so...

### 10.2 Coding exercise completed

I was given about a week to complete the coding exercise, but I only finished it on the very last day. Well, to be honest, the actual OA was a lot much easier that the practice OA. I only wrote no more than 20 lines of code for each of the two problems, partly because I was using Python, and writing in Python makes life much easier than in C++. The two coding problems are so easy and you won't really bother about them. I'm afraid this exercise is only testing whether you have taken a coding course, and whether you have a good coding style. Oh, one more thing, the exercise won't provide you with test cases. Back then I wasn't so sure how to deal with this, but nevertheless you might still want to be prepared, e.g. thinking about edge cases and stuff when finding fault with your code.

### 10.3 Scheduling interviews

The efficiency in my case was incredible. They contacted me to schedule two technical interviews the very next day, after I completed my OA. I was frightened. This was the greatest progress of my job hunting at that time, and I should definitely take good care of this. However, I hadn't done any LeetCode style problems and hadn't gone over any data structures or algorithms. --- Yeah I just hated them. But now I have to face them. To give myself at least one week to prepare, I scheduled my interviews as late as possible. I replied to them my availability on 10.6, stating that I would like the interviews to be no earlier than 10.14, and started preparing interviews right away.

### 10.8 Time scheduled & Prepare for interviews

Pretty quick, they scheduled my interviews on 10.14, about one week from when I started preparation. The interviews were two rounds in a row, both 45 minutes on phone. Google has offered a lot of advice and resources to help the candidates to prepare. Probably this part is what most people are interested in, so I should expand a little bit.

#### Hard skills: data structure and algorithms

This is definitely a critical part. Google provided some slides that briefly listed possible topics that might be involved in the interviews and you can find them elsewhere on the Internet. For me, I first took a pass on the materials of my previous data structure course. One has to understand when the data structures should be used, what are their common methods, and what algorithms are implemented based on them. Here is a list of data structures I reviewed:

- array and linked list
- stack and queue
- string: KMP algorithm
- binary tree
  - traversal: preorder, inorder, postorder
  - binary search tree, heap and priority queue
- graphs
  - adjacency list and adjacency matrix
  - traversal: DFS, BFS, topological sort
  - shortest path: Dijkstra and Floyd algorithms
  - minimum spanning tree: Prim and Kruskal algorithms
- sorting: O(n^2) insertion/selection/bubble sort, O(nlogn) quick sort, merge sort, heap sort
- hash: hashset and hashmap
- advanced topics: Trie, AVL, red-black tree (didn't go into the details)

I also found it very useful to practice with the book *Cracking the Coding Interview: 189 Programming Questions and Solutions*. It not only covered various data structure and algorithm topics, but also other basic concepts of computer science and discrete mathematics, and more importantly how to handle behavioral questions. I scanned through the book, and went on to LeetCode to practice. Some algorithm ideas can be really hard to grasp, and some of them are:

- greedy: think about its correctness very carefully before you start to code!
- binary search: take advantage of monotonicity! and do implement it at least once!
- dynamic programming: familiarize yourself with classical DP problems!

When practicing, pay attention to the data structure libraries in your coding language (e.g. collections in Python, STL in C++, whatever you have in Java) and had better memorize their method names and time complexities. I (reluctantly) subscribed LeetCode premium for a month, so that I could practice problems tagged with "Top Google Questions". It turned out it didn't help me in the actual interviews, but somehow it just made me feel more confident during preparation.

#### Soft skills: workflow and communication

This is what many people didn't pay enough attention to but Google cared a lot. They were nice enough to share a [video](https://www.youtube.com/watch?v=wwIysnVmAUg&feature=youtu.be) that shows what a good workflow in an interview should look like.

During the interview, the questions, more often than not, are not stated in every detail, and you have to find out these information by asking a lot of questions. For example, are inputs guaranteed to be integers / non-negative / non-empty / sorted? Will the input contain duplicate values? Is the final solution unique? For graphs, are there self-loops or double-edges? Different answers might lead to totally different solutions.

After ensuring you and your interviewer are on the exact same page, discuss your thoughts, always, even if they are wrong, immature, or a brute force solution. They would like to hear you think out loud. Discuss your solution, including its complexity, and see if the interviewer agrees with you. You might be asked to optimize your solution to reduce the complexity. If you get stuck somewhere, say for more than 3 minutes, think aloud and seek help! No one is perfect and collaboration could be a better solution! Plus there isn't really much time during one round. When you and your interviewer agree upon a solution, you can start to implement it. Remember, of course, keep your code nice and clean, and also readable. Talk while you type.

After finishing typing, test your code, with a regular test case and some edge cases. Do it step by step, and fix any bug right away. If there is still some bug that's spotted by the interviewer but somehow eludes you, repeat the process in the previous paragraph to see what they have in mind and collaboratively improve your code. Finally, there could be some follow-up problems. Solve them as before, and it's okay if you didn't manage to solve all of them, as the absolute performance doesn't matter but how you are compared to other candidates. Note that follow-ups can involve some big data questions, be sure to read something related to concurrency, distributed systems, MapReduce, etc.

Before the actual interview, you will be asked to complete a project preference questionnaire to show your technical experiences and current interests. Fill in them with great care as it directly affects your host-matching phase if you survived the technical interviews. Ask your recruiter to go over them if you still feel insecure.

### 10.14 Two coding interviews

So this is the day, I thought. My interviews were arranged at 5pm and 6pm EST. And yeah, I was freaking nervous before the interviews. I bought a bottle of water, found a quiet place, and waited for the calls.

Well the interviews went pretty well. The first interviewer asked some questions about my resume, for about 8 minutes, and then went on to coding problems. The second interviewer directly jumped into coding. I guess that "ask about resume" part is only for us to relax. Anyway, my coding problems were not hard, a little above LeetCode easy or so. I can't tell you the problems, but they were really easy in terms of hard skills, and so I asked a lot of questions to show my soft skills. For the very last several minutes, the interviewer would typically stop and see if you have any questions for them. Prepare one or two of them to show your care for the company, e.g. "what are the most difficult challenges you have faced in your work at Google?" The whole interview was like a chat with a friend, and it was a really good experience. I was pretty satisfied with my performance, and went to dinner with joy.

### 10.17 Coding interviews passed

Three days later, I was notified the hiring committee (HC) had approved my application. This means I entered the next phase, the host-matching phase. During this phase, project hosts who are interested in having you as an intern will reach out to you, to have a chat, and to see if you are interested in their project as well. Note that normally this process can by no means be expedited, and there is now no guarantee that you will be contacted by at least one host. So this phase is kind of a bummer, and also the part I hated the most about the whole recruitment process. You never know when your first potential host will call in, and it could take more than a month if you are really unlucky, or even drown in the intern pool. But it should be not a problem if you entered this phase early enough.

There could be one exception though: if you have other offers that urgently need your decision, you can tell your recruiter about this and they *might* speed up the process and arrange you to even several host interviews in a day.

### 10.30 First host matching notification

So yeah, the first host reached out two weeks after I entered this phase. Not bad. I quickly replied with my availability, and I didn't really worry about this at all.

### 11.4 First host matching interview

There is actually nothing much to say about this. Typically the host will first introduce themselves and describe the project they are going to do. It is possible that they ask you some technical questions to see if you are a good fit, but it is totally fine if you cannot think of a good answer. Then they will ask if you are interested or what are your expectations from the internship. It's more like a 45-minute information session rather than a formal interview. The information you might want to know can include: what are the expected skills / coding language / frameworks? how large is the team? what is my role exactly? how does the team make an impact at Google? what are some of the achievements so far? etc. 

After the session, write to your recruiter some of your thoughts about this project, e.g. how you like it, whether it fits your skills and experiences, etc. If both you and your host are happy, you are about to get an offer!

### 11.11 Second host matching notification

I didn't hear from the first host for a while, but a second host reached out to me, a week after my first host match. It's kind of exhausting to arrange these interviews one after another, but nevertheless I replied right away.

### 11.13 Second host matching interview & Two interview results

Same process as before, but I felt like this host was less enthusiastic than the first one. Out of courtesy, I still asked them about the details of the project. In the afternoon after I finished the second interview, my recruiter seemed very eager to contact me: they even called me directly on the phone instead of sending emails! I was in a class, so I texted them I would be able to talk an hour later.

Well, guess what, it's great news! My recruiter told me that two hosts both wanted to move forward with me, and I'm facing three decisions: a) choose the first host; b) choose the second host; and c) wait for a third host and decide. I was so overwhelmed --- finally I got to have an offer! I just couldn't make a reasonable decision at that time, so I promised I would reply the next day. They agreed, saying they are happy for me but cannot provide any suggestion on my decision. I thanked them and drowned in this sudden crush of excitement and ecstasy.

### 11.14 Reply decision

I didn't have anyone to turn to for advice actually, but I discussed with some of my friends, and decided to go with the first host. It would really wear me out to again wait for other hosts, schedule interviews, and talk for an hour. Why not enjoy what I already have? Yay!

So I replied my decision the next day. And the offer was almost settled. We negotiated the internship dates, as my school has a very strict requirement on these dates. We didn't settle the dates until 11.21, and my recruiter gave me a call to go over the details of my offer on 11.22.

### 11.26 Offer accepted

After the weekend, I finally received the offer letter! I finally landed a job! It was such an honor to read these emails from Google: onboarding, relocation, salaries... It looks so surreal but I'm now receiving this for real. I won't say the recruitment process is satisfying, since it took about two months to finally reach a decision, way longer than many other companies. But nevertheless, I'm aboard! Hope this post is of some help to you, and I will share my internship experience when it is the right time!