const authRouter = require('express').Router();

// GET /auth
authRouter.get('/', (req, res) => {
  res.send('TODO');
});

// POST /auth
authRouter.post('/', (req, res) => {
  res.send('TODO');
});

// DELETE /auth
authRouter.delete('/', (req, res) => {
  res.send('TODO');
});

module.exports = authRouter;
