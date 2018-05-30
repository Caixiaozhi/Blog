import {
    uploadPics,
} from 'app/modules/picture'

exports.POST = async (ctx, next) => {
    const params = ctx.request.body;
    const [status, body] = await uploadPics(params.files)
    ctx.status = status
    ctx.body = body
}