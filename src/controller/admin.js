
exports.login = async (ctx, next) => {
    let {username, password} = ctx.body;
    try {
        ctx.body = {
            code: 0,
            message: 'OK',
            data: []
        }
    } catch (err) {
        Promise.reject(err)
    }

    await next()
}
