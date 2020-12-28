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

<button onclick="getRandomSite()">Get Random Site</button>

<div>
  <p id="answer"></p>
</div>

<script>
    function getRandomSite() {
        var xhr = new XMLHttpRequest();
        var method = "GET"
        var URL = "http://github-api-environment.eba-e4jpskmk.us-east-1.elasticbeanstalk.com/api/random_site"
        var async = false
        var user = "admin"
        var password = "admin"
        xhr.open(method, URL, async, user, password)
        xhr.setRequestHeader('Accept','application/json');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        var res = document.getElementById('answer');
        res.innerHTML = "Running..."
        try {
          xhr.send();
          if (xhr.status != 200) {
            res.innerHTML = `Error ${xhr.status}: ${xhr.statusText}`;
          } else {
            res.innerHTML = xhr.response.link(xhr.response);
          }
        } catch(err) { 
          res.innerHTML = "Request failed";
        }

}
</script>