/**
 * 建表:
 *  --
 *  --
 *  --
 */

const users = `
    create table if not exists users(
        id INT NOT NULL AUTO_INCREMENT,
        mobile INT NOT NULL COMMENT '手机号',
        avatar VARCHAR(100) NOT NULL COMMENT '用户头像',
        username VARCHAR(100) NOT NULL COMMENT '用户名',
        password VARCHAR(100) NOT NULL COMMENT '用户密码',
        create_at VARCHAR(100) NOT NULL COMMENT '用户创建时间',
        PRIMARY KEY(id)
    );
`

const comment = `
    create table if not exists comment(
        id INT NOT NULL AUTO_INCREMENT,
        content VARCHAR(255) NOT NULL COMMENT '评论内容',
        avatar VARCHAR(100) NOT NULL COMMENT '评论者头像',
        username VARCHAR(100) NOT NULL COMMENT '评论者用户名',
        create_at VARCHAR(100) NOT NULL COMMENT '评论创建时间',
        PRIMARY KEY(id)
    );
`

const album = `
    create table if not exists album(
        id INT NOT NULL AUTO_INCREMENT,
        pri_url VARCHAR(255) NOT NULL COMMENT '照片地址',
        file_type VARCHAR(100) NOT NULL COMMENT '相册类型（可选）',
        create_at VARCHAR(100) NOT NULL COMMENT '照片上传时间',
        PRIMARY KEY(id)
    )
`

const article = `
    create table if not exists article(
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL COMMENT '文章标题',
        content VARCHAR(255) NOT NULL COMMENT '文章内容',
        create_at VARCHAR(100) NOT NULL COMMENT '文章发表时间',
        PRIMARY KEY(id)
    )
`

module.exports = {
    users,
    comment,
    album,
    article,
}