require('dotenv').config();
require('@babel/register');
const express = require('express');
const morgan = require('morgan');
const db = require('./db/models');
const ssr = require('./middleware/ssr');
const authRouter = require('./routes/authRouter');
const indexRouter = require('./routes/indexRouter');
const myRouter = require('./routes/myRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.locals.title = 'Авторизация 101';

app.use(morgan('dev'));
app.use(ssr);
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/my', myRouter);

/* eslint-disable no-console */
app
  .listen(PORT)
  .on('error', (error) => {
    console.group('Ошибка при запуске веб-сервера');
    console.error(error.message);
    console.groupEnd('Ошибка при запуске веб-сервера');
  })
  .on('listening', async () => {
    console.log('Веб-сервер слушает порт', PORT);

    try {
      await db.sequelize.authenticate({ logging: false });
      console.log('БД подключена успешно');
    } catch (error) {
      console.error('Ошибка подключения к БД');
      console.error(error.message);
    }
  });
/* eslint-enable no-console */
