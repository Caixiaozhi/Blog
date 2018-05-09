import { insertTag } from 'app/modules/tag/create';

exports.GET = async (ctx, next) =>{
    ctx.body = "<h1>Hello</h1>";
}
exports.POST = async (ctx, next) =>{
    const params = ctx.request.body;
    const [status, result] = await insertTag(params.tag);
    ctx.body = 'sucess';
    ctx.status = status;
}

// export default (router) => {
//     router.get('/', async (ctx, next) => {
//          ctx.body = "<h1>welcome</h1>"
//     })
// }