const router = require('koa-router')()
const controller = require('../controller/dynamic')

router.post('/api/dynamic/delDynaimc', controller.deleteDynamic)
router.post('/api/dynamic/cretaeDynaimc', controller.createDynamic)

module.exports = router
