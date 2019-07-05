'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.resources('user', '/user', controller.users);
    router.post('/user/checkById', controller.users.checkById);
};