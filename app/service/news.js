'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    // 获取新闻数据
    const list = [ 1, 2, 3, 4, 5 ];

    // service也可以调用其他的service
    const user = await this.service.user.getUserInfo();
    console.log(user, 'user---');
    return list;
  }
}

module.exports = NewsService;
