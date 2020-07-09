const mysql = require('mysql')
const {database} = require('../config/default')
const {articles, banner, users, comment} = require('./init')

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
createTable(banner)
createTable(articles)
createTable(comment)

// 用户注册
exports.insterData = (val) => {
    const _sql = "inster into users set mobile=?, username=?, password=?, create_at=?;"
    return query(_sql, val)
}

// 用户登录
exports.login = (val) => {
    const {username, password} = val
    const _sql = `select * from users where username=${username}, password=${password};`
    return query(_sql, val)
}

// 查询banner数据
exports.queryBanner = () => {
    const _sql = `select * from banner;`
    return query(_sql)
}

// 增加评论
exports.insterCommetData=(val)=> {
    const _sql = "inster into commet set content=?, avatar=?, username=?, create_at=?;"
    return query(_sql, val)
}

// 查询所有评论
exports.searchCommentById=(val)=> {
    const {id} = val;
    const _sql = `select * from articles where commentId=${id};`;
    return query(_sql, val)
}

// 删除评论（用户登录）
exports.deleteCommentById=(val)=> {
    const {id} = val
    const _sql = `select * from articles where commentId=${id};`;
    return query(_sql, val)
}
