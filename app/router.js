'use strict';

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

  // get请求
  router.get('/user', controller.user.index);
  // post请求
  // 添加用户
  router.post('/user', controller.user.create);
  router.post('/updateUser', controller.user.update);
  router.post('/deleteUser', controller.user.delete);
  router.post('/countUser', controller.user.count);
  router.get('/query', controller.user.query);


  // book表
  router.post('/createbook', controller.book.create);

};
