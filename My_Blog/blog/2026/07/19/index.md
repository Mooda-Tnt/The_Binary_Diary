---
slug: ghidra/auto-analysis-explained
title: "Auto Analysis Explained" 
date: 2026-07-19
description: "Understand the Auto Analysis phase that lays the groundwork for your reverse engineering process"
authors: [mooda-tnt]
image: /img/blog_posts/ghidra_auto-analysis-explained.png
series: "The Ghidra Journey — Part I: Foundations"
mainTag: ghidra
tags: [ghidra, tutorials]
---

![Understand the Auto Analysis phase that lays the groundwork for your reverse engineering process.](/img/blog_posts/ghidra_auto-analysis-explained.png)

<Intro>
## In This Article

So far, we have seen how we can create projects and load files into them. Later on, we explored the CodeBrowser window. In today's article, we will be covering the **Auto Analysis** step that populates the CodeBrowser window with much of the information we see in it. So let's dig in!
</Intro>

<!-- truncate -->

## Where Does All This Information Come From?

We have become acquainted with the CodeBrowser window along with its windows. But where does all the information presented in these windows come from? As a matter of fact, the CodeBrowser window is just an empty interface! It later gets populated with information once we select a file for analysis. Do you want to see that in action? Go back to the Ghidra Project window and select **Tools** → **RunTool** → **CodeBrowser**.

![Steps to open an empty CodeBrowser instance.](./images/steps-to-open-empty-codebrowser-instance.png)

After clicking on the CodeBrowser item, you will be presented with an empty CodeBrowser instance like the one shown in the screenshot below:

![An empty CodeBrowser instance.](./images/empty-codebrowser-instance.png)

Now that we have seen the CodeBrowser in its empty state, let's return to our original question: where does all the information we normally see in it come from? This is where Auto Analysis comes into play.

## Running Auto Analysis

The first time we select an imported file, a window pops up asking us if we want to analyze it:

![Option to allow Ghidra to auto analyze the file.](./images/option-to-auto-analysis.png)

Having selected the Yes option, the **Analysis Options** dialog shows up with a bunch of analyzers to choose from:

![The Analysis Options dialog.](./images/the-analysis-options-dialog.png)

Unless you are dealing with an unusual binary that requires special analysis (an example of that would be an obfuscated binary), just stick with the options Ghidra has already checked for you. If you select any of the analyzers listed in the Analysis Options dialog, you will see a bunch of useful information about it in the panel to the left, like its description and other options you can use to tune it:

![Auto analysis analyzers and their options.](./images/analyzers-and-their-options.png)

After clicking the Analyze button, the real work of analysis begins.

One way Ghidra tells you that analysis is underway is with a small progress bar at the bottom-right corner of the status bar:

![Auto analysis progress bar.](./images/auto-analysis-progress-bar.png)

The progress bar is useful because it tells you what is going on, such as which analyzer Ghidra is currently running. Also, it allows you to stop the analysis process using that little red cross icon.

Depending on the size of the file being analyzed, the amount of time taken by Ghidra to perform the analysis may vary; it may take a few seconds, a few minutes, or even hours when processing extremely large files. If the analysis takes too long to finish, you might want to set a timeout for a certain analyzer or uncheck unwanted analyzers in the Analysis Options dialog.

<AlertBox variant="tip" title="Tip">
Wait! what if I need that analyzer later?

Well, do not worry, pal. If you want to rerun a timed-out analyzer or reenable one, it is as simple as going to **Ghidra's Analysis** menu and selecting the corresponding option.
</AlertBox>

## Auto Analysis Results

Thanks to the various analyzers Ghidra runs during the Auto Analysis phase, it extracts vital information, such as compiler identification, function argument and local variable identification, and data type information. Having finished the Auto Analysis of the file, Ghidra now has a much clearer picture of the binary and enriches our experience by populating the CodeBrowser with the information it extracted earlier.

<AlertBox variant="tip" title="Tip">
If you want to have detailed information about what Ghidra has run and how much time it spent on each task during the auto analysis, you can read the log from the Ghidra Project window by selecting **Help** → **Show Log**.
</AlertBox>

## Saving Your Analysis

As an example binary, I am just reverse engineering a teeny-tiny program that prints out a statement onto the screen. So, there is not that too much important work to save. But in more advanced analysis on much bigger files, besides the auto analysis results, there will be your own work, like adding comments, defining custom structs, renaming variables, etc. So, whenever you are done with your analysis and want to take a break and pick up where you left off later, it is good practice to save your work so you do not have to start over. For this, Ghidra lets you save your work through different means:

* Use the hotkey **CTRL + S**.
* In the **CodeBrowser**, you can go to the **File** menu and use one of the options provided there.
* On the far right side of the **toolbar**, there is a small floppy disk icon. You can just click on it, and you are done.
* If you close the **Codebrowser** window, Ghidra will ask you whether you want to save the changes. Press **Save**.

## Closing Comments

Ghidra powers our reverse engineering process and does a really great job for us through Auto Analysis. Auto Analysis runs numerous configurable analyzers that Ghidra deems useful for figuring out the behavior of the binary. By using the information extracted during Auto Analysis, Ghidra populates the CodeBrowser and sets the stage for us.

I hope this post helped you become a little more familiar with Ghidra. With the fundamentals behind us, we are now ready to move forward and explore the essential CodeBrowser windows that will accompany us throughout our reverse engineering journey.