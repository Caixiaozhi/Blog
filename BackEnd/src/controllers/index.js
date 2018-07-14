import Router from 'koa-router'
import multer from 'koa-multer'

import Welcome from 'app/controllers/Welcome'
import Article from 'app/controllers/Article'
import Picture from 'app/controllers/Picture'
import Thoughts from 'app/controllers/Thoughts'
import Test from 'app/controllers/Test'

const router = Router()
const pictureUploader = multer({ dest: 'temp/pictures' })
// const coverUploader = multer({ dest: 'temp/pictures' })

router
  // 一个测试
  .get('/', Welcome.first)

  // 文章相关
  .post('/api/article', Article.publish) //发表文章
  .post('/api/picture', pictureUploader.array('files', 5), Picture.uploadArticlePicture)  // 文章上传图片

  // 想法相关
  .post('/api/thoughts', pictureUploader.single('cover'), Thoughts.publishThoughts) //发表thoughts

  // Test
  .get('/api/test', Test.getId);
export default router