const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

/* eslint-disable no-console */
app
  .listen(PORT)
  .on('error', (error) => {
    console.group('Ошибка при запуске веб-сервера');
    console.error(error.message);
    console.groupEnd('Ошибка при запуске веб-сервера');
  })
  .on('listening', () => {
    console.log('Веб-сервер слушает порт', PORT);
  });
/* eslint-enable no-console */
