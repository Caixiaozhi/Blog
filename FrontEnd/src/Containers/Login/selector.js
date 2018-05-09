/**
 *
 * Name: Login selector
 * Date: 2018-01-22 15:12:44
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import { createSelector } from 'reselect'

const selectorDomain = (state) => state.get('login')

const selector = () => createSelector(
  selectorDomain,
  (substate) => substate
)

export default selector
