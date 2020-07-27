const router = require('koa-router')()
const controller = require('../controller/constellation')

router.post('/api/constellation/getAll', controller.getAll)

module.exports = router