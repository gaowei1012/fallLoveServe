const router = require('koa-router')()
const Controller = require('../controller/recommenlist')

router.get('/api/recommen/getlist', Controller.findByType)

module.exports = router
