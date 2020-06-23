

/**
 * 发表文章
 * @param {ctx} ctx 
 */
exports.createArticle = async ctx => {
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
 * 删除文章
 * @param {*} ctx 
 */
exports.deleteArticle = async ctx => {
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
 * 编辑文章
 * @param {*} ctx 
 */
exports.exitArticle = async ctx => {
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
 * 搜索文章
 */

exports.searchArticle = async ctx => {
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
 * 发表评论
 */

exports.createComment = async ctx => {
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

