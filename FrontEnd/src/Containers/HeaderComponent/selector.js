/**
 *
 * Name: HeaderComponent selector
 * Date: 2018-01-11 16:56:24
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import { createSelector } from 'reselect'
import {
  immutableObjectEmpty,
  immutableArrayEmpty,
} from '_utils/constants'

const selectorDomain = (state) => state.get('headerComponent')

//用户信息
const userInfoSelector = createSelector(
  selectorDomain,
  (selectorDomain) => selectorDomain.get('userInfo') || immutableObjectEmpty
) 

//最终导出数据
const selector = createSelector(
  userInfoSelector,
  (
    userInfo
  ) => ({
    userInfo
  })
)

export default selector
