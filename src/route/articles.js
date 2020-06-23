const router = require('koa-router')()
const controller = require('../controller/articles')

router.post('/api/article/createArticle', controller.createArticle)
router.post('/api/article/deleteArticle', controller.deleteArticle)
router.post('/api/article/exitArticle', controller.exitArticle)
router.post('/api/article/searchArticle', controller.searchArticle)
router.post('/api/article/createComment', controller.createComment)

module.exports = router
