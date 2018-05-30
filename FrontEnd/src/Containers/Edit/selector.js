/**
 *
 * Name: Edit selector
 * Date: 2018-05-10 19:52:15
 * Description: edit article
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import { createSelector } from 'reselect'
import {
  immutableArrayEmpty,
  immutableObjectEmpty,
} from '_utils/constants'

const selectorDomain = (state) => state.get('edit')

/* 获取标签值 */
const tagsSelector = createSelector(
  selectorDomain,
  (selectorDomain) => selectorDomain.getIn(['article', 'tags']) || immutableArrayEmpty
)

const selector = createSelector(
  tagsSelector,
  (
    tags
  ) => ({
    tags
  })
)

export default selector
