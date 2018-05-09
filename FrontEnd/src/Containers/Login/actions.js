/**
 *
 * Name: Login actions
 * Date: 2018-01-22 15:12:44
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import { createAction } from 'redux-actions'
import {
  request,
} from './sources'

export const defaultAction = createAction('SRC/LOGIN/DEFAULT_ACTION', request)
