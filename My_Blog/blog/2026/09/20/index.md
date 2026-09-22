---
slug: ctf/the_100_re_challenges_challenge/i_just_suck_at_ctfs!
title: I Just Suck at CTFs!
date: 2026-09-20
description:  A reflection on why I suck at CTFs, the mistakes that got me here, and the 100 reverse engineering challenges I came up with to change that.
authors: [mooda-tnt]
image: /img/blog_posts/the-100-re-challenges-challenge_i-just-suck-at-ctfs.png
series: "The 100 Reverse Engineering Challenges Challenge"
mainTag: 100_re_challenges_challenge
tags: [ctf, pico_ctf, 100_re_challenges_challenge, cybersecurity, learning_journey]
---

![The 100 Reverse Engineering Challenges Challenge](/img/blog_posts/the-100-re-challenges-challenge_i-just-suck-at-ctfs.png)

<Intro>
## Introduction

I just suck at CTFs! Just two days ago, I said, "Well, I've had it. Enough is enough!" And so, I came up with **The 100 Reverse Engineering Challenges** Challenge.

This blog post is both a reflection on the main reasons why I am bad at CTFs and a declaration to myself that I am determined to change that.
</Intro>

<!-- truncate -->

## My First Wall:

Back in the day, when I was first introduced to CTFs by a friend of mine called Hamza, they were so exciting to me that every time I decided to participate in one, I would think about it all night long, if not for a couple of days beforehand. When the day finally came, I would jump onto my laptop, excited to see what was waiting for me.

In those early CTFs—when I was still finding my way through the wide-open cybersecurity field and had yet to decide on my path—I used to start with simple challenges under the OSINT or Web categories. My morale was always high since everything was new to me. Even trivial flags were huge achievements. Hell, even finding a flag lying somewhere inside the HTML tags would make me fly.

As I progressed in my cybersecurity journey, I settled on becoming an expert in low-level topics such as binary analysis, reverse engineering, vulnerability research, and exploit development. So, I started doing CTF challenges—again, simple ones—but this time under the reverse engineering, pwn, and binary exploitation categories.

And oh boy, was that exciting! Even running the simplest utilities, such as *strings*, made me feel like I was a wizard. Every new concept, every damn new tool was a level unlocked. I felt like I was maturing. I felt like I was progressing (which, by the way, I was).

But as I said before, I was solving only simple challenges. After a while, those challenges started becoming repetitive, and solving them was no longer that satisfying. I wasn't progressing anymore; I was just chasing those little highs.

So, I decided it was time to level up and start doing some medium-level wizardry.

At first, I was able to solve a few of them, but not that many. I always followed the same methodology: start with some basic analysis, move on to static analysis, and use the same tools I knew, the same libraries I had learned, and the same information and skills I already had.

But what about the things **I didn't** know? What about the skills and tools I **didn't** have?

That's when the frustration kicked in, and there came the shock: **I had plateaued. My knowledge and skills needed an upgrade.**

## My Second Wall

So, I responded by studying and started looking for a platform that would serve my needs. I was searching for something related to low-level analysis topics, and eventually, I came across pwn.college—a treasure trove of courses, materials, and challenges created by academics and staff at Arizona State University, along with contributions from the community.

I learned about vulnerabilities, exploitation techniques, pwntools, and cryptographic attacks, and I picked up some new Python skills along the way. I regained my confidence and wanted to tackle CTFs again. Suddenly, some things that had previously looked impossible started becoming recognizable.

I remember one CTF where I was able to figure out that the code contained a format string vulnerability and use it to leak the flag sitting on the stack. I couldn't have been happier. To me, this was concrete evidence that I was finally coming out of my cocoon, thanks to pwn.college.

In the CTFs that followed, I was at least able to review source code and decompiled code, inspect memory locations and registers using GDB, and generally understand more of what was happening in front of me. But soon, I started feeling overwhelmed and full of fear because I was slow, I kept getting stuck, and I rarely made it to a flag.

It was the second time I got slapped in the face by the reality that **I just suck at CTFs.**

The first time, it was a knowledge problem. But this time, what was the problem?

