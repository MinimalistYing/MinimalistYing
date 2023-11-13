# Year End Review
First of all, I was proud to announce this is my first English blog post 😜.  

I went to Japan a few months ago, and through the trip I found that even you can understand a lot of English articles \ blogs\ email... It doesn't mean you can communicate with others fluently using English.  

So, I decided to write some English blog posts to improve my skill.  

## Career In New Company
Due to the economic depression in recent years. I unfortunately lost my job last year, and have to find a new Job.  I spent about two months, sent a lot of resumes, had a lot of interviews, and finally decided to join the new company I work right now.  

At the beginning, the new work was very stressful for me. Because I usually work with React and mostly develop web applications. But now I have to learn Vue/Weex to build Mobile Apps.  

Just a few weeks after I joined the company, I was assigned a job to merge three different branches together. There is almost 300000+ lines of code in the codebase, and for some historical reasons, the developers use three different branches to build the bundle that runs on different platforms(Android, iOS / Wx MiniApp, Alipay MiniApp / NPM Packages).  

Most of the code in the three branches is identical. But there are some differences dealing with different platforms, so if you want to build NPM Packages with the App branch, you will definitely make a mess. It sounds impossible to finish the job right? Especially to someone new to the company, and even not familiar with the code base.  

I took a lot of effort to finally get this job done with zero bug.  First, I abandoned the branch used for building NPM packages, because this branch hasn't been updated for nearly six months, so there are a lot of new features lost in this branch. Then I tried to build the NPM packages using the MiniApp branch, and after fixing a ton of bugs, I finally got it done.  

So what about the rest two branches(Android, iOS / Wx MiniApp, Alipay MiniApp)? These two branches use totally two different kind of technology to build, [Weex](https://github.com/alibaba/weex) and [Mpx](https://github.com/didi/mpx). There is no way to build different app with different branch. The good news is that both branches were written in Vue, and not all the code was differet. After some reseach, I finally decided to use [Conditional compilation](https://en.wikipedia.org/wiki/Conditional_compilation) to solve the problem. I wrote some Node.js scripts to compare and merge these two branches. If two files are identical, just delete the file from the MiniApp branch. If two files are different, add a `.wx` suffix to the file from the MiniApp branch, and save both files to the new branch. Then we can use conditional compilation to build code for different platforms.  

The last thing to do is to make sure that code runs correctly on all platforms. I wrote another Node.js script to diff the final bundle built between the new branch and the old branch. Of course there are some differences, but most of them are caused by the code minifier. After ensuring that there are no logical differences, we can do some regression testing, and deploy the code to production enviroment.

If you ask me what I have learnt from this experience, I have to say that no matter what difficult situation you find yourself in, *never and ever* do things like using different branches to build code for different platforms. There are many better choices than that. 👹

## Summary
Personally, 2023 is very important for me. Something big is happening in my life. I never work so hard as this year because I spent almost 100w trying to close my home loan fast. I start to keep a cute dog as a pet, to travel aboard that I have never been, and so on.

It's hard for me to write in English at the moment. So even though I have a lot of things on my mind, I will just leave it to the next article.