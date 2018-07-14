/**
 *
 * Name: Blog selector
 * Date: 2018-07-07 16:17:58
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import { createSelector } from 'reselect'

const selectorDomain = (state) => state.get('blog')

const selector = createSelector(
  selectorDomain,
  (substate) => substate
)

export default selector