
// 个签
exports.list = async (ctx, next) => {
    let ret = {
        lottery: '要大笑，要做梦，要与众不同'
    }
    ctx.body = {
        code: 1,
        message: 'OK',
        data: [ret]
    }

    await next()
}
