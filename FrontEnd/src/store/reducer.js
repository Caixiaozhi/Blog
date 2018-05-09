import { combineReducers } from 'redux-immutable';

import home from "_containers/HomePage/reducer";
import headerComponent from '_containers/HeaderComponent/reducer';
import loginPage from '_containers/LoginPage/reducer';

const reducers = {
  home,
  loginPage,
  headerComponent,
}

export default combineReducers(reducers)