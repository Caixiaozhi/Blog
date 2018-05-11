/**
 *
 * Name: Edit actions
 * Date: 2018-05-10 19:52:15
 * Description: edit article
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import { createAction } from 'redux-actions'
import {
  saveArticle,
} from './sources'

/* 保存临时文章 */
export const saveArticleAction = createAction(
  'SRC/EDIT/SAVE_ARTICLE_ACTION', 
  saveArticle,
)

export const uploadPictureAction = createAction(
  'SRC/EDIT/UPLOAD_PICTIRE_ACTION',
  uploadPicture,
)

