
const articles = `
    create table if not exists articles(
        id INT NOT NULL AUTO_INCREMENT,
        create_at VARCHAR(100) NOT NULL COMMENT '创建时间',
        PRIMARY KEY(id)
    );
`
const banner = `
    create table if not exists banner(
        id INT NOT NULL AUTO_INCREMENT,
        list VARCHAR(100) NOT NULL COMMENT 'banner链接',
        create_at VARCHAR(100) NOT NULL COMMENT '创建时间',
        PRIMARY KEY(id)
    );
`

const users = `
    create table if not exists register(
        id INT NOT NULL AUTO_INCREMENT,
        mobile INT NOT NULL COMMENT '手机号',
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
        pri_url VARCHART(255) NOT NULL COMMENT '照片地址',
        create_at VARCHAR(100) NOT NULL COMMENT '照片上传时间',
        PRIMARY KEY(id)
    )
`

module.exports = {
    articles,
    banner,
    users,
    comment,
    album,
}