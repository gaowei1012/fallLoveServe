const ali = require('ali-oss')
const fs = require('fs')

const co = require('co')
const OSS = require('ali-oss')

const multer = require('multer')

let client = new OSS({
    region: 'oss-cn-hangzhou',
    accessKeyId: '****',
    accessKeySecret: '****'
})

let ali_oss = {
    bucket: 'myfallolove',  //阿里云您的bucket
    endPoint: 'oss-cn-hangzhou.aliyuncs.com', //填写你开通的oss地址
}

// 图片上传
let upload = multer({ dest: './tmp/' })
