import path from "path";

import Koa from "koa";
import RouterConfig from "lark-router-config";
import Router from "koa-router";
// import bodyParser from "koa-bodyparser";
import koaBody from "koa-body";
import Logger from "koa-logger";
import staticServer from "koa-static";
// import multer from "koa-multer";

import errorRes from 'app/middlewares/error-res';
import responseTime from 'app/middlewares/response-time';
// import routers from "app/routers/index";

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
// app.use(bodyParser());
app.use(koaBody({multipart: true}));
//配置静态资源加载中间件
app.use(staticServer(path.join(__dirname, '..', 'static_source')));


// load routers
const router = new Router();
const routes = new RouterConfig();

//配置lark-router-config
(async () => {
    await routes.use('controllers');
    await routes.inject(router, { param: '.as.param', asterisk: '.as.asterisk'});
})()
.then(function (resolve, reject) {
    app.use(router.routes());
    app.listen(process.env.PORT, ()=>{
        console.log(`Server listening on http://localhost:${process.env.PORT}`);
    }); 
});

// const routes = new RouterConfig('routes.yaml');
// routes.inject(router, { directory: 'routes' });

