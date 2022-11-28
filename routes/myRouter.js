const myRouter = require('express').Router();

// GET /my
myRouter.get('/', (req, res) => {
  res.redirect('/my/profile');
});

// GET /my/profile
myRouter.get('/my/profile', (req, res) => {
  res.send('TODO');
});

// PUT /my/profile
myRouter.put('/my/profile', (req, res) => {
  res.send('TODO');
});

module.exports = myRouter;
