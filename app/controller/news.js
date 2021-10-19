'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    // this.ctx.body = '新闻页面';
    const list = await this.service.news.getNewsList();
    const msg = 'safaf';
    await this.ctx.render('news', {
      msg, list,
    });

  }
  async content() {
    // 获取get传值,通过this.ctx.query
    const { ctx } = this;
    console.log(ctx.query, 'query');
    ctx.body = '新闻详情';
  }

  async newslist() {
    // 获取动态路由传值
    const { ctx } = this;
    console.log(ctx.params, 'ctx');
    ctx.body = '新闻列表';
  }
}

module.exports = NewsController;
