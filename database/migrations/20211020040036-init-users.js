/*
 * @Author: fucheng
 * @Date: 2021-10-20 12:00:36
 * @LastEditTime: 2021-10-22 10:42:17
 * @LastEditors: fucheng
 * @Description:创建数据表
 */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('user', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: {
        type: STRING,
        comment: '名字',
        allowNull: false,
        defaultValue: '',
      },
      age: {
        type: STRING,
        comment: '年龄',
        allowNull: false,
        defaultValue: '',
      },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  },
};
