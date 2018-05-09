/**
 *
 * Name: HeaderComponent reducer
 * Date: 2018-01-11 16:56:24
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import lodash from 'lodash'
import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'

const initialState = fromJS({
  userInfo: {
    avatar: null,
    name: '',
  }
})

export default handleActions({
  'SRC/HEADER_COMPONENT/GET_USER_INFO_ACTION': {
    next(state, action) {
      const avatar = lodash.get(action, 'payload.avatar')
      const name = lodash.get(action, 'payload.name')
      return state
        .setIn(['userInfo', 'avatar'], avatar)
        .setIn(['userInfo', 'name'], name)
    },
    throw(state) {
      return state
    },
  },
}, initialState)
