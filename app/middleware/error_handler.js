'use strict';
module.exports = (option, app) => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      console.log('---errors', err);
      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      ctx.app.emit('error', err, ctx);

      // *this.ctx.throw(500, '故意出错');
      // *err.status 获取throw的第一个参数
      const status = err.status || 500;
      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      // *err.message 获取throw的第二个参数
      // const message = status === 500 && ctx.app.config.env === 'prod'
      //   ? 'Internal Server Error'
      //   : err.message;
      // 从 error 对象上读出各个属性，设置到响应中
      // ctx.body = { error, status, message };

      // *status: egg-valparams验证错误的status为422
      ctx.body = { ...err, status };
    }
  };
};
