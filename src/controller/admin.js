
const AdminModal = require('../db/mysql')

/* 登录 */
exports.login = async (ctx, next) => {
    let {username, password} = ctx.request.body
    try {
        await AdminModal.adminLogin(username, password)
        .then(ret => {
            ctx.body = {
                code: 0,
                message: 'OK',
                data: ret
            }
        })
        .catch(err => {
            // reject err
            ctx.body = {
                code: -1,
                message: 'ERROR',
                data: [err]
            }
        })
    } catch (err) {
        Promise.reject(err)
    }

    await next()
}

/* 登录 */
exports.register = async (ctx, next) => {
    let {username, password} = ctx.request.body
    let create_at = new Date();
    try {
        await AdminModal.adminRegister([username, password, create_at])
            .then(ret => {
                ctx.body = {
                    code: 0,
                    message: 'OK',
                    data: [ret]
                }
            })
            .catch(err => {
                ctx.body = {
                    code: -1,
                    message: 'ERROR',
                    data: [err]
                }
            })
    } catch (err) {
        Promise.reject(err)
    }

    await next()
}