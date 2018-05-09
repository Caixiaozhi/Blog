/**
 *
 * Name: LoginPage reducer
 * Date: 2018-01-29 20:40:38
 * Description: This is a container component
 * Author: wymhuster
 * Organization: ELWG
 *
 */

import lodash from 'lodash'
import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'

const initialState = fromJS({
  authorInfo:{},
  status: {
    getAuthorInfoStatus: 'initial',
  }
})

export default handleActions({
  /* 登录后获取用户的信息 */
  'SRC/LOGIN_PAGE/GET_AUTHOR_INFO_ACTION': {
    next(state, action) {
      const authorInfo = lodash.get(action, 'payload')
      console.log(authorInfo, 11111)
      return state
        .set('authorInfo', fromJS(authorInfo))
        .setIn(['status', 'getAuthorInfoStatus'], 'success')
    },
    throw(state) {
      return state
    },
  },
}, initialState)
