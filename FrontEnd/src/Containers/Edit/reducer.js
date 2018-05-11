/**
 *
 * Name: Edit reducer
 * Date: 2018-05-10 19:52:15
 * Description: edit article
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import lodash from 'lodash'
import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'

const initialState = fromJS({})

export default handleActions({
  'APP/EDIT/DEFAULT_ACTION': {
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
