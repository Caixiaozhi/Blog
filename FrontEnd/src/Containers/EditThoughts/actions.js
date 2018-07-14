/**
 *
 * Name: EditThoughts actions
 * Date: 2018-07-07 16:42:00
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import { createAction } from 'redux-actions'
import {
  publishThoughts,
} from './sources'

export const publishThoughtsAction = createAction(
  'SRC/EDIT_THOUGHTS/PUBLISH_THOUGHTS_ACTION',
  publishThoughts,
)

export const initialPublishThoughtsStatusAction = createAction(
  'SRC/EDIT_THOUGHTS/INITIAL_PUBLISH_THOUGHTS_STATUS_ACTION'
)