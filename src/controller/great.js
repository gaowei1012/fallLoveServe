const GreatModal = require('../db/mysql')

// 添加点赞数
exports.addGreat = async (ctx, next) => {
    // let {great_id} = ctx.request.body
    let great_num = 1; // 默认值
    let create_at = new Date();
    try {
        await GreatModal.insterGreat([great_num, create_at])
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
    } catch (err) {
        Promise.reject(err)
    }

    await next()
}

// 更新点赞
exports.updateGreat = async (ctx, next) => {
    let {great_id} = ctx.request.body
    try {
        if (great_id !== undefined) {
            // 点赞数递增
            // bug
            let great_num = great_num + 1
            await GreatModal.updateGreat(great_num, great_id)
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
        } else {
            ctx.body = {
                code: -1,
                message: 'ERROR',
                data: '字段不能为空'
            }   
        }
    } catch (err) {
        Promise.reject(err)  
    }
    await next()
}

// 获取总点赞数
exports.getGreatNum = async (ctx, next) => {
    let {great_id} = ctx.request.body
    try {
        if (great_id !== undefined) {
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
        } else {
            ctx.body = {
                code: -1,
                message: '必传字段不能为空'
            }
        }
    } catch (err) {
        Promise.reject(err)
    }

    await next()
}