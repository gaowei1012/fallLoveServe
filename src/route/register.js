const router = require('koa-router')()
const controller = require('../controller/register')

router.post('/register', controller.register)

module.exports = router
