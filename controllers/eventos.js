const app = require('../app');
const getEventos = (req, res) => {
  const actualPage = '/eventos';
  const queryParams = { eventName: req.params.eventName };
  app.render(req, res, actualPage, queryParams);
};

module.exports = {
  getEventos
};
