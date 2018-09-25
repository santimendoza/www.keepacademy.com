const express = require('express');
const server = express();
const app = require('./app');
const eventosController = require('./controllers/eventos');
const handle = app.getRequestHandler();

server.get('/', (req, res) => {
  const actualPage = '/';
  app.render(req, res, actualPage);
});

server.get('/eventos/:eventName', eventosController.getEventos);

server.get('*', (req, res) => {
  return handle(req, res);
});

server.listen(9000, err => {
  if (err) throw err;
  console.log('> Ready on http://localhost:9000');
});

module.exports = server;
