const router = require('koa-router')()
const controller = require('../controller/album')

router.post('/api/album/createAlbumFile', controller.createAlbumFile)
router.post('/api/album/deletePhoto', controller.deleteAlbum)
router.post('/api/album/getPhotoList', controller.getPhotoList)
router.post('/api/album/updaldPhoto', controller.uploadAlbum)
router.post('/api/album/uploadVideo', controller.uploadVideo)

module.exports = router
