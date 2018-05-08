//babel-register是实时转码，出于速度考虑，只用于开发环境，生产环境下使用babel-cli转码后部署
if (process.env.NODE_ENV === 'dev') {
    require('babel-register');
}

const env = require('node-env-file');
const fs = require('fs');

const src = __dirname;
//从工程根目录启动，是'./node_modules/app'
const dst = './node_modules/app';
const deleteFolder = (path) => {
    let files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach((file) => {
            const curPath = `${path}/${file}`;
            if (fs.statSync(curPath).isDirectory()) {
                deleteFolder(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

try {
    const statInfo = fs.statSync(dst);
    if(statInfo && statInfo.isDirectory()) {
        const link = fs.readlinkSync(dst);
        if(link !== src) {
            deleteFolder(dst);
            fs.symlinkSync(src, dst, 'dir');
        }
    }
} catch (error) {
    if(error.code === 'ENOENT') {
        fs.symlinkSync(src, dst, 'dir');
    }
    if(error.code === 'EINVAL') {
        deleteFolder(dst);
        fs.symlinkSync(src, dst, 'dir');
    }
}

if (process.env.NODE_ENV === 'dev') {
    env(require.resolve('app/config/env/dev'))
} else if (process.env.NODE_ENV === 'pro') {
    //TODO:
}

require('./app.js')