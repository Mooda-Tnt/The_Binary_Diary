---
slug: vi/moving-around-quickly-in-vi
title: Moving Around Quickly in Vi
date: 2026-08-02
description: Learn how to position the cursor anywhere inside vi.
authors: [mooda-tnt]
image: /img/blog_posts/h7ctf-international-2024_no-paste.png
series: "End your VI suffering — Part I: Basics"
mainTag: vi
tags: [vi, tutorials]
---

![](/img/blog_posts/h7ctf-international-2024_no-paste.png)

<Intro>
## Introduction

</Intro>

When we want to make edits in a file, we move the cursor to the position where we want to start editing. So we need to be able to do that as fast as possible. Fortunately for us, vi has commands that let us do that without even needing to take our hands off the keyboard.

## What Is a Line?

Before delving into the ways vi allows us to move the cursor around, we need to pay attention to some details, like what a line actually means in vi and how vi treats a line by default. So let us consider the following dummy text I wrote and explain things using it:

![Dummy Text](./images/dummy_text.png)

<AlertBox variant="tip" title="How to Make Line Numbers Visible in vi?">
By default, vi's interface does not show line numbers. To make them visible, just run the command: `:set nu`.
</AlertBox>

We have actual (logical) lines and visible (screen) lines. As you can see from the screenshot above, an actual line (indicated by the number preceding it) can span multiple visible lines and continues until we hit the `ENTER` key, while visible lines are the lines that were forced to wrap around to fit the screen size (those that do not have any numbers preceding them). So vi treats any written text as a single line until it encounters a newline character, which is inserted by us when we press `ENTER`.

As a matter of fact, we can change this behavior. For this, let us do an experiment together.

Let's create a file called experiment by running this command: `vi experiment`.

Now, press `i` to enter insert mode. Press the `a` key until you see the column number indicator show 71 (there are 70 `a`s, and the 71st column is where your cursor is right now). Then, hit `ENTER`, and after that, press `ESC` to exit insert mode and make sure we do not accidentally type any further text.

Now press `BACKSPACE` to go to the end of the previous line. You are now at the last `a`, which is at the 70th column. Finally, resize your vi (terminal) window so that the right edge is at the 70th column and no white space is left. Right now, the column indicator shows 70, right? Well, we did this just to establish a certain column and window width. Now, let the fun begin.

Type this command: `:set wm=30`. What this command does is override the default setting so that, while entering text, vi automatically inserts a newline when the text gets within 30 columns of the right edge of the vi window as soon as it encounters whitespace.

What that means in our example is that we have a 70-column-wide window and have told vi to leave a wrap margin of 30 columns. That gives us 40 columns before reaching that margin. Now, as we continue entering text past that point, vi will wrap the text at whitespace by automatically inserting a newline.

Give it a try now and insert exactly 40 `b`s. Note that after typing 40 `b`s, your cursor is now at the 41st column. Nothing happened, right? Well, now press `SPACE` and type another `b`, and voila! You are on a completely new line.

This behavior kicks in only when vi encounters whitespace. So, if you set `wm=30` but keep entering 200 characters without any whitespace, vi will not automatically break the text into a new line.

Now that we have established what a line is in vi and how we can override the default line-breaking behavior, we can discuss the cursor movement commands.

## Cursor Movement Commands

Vi has several commands for cursor movement. While some of these commands allow us to move within the same line to the left or to the right, others let us move one line up or down, move through text blocks, or even move one screen of the file at a time.

### Moving within the Current Line

The commands to perform movements within the current line are as follows:

* `h` or the arrow key `←`: moves the cursor one space to the left.
* `l` or the arrow key `→`: moves the cursor one space to the right.
* `0`: moves the cursor to the beginning of the line, regardless of whether it begins with blanks or tabs.
* `$`: moves the cursor to the end of the line.
* `^`: moves the cursor to the first non-blank character of the line.
* `n|`: moves the cursor to the nth column of the line.

It is worth mentioning here that moving the cursor to the right past the end of the line will not wrap it around to the beginning of the next line, nor will moving the cursor to the left past the beginning of the line wrap it around to the end of the previous line.

### Moving between Lines

There are also two keys that allow us to move to the next line or go back one character at a time:

* `ENTER`: moves the cursor to the first character of next line. This key is different from the `j` key in that it positions the cursor at the very beginning of the following line, while the `j` key goes down one line at the same position it was in the previous line.
* `BACK_SPACE`: moves the cursor back one character at a time, but unlike the `h` key, it allows wrapping around to the end of the previous line.

* `j`, the arrow key, or `↓`, or `+`: moves the cursor one line down.
* `k`, the arrow key, or `↑`, or `-`: moves the cursor one line up.

### Moving by Line Number



### Moving by Text Blocks



### Moving by Screens