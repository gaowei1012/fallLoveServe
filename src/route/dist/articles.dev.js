"use strict";

var router = require('koa-router')();

var controller = require('../controller/articles');

router.post('/api/article/createArticle', controller.createArticle);
router.post('/api/article/deleteArticle', controller.deleteArticle);
router.post('/api/article/eitArticle', controller.eitdArticle);
router.post('/api/article/getAllArticle', controller.getAllArticle);
router.post('/api/article/createComment', controller.createComment);
router.post('/api/article/searchComment', controller.getArticleComment);
router.post('/api/article/findArticleById', controller.findeArticleData);
router.post('/api/article/deleteCommentById', controller.deleteCommentById);
module.exports = router;