const router = require('koa-router')()
const controller = require('../controller/upLoad')

router.post('/upload', controller.uploadfile)

module.exports = router
