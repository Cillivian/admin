'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
<<<<<<< HEAD
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.resources('user', '/user', controller.users);
    router.post('/user/checkById', controller.users.checkById);
};
=======
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('user', '/user', controller.users);
  // router.get('/user', controller.user.index);
};
>>>>>>> 5ced66e736976f7c73a463bcdaecbda3c47dad91
