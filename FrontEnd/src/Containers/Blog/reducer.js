/**
 *
 * Name: Blog reducer
 * Date: 2018-07-07 16:17:58
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import lodash from 'lodash'
import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'

const initialState = fromJS({})

export default handleActions({
  'APP/BLOG/DEFAULT_ACTION': {
    next(state, action) {
      const value = lodash.get(action, 'payload.entities.value')
      return state
        .set('value', value)
    },
    throw(state) {
      return state
    },
  },
}, initialState)
