const OSS = require('ali-oss')
const xss = require('xss')
const path = require('path')
const { oss } = require('../config/default')
const UplaodFile = require('../db/mysql')

let client = new OSS({
    region: oss.region, // 阿里云对象存储域名
    accessKeyId: oss.accessKeyId, // api 接口id
    accessKeySecret: oss.accessKeySecret, // api 接口密码
    bucket: oss.bucket, // bucket 名称
})

// 长传图片
exports.addUploadImg = async (ctx, next) => {
    let { title, type, detail } = ctx.request.body

    let files = ctx.request.files
    let img = []

    files.forEach((elm, index) => {
        img.push({
            name: elm.originalname,
            url: oss.url + elem.originalname // 1.使用图片上传阿里云,前提是你开通了阿里云对象存储，也创建了bucket（适合开通服务器，并且开通阿里云对象存储的人群）
            // url: 'http://123.56.119.218/server/public/images/' + elem.originalname // 2.图片上传nginx服务器（用nginx服务器存放静态资源，适合开通服务器，没有开通阿里云对象存储的人群）
            // url: 'http://localhost:3000/images/' + elem.originalname // 3.本地开发，图片上传到本地server/public目录中的images文件夹（适合本地启动，即没有开通任何阿里云服务产品）
        })
    })

    // 上面三种情况，仅第1种上传阿里云时，需要执行下面的img.froeach循环，其他两种情况下注释即可
    img.forEach(async (elem, index) => {
      await client.put('images/' + elem.name, path.join(__dirname, '../public/images/') + elem.name)
    })

    // 防 xss 攻击
    title = xss(title)
    detail = xss(detail)
    let create_at = new Date()
    let url = ''
    if ((title && detail && type) !== null) {
        await UplaodFile.insertFile([detail, title, type, url, create_at])
            .then(ret => {
                ctx.body = {
                    code: 1,
                    message: '保存成功',
                    data: ret
                }  
            })
            .catch(err => {
                ctx.body = {
                    code: -2,
                    message: '保存失败',
                    data: err
                }
            })
    } else  {
        ctx.body = {
            code: -2,
            message: '字段非法'
        }
    }
}