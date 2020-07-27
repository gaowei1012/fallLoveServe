/**
 * 获取和风天气插件url
 * @param {*} ctx 
 * @param {*} next 
 */


exports.getHeFengWather = async (ctx, next) => {
    
    const data = {url: 'https://widget-page.heweather.net/h5/index.html?bg=1&md=0123456&lc=accu&key=48408d4920cf48b7aa21f4dc30fd5114'}
    
    const result = {
        code: 1,
        message: '请求成功',
        data: [data]
    }
    ctx.body = result;

    await next
}
