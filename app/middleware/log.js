/*
 * @Author: fucheng
 * @Date: 2021-10-25 17:08:08
 * @LastEditTime: 2021-10-26 17:35:48
 * @LastEditors: fucheng
 * @Description:
 */
'use strict';
module.exports = (option, app) => {
  return async function errorHandler(ctx, next) {
    console.log('logjs打印的');
    // 调用方IP、调用入参、响应结果数据
    // console.log('---ip', ctx.ip);
    // console.log('---query', ctx.query);
    // console.log('---body', ctx.request.body);
    // console.log('---url', ctx.request);
    const ip = ctx.ip;
    const query = ctx.query;
    const body = ctx.request.body;
    ctx.logger.info(`++++++++++++++ ip query params ++++++++++++++ip: ${ip},query: ${JSON.stringify(query)},params: ${JSON.stringify(body)}`);
    await next();
    ctx.logger.info(`++++++++++++++ response ++++++++++++++${JSON.stringify(ctx.body)}`);
  };
};
