/*
 * @Author: fucheng
 * @Date: 2021-10-20 11:39:46
 * @LastEditTime: 2021-10-22 14:47:58
 * @LastEditors: fucheng
 * @Description: user-router
 */
'use strict';
module.exports = app => {
  const { router, controller } = app;
  // get请求
  router.get('/user', controller.user.index);
  // post请求
  // 添加用户
  router.post('/user', controller.user.create);
  router.post('/updateUser', controller.user.update);
  router.post('/deleteUser', controller.user.delete);
  router.post('/countUser', controller.user.count);
  router.get('/query', controller.user.query);

  // sequelize 连接数据库
  router.get('/user/list', controller.user.list);
  router.post('/user/list', controller.user.show);

  // 创建一个user
  router.post('/user2/create', controller.user2.create);
  // 查找全部
  router.get('/user2/queryAll', controller.user2.queryAll);
  // 查找一个
  router.get('/user2/queryOne', controller.user2.queryOne);
  // 更新一个
  router.post('/user2/update', controller.user2.update);

  // 原生sql语句查询
  router.post('/user2/sql', controller.user2.originSql);

};
