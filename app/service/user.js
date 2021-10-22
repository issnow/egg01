'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUserInfo() {
    return {
      name: 'zhangsan',
      age: 22,
    };
  }

  // *插入数据
  async create() {
    const data = this.ctx.request.body;
    const row = {
      name: data.name,
      age: data.age,
    };
    const res = await this.app.mysql.insert('user', row);
    return res;
  }
  // *查询数据1
  async index() {
    const res = await this.app.mysql.select('user', {
      where: {
        // age: 19,
      },
      columns: [ 'id', 'age' ],
      // limit: pageSize,
      // offset: (pageNum - 1) * pageSize, // 分页的时候用到
    });
    return res;
  }
  // *查询数据2
  async index2() {
    const { id } = this.ctx.query;
    const res = await this.app.mysql.get('user', { id });
    return res;
  }
  // *更新数据
  async update() {
    const { ctx, app } = this;
    const data = ctx.request.body;
    const row = {
      // id: data.id,
      name: data.name,
      // age: data.age,
    };
    const opt = {
      where: {
        age: 79,
      },
    };
    const res = await app.mysql.update('user', row, opt);
    return res;
  }

  // *物理删除数据
  async delete() {
    const data = this.ctx.request.body;
    const row = {
      id: data.id,
    };
    const res = await this.app.mysql.delete('user', row);
    return res;
  }

  // *查询条数
  async count() {
    const res = await this.app.mysql.count('user', { age: 20 });
    return res;
  }

  // *直接执行sql语句,哈哈哈
  async query() {
    const str = 'select * from user';
    return await this.app.mysql.query(str);
  }

  async list() {
    return this.ctx.model.User.findAll({
      limit: 10,
      offset: 0,
    });
  }
}

module.exports = UserService;
