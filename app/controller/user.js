'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async create() {
    const result = await this.service.user.create();
    this.ctx.body = result;
  }
  async index() {
    const res = await this.service.user.index2();
    this.ctx.body = res;
  }
  async update() {
    const res = await this.service.user.update();
    this.ctx.body = res;
  }
  async delete() {
    const res = await this.service.user.delete();
    this.ctx.body = res;
  }
  async count() {
    const res = await this.service.user.count();
    this.ctx.body = res;
  }
  async query() {
    this.ctx.body = await this.service.user.query();
  }
}

module.exports = UserController;

