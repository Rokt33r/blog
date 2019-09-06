---
icon: 🔨
title: Blog renewal 2019
date: 2019-09-07
tags: [nextjs, mdx, remark]
category: dev
---

I've renewed my blog with Typescript, Next.js and MDX to start blogging again. So, in this article, I want to share how I did renew my blog.

# Why I'm trying to do it again?

I want to try fancy new stacks, Next.js and MDX more. The previous blog was built with jekyll. It was kind of fine. But I was not happy about it. I guess the most biggest reason was that I don't know Ruby language.(And I don't want to learn it neither...Haha) Also, as a member of unifiedjs colletive, I want to try MDX which is based on Remark. It is really promising. I was a bit skeptical before I tried. But, now, I'll definitely recommend it to others.

Another reason is that I want to share my ideas. Since starting of the last August, my company's let me fully focus on renewal of Boostnote project, AKA Boostnote.next. I've been really wanting to do it. So I'm VERY MOTIVATED NOW! And, while working on the Boostnote.next project, I've been inventing lots of interesting tools like prismy. They are really cool. My collegues also like them a lot because they are fixing most of problems of the current conventional solutions. But, sadly, I realized that I don't have enough channels to share the ideas... So I fixed the stage to start my show again.

The last reason is that I want to improve my English skill more. For the past year, my English has improved quite a lot. Although I'm living in Japan and Korea, I'm using English most of time because my girlfriend is from US and my coworkers are from UK and France. So, now, I can speak and write English without hesitate. But my English is still broken. To fix it, I guess blogging in English should be one of the best ways.

# The suffering

> This suffering - Billy Talent https://www.youtube.com/watch?v=jp8LfVGssO4
>
> I listened this song while writing this article

But, although I'm quite motivated, the renewal was not easy. I thought I could finish it in a week but it takes almost a month. To be honest, the biggest reason of the delaying was I played Apex Legends too much though. I'd been undergoing lots of trial and error too. In this section, I want to share what makes me suffer.

## Difference between Markdown and MDX

MDX is introduced itself as a superset of markdown with JSX supporting. So you can mix markdown and JSX(rendered from React Component) in your markdown articles. Also, via `MDXProvider`, you could set Layout from outside of MDX file. It is really cool. But supporting JSX might causes some problem. One of articles in my old blog was using `<img>` tag. As you know, in HTML5, you supposed to write `<img>` tag without closing. But, JSX syntax is always forcing to close tags. Therefore, MDX is forcing to close all tags too. Moreover, the error message looks really confusing. As you see the below error message, it doesn't tell which JSX contents are not closed. At the first time, I thought the configurations for Babel or Webpack was wrong. But the problem was that I forgot to close a `<img>` tag in middle of an article. So, if you're going to migrate old markdown contents into MDX, please make sure that all tags are closed.

```
[ error ] ./pages/posts/monorepo-and-lerna.md
SyntaxError: unknown: Unterminated JSX contents (102:16)

  100 | <pre><code parentName="pre" {...{"className":"language-json"}}>{`  "npmClient": "yarn"
  101 | `}</code></pre>
> 102 |     </MDXLayout>
      |                 ^
  103 |   )
  104 | };
  105 | MDXContent.isMDXComponent = true
```

## Do NOT use API routes for static HTML exporting

From Next.js v9, Zeit introduced API routes feature. It is really cool too because it lets me make serverless apps with no extra configuration. But it didn't work for static exporting. To know the reason, we need to understand how `next export` script work. `next export` pre-renders every pages into HTML from output of `next build` script to mimic SSR. But, while rendering, next won't serve API routes so page components will fail to fetch data from API routes. But if you're using external apis, it should be fine as long as you can access the internet.

## Avoid rendering markdown contents from frontend side

The first attempt to render markdown in this renewal was hosting markdown contents in `static` directory, fetching them via `getInitialProps` and render into `ReactNode` via remark and its plugins.

> You can see the code here.
>
> - `posts.show` page component : https://github.com/Rokt33r/blog/blob/f023ecbb4b/pages/posts/%5BpostName%5D.tsx
> - Post files in `static` : https://github.com/Rokt33r/blog/tree/f023ecbb4b72555480d36de5c26c06a27dfad481/static/posts

Then, while building the app, I noticed that size of some pages using the strategy skyrocket...

```
Page                            Size     Files  Packages
┌ σ /                           34.3 kB     25        17
├   /_app                       4.41 kB      0        16
├   /_document
├   /_error                     3.34 kB      0        17
├ ⚡ /about                      5.01 kB     13        16
├ σ /categories/[categoryName]  34.5 kB     25        17
├ σ /posts                      34.2 kB     25        17
└ σ /posts/[postName]           1.22 MB     25        82
                                  ↑↑↑
                           Mega Bytes? Seriously??
```

What did happen in here?

So as you see, the file is using **82 packages** althouth I just use two remark plugins for parsing frontmatter and syntax highlighting.

Actually, remark and rehype theirselves are quite small like hundreds Kilo Bytes. (It is still big though while comparing other pages.) So I'm guessing `rehype-highlight`, which highlighting syntax of code fences, cased the problem mostly. But most of people would want to set syntax highlighting for their articles... And it could be worse because I'm also thinking to introduce remark-math one day, which is introducing Math equation blocks and rendering them via KaTeX.

So I decide to use MDX to compile markdown in advance. Then I got better result now.

```
Page                                      Size     Files  Packages
┌ ⚡ /                                     111 kB      13        17
├   /_app                                 87.5 kB      0        16
├   /_document
├   /_error                               79.1 kB      0        17
├ ⚡ /about                                79.9 kB      9        16
├ ⚡ /categories/[category]                111 kB      13        17
├ ⚡ /posts                                111 kB      13        17
├ ⚡ /posts/contribute-definitely-typed    36.3 kB      0         5
├ ⚡ /posts/monorepo-and-lerna             20.6 kB      0         5
├ ⚡ /posts/redux-rises                    33.8 kB      0         5
├ ⚡ /posts/renew-blog-with-nextjs         18.8 kB      0         5
├ ⚡ /posts/rogue-to-codemirror            15.3 kB      0         5
├ ⚡ /posts/try-to-build-babel-plugin      26 kB        0         5
└ ⚡ /posts/why-i-replace-redux-with-mobx  21.6 kB      0         5
```

In conclusion, I recommend to use MDX to render your page blazing fast. 🔥🔥🔥

# What's the next?

Although my blog looks much better now, I'm still thinking lots of things can be much more improved.

One thing is component design. I was trying to adopt atomic design. But I'm still not good at it. Also DX of using styled-components and typescript together was quite terrible when I tried to override style of some components. So I'll try to figure out best practice.

Another issue is introducing Continuous delivery tool. Recently, I've got granted to access Github Actions. It looks really cool. So I'll try to adopt it in this month.

And there should be more too. I want to put some external contents like Youtube video in my note easily. And I also should introduce comment form somehow so I can get feedback from other people.

To sum up, I'm really excited now that I can write more articles with this new platform. Also the above issues should be good topics to write for the next articles! Then, I'll be back soon. Thanks for the reading!