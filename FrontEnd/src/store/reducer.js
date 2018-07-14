import { combineReducers } from 'redux-immutable';

import admin from "_containers/AdminPage/reducer";
import headerComponent from '_containers/HeaderComponent/reducer';
import edit from '_containers/Edit/reducer';
import home from '_containers/Home/reducer';
import editThoughts from "_containers/EditThoughts/reducer";

const reducers = {
  admin,
  headerComponent,
  edit,
  home,
  editThoughts,
}

export default combineReducers(reducers)