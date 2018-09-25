// // This file doesn't go through babel or webpack transformation.
// // Make sure the syntax and sources this file requires are compatible with the current node version you are running
// // See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
// const { createServer } = require('http');
// const { parse } = require('url');
// const next = require('next');
// const

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   createServer((req, res) => {
//     // Be sure to pass `true` as the second argument to `url.parse`.
//     // This tells it to parse the query portion of the URL.
//     const parsedUrl = parse(req.url, true);
//     console.log('parsedUrl', parsedUrl);
//     const { pathname, query } = parsedUrl;
//     console.log('query', query, pathname);

//     switch (pathname) {
//       case '/':
//         app.render(req, res, '/', query);
//       case '/eventos':
//         app.render(req, res, '/eventos', query);
//       default:
//         handle(req, res, parsedUrl);
//     }
//   }).listen(9000, err => {
//     if (err) throw err;
//     console.log('> Ready on http://localhost:9000');
//   });
// });

// const express = require('express');
const app = require('./app');
// const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    require('./routes');
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
