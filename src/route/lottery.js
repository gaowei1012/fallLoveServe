
// 个签
const router = require('koa-router')()
const Controller = require('../controller/lottery')

router.get('/api/lottery/list', Controller.list)

module.exports = router
