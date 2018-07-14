/**
 *
 * Name: EditThoughts reducer
 * Date: 2018-07-07 16:42:00
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import lodash from 'lodash'
import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'

const initialState = fromJS({
  thoughtId: 0,
  status: {
    publishThoughtsStatus: 'initial',
  }
})

export default handleActions({
  'SRC/EDIT_THOUGHTS/PUBLISH_THOUGHTS_ACTION': {
    next(state, action) {
      const thoughtId = lodash.get(action, 'payload.thoughtId')
      return state
        .setIn(['thoughtId'], thoughtId)
        .setIn(['status', 'publishThoughtsStatus'], 'succeed')
    },
    throw(state) {
      return state
        .setIn(['status', 'publishThoughtsStatus'], 'failed')
    },
  },
  'SRC/EDIT_THOUGHTS/INITIAL_PUBLISH_THOUGHTS_STATUS_ACTION': {
    next(state, action) {
      const status = lodash.get(action, 'payload.status')
      const name = lodash.get(action, 'payload.name')
      const mapNameToStatus = {
        thoughts: 'publishThoughtsStatus',
      }
      return state.setIn(['status', mapNameToStatus[name]], status)
    }
  }
}, initialState)
