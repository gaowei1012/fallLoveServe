const router = require('koa-router')()
const controller = require('../controller/login')

// 登录
router.post('/login', controller.login)

module.exports = router
