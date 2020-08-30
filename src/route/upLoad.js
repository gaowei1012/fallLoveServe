const router = require('koa-router')()
const controller = require('../controller/upLoad')

router.post('/api/upload/fileUpload', controller.addUploadImg)

module.exports = router
