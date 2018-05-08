// export default (router) => {
//     router.get('/', async (ctx, next) =>{
//         ctx.body = "<h1>Hello</h1>";
//         await next();
//     });
// }

exports.GET = async (ctx, next) =>{

        ctx.body = "<h1>Hello</h1>";
}