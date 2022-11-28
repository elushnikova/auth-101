const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  userName: process.env.DEMO_USERNAME || 'test',

  async up(queryInterface) {
    const password = process.env.DEMO_USERNAME || 'test';
    const saltRounds = Number(process.env.SALT_ROUNDS) || 10;
    const hash = await bcrypt.hash(password, saltRounds);
    const user = {
      userName: this.userName,
      password: hash,
      displayName: 'Геннадий Тестович',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await queryInterface.bulkInsert('Users', [user]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', { userName: this.userName });
  },
};
