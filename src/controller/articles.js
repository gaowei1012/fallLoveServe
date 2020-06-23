

/**
 * 发表文章
 * @param {ctx} ctx 
 */
exports.createArticle = async ctx => {
    //const create_time = new Date.now()
    const result = {
        code:  1,
        // create_at: create_time
    }
    ctx.body = result
}


/**
 * 删除文章
 * @param {*} ctx 
 */
exports.deleteArticle = async ctx => {
    const result = {
        coed: 1
    }
    ctx.body = result
}

/**
 * 编辑文章
 * @param {*} ctx 
 */
exports.exitArticle = async ctx => {
    const result = {
        code: 1
    }
    ctx.body = result
}

/**
 * 搜索文章
 */

exports.searchArticle = async ctx => {
    const result = {
        code: 1
    }
    ctx.body = result
}

/**
 * 发表评论
 */

exports.createComment = async ctx => {
    const result = {
        code: 1
    }
    ctx.body = result
}

