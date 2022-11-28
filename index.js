require('dotenv').config();
const express = require('express');
const db = require('./db/models');
const authRouter = require('./routes/authRouter');
const indexRouter = require('./routes/indexRouter');
const myRouter = require('./routes/myRouter');

const app = express();
const PORT = process.env.PORT || 3000;

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
