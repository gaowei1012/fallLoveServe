
const { ne } = require('sequelize/types/lib/operators');
const UserModal = require('../db/mysql')
/* 发表文章 */
exports.createArticle = async (ctx, next) => {
    const {title,content} = ctx.request.body;
    let create_at = new Date()
    // 发表时间点暂时放在后端
    try {
        if ((title !== undefined) && (content !== undefined)) {
            await UserModal.insterArticleData([title,content,create_at])
                .then(result => {
                    ctx.body = {
                        code: 1,
                        message: '发表成功'
                    }
                })
                .catch(err => {
                    ctx.body = {
                        code: -1,
                        message: '发表失败'
                    }
                })
        } else {
            ctx.body = {
                code: -2,
                message: '必传参数不能为空'
            }
        }
    } catch(err) {
        Promise.reject(err)
    }

    await next()
}


/* 删除文章 */
exports.deleteArticle = async (ctx, next) => {
    const {id} = ctx.request.body;
    try {
        if (id !== undefined) {
            await UserModal.deleteArticleById(id)
                .then(result => {
                    ctx.body = {
                        code: 1,
                        message: 'ok',
                        data: '删除成功!'
                    }
                })
                .catch(err => {
                    ctx.body = {
                        code: -1,
                        message: `删除失败:${err}`
                    }
                })
        } else {
            ctx.body = {
                code: -2,
                message: 'id不能为空!'
            }
        }
        
    } catch (err) {
        Promise.reject(err)
    }

    await next()
}

/* 编辑文章 */
exports.eitdArticle = async (ctx, next) => {
   const {title,content,id} = ctx.request.body;
   try {
        if ((title !== undefined) && (content !== undefined) && (id !== undefined)) {
            await UserModal.updateArticleById(title,content,id)
                .then(ret => {
                    ctx.body = {
                        code: 1,
                        message: 'Ok',
                        data: '更新成功!'
                    }
                }).catch(err => {
                    ctx.body = {
                        code: -1,
                        message: '更新失败'
                    }
                })
        } else {
            const result = {
                code: -2,
                message: '查询失败，参数不能为空！',
            }
            ctx.body = result
        }
   } catch (err) {
       Promise.reject(err)
   }

   await next()
}
/**
 * 通过id查找文章
 */
exports.findeArticleData = async (ctx, next) => {
    const {id} = ctx.request.body;
    try {
        if (id !== undefined) {
            await UserModal.findArticelById(id)
                .then(result => {
                    ctx.body = {
                        code: 1,
                        message: 'Ok',
                        data: result[0]
                    }
                })
                .catch(err => {
                    ctx.body = {
                        code: -1,
                        message: `ERROR: ${err}`
                    }
            })
        } else {
            ctx.body = {
                code: -2,
                message: 'id不能为空'
            }
        }
    } catch (err) {
        Promise.reject(err)
    }

    await next()
}

/**
 * 获取所有文章
 */
exports.getAllArticle = async (ctx, next) => {
    await UserModal.findArticelAll()
        .then(result => {
            ctx.body = {
                code: 1,
                message: 'Ok',
                data: result
            }
        })
        .catch(err => {
            ctx.body = {
                code: -1,
                message: '获取失败'
            }
        })

    await next()
}

/**
 * 发表评论
 */
exports.createComment = async (ctx, next) => {
    const {content,avatar,username} = ctx.request.body;
    let nowData = new Date();
    try {
        if ((content !== undefined) && (avatar !== undefined) && (username !== undefined)) {
            await UserModal.insterCommentData([content,avatar,username,nowData])
                .then(result => {
                    ctx.body = {
                        code: 1,
                        message: '发表成功',
                    }
                })
                .catch(err => {
                    ctx.body = {
                        code: -1,
                        message: `发表失败：${err}`
                    }
                })
        } else {
            ctx.body = {
                code: -2,
                message: '参数不能为空',
            }
        }
    } catch (err) {
        Promise.reject(err)
    }

    await next()
}

// 查看文章评论
exports.getArticleComment= async (ctx, next) => {
    await UserModal.findComment()
        .then(result => {
            ctx.body = {
                code: 1,
                message: 'Ok',
                data: result
            }
        })
        .catch(err => {
            ctx.body = {
                code: -1,
                message: `err: ${err}`
            }
        })

    await next()
}

// 删除评论
exports.deleteCommentById= async (ctx, next) => {
    const {id} = ctx.request.body;
    try {
        if (id !== undefined) {
            await UserModal.deleteCommentById(id)
                .then(result => {
                    ctx.body = {
                        code: 1,
                        message: '删除成功'
                    }
                })
                .catch(err => {
                    ctx.body = {
                        code: -1,
                        message: '删除失败'
                    }
                })
        } else {
            ctx.body = {
                code: -2,
                message: '参数不能为空'
            }
        }
    } catch (err) {
        Promise.reject(err)
    }

    await next()
}
