const VideoModal = require('../db/mysql')


// 上传视频
exports.uplodaVideo = async (ctx, next) => {

    console.log('response', ctx.request.body)

    ctx.body = {
        code: 200,
        message: '上传成功',
        data: [ctx.request.body]
    }

    await next()
}

// 获取所有视频
exports.getAllVideo = async (ctx, next) => {
    await VideoModal.findAllVideo()
        .then(res => {
            ctx.body = {
                code: 200,
                message: '请求成功',
                data: res
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                message: `获取失败:${err}`
            }
        })

    await next()
}

// 删除视频
exports.deleteVideo = async (ctx, next) => {
    let {id} = ctx.request.body;
    await VideoModal.deleteVideoById(id)
            .then(res => {
                ctx.body = {
                    code: 200,
                    message: '删除成功'
                }
            })
            .catch(err => {
                ctx.body = {
                    code: 500,
                    message: `删除失败:${err}`
                }
            })

    await next()
}