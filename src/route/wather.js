const router = require('koa-router')()
const controller = require('../controller/wather')

router.post('/api/weather/getHeWeatcher', controller.getHeFengWather)

module.exports = router
