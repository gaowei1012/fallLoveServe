const router = require('koa-router')()
const controller = require('../controller/album')

router.post('/api/album/getAllPhoto', controller.getAllPhoto)
router.post('/api/album/createlbumFile', controller.createAlbumFile)
router.post('/api/album/deletePhoto', controller.deleteAPhoto)
router.post('/api/album/getPhotoList', controller.getPhotoList)
router.post('/api/album/uploadPhoto', controller.uploadAlbum)

module.exports = router
