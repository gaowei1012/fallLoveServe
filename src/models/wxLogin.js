const axios = require('axios')
const { wx } = require('../config/default')

const appId = wx.appId
const appSecret = wx.appSecret

const LOGIN = (APPID, APPSECRET, CODE) => {
    return `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${APPSECRET}&js_code=${CODE}&grant_type=authorization_code`
}

class WeXin {
    code2Session(code) {
        let app_url = LOGIN(appId, appSecret, code)
        return axios(app_url)
    }
}

module.exports= new WeXin()
