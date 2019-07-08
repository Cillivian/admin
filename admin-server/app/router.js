'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.resources('user', '/user', controller.users);
    router.post('/api/login', controller.login.login);
    router.post('/api/logout', controller.login.logout);
};