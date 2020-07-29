const UserModal = require('../db/mysql')

const fs = require('fs')

const co = require('co')
const OSS = require('ali-oss')

const multer = require('multer')

let client = new OSS({
    region: 'oss-cn-hangzhou',
    accessKeyId: '****',
    accessKeySecret: '****'
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

    const {file} = ctx.request.body;
    console.log('文件---文件', file)

    // 图片上传
    let upload = multer({ dest: './tmp/' })

    const data = ctx.request.body;
    
    const result = {
        code: 1,
        message: '请求成功',
        data: [data]
    }
    ctx.body = result

    await next
}

/**
 * 上传视频
 * @param {ctx}} ctx 
 */
exports.uploadVideo = async ctx => {
    const data = ctx.request.body;
    
    const result = {
        code: 1,
        message: '请求成功',
        data: [data]
    }
    ctx.body = result
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

