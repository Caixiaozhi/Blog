/**
 *
 * Name: LoginPage actions
 * Date: 2018-01-29 20:40:38
 * Description: This is a container component
 * Author: wymhuster
 * Organization: ELWG
 *
 */

import { createAction } from 'redux-actions'
import {
  getAuthorInfo,
} from './sources'

export const getAuthorInfoAction = createAction(
  'SRC/LOGIN_PAGE/GET_AUTHOR_INFO_ACTION', 
  getAuthorInfo
)