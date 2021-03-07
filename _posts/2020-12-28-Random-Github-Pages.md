---
layout: post
title: Random Github Pages Generator
---

I have always liked how Reddit has the `random` button on the top of their site that takes the user to a random subreddit.
It reminds me of older internet sites like Stumble Upon where you just get thrown into a random corner of the internet that 
someone else has already made their home.

When I started making this website, I was looking for inspiration and found myself wanting to see how other people use their
websites.  I wanted to see the content, styles, layouts that other people use.

You can find the code [here](https://github.com/briengleason/random-github-sites).  As is usual, the writing of the python code
went pretty quickly, and the majority of the time was spent figuring out a CORS error that I was getting when trying to call the
endpoint hosted in Elastic Beanstalk.

**I turned off the Elastic Beanstalk service to save some money on my AWS bill. So the button below will not work.**

<html>
  <script type="text/javascript" src="/assets/js/getRandomSite.js"></script>
  <body>
    <button onclick="getRandomSite()" type="button" id="siteButton">Get Random Site</button>
    <p id="answer"></p>
  </body>
</html>
