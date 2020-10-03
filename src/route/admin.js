// 管理后台 登录接口

const router = require('koa-router')()
const Controller = require('../controller/admin')

router.post('/api/admin/login', Controller.login)
router.post('/api/admin/register', Controller.register)

module.exports = router
