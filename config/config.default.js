/*
 * @Author: fucheng
 * @Date: 2021-10-18 11:39:39
 * @LastEditTime: 2021-10-26 16:49:43
 * @LastEditors: fucheng
 * @Description:config
 */
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
  config.keys = appInfo.name + '_1634528369280_2621';

  // add your middleware config here
  config.middleware = [ 'errorHandler', 'log' ];
  config.log = {
    enable: true,
    match(ctx) {
      const reg = /user2/i;
      const url = ctx.request.url;
      return reg.test(url);
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  config.api = 'www.baidu.com';
  config.security = {
    // *关闭crsf
    csrf: {
      enable: false,
    },
    // 跨域白名单
    domainWhiteList: [ 'http://localhost:3000' ],
  };
  // 允许跨域的方法
  config.cors = {
    origin: '*',
    allowMethods: 'GET, PUT, POST, DELETE, PATCH',
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'book',
    username: 'root',
    password: '000000',
    timezone: '+08:00',
    define: {
      // 自定义表名
      freezeTableName: true,
      // 自动写入时间戳,会增加createdAt,updatedAt,deletedAt字段
      timestamps: true,
      // 所有驼峰命名格式化
      underscored: true,
      createdAt: 'created_at',
      // 设置false是不需要created字段
      // createdAt: false,
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
  };
  // config.validate = {
  //   convert: true,
  //   // validateRoot: false,
  // };
  config.valparams = {
    locale: 'zh-cn',
    throwError: true,
  };
  return {
    ...config,
    ...userConfig,
  };
};
