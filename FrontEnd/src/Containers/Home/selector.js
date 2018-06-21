/**
 *
 * Name: Home selector
 * Date: 2018-06-04 16:28:04
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import { createSelector } from 'reselect'

const selectorDomain = (state) => state.get('home')

const selector = () => createSelector(
  selectorDomain,
  (substate) => substate
)

export default selector
