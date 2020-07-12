const router = require('koa-router')() //引入路由函数
const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = {
  info: {
    title: 'fallLove',
    version: '1.0.0 bate',
    description: 'falllove is apis',
  },
  host: 'localhost:8080',
  basePath: '/' // Base path (optional)
};

const options = {
  swaggerDefinition,
  apis: ['./controller/*.js'], // 写有注解的router的存放地址
};

const swaggerSpec = swaggerJSDoc(options)

// 通过路由获取生成的注解文件
router.get('/swagger.json', async function (ctx) {
  ctx.set('Content-Type', 'application/json');
  ctx.body = swaggerSpec;
})

module.exports = router
