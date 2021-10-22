/*
 * @Author: fucheng
 * @Date: 2021-10-18 11:39:39
 * @LastEditTime: 2021-10-22 15:36:56
 * @LastEditors: fucheng
 * @Description: plugin config
 */
'use strict';
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

// *开启跨域插件
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

// exports.validate = {
//   enable: true,
//   package: 'egg-validate',
// };
// config/plugin.js
exports.valparams = {
  enable: true,
  package: 'egg-valparams',
};
