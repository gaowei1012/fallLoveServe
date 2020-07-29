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


exports.getAllPhoto = async (ctx, next) => {
    ctx.body = {
        code: 1,
        message: 'sss'
    }

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

    const file = ctx.request.body;
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


