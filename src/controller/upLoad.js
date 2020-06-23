const Model = require('../db/mysql')
const {createTime} = require('../utils/handler')

exports.uploadfile = async ctx => {
    const res = ''
    const time = createTime()
    const result = {
        code: res ? 0 : 1,
        data: [{
            time: time
        }]
    }
    ctx.body = result
}