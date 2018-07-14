/**
 *
 * Name: Blog actions
 * Date: 2018-07-07 16:17:58
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import { createAction } from 'redux-actions'
import {
  request,
} from './sources'

export const defaultAction = createAction('SRC/BLOG/DEFAULT_ACTION', request)
