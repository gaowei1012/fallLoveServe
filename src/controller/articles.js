
const UserModal = require('../db/mysql')
/**
 * 发表文章
 * @param {ctx} ctx 
 */
exports.createArticle = async ctx => {
    const {title,content} = ctx.request.body;
    // 发表时间点暂时放在后端
    let create_at = new Date();
    await UserModal.insterArticleData([title,content,create_at])
        .then(result => {
            ctx.body = {
                code: 200,
                message: '发表成功'
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                message: '发表失败'
            }
        })
}


/**
 * 删除文章
 * @param {*} ctx 
 */
exports.deleteArticle = async ctx => {
    const {id} = ctx.request.body;
    await UserModal.deleteArticleById(id)
        .then(result => {
            ctx.body = {
                code: 200,
                message: 'ok',
                data: '删除成功!'
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                message: `删除失败:${err}`
            }
        })
}

/**
 * 编辑文章
 * @param {*} ctx 
 */
exports.eitdArticle = async ctx => {
   const {id} = ctx.request.body;
   //await UserModal.updateArticleById([id])
     const result = {
         code: 1,
         message: '请求成功',
         data: []
     }
    ctx.body = result
}

/**
 * 通过id查找文章
 * @param {*} ctx 
 */
exports.findeArticleData = async ctx => {
    const {id} = ctx.request.body;
    await UserModal.findArticelById(id)
        .then(result => {
            ctx.body = {
                code: 200,
                message: 'ok',
                data: result[0]
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                message: `err: ${err}`
            }
        })
}

/**
 * 获取所有文章
 */
exports.searchArticle = async ctx => {
    await UserModal.findArticelAll()
        .then(result => {
            ctx.body = {
                code: 200,
                message: '成功',
                data: result
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                message: '失败',
                data: err,
            }
        })
}

/**
 * 发表评论
 */
exports.createComment = async ctx => {
    const {content,avatar,username} = ctx.request.body;
    let nowData = new Date();
    await UserModal.insterCommentData([content,avatar,username,nowData])
        .then(result => {
            ctx.body = {
                code: 200,
                message: '发表成功',
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                message: `发表失败：${err}`
            }
        })
}

// 查看文章评论
exports.getArticleComment= async ctx => {
    await UserModal.findComment()
        .then(result => {
            ctx.body = {
                code: 200,
                message: 'ok',
                data: result
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                message: `err: ${err}`
            }
        })
}

// 删除评论
exports.deleteCommentById=async ctx => {
    const {id} = ctx.request.body;
    await UserModal.deleteCommentById(id)
        .then(result => {
            ctx.body = {
                code: 200,
                message: '删除成功'
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                message: '删除失败'
            }
        })
}