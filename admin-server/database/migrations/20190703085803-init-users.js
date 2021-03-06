'use strict';
module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const {
      INTEGER,
      DATE,
      STRING,
    } = Sequelize;
    await queryInterface.createTable('users', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_name: STRING(30),
      nick_name: STRING(30),
      password: STRING(30),
      age: INTEGER,
      phone: STRING,
      email: STRING,
      ip: STRING,
      created_at: DATE(6),
      updated_at: DATE(6),
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
