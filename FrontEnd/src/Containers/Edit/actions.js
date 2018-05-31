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
  publishArticle,
  // uploadPicture,
} from './sources'

/* 保存临时文章 */
export const saveArticleAction = createAction(
  'SRC/EDIT/SAVE_TEMP_ARTICLE_ACTION', 
  saveArticle,
)

/* 发表文章 */
export const publishArticleAction = createAction(
  'SRC/EDIT/PUBLISHARTICLEACTION',
  publishArticle,
)

/* 删除标签 */
export const deleteTagsAction = createAction(
  'SRC/EDIT/DELETE_TAGS_ACTION',
)

/* 增加标签 */
export const addTagsAction = createAction(
  'SRC/EDIT/ADD_TAGS_ACTION',
)