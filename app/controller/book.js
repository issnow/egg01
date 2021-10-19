'use strict';

const Controller = require('egg').Controller;

class BookController extends Controller {
  async create() {
    const res = await this.service.book.create();
    // this.ctx.body = res;
    this.ctx.helper.success(res);
  }
}

module.exports = BookController;
