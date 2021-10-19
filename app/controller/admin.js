'use strict';

const Controller = require('egg').Controller;

/**
 * controller 控制器
 * model: 模型 和数据打交道(查询数据库, 请求数据)
 * view: 视图模板
 * middleware : 中间件(判断权限)
 */
class AdminController extends Controller {
  async index() {
    // egg基于koa
    this.ctx.body = '用户管理';

  }
}

module.exports = AdminController;
