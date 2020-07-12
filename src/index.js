const Koa = require('koa')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const KoaSwagger = require('koa2-swagger-ui')
const swagger = require('./utils/swagger')

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

app.use(KoaSwagger({
    routePrefix: '/swagger',
    swaggerOptions: {
        url: '/swagger.json'
    }
}))

app.use(bodyParser())

app.use(logger())

app.use(swagger.routes(), swagger.allowedMethods())

app.use(require('./route/upLoad').routes())
app.use(require('./route/articles').routes())
app.use(require('./route/album').routes())
app.use(require('./route/user').routes())

app.listen(port, () => {
    console.log(`http://${host}:${port}`)
})
