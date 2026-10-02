---
slug: reverse-engineering/calling-conventions-in-c-and-c++-code
title: Calling Conventions in C and C++ Code
date: 2026-08-30
description: Common calling conventions in C/C++.
authors: [mooda-tnt]
image: /img/blog_posts/calling-conventions-in-c-and-c++-code.png
mainTag: reverse
tags: [reverse, c, c++, assembly, low_level, writeups, intermediate]
---

![Calling Conventions in C and C++ Code.](/img/blog_posts/calling-conventions-in-c-and-c++-code.png)

<Intro>
## Introduction

I would like to start today's blog post by considering a code snippet:

```
int add(int a, int b, int c)
{
    return a + b + c;
}

int main(void)
{
    int result = add(1, 2, 3);
	return result;
}
```
When developers/programmers write code in a high-level language such as C, calling functions like the one above seems trivial. From within one function, we call another function, pass some arguments to it, and eventually get a return value back. As simple as that.

But when we compile that code and start looking at the corresponding assembly code, things get really interesting because assembly reveals all the details. Where will the passed arguments (e.g., `1`, `2`, and `3`) be stored? In registers, on the stack, or maybe a combination of both? Where does the result go? How are the execution flow and program state handed from `main()` to `add()` and then back to `main()`?

Well, the functions must agree on some rules and follow them so that the program works properly. Such rules are called **calling conventions**.

In this article, I am going to cover what calling conventions are and touch upon some of the most commonly encountered ones when working with C/C++ programs.

Well, enough talking. Let's get to work!

</Intro>

<!-- truncate -->