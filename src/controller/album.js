

/**
 * 上传照片
 * @param {ctx}} ctx 
 */
exports.uploadAlbum = async ctx => {
    const data = [
       {
            id: 1,
            test: '测试数据'
       }
    ]
    const result = {
        code: 1,
        message: '请求成功',
        data
    }
    ctx.body = result
}


/**
 * 删除照片
 * @param {*} ctx 
 */
exports.deleteAlbum = async ctx => {
    const data = [
        {
             id: 1,
             test: '测试数据'
        }
     ]
    const result = {
        code: 1,
        message: '请求成功',
        data
    }
    ctx.body = result
}


/**
 * 获取相册所有相片
 * @param {*} ctx 
 */
exports.getPhotoList = async ctx => {
    const data = [
        {
             id: 1,
             test: '测试数据'
        }
     ]
    const result = {
        code: 1,
        message: '请求成功',
        data
    }
    ctx.body = result
}


/**
 * 创建相册文件夹
 * @param {*} ctx 
 */
exports.createAlbumFile = async ctx => {
    const data = [
        {
             id: 1,
             test: '测试数据'
        }
     ]
    const result = {
        code: 1,
        message: '请求成功',
        data
    }
    ctx.body = result
}
