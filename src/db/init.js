/**
 * 建表:
 *  --
 *  --
 *  --
 */

const users = `
    create table if not exists users(
        id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(100) NOT NULL COMMENT '用户名',
        password VARCHAR(100) NOT NULL COMMENT '用户密码',
        mobile VARCHAR(100) NOT NULL COMMENT '手机号',
        avatar VARCHAR(100) NOT NULL COMMENT '用户头像',
        create_at VARCHAR(100) NOT NULL COMMENT '用户创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

const comment = `
    create table if not exists comment(
        id INT NOT NULL AUTO_INCREMENT,
        content VARCHAR(255) NOT NULL COMMENT '评论内容',
        avatar VARCHAR(100) NOT NULL COMMENT '评论者头像',
        username VARCHAR(100) NOT NULL COMMENT '评论者用户名',
        create_at VARCHAR(100) NOT NULL COMMENT '评论创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

const album = `
    create table if not exists album(
        id INT NOT NULL AUTO_INCREMENT,
        pri_url VARCHAR(255) NOT NULL COMMENT '照片地址(可选)',
        file_type VARCHAR(100) NOT NULL COMMENT '相册类型（可选）',
        create_at VARCHAR(100) NOT NULL COMMENT '照片上传时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

const article = `
    create table if not exists article(
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL COMMENT '文章标题',
        content VARCHAR(255) NOT NULL COMMENT '文章内容',
        create_at VARCHAR(100) NOT NULL COMMENT '文章发表时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

const video = `
    create table if not exists video(
        id INT NOT NULL AUTO_INCREMENT,
        video_url VARCHAR(255) NOT NULL COMMENT '视频地址',
        create_at VARCHAR(100) NOT NULL COMMENT '视频上传时间',
        PRIMARY KEY(id)
    ) character set = utf8;

`

const reminders = `
    create table if not exists reminders(
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL COMMENT '提醒标题',
        content VARCHAR(255) NOT NULL COMMENT '提醒内容',
        create_at VARCHAR(100) NOT NULL COMMENT '创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

module.exports = {
    users,
    comment,
    album,
    article,
    video,
    reminders
}