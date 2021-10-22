'use strict';

const Controller = require('egg').Controller;
function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

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
  async list() {
    // this.ctx.body = await this.service.user.list();
    this.ctx.body = await this.ctx.model.user.findAll();
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.user.findByPk(toInt(ctx.params.id));
  }
}

module.exports = UserController;
