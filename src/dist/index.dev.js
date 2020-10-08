"use strict";

var Koa = require('koa');

var session = require('koa-session-minimal');

var MysqlStore = require('koa-mysql-session'); // const bodyParser = require('koa-bodyparser')


var koaBody = require('koa-body'); // 支持上传多个文件


var logger = require('koa-logger');

var KoaSwagger = require('koa2-swagger-ui');

var swagger = require('./utils/swagger');

var app = new Koa();

var _require = require('./config/default'),
    database = _require.database,
    port = _require.port,
    host = _require.host;

var sessionMysqlConfig = {
  user: database.USERNAME,
  password: database.PASSWORD,
  database: database.DATABASE,
  host: database.HOST
};
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}));
app.use(KoaSwagger({
  routePrefix: '/swagger',
  swaggerOptions: {
    url: '/swagger.json'
  }
})); // 为了能拿到 form data 中的数据， 使用 koa-body 代替 koa-bodyparser
// app.use(bodyParser())

app.use(koaBody());
app.use(logger());
app.use(swagger.routes(), swagger.allowedMethods());
app.use(require('./route/upLoad').routes());
app.use(require('./route/articles').routes());
app.use(require('./route/album').routes());
app.use(require('./route/user').routes());
app.use(require('./route/wather').routes());
app.use(require('./route/constellation').routes());
app.use(require('./route/video').routes());
app.use(require('./route/reminders').routes());
app.use(require('./route/wxLogin').routes());
app.use(require('./route/menu').routes());
app.use(require('./route/admin').routes());
app.use(require('./route/lottery').routes());
app.use(require('./route/great').routes());
app.use(require('./route/recommenlist').routes());
app.listen(port, function () {
  console.log("http://".concat(host, ":").concat(port));
});