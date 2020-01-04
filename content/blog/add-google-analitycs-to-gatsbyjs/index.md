---
title: Add Google Analitycs to Gatsby js
date: "2020-01-04T22:12:03.284Z"
tags: ['gatsby', 'google-analitycs']
published: true
---

## Setting up Google Analitycs

<b>Google Analytics</b> provides a way to collect this data and perform analytics on it answering the above questions among many others. The platform is free for 10 million hits per month per <b>Tracking ID</b>.

The first step is to set up a <b>Google Analytics</b> account. You can do that [here](https://analytics.google.com/) by signing in with your Google Account.

Follow the instructions and get the Tracking ID. It should be in the format `UA-XXXXXXXXX-X`.

Google also has a [get started page](https://support.google.com/analytics/answer/1008015?hl=en) for reference.

## Setting up the plugin

Install the [Official plugin](https://www.gatsbyjs.org/docs/adding-analytics/):

```shell
npm install --save gatsby-plugin-google-analytics
```

Then open `gatsby-config.js` and edit inside the plugin the path gatsby-plugin-google-analytics resolver:

```shell
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-XXXXXXXXX-X",
      },
    },
  ],
}
```

The plugin only work after the build. Run `gatsby build` and have a look on the compiled files, e.g. in the `index.html`.
Near the footer you will have the tracking code:


```javascript
if(true) {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  }
  if (typeof ga === "function") {
    ga('create', 'UA-XXXXXXXXX-X', 'auto', {});
```

For european websites it's important to add set the option anonymize to true for preventing IP registration. With this option you will be GDPR compliant

```javascript
anonymize: true
```
