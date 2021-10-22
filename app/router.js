'use strict';
const user = require('./router/user');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.index);
  // 动态路由
  router.get('/newslist/:id', controller.news.newslist);
  router.get('/newscontent', controller.news.content);
  router.get('/admin', controller.admin.index);
  // router.resources('user', '/api/user', controller.user);


  // book表
  router.post('/createbook', controller.book.create);

  // 统一配置user表
  user(app);
};
