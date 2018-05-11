/**
 *
 * Name: Edit selector
 * Date: 2018-05-10 19:52:15
 * Description: edit article
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import { createSelector } from 'reselect'

const selectorDomain = (state) => state.get('edit')

const selector = () => createSelector(
  selectorDomain,
  (substate) => substate
)

export default selector
