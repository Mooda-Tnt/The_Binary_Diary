---
slug: vi/introduction
title: Introduction to Vi
date: 2026-06-21
description: Get started with the notorious text editor, vi.
authors: [mooda-tnt]
image: /img/blog_posts/vi_introduction-to-vi.png
series: "End your VI suffering — Part I: Basics"
mainTag: vi
tags: [vi, tutorials]
---

![Get started with the notorious text editor, vi.](/img/blog_posts/vi_introduction-to-vi.png)

<Intro>
## In This Article

Known for being hard to navigate, vi is a text editor that comes in many flavors. In this article, we'll cover the basics of vi and prepare ourselves for an amazing series that will get us comfortable with navigating and editing files using vi.
</Intro>

<!-- truncate -->

Many times, when we are doing our jobs, we run into situations where we are left with no choice but to use vi. For example, while solving CTF challenges or during a penetration test, we might land in a primitive restricted shell with little more than the default system utilities available, one of which is often vi.

Then there are those moments when we accidentally open vi or Vim and suddenly have no idea how to quit it. That situation alone has become the source of countless memes over the years. Hell, just look at the famous Stack Overflow question, [_"How do I exit Vim?"_](https://stackoverflow.com/questions/11828270/how-do-i-exit-vim?utm_source=chatgpt.com), with millions of views from people desperately trying to escape the editor.

![Stack Overflow question about exiting Vim.](./images/how-do-i-exit-vim.png)

If you are used to modern editors and spoiled by their fancy syntax highlighting, autocomplete, and countless extensions, vi may feel unintuitive—even intimidating—at first. But once you become comfortable with it, you'll start to appreciate why it has remained relevant for decades. To be honest, it is actually kind of cool, and before long you'll feel like a wizard flying through text using nothing but your keyboard.

<AlertBox variant="note" title="Book Recommendation">
If you are a book person who loves to dig into the nitty-gritty details of something and wants a great reference on vi and Vim, I really recommend the book **_Learning the vi and Vim Editors_** by Arnold Robbins, Elbert Hannah, and Linda Lamb.

At the time of writing this article, I am reading the **7th edition**, but you can grab the **8th edition** since it covers the more recent major releases of Vim.
</AlertBox>

## What Is Vi?

Now that we know why learning vi is useful, let's briefly talk about what it actually is.

Vi (pronounced "_vee-eye_") is a lightweight text editor used to create and edit plain text files. It comes in many different flavors and implementations, among them the most popular one, called Vim (_Vi Improved_).

In this series, we'll focus on the commands that are common to traditional vi like file manipulation and text editing (inserting a text, deleting a text, moving a text, copying a text, and changing a word), allowing you to work comfortably regardless of which implementation you encounter.

## Vi Modes

Vi operates in modes. That is, it performs different actions according to which mode it is in. It has two modes of operation: **insert mode** and **command mode**.

In **insert mode**, you type `i` to enter the mode and start inserting text into a file. As for **command mode**, the default mode, you can perform specific functions by typing the keys assigned to those functions.

Sometimes, you may not know what mode you are in, or you may accidentally end up in **insert mode**. In such cases, just press the `ESC` key to return to **command mode**, and from there you can decide what you want to do.

<AlertBox variant="tip" title="Tip">
When you press the `ESC` key, if you are already in **command mode**, vi will _beep_ at you. That is why you may hear people refer to **command mode** as **beep mode**.
</AlertBox>

## Vi Commands In General

You may encounter several forms of commands when working with vi. Some of them are mere letters, some are only symbols, and some start with a colon `:` followed by a combination of letters and symbols. The following are some tips to help you differentiate original vi commands from others:

* Letter case matters. That means the keystrokes you type are interpreted differently depending on whether they are uppercase or lowercase.
* When you type a command, it will not be reflected on your screen.
* Whatever command you type, it is immediately interpreted without the need to press the `ENTER` key.

<AlertBox variant="info" title="A Little Story">
Why am I saying _original vi commands_? Well, whenever you type commands that start with a colon `:`, those commands actually belong to the ex editor. Confusing, huh? Well, let me tell you a short story.

Back in the days when UNIX terminals were the norm, everything was done through text. Before vi came along, there was a _line editor_ called ex. Since there was no visual interface, you edited files by typing commands rather than interacting with the text directly on the screen.

Not long after, vi was introduced by building a visual interface on top of the ex editor. So, you can think of vi as the visual mode of ex. That is why, from within vi, we can invoke ex's commands by starting them with a colon `:`.

Did I mention that vi actually stands for *visual editor*?
</AlertBox>

## Closing Comments

Vi is one of the classic editors out there whose versatility makes it stand out from other editors and has made it a favorite among the old-school tech-savvy community. It works in modes and has a wide range of commands, so it requires a lot of practice to train that muscle memory and unleash its full potential. But once you have it in your toolbox, you literally have superpowers. I hope you found this article both informative and useful. With the basics out of the way, we're ready to dive into the real fun in the next article.