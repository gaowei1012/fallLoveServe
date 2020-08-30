const router = require('koa-router')()
const controller = require('../controller/wxLogin')

router.post('/api/user/wxLogin', controller.wxLogin)

module.exports = router
