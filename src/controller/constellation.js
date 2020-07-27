const axios = require('axios');
/**
 * 星座
 */

exports.getAll = async (ctx, next) => {
    const {consName, type} = ctx.request.body;

    let url = `http://web.juhe.cn:8080/constellation/getAll?consName=${encodeURI(consName)}&type=${type}&key=f2d0dcb28fc18973652272dfbeb9d390`;
    // 使用 axios 发送请求
    let response = await axios.get(url)
    let result = response.data;
    
    ctx.body = {
        code: 200,
        data: [result]
    }
    
    await next;
}
