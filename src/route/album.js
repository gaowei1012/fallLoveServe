const router = require('koa-router')()
const controller = require('../controller/album')

router.post('/api/album/getAllPhoto', controller.getAllPhoto)
router.post('/api/album/createAlbumFile', controller.createAlbumFile)
router.post('/api/album/deleteAPhoto', controller.deleteAPhoto)
router.post('/api/album/getPhotoList', controller.getPhotoList)
router.post('/api/album/updaldPhoto', controller.uploadAlbum)
router.post('/api/album/uploadVideo', controller.uploadVideo)

module.exports = router
