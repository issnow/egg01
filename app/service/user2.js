/*
 * @Author: fucheng
 * @Date: 2021-10-20 14:38:04
 * @LastEditTime: 2021-10-22 14:52:35
 * @LastEditors: fucheng
 * @Description:
 */
'use strict';

const Service = require('egg').Service;
const QueryTypes = require('sequelize').QueryTypes;
function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class User2Service extends Service {
  // *创建数据
  async create() {
    const { ctx } = this;
    const data = ctx.request.body;
    return ctx.model.User.create({ name: data.name, age: data.age });
  }
  // *查询全部
  async queryAll() {
    const {
      pageSize,
      pageNum,
      // keyword,
    } = this.ctx.request.body;
    const Op = this.app.Sequelize.Op;
    const opt = {
      // where: {
      //   // age: 20,
      //   id: {
      //     [Op.gt]: 2,
      //   },
      //   name: {
      //     // 模糊查询
      //     [Op.like]: `${keyword}%`,
      //   },
      // },
      // !只查询的字段,和mysql用法不一样
      // attributes: [ 'id', 'age', 'name' ],
      limit: pageSize,
      offset: (pageNum - 1) * pageSize, // 分页的时候用到
      // 排序，asc（顺序）/desc(倒序)
      // order: [[ 'id', 'asc' ]],
    };
    return this.ctx.model.User.findAll(opt);
  }
  // *查询一个
  async queryOne() {
    return this.ctx.model.User.findByPk(toInt(this.ctx.query.id));
  }
  // *更新一个
  async update() {
    const { ctx } = this;
    const { id, name, age } = ctx.request.body;
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404; return Promise.resolve({
        msg: '没找到',
      });
    }
    await user.update({ name, age });
    return Promise.resolve(user);
  }

  // *原生sql语句,注意原生的查询直接去ctx.model查询
  async originSql() {
    const str = 'select * from user';
    return this.ctx.model.query(str, { type: QueryTypes.SELECT });
  }
}

module.exports = User2Service;
