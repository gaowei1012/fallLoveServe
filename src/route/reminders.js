// 提醒事项

const router = require('koa-router')()
const controller = require('../controller/reminders')

router.post('/api/reminders/getAllReminders', controller.getAllReminders)
router.post('/api/reminders/AddReminders', controller.addReminders)
router.post('/api/reminders/deleteReminders', controller.deleteReminders)

module.exports = router