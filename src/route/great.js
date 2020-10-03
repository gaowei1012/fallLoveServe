// 点赞
const router = require('koa-router')()
const Controller = require('../controller/great')

router.post('/api/great/addGreat', Controller.addGreat)
router.post('/api/great/getGreatNum', Controller.getGreatNum)

module.exports = router
