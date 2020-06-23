const Koa = require('koa')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const {database,port,host} = require('./config/default')

const sessionMysqlConfig = {
    user: database.USERNAME,
    password: database.PASSWORD,
    database: database.DATABASE,
    host: database.HOST
}

app.use(session({
    key: 'USER_SID',
    store: new MysqlStore(sessionMysqlConfig)
}))

app.use(bodyParser({
    formLimit: '1mb'
}))

app.use(require('./route/login').routes())
app.use(require('./route/register').routes())
app.use(require('./route/banner').routes())
app.use(require('./route/upLoad').routes())
app.use(require('./route/articles').routes())
app.use(require('./route/album').routes())

app.listen(port, () => {
    console.log(`http://${host}:${port}`)
})
