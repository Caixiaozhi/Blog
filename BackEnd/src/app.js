import path from "path";

import Koa from "koa";
// import Router from "koa-router";
import bodyParser from 'koa-bodyparser';
import Logger from "koa-logger";
import staticServer from "koa-static";
import errorRes from 'app/middlewares/error-res';
import responseTime from 'app/middlewares/response-time';
import filter from 'app/middlewares/filter'

import Router from "app/controllers";

const app = new Koa();


//处理异常中间件
app.use(errorRes);
//response time 
app.use(responseTime);
//
// app.use(multer({dest: 'temp/pictures/'}))
//配置控制台输出日志中间件
app.use(Logger());
//配置ctx.body解析中间件
app.use(bodyParser());
//配置静态资源加载中间件
app.use(staticServer(path.join(__dirname, '..', 'static_source')));

// router
app.use(filter)
app.use(Router.routes())
   .use(Router.allowedMethods())
// const routes = new RouterConfig();
// listen port
app.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT}`);
  });
// //配置lark-router-config
// (async () => {
//     await routes.use('controllers');
//     await routes.inject(router, { param: '.as.param', asterisk: '.as.asterisk'});
// })()
// .then(function (resolve, reject) {
//     app.use(router.routes());
//     app.listen(process.env.PORT, ()=>{
//         console.log(`Server listening on http://localhost:${process.env.PORT}`);
//     }); 
// });

// const routes = new RouterConfig('routes.yaml');
// routes.inject(router, { directory: 'routes' });

