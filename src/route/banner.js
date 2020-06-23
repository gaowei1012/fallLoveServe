const router = require('koa-router')()
const controller = require('../controller/banner')

router.get('/banner', controller.getBanner)

module.exports = router
