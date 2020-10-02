const router = require('koa-router')()
const Controller = require('../controller/menu')

router.get('/api/menu/list', Controller.list)

module.exports = router
