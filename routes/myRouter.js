const myRouter = require('express').Router();

// GET /my
myRouter.get('/', (req, res) => {
  res.redirect('/my/profile');
});

// GET /my/profile
myRouter.get('/my/profile', (req, res) => {
  res.json({
    message:
      'TODO: показать страницу профиля только авторизованному пользователю',
  });
});

module.exports = myRouter;
