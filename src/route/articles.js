const router = require('koa-router')()
const controller = require('../controller/articles')

router.post('/api/article/createArticle', controller.createArticle)
router.post('/api/article/deleteArticle', controller.deleteArticle)
router.post('/api/article/exitArticle', controller.eitdArticle)
router.post('/api/article/searchArticle', controller.searchArticle)
router.post('/api/article/createComment', controller.createComment)
router.post('/api/article/searchComment', controller.getArticleComment)
router.post('/api/article/findArticleById', controller.findeArticleData)
router.post('/api/article/deleteCommentById', controller.deleteCommentById)

module.exports = router
