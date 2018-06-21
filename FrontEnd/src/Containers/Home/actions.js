/**
 *
 * Name: Home actions
 * Date: 2018-06-04 16:28:04
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import { createAction } from 'redux-actions'
import {
  request,
} from './sources'

export const defaultAction = createAction('SRC/HOME/DEFAULT_ACTION', request)
