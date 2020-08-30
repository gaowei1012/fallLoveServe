
const jwt = require('jsonwebtoken')
const WeiXin = require('../models/wxLogin')
const { token } = require('../config/default')
const UserModal = require('../db/mysql')

const { jwtSecret, tokenExpiresTime } = token

/**
 * 微信登录
 */

exports.wxLogin = async (ctx, next) => {
    let {code} = ctx.request.body
    console.log('code', ctx.request.body)
    if (!code) return ctx.body = {code: -1, message: '参数缺失'}

    let WxReponse = await WeiXin.code2Session(code)
    let weixin_data = WxReponse.data
    let open_id = WxReponse.data.openid
    let create_at = new Date()

    let open_data = await UserModal.findWxLogin(open_id)
    console.log('open_data', open_data)
    if (open_data[0] !== null) {
        // 直接返回token
    } else {
        await UserModal.insterWxOpenId([open_id, create_at])
            .then(ret => {
                let token = jwt.sign(payload, jwtSecret)
                ctx.body = {
                    code: 1,
                    message: '登陆成功',
                    data: [token]
                }
            })
            .catch(err => {
                ctx.body = {
                    code: -1,
                    message: '登陆失败',
                    data: err
                }
            })
    }

    await next()
}