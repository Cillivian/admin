'use strict';
module.exports = {
    // 在执行数据库升级时调用的函数，创建 users 表
    up: async(queryInterface, Sequelize) => {
        const {
            INTEGER,
            DATE,
            STRING
        } = Sequelize;
        await queryInterface.createTable('users', {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true
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
        var today = new Date();
        await queryInterface.bulkInsert('users', [{
                id: 1,
                user_name: 'cillivian',
                nick_name: '林水泉',
                password: '123456',
                age: 21,
                phone: 15113597631,
                email: 'h20jeremy@hotmail.com',
                ip: '192.168.0.1',
                created_at: today,
                updated_at: today,
            },

        ], {});
    },
    // 在执行数据库降级时调用的函数，删除 users 表
    down: async queryInterface => {
        await queryInterface.dropTable('users');
    },
};