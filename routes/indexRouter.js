const indexRouter = require('express').Router();
const HomePage = require('../views/HomePage');

// GET /
indexRouter.get('/', (req, res) => {
  res.renderComponent(HomePage);
});

module.exports = indexRouter;
