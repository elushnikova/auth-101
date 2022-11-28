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
  res.json({ message: 'TODO: авторизовать пользователя' });
});

// GET /auth/register
authRouter.get('/register', (req, res) => {
  res.renderComponent(RegisterPage);
});

// POST /auth/register
authRouter.post('/register', (req, res) => {
  res.json({ message: 'TODO: создать пользователя' });
});

// DELETE /auth
authRouter.delete('/', (req, res) => {
  res.json({ message: 'TODO: удалить сессию' });
});

module.exports = authRouter;
