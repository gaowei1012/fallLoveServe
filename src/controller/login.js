const md = require('md5')
const userModel = require('../db/mysql')

// 登录
exports.login = async ctx => {
    const {mobile, password} = ctx.body
    const create_time = new Date.now()
    //const login = userModel.insterData(mobile, password, username, create_time)
    const result = {
        code: login ? 0 : 1,
        create_at: create_time
    }
    ctx.body = result
}
