// import multer from 'koa-multer';
import { insertTag } from 'app/modules/tag/create';
import { 
    uploadToOSS,
    generateUrl,
    generateOssUrl
} from 'app/modules/upload';

// const uploader = multer({dest: 'temp/pictuers/'});
exports.GET = async (ctx, next) =>{
    ctx.body = "<h1>Hello</h1>";
}
// exports.POST = async (ctx, next) =>{
//     const params = ctx.request.body;
//     const [status, result] = await insertTag(params.tag);
//     ctx.body = 'sucess';
//     ctx.status = status;
// }

// export default (router) => {
//     router.post('/', async (ctx, next) => {
//          ctx.body = "<h1>welcome</h1>"
//     })
// }

exports.POST = (async (ctx, next) => {
    const params = ctx.request.body.files;
    console.log('params:',params.picture.name);
    ctx.body='receive a file';
    ctx.status = 200;
})