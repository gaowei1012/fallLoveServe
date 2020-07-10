
/**
 * z注册
 * @param {*} ctx 
 */
exports.register = async ctx => {
    const {username,password,mobile} = ctx.request.body;
    const result = {
        code: 1
    }
    ctx.body = result
}

/**
 * 登录
 * @param {*} ctx 
 */
exports.login = async ctx => {
    const result = {
        code: 1
    }
    ctx.body = result
}

/**
 * 获取手机验证码
 * @param {*} ctx 
 */
exports.getCode = async ctx => {
    const result = {
        code: 1
    }
    ctx.body = result
}

/**
 * 获取用户信息
 * @param {*} ctx 
 */
exports.getUserInfo = async ctx => {
    const result = {
        code: 1
    }
    ctx.body = result
}

/**
 * 忘记密码
 * @param {*} ctx 
 */
exports.fotgetPassword = async ctx => {
    const result = {
        code: 1
    }
    ctx.body = result
}

/**
 * 微信登录
 * @param {*} ctx 
 */
exports.wxLogin = async ctx => {
    const result = {
        code: 1
    }
    ctx.body = result
}

