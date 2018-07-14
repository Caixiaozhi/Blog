/**
 *
 * Name: EditThoughts selector
 * Date: 2018-07-07 16:42:00
 * Description: This is a container component
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import { createSelector } from 'reselect'
import { fromJS } from 'immutable'
import { 
  immutableObjectEmpty,
  immutableArrayEmpty
 } from "_utils/constants"

const selectorDomain = (state) => state.get('editThoughts')

const statusSelector = createSelector(
  selectorDomain,
  (selectorDomain) => selectorDomain.get('status') || immutableObjectEmpty
)

const thoughtIdSelector = createSelector(
  selectorDomain,
  (selectorDomain) => selectorDomain.get('thoughtId') || 0
)

const selector = createSelector(
  statusSelector,
  thoughtIdSelector,
  (
    status,
    thoughtId,
  ) => ({
    status,
    thoughtId,
  })
)
export default selector
