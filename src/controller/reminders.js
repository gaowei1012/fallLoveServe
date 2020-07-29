const RemindersModal = require('../db/mysql')


// 获取当前用户所有提醒
exports.getAllReminders = async (ctx, next) => {
    await RemindersModal.findAllReminders()
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
                message: `获取失败${err}`
            }
        })
    
    await next()
}

// 添加提醒
exports.addReminders = async (ctx, next) => {
    const {title,content,create_at} = ctx.request.body
    await RemindersModal.insterReminders([title,content,create_at])
        .then(res => {
            ctx.body = {
                code: 200,
                message: '添加成功'
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                message: `添加失败${err}`
            }
        })
    

    await next()
}

// 删除提醒
exports.deleteReminders = async (ctx, next) => {
    const {id} = ctx.request.body;
    console.log('删除的id', id)
    await RemindersModal.deleteRemindersById(id)
        .then(res => {
            ctx.body = {
                code: 200,
                message: '删除成功',
                //data: res
            }
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                message: `删除失败${err}`
            }
        })
   
    await next()
}