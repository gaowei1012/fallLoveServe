

/**
 * 上传照片
 * @param {ctx} ctx 
 * @type 0 视频 & 1 照片 根据类型判断
 * 上传照片到oss
 * formdata格式
 */
exports.uploadAlbum = async (ctx, next) => {
    
    const data = ctx.request.body;
    
    const result = {
        code: 1,
        message: '请求成功',
        data: [data]
    }
    ctx.body = result
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


