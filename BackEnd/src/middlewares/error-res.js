module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (err){
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.type = 'application/json';
        ctx.response.body = {
            sucsess: false,
            message: err.message,
        };
        ctx.app.emit('error', err, ctx)
    }
}