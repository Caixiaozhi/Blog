/**
 *
 * Name: LoginPage selector
 * Date: 2018-01-29 20:40:38
 * Description: This is a container component
 * Author: wymhuster
 * Organization: ELWG
 *
 */

import { createSelector } from 'reselect'
import {immutableObjectEmpty} from '_utils/constants'

const selectorDomain = (state) => state.get('loginPage')

const authorInfoSelector = createSelector(
  selectorDomain,
  (selectorDomain) => selectorDomain.get('authorInfo') || immutableObjectEmpty
)
const selector = createSelector(
  authorInfoSelector,
  (
    authorInfo
  ) => ({
    authorInfo
  })
)

export default selector
