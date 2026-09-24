---
slug: vi/getting-around-vi-the-layout-saving-and-quitting
title: "Getting Around Vi: The Layout, Saving, and Quitting"
date: 2026-07-26
description: "Understand vi's interface and learn how to escape and save your files."
authors: [mooda-tnt]
image: /img/blog_posts/vi_getting-around-vi-the-layout-saving-and-quitting.png
series: "End your VI suffering — Part I: Basics"
mainTag: vi
tags: [vi, tutorials]
---

![Understand vi's interface and learn how to escape and save your files.](/img/blog_posts/vi_getting-around-vi-the-layout-saving-and-quitting.png)

<Intro>
## In This Article

In the last post, we covered the essential information we need to know about vi. I've got to admit, it was not that juicy, but it needed to be done. In this article, we are going to take a step further and create our first file using vi. Then, we'll have a look around vi's interface and, most importantly, learn to *escape* vi and save our file. Now, let's get down to business!
</Intro>

<!-- truncate -->

## Opening a File

To open a file, we simply type the following command into the terminal:

<Terminal wrap={true}>
vi [FILE_NAME]
</Terminal>

The `vi` part of the command invokes vi, while the latter part specifies the filename to be opened. If the specified filename belongs to an existing file, vi will open that file for us. If it does not exist, vi will instead open a new buffer under that name, which we can later save to create the file.

<AlertBox variant="info" title="What is with the brackets?">
Conventionally, when a part of a command is optional, we denote it with `[]` or `<>`. I prefer the square-bracket style, and I will stick to that throughout this series.
</AlertBox>

Since the filename is an optional argument to vi, what would happen if we were to omit it? Well, opening vi without this argument will open an empty buffer that we can later save to a file and give a name to. For now, do not venture there; I just felt the need to mention it here.

## Interface of Vi

As soon as we fire up vi with a file, we are presented with vi's interface:

![Interface of vi.](./images/interface-of-vi.png)

We see a bunch of tildes `~`, the name of the file we have just opened, and a bunch of other numbers. So let us begin to make sense of every component on the screen. The tildes going down the page on the left-hand side indicate empty lines containing no text, not even blank spaces. This is where we will be writing and editing our text. At the very bottom of the screen, we see what is called the status line. In this area, relevant information about the file, commands we type, and position information, such as which row (line) and column we are at, is presented. For example, in the above screenshot, we can see that the filename is being shown, which is vi's default behavior when you open a file and do not perform any other operation.

Now let us make our first change to the file by writing a sentence or a word. Remember, as I told you before, by default, we are in vi's **command mode**, and we have to explicitly tell vi that we want to insert a piece of text, which can be done by entering **insert mode** by pressing the `i` key. After pressing the `i` key, notice how the filename disappears, and in its place, vi now tells us that we are in the **-- INSERT --** mode.

![Status bar of vi.](./images/status-bar-of-vi.png)

Having entered insert mode, now we can type whatever we want. When we start writing, notice how the numbers at the bottom-right start changing on the status line. These numbers, separated by a comma, indicate the line we are currently on and the column we are currently at. If you keep writing on the same line, notice how the number after the comma starts to change. But when you hit Enter, notice how the former number starts to change. For example, I wrote two lines, and on the second line, I typed three characters, so the numbers show **2,4**: 2 because I am currently on line two, and 4 because, although I wrote three characters, my cursor is now at the 4th position waiting for me to type.

![Status bar of vi explained.](./images/changed-status-bar-in-vi.png)

## Saving and Quitting a File

After writing into the file, it is time to save the changes. Actions in vi are performed through commands, and to issue a command, as you guessed, we need to switch to command mode, which can be done by pressing the `ESC` key. Once you press `ESC`, notice how the **-- INSERT --** on the status bar is now gone. Vi is now ready to receive commands from us.

To save the changes, just type in:

<Terminal wrap={true}>
ZZ
</Terminal>

After typing the `ZZ` command, voila! Vi saves the file, quits, and takes us back to the terminal.

We can also use the equivalent *ex* command:

<Terminal wrap={true}>
:wq
</Terminal>

which serves exactly the same purpose and has the exact same function.

If you tried both commands, which I assume you did, you may have noticed something interesting. When you type `ZZ`, you do not see anything related to the command in vi's interface; vi executes it immediately once it recognizes the command. In contrast, when you type `:wq`, you see the command reflected on the status bar as you type it, and you need to hit `ENTER` for it to kick in.

That is exactly what we established in the previous post: *ex* commands are reflected on the screen and then executed after hitting `ENTER`, while native vi commands are not displayed and take effect without pressing any extra key.

But what if we want to save without quitting? That can simply be done using the command `:w`.

## Discarding Changes and Quitting a File

In case you are not happy with the edits you have made, there are two commands that would save the day: `:e!` and `:q!`.

Both commands discard all the edits you have made to the buffer since the last save. However, while `:e!` reloads the last saved version of the file, `:q!` quits vi altogether.

It is worth mentioning here that if you have not made any changes and want to quit vi, just type in:

<Terminal wrap={true}>
:q
</Terminal>

## Closing Comments

The interface of vi is pretty straightforward once we know its layout. From simple actions, such as editing a file or quitting vi, to more complicated actions, vi performs them all through commands. There are too many commands in vi to memorize, so it is a good practice to write them down and have a peek at them whenever you need to remember a command. And actually, I recommend splitting them up into categories and creating a cheat sheet so they become easier to remember. Have a look at mine [here](BROKEN_LINK), which I expand and add to every time I learn something new in vi/Vim.

That's enough vi for one day. Hopefully, you learned a thing or two along the way. See you in the next one, where we'll learn new commands for moving around in vi.