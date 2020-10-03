const GreatModal = require('../db/mysql')


// 添加点赞
exports.addGreat = async (ctx, next) => {
    ctx.body = {
        code: 1
    }
    await next()
}

// 获取总点赞数
exports.getGreatNum = async (ctx, next) => {
    let {great_id} = ctx.request.body
    try {
        if (great_id == undefined) {
            ctx.body = {
                code: -1,
                message: '必传字段不能为空'
            }
        } else {
            await GreatModal.findGreat(great_id)
                .then(ret => {
                    ctx.body = {
                        code: 1,
                        message: 'OK',
                        data: ret
                    }
                })
                .catch(err => {
                    ctx.body = {
                        code: -1,
                        message: 'ERROR',
                        data: err
                    }
                })
        }
    } catch (err) {
        Promise.reject(err)
    }

    await next()
}