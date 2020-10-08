
const RecommenModal = require('../db/mysql')
/* 推荐查询 
    type: 0 -- 所有
    type: 1 -- 文章
    type: 2 -- 视频
    type: 3 -- 照片
*/
exports.findByType = async (ctx, next) => {
    let type = ctx.request.body
    try {
        if (type !== undefined) {
            if (type == 0) {
                // all
            } else if (type == 1) {
                await RecommenModal.findArticelAll()
                    .then(ret => {
                        ctx.body = {
                            code: 1,
                            message: 'Ok',
                            data: ret
                        }
                    }).catch(err => {
                        ctx.body = {
                            code: -1,
                            message: 'ERROR',
                            data: err
                        }
                    })
            } else if (type == 2) {
                // todo
            }
            
        } else {
            ctx.body = {
                code: -2,
                message: '必传字段不能为空'
            }
        }
    } catch(err) {
        Promise.reject(err)
    }

    await next()
}