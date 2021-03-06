const mysql = require('mysql')
const {database} = require('../config/default')
const {users, comment, album, article, video, reminders, wxLogin, admin_user, great } = require('./init')

const pool = mysql.createPool({
    host        :   database.HOST,
    user        :   database.USERNAME,
    password    :   database.PASSWORD,
    database    :   database.DATABASE,
    port        :   database.PORT
})

const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

// 创建表类
const createTable = (sql) => {
    return query(sql, [])
}

// 创建表
createTable(users)
createTable(comment)
createTable(album)
createTable(article)
createTable(video)
createTable(reminders)
createTable(wxLogin)
createTable(admin_user)
createTable(great)

// 中后台管理系统 用户注册
exports.adminRegister = (val) => {
    const _sql = `insert into admin_user set username=?, password=?,create_at=?;`
    return query(_sql, val)
}

// 中后台管理系统 用户登录
exports.adminLogin = (username, password) => {
    console.log('username', username)
    console.log('password', password)
    const _sql = `select * from admin_user where username="${username}" and password="${password}";`
    return query(_sql)
}

// 用户注册
exports.insterUserData = (val) => {
    console.log('val', val)
    const _sql = "insert into users set username=?,password=?,mobile=?,avatar=?,create_at=?;"
    return query(_sql, val)
}

// 用户登录
exports.findUserData = (username) => {
    // const {username, password} = val
    console.log('username', username)
    let _sql = `select * from users where username=${username};`
    return query(_sql)
}

// 查找用户
exports.findUserInfo = (username) => {
    let _sql = `select * from users where username=${username};`
    return query(_sql)
}

// 发表文章
exports.insterArticleData=(val)=> {
    let _sql = "insert into article set title=?,content=?,create_at=?;"
    return query(_sql, val) 
}

// 查询所有文章
exports.findArticelAll=()=> {
    let _sql = "select * from article;";
    return query(_sql)
}

// 删除文章
exports.deleteArticleById = (id) => {
    let _sql = `delete from article where id=${id};`;
    return query(_sql)
}

// 编辑文章
exports.updateArticleById=(title,content,id)=> {
    // console.log('udapte', title)
    let _sql = `update article set title=${title} and content=${content} where id=${id};`;
    return query(_sql)
}

// 通过id查找文章
exports.findArticelById=(id)=> {
    let _sql = `select * from article where id=${id};`;
    return query(_sql)
}

// 发表评论
exports.insterCommentData=(val)=> {
    const _sql = "insert into comment set content=?, avatar=?, username=?, create_at=?;"
    return query(_sql, val)
}

// 查询所有评论
exports.findComment=()=> {
    const _sql = `select * from comment;`;
    return query(_sql)
}

// 删除评论
exports.deleteCommentById=(id)=> {
    const _sql = `delete from comment where id=${id};`;
    return query(_sql)
}

// 查询用户所有相册相片
exports.findAllPhoto=()=> {
    const _sql = 'select * from album;';
    return query(_sql)
}


//  删除单个照片
exports.deletePhotoById=(id)=> {
    const _sql = `delete from album where id=${id};`;
    return query(_sql)
}

// 获取所有视频
exports.findAllVideo=()=> {
    const _sql = `select * from video;`;
    return query(_sql)
}

// 删除单个视频
exports.deleteVideoById = (id) => {
    const _sql = `select from video where id=${id};`;
    return query(_sql)
}


// 查找所有提醒事项
exports.findAllReminders=()=> {
    const _sql = `select * from reminders;`
    return query(_sql)
}

// 删除单个提醒事项
exports.deleteRemindersById=(id)=> {
    const _sql = `delete from reminders where id=${id};`
    return query(_sql)
}

// 添加提醒事项
exports.insterReminders=(val)=> {
    const _sql = 'insert into reminders set title=?,content=?,create_at=?;'
    return query(_sql,val)
}

// 插入微信open_id,记录当前用户是否登陆
exports.insterWxOpenId=(val) => {
    const _sql = 'insert into wxLogin set open_id =?, create_at=?;'
    return query(_sql, val)
}

// 查询当前用户是否注册
exports.findWxLogin = (open_id) => {
    const _sql = `select * from wxLogin where open_id='${open_id}';`
    return query(_sql)
}

// 创建点击数
exports.insterGreat = (val) => {
    const _sql = 'insert into great set great_num=?, create_at=?;'
    return query(_sql, val)
}

// upadte 增加
exports.updateGreat = (great_num, great_id) => {
    const _sql = `update great set great_num=${great_num} where id=${great_id};`
    return query(_sql)
}

// 查询当前用户该篇文章下的点赞数
exports.findGreat = (great_id) => {
    const _sql = `select * from great where id=${great_id};`
    return query(_sql)
}
