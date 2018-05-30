import {
    insertArticleAndTags,
} from 'app/modules/article'

exports.POST = async (ctx, next) => {
    const params = ctx.request.body;
    // console.log('params:', params);
    const content = params.content
    const title = params.title
    const tags = params.tags
    const author = params.author
    const [status, body] = await insertArticleAndTags(content, author, tags, title)
    // ctx.status = 200;
    ctx.status = status
    ctx.body = body
}