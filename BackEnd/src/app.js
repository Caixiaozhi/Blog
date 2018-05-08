import path from "path";

import Koa from "koa";
import RouterConfig from "lark-router-config";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import Logger from "koa-logger";
import staticServer from "koa-static";

// import routers from "app/routers/index";

const app = new Koa();

//配置控制台日志中间件
app.use(Logger());
//配置ctx.body解析中间件
app.use(bodyParser());
//配置静态资源加载中间件
app.use(staticServer(path.join(__dirname, '..', 'static_source')));
//add url-router

// load routers
const router = new Router();
const routes = new RouterConfig();

//配置lark-router-config
const routerConfig = async () => {
    await routes.use('controllers');
    await routes.inject(router, { param: '.as.param', asterisk: '.as.asterisk'});
}
routerConfig().then(()=> {
    app.use(router.routes());
    app.listen(process.env.PORT, ()=>{
        console.log(`Server listening on http://localhost:${process.env.PORT}`);
    });   
}).catch((err)=>{
    console.log('出错了: ',err)
});
// const routes = new RouterConfig('routes.yaml');
// routes.inject(router, { directory: 'routes' });

