import { combineReducers } from 'redux-immutable';

import home from "_containers/HomePage/reducer";
import headerComponent from '_containers/HeaderComponent/reducer';

const reducers = {
  home,
  headerComponent,
}

export default combineReducers(reducers)