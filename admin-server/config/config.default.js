/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1561866567406_1187';

    // add your middleware config here
    config.middleware = [];
    // 数据库
    config.sequelize = {
            dialect: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            database: 'admin',
            username: 'root',
            password: '12345678lsq'
        }
        // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };
    config.security = {
        csrf: {
            enable: false,
        },
        domainWhiteList: ['http://localhost:8080'],
    };

    config.cors = {
        origin: 'http://localhost:8080',
        credentials: true,
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };
    return {
        ...config,
        ...userConfig,
    };
};