I started looking at other people's experiences in reverse engineering and binary analysis. Why were they successful and I wasn't? Why were they making it to the final stages or even winning their CTFs while I could barely solve a single challenge?

And the answer was simple: **patience.**

I finally realized that I was impatient. I threw in the towel too early whenever I got stuck. I didn't go looking for writeups or walkthrough videos to learn what I was missing. Instead of working on that weakness, I weirdly started doubting myself, wondering whether I simply didn't have what it takes to do CTFs or even cybersecurity at all.

At least, that was the case until I came across **that message.**

One day, while going through messages on the pwn.college Discord server, I came across a response from instructor Robert Wasinger to someone who was struggling with a reverse engineering challenge. I don't remember his words verbatim, but the message was essentially that by pursuing cybersecurity, you've already signed yourself up for pain.

And that was it! That was the missing piece that reignited my willingness to keep going.

## My Third Wall

I started reading again on low-level topics and purchased my first HTB VIP subscription. My plan was ambitious: one HTB challenge a day under the reverse engineering, pwn, or binary exploitation categories. In addition to that, I would read writeups so I could learn from other people's approaches and hone my own methodology and mentality.

But, you know, life happens!

I got admitted to a master's degree in cybersecurity and could no longer fulfill my goal of doing one HTB challenge a day. I knew I needed to reprioritize things, so I set myself a more realistic goal: do HTB only on weekends.

And I committed to that.

But soon, I found myself in a position where I had to relinquish some things if I wanted to make it through my degree. CTFs were one of them. After finishing my degree, I took my fair share of rest and completely forgot about CTFs and doing challenges on HTB.

That was the case until about a week ago.

I wanted to start doing CTFs again. I was excited and blindly confident that I would do great in **PwnSec CTF 2026**. When the day came, I jumped onto my laptop, as excited as always, only to get hit again by that uncomfortable truth:

**I just suck at CTFs.**

Except this time, I understood the problem much better.

I wasn't starting from zero anymore. I knew tools, concepts, and techniques that I hadn't known before, and I had already learned my lesson about patience. But my methodology and problem-solving mentality were still underdeveloped. I would go down rabbit holes, spend too much time on irrelevant details, and depend heavily on the approaches I already knew.

I had never exposed myself enough to other people's solutions. That was the very thing I had planned to do but had never managed to sustain.

And then it struck me: **consistency was the last missing key.**

I didn't need another ambitious plan that I would follow for a while and eventually abandon. I needed something I could actually stick to. Something that would consistently expose me to unfamiliar problems, unfamiliar techniques, and other people's ways of thinking.

## The Catalyst 

At this point, I was sitting at my desk thinking of ways to break out of this misery. I couldn't take it anymore. PwnSec CTF 2026 had really opened my eyes. It helped me recognize what had been missing all along.

It was the latest slap, yet it was also the catalyst.

It directly led me to the idea of **The 100 Reverse Engineering Challenges Challenge.**

## What the Hell is the 100 Reverse Engineering Challenges Challenge?

Well, it is a challenge I came up with to knock down all my walls. As the name suggests, it consists of 100 challenges under the reverse engineering category. All of them will be Hard challenges from picoCTF, whose platform is now known as CyLab Security Academy.

But why exactly 100 challenges? Why picoCTF? And why only the Hard category?

Let me walk you through how this challenge is going to work and answer some of those whys.

### Why 100?

If I work through 100 challenges, I will expose myself to 100 different problems. Those problems will introduce me to new concepts, new technologies, and new coding and scripting skills. Most importantly, I will have been exposed to at least 100 different writeups. That means a plethora of other people's experiences, approaches, and methodologies, which is exactly what I've needed the most but have never been consistent in exploring.  

### Why PicoCTF?

As for picoCTF, I remember watching a John Hammond video in which he was working through a picoCTF challenge. I looked up the platform afterward and bookmarked it.

Moreover, a platform dedicated to CTFs with hundreds of challenges naturally has a large community around it and, consequently, plenty of published writeups to learn from. And that is a crucial part of this challenge, as you'll see in the rules that follow.

### Why Only the Hard Category?

