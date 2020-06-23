const Model = require('../db/mysql')
const {createTime} = require('../utils/handler')

exports.getBanner = async ctx => {
    // 查询成功后
    const res = true
    const time = createTime()
    const result = {
        code: res ? 0 : 1,
        data: [{
            time: time
        }]
    }
    ctx.body = result
}