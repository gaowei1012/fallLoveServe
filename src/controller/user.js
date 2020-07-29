const UserModal = require('../db/mysql');
const co = require('co');
const wx = require('../config/wx')
const request = require('request')
const axios = require('axios')
const qs = require('qs')

/**
 * 注册
 * @param {*} ctx 
 */
exports.register = async ctx => {
    const {mobile,avatar,username,password} = ctx.request.body;
    let create_at = new Date();
    console.log('username', username)
    await UserModal.insterUserData([username,password,mobile,avatar,create_at])
        .then(result => {
            ctx.body = {
                code: 200,
                message: '注册成功'
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                message: '注册失败'
            }
        })
}

/**
 * 登录
 * @param {*} ctx 
 */
exports.login = async ctx => {
    const {username} = ctx.request.body;
    await UserModal.findUserData(username)
        .then(result => {
            ctx.body = {
                code: 200,
                message: 'ok',
                data: result
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                message: `err: ${err}`
            }
        })
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
    const {username} = ctx.request.body;
    await UserModal.findUserInfo(username)
        .then(result => {
            ctx.body = {
                code: 200,
                message: 'ok',
                data: result[0]
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                message: `err:${err}`
            }
        })
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
exports.wxLogin = async (ctx, next) => {
    const {code} = ctx.request.body;

    let options = {
        method: 'POST',
        url: 'https://api.weixin.qq.com/sns/jscode2session?',
        formData: {
            appid: wx.appId,
            secret: wx.secret,
            js_code: code,
            grant_type: 'authorization_code'
        }
    }

    let result = await request(options).body;
    console.log('token', result)
    let token = qs.parse(result)

    ctx.body = {
        code: 200,
        data: [{token: token}]
    }

    await next()

    // request(options, function(err, response, body) {
    //     if (err) {
    //         ctx.body = {
    //             code: 500,
    //             data: err
    //         }
    //     } else {
    //         ctx.body = {
    //             code: 200,
    //             data: response.data
    //         }
    //     }
    // })

}

