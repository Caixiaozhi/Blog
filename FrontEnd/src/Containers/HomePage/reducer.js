import { fromJS } from 'immutable';
import { handleActions } from "redux-actions";

const initialState = fromJS({
  count: '0',
})


export default handleActions({
  'Home/HOME_INCREMENT': {
    next(state) {
      const next = state
        .set('count', '1')
      return next
    },
    throw(state) {
      return state
    },
  },
}, initialState);
