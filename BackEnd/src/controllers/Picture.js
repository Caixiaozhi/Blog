import {
    uploadPics,
} from 'app/modules/picture'

export default class Picture {
    static async uploadArticlePicture(ctx) {
        const pics = ctx.req.files
        const [status, body] = await uploadPics(pics)
        ctx.status = status
        ctx.body = body
    }
}