'use strict';

const Service = require('egg').Service;

class BookService extends Service {
  async getBook() {
    const res = await this.app.mysql.select('books');
    console.log(res, 'res');
    return res;
  }
  async create() {
    const data = this.ctx.request.body;
    const row = {
      bookname: data.bookname,
      authorid: data.authorid,
    };
    const res = await this.app.mysql.insert('books', row);
    return res;
  }
}

module.exports = BookService;
