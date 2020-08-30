const router = require('koa-router')()
const controller = require('../controller/user')

router.post('/api/user/register', controller.register)
router.post('/api/user/login', controller.login)
router.post('/api/user/getCode', controller.getCode)
router.post('/api/user/getUserInfo', controller.getUserInfo)
router.post('/api/user/fotgetPassword', controller.fotgetPassword)

module.exports = router
