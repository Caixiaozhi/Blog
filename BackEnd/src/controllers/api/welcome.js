import { insertTag } from 'app/modules/tag/create';

exports.GET = async (ctx, next) =>{
        ctx.body = "<h1>Hello</h1>";
}
exports.POST = async (ctx, next) =>{
        const params = ctx.request.body;
        // console.log('params: ',params);
        const result = await insertTag(params.tag);
        console.log(result);
}