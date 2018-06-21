/**
 *
 * Name: Home reducer
 * Date: 2018-06-04 16:28:04
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
  'APP/HOME/DEFAULT_ACTION': {
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