I mentioned earlier that my skills had stagnated, and I don't want to keep chasing temporary highs anymore. I need challenges that force me outside what I already know.

Hard challenges will make me brush up on skills I have already learned, but more importantly, they will put me in situations where my existing knowledge and methodology are simply not enough. I want to encounter problems where I don't know what to do next because those are exactly the moments that force me to learn something new, explore someone else's approach, and expand my own methodology.

I have spent enough time in my comfort zone. It is time to level up.

### The Rules, Dos, and Don'ts

Since the ultimate goal is not to fall into the same traps and repeat the same mistakes again and again, the rules of engagement need to be realistic and doable. More importantly, they need to actually help me address my triangle of hell: **knowledge, patience, and consistency**.

So, let's lay down the ground rules:

**The Weekends-Only Policy:** I will be solving challenges only on weekends, and I must complete at least one challenge every weekend. A challenge can span both Saturday and Sunday, but it cannot be carried over to the following weekend. Whatever challenge I start that weekend must be completed within that weekend.

**The Writeups Policy:** I will always start by trying to solve a challenge entirely on my own. If I manage to do so, I will still look up at least one writeup for that challenge to see the tools, methodologies, and ways of thinking other people used. The aim here is to widen my horizons, discover tools I have never encountered before, and expand my own methodology.

If I cannot solve a challenge on my own, which I don't consider a failure, I will do the same: search for writeups, pick one, and continue the challenge from there. This will not be a mere copy-and-paste exercise. While working through the writeup, whenever I encounter a new concept, API, exploitation technique, or anything else unfamiliar to me, I will stop, research it, understand it, then come back and try to reproduce the solution myself.

**The No-AI Policy:** Obviously, if I want to learn new things, develop patience, and, more importantly, expand my methodology, I cannot let someone spoon-feed me the answers or hand me knowledge that has already been extracted, processed, and refined without me putting in the effort myself.

So, whenever I encounter something new, such as the `rewind()` function in C, I will not refer to AI-generated explanations, whether from ChatGPT, Google's AI summaries, or anything similar. Instead, I will go looking for the information myself through official documentation, technical resources, or tutorial sites.

There will be only one exception: **debugging a solution I have already developed myself.**

For instance, suppose I understand the challenge and have already crafted my exploit, but something goes wrong. Maybe it terminates early, produces unexpected output, or exhibits some other weird behavior. After spending enough time trying to debug my own solution and getting nowhere, I may ask AI for nothing more than a nudge in the right direction. It should not tell me what my mistake is or how to fix it. At most, it might tell me something like, "I would take another look at line X."

This is completely different from a situation in which I have no solution in mind. In that case, I will not ask AI to solve the problem or point me toward the solution. I will refer to a writeup instead and follow the **Writeups Policy** above.

### Honest Documentation

After each challenge, I will craft my own writeup and post it here as part of this series. All of my writeups will be transparent. I will document what I tried first, what results I got, where I got stuck, which writeup I referred to, and, most importantly, what I learned.

## Post-100 Me

The whole point of this challenge is to get better at CTFs. Right after the 100th challenge, in the first live CTF I participate in, I expect myself to independently solve my very first Hard reverse engineering challenge.

But what if I can't? What if I still don't consider myself "good" at CTFs afterward? Would this whole challenge and all the time I spent on it be wasted? What would make it a success?

Whatever the outcome turns out to be, I will be grateful for the journey and will still consider it a success story. I mean, at the end of the day, that's 100 challenges and at least 100 writeups I will have worked through. That's no joke. The amount of new things I will have learned will already count as a win, not to mention everything I will have added to my methodology and the mentality I will have developed along the way.

So, I think it is totally worth it.

## Closing Comments

Sometimes, it takes time for us to figure out what is going wrong. In my case, it took getting slapped by the same reality more than once. Sitting down and reflecting on my previous CTF experiences made me realize my mistakes and eventually pushed me to come up with **The 100 Reverse Engineering Challenges Challenge.**

I believe I will make it to the 100th challenge with full commitment. I know it won't be that simple. Life happens, circumstances change, and not everything is predictable. But without trying, I will never know.

So, whatever the outcome turns out to be, **I'm in.**