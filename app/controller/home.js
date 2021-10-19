'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {


    console.log(this.config.api);
    // 调用服务里面的方法,可以直接通过this访问service.news
    const list = await this.service.news.getNewsList();
    const user = await this.service.user.getUserInfo();
    const book = await this.service.book.getBook();
    console.log(book, 'book');
    console.log(list, 'list');


    // 小驼峰式命名
    const syncUser = await this.service.syncUser.echo();
    console.log(syncUser, 'syncUser');
    const { ctx } = this;
    await ctx.render('home', {
      list, user,
    });
  }
}

module.exports = HomeController;
