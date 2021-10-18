'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '你好,eggjs1';
  }
}

module.exports = HomeController;
