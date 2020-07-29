const router = require('koa-router')()
const controller = require('../controller/video')

router.post('/api/video/uplodaVideo', controller.uplodaVideo)
router.post('/api/video/deleteVideo', controller.deleteVideo)
router.post('/api/video/getAllVideo', controller.getAllVideo)

module.exports = router
