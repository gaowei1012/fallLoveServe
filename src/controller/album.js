

/**
 * 上传照片
 * @param {ctx} ctx 
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
