exports.POST = async (ctx, next) => {
    const params = ctx.request.body;
    console.log('params:', params);
    ctx.body = 'receive a file';
    ctx.status = 200;
}