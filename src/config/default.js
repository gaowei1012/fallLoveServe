
// config 
const config = {
    port: 9090,
    host: '127.0.0.1',
    database: {
        DATABASE: 'fallLove',
        USERNAME: 'root',
        PASSWORD: 'gao129231wei',
        PORT: '3306',
        HOST: '127.0.0.1'
    },
    token: {
        tokenExpiresTime: 1000 * 60 * 60 * 24 * 7,
        jwtSecret: 'jwtSecret',
    },
    oss: { // 阿里云oss对象存储
        region: 'oss-cn-hangzhou',  // 阿里云对象存储域名
        accessKeyId: 'LTAI4GBo2qD2JUPaio8LJ6id', // api 接口id
        accessKeySecret: 'T6Ztoz3U9cyk2oLumuNJukiJP26umw', // api 接口密码
        bucket: 'registiation', // bucket 名称
        url: 'https://registiation.oss-cn-hangzhou.aliyuncs.com/images/'
    },
    wx: {
        appId: 'wx150f87bd2b50fc5d',
        appSecret: 'dc650535105bdd7a3888fa9176a0460b'
    },
    // 配置七牛云
    accessKey: '',
    secretKey: '',
}

module.exports = config
