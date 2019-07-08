'use strict';

module.exports = app => {
  const {
    STRING,
    INTEGER,
    DATE,
  } = app.Sequelize;

<<<<<<< HEAD
    var d = new Date();
    const User = app.model.define('users', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        user_name: STRING(30),
        nick_name: STRING(30),
        password: STRING(30),
        age: INTEGER,
        phone: STRING(30),
        email: STRING(30),
        ip: STRING(30),
        created_at: {
            type: DATE(6),
            default: d.getTime(),
        },
        updated_at: {
            type: DATE(6),
            default: d.getTime(),
        },
    }, {
        freezeTableName: true, // 使用数据库里的真实表名
        underscored: false, // 不使用下划线
        //取消create和update时间
        timestamps: false,

    });
=======
  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(30),
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });
>>>>>>> 5ced66e736976f7c73a463bcdaecbda3c47dad91

  return User;
};
