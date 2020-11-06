const Koa = require('koa');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
// const bodyParser = require('koa-bodyparser')
const koaBody = require('koa-body'); // 支持上传多个文件
const logger = require('koa-logger');
const KoaSwagger = require('koa2-swagger-ui');
const swagger = require('./utils/swagger');

const app = new Koa();
const {database, port, host} = require('./config/default');

const sessionMysqlConfig = {
    user: database.USERNAME,
    password: database.PASSWORD,
    database: database.DATABASE,
    host: database.HOST,
};

app.use(
    session({
        key: 'USER_SID',
        store: new MysqlStore(sessionMysqlConfig),
    })
);

app.use(
    KoaSwagger({
        routePrefix: '/swagger',
        swaggerOptions: {
            url: '/swagger.json',
        },
    })
);

// 为了能拿到 form data 中的数据， 使用 koa-body 代替 koa-bodyparser
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
// app.use(require('./route/recommenlist').routes());

app.listen(port, () => {
    console.log(`http://${host}:${port}`);
});
