/*
 * @Author: fucheng
 * @Date: 2021-10-20 11:44:20
 * @LastEditTime: 2021-10-22 15:38:18
 * @LastEditors: fucheng
 * @Description: controller基本使用
 */
'use strict';

const Controller = require('egg').Controller;

class User2Controller extends Controller {
  async create() {
    this.ctx.body = await this.ctx.service.user2.create();
  }
  async queryAll() {

    // *参数验证
    this.ctx.validate({
      pageSize: { type: 'number', required: true, desc: '每页size' },
      pageNum: { type: 'number', required: true, desc: '页码' },
      keyword: { type: 'string', required: true, desc: '关键词' },
    });

    // console.log('---ctx', this.ctx);
    // *获取query参数
    // console.log('---query', this.ctx.query);

    // console.log('---request', this.ctx.request);
    // console.log('---request.query', this.ctx.request.query);
    // *获取body参数
    // console.log('---body', this.ctx.request.body);
    // console.log('---response', this.ctx.response);
    // console.log('---app', this.ctx.app);
    // console.log('---helper', this.ctx.helper.fn());
    // console.log('---helper2', this.ctx.helper);
    this.ctx.body = await this.ctx.service.user2.queryAll();
  }
  async queryOne() {
    // *抛出异常-->通过
    // this.ctx.throw(500, '故意出错');

    // *获取header参数
    console.log('---header', this.ctx.header);

    // *获取header的字段，通过ctx.get(name)
    // const contentType = this.ctx.get('content-type');
    // console.log('---contentType', contentType);

    // *设置cookie
    // const count = this.ctx.cookies.set('count', '111112222222333');

    // *获取cookie
    // const count = this.ctx.cookies.get('count');
    // console.log('---cookie', count);

    this.ctx.body = await this.ctx.service.user2.queryOne();
  }
  async update() {
    this.ctx.body = await this.ctx.service.user2.update();
  }
  /**
   * @description: 运行原生的sql语句
   * @param {*}
   * @return {*}
   */
  async originSql() {
    this.ctx.body = await this.ctx.service.user2.originSql();
  }
}

module.exports = User2Controller;
