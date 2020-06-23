const md5 = require('md5')
const userModel = require('../db/mysql')

exports.register = async ctx => {
    const {mobile, username, password} = ctx.body
    const create_time = new Date.now()
    const reg = ''
    const result = {
        code: reg ? 0 : 1,
        create_time: create_time
    }
    ctx.body = result
}
