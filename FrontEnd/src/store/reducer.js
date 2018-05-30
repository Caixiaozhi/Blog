import { combineReducers } from 'redux-immutable';

import home from "_containers/HomePage/reducer";
import headerComponent from '_containers/HeaderComponent/reducer';
import edit from '_containers/Edit/reducer';

const reducers = {
  home,
  headerComponent,
  edit,
}

export default combineReducers(reducers)