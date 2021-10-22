'use strict';
const moment = require('moment');

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  return app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      comment: '名字',
    },
    age: {
      type: STRING,
      comment: '年龄',
    },
    created_at: {
      get() {
        return moment((this).getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss');
      },
      type: DATE,
    },
    updated_at: {
      get() {
        return moment((this).getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss');
      },
      type: DATE,
    },
  }, {
    tableName: 'user',
    comment: '',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    // createdAt: false,
    // updatedAt: false,
    // 自动写入时间戳
    timestamps: true,
  });
};
