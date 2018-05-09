1. `webpack`版本还是3.x
2. `react` 版本是16.0
3. 使用`json-server`和`mockjs`制造mock数据
4. `webpack.dll.config.js`进行体积优化

--------
## 启动
1. `npm run start`启动项目
2. `npm run mockdev`启动`json-server`制造mock数据

--------
## 打包
1. `npm run build:proDll`生成`dll`文件夹
2. `npm run build`生成最终文件，最终文件会引用`vendor.js`

--------
## 存疑
1. `happypack`没有使用成功
2. 有时间要使用`webpack 4`
