/**
 *
 * Name: HeaderComponent actions
 * Date: 2018-01-11 16:56:24
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import { createAction } from 'redux-actions'
import {
  getUserInfo,
} from './sources'

export const getUserInfoAction = createAction(
  'SRC/HEADER_COMPONENT/GET_USER_INFO_ACTION', 
  getUserInfo
)
