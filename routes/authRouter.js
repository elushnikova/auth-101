const authRouter = require('express').Router();
const LoginPage = require('../views/LoginPage');
const RegisterPage = require('../views/RegisterPage');

// GET /auth
authRouter.get('/', (req, res) => {
  res.redirect('/auth/login');
});

// GET /auth/login
authRouter.get('/login', (req, res) => {
  res.renderComponent(LoginPage);
});

// POST /auth/login
authRouter.post('/login', (req, res) => {
  res.send('TODO');
});

// GET /auth/register
authRouter.get('/register', (req, res) => {
  res.renderComponent(RegisterPage);
});

// POST /auth/register
authRouter.post('/register', (req, res) => {
  res.send('TODO');
});

// DELETE /auth
authRouter.delete('/', (req, res) => {
  res.json({ message: 'TODO' });
});

module.exports = authRouter;
