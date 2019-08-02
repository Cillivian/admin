'use strict';
const users = require('./data/user');
module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('users', users, {});
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
