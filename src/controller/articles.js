

/**
 * 发表文章
 * @param {ctx} ctx 
 */
exports.createArticle = async ctx => {
    const {title, auator, content, date, } = ctx.request.body
    const data = {
        "title": title,
        'auator': auator,
        'content': content,
        'date': date
    }
     const result = {
         code: 1,
         message: '请求成功',
         data: [data]
     }
    ctx.body = result
}


/**
 * 删除文章
 * @param {*} ctx 
 */
exports.deleteArticle = async ctx => {
    const {id} = ctx.request.body
    const data = {
        'id': id
    }
     const result = {
         code: 1,
         message: '请求成功',
         data: [data]
     }
    ctx.body = result
}

/**
 * 编辑文章
 * @param {*} ctx 
 */
exports.exitArticle = async ctx => {
   
     const result = {
         code: 1,
         message: '请求成功',
         data: []
     }
    ctx.body = result
}

/**
 * 搜索文章
 */

exports.searchArticle = async ctx => {
    const id = ctx.request.body
    const result = {
        code: 1,
        message: '请求成功',
        data: [id]
    }
    ctx.body = result
}

/**
 * 发表评论
 */

exports.createComment = async ctx => {
    
    const result = {
        code: 1,
        message: '请求成功',
        data: []
    }
    ctx.body = result
}

