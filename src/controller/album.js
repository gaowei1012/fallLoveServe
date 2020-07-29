const UserModal = require('../db/mysql')

const fs = require('fs')

const co = require('co')
const OSS = require('ali-oss')
const formidable = require('formidable')

const multer = require('multer')

let client = new OSS({
    region: 'oss-cn-hangzhou',
    accessKeyId: 'LTAI4G7Jkx1s96pNouscKbcw',
    accessKeySecret: 'vraBTbap66nzcHSrJTqMVZ7y1kpIb1'
})

let ali_oss = {
    bucket: 'myfallolove',  //阿里云您的bucket
    endPoint: 'oss-cn-hangzhou.aliyuncs.com', //填写你开通的oss地址
}


// 获取所有照片
exports.getAllPhoto = async (ctx, next) => {
    await UserModal.findAllPhoto()
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
                message: '获取照片失败',
                data: [err]
            }
        })

    await next
}

/**
 * 上传照片
 * @param {ctx} ctx 
 * @type 0 视频 & 1 照片 根据类型判断
 * 上传照片到oss
 * formdata格式
 */
exports.uploadAlbum = async (ctx, next) => {

    console.log('ctx request body', JSON.stringify(ctx.request.body))

    ctx.body = {
        code: 200,
        data: ctx.request.body
    }

    // 上传文件
    let alioss_uploadfile = function() {
        return new Promise(function(resolve, reject) {
            //上传单文件，使用formidable
            let form = new formidable.IncomingForm()
            console.log('form -- form', form)
            if (!form) {
                return false
            } else {
                form.parse(ctx.req, function(err, fields, files) {
                    console.log('fields--fields', fields)
                    if (err) { ctx.throw('500',err)}
                    // 文件名
                    let date = new Date()
                    let time = '' + date.getFullYear() + (date.getMonth() + 1) + date.getDate()
                    let filepath = 'project/'+time + '/' + date.getTime()
                    let fileext = files.file.name.split('.').pop()
                    let upfile = files.file.path
                    let newfile = filepath + '.' + fileext
                    //ali-oss
                    co(function*() {
                        client.useBucket('myfallolove')
                        let result = yield client.put(newfile, upfile)
                        console.log('文件上传成功!', result.url)
                        let data=[]
                        data.push(result.url)
                        ctx.response.type = 'json'
                        ctx.response.body = {
                            errno: 0,
                            data: data
                        }
                        resolve(next())
                    }).catch(function(err) {
                        console.log(err)
                    })
                })
            }
        })
    }
    // await alioss_uploadfile()
}

/**
 * 删除照片
 * @param {*} ctx 
 * @type 0 视频 & 1 照片 根据类型判断
 */
exports.deleteAlbum = async ctx => {

    const data = ctx.request.body;
   
    const result = {
        code: 1,
        message: '请求成功',
        data: [data]
    }
    ctx.body = result
}


/**
 * 获取相册所有相片
 * @param {*} ctx 
 */
exports.getPhotoList = async ctx => {
    
    const result = {
        code: 1,
        message: '请求成功',
        data: []
    }
    ctx.body = result
}



/**
 * delete
 * 创建相册文件夹
 * @param {*} ctx 
 */
exports.createAlbumFile = async ctx => {

    const result = {
        code: 1,
        message: '请求成功',
        data: []
    }
    ctx.body = result
}


/**
 * 删除单个照片
 */
exports.deleteAPhoto = async (ctx, next) => {
    const {id} = ctx.request.body;
    await UserModal.deletePhotoById(id)
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
}

