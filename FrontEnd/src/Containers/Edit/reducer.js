/**
 *
 * Name: Edit reducer
 * Date: 2018-05-10 19:52:15
 * Description: edit article
 * Author: xiaozhi
 * Organization: ELWG
 *
 */

import lodash from 'lodash'
import { fromJS } from 'immutable'
import { handleActions } from 'redux-actions'
import {
  immutableArrayEmpty,
  immutableObjectEmpty,
} from '_utils/constants'

const initialState = fromJS({
  article: {
    title: null,
    content: null,
    tags: [],
    author: null,
  },
  status: {
    uploadArticleStatus: 'initial',
    uploadPictureStatus: 'initial',
  }
})

export default handleActions({
  'APP/EDIT/DEFAULT_ACTION': {
    next(state, action) {
      const value = lodash.get(action, 'payload.value')
      return state
        .set('value', value)
    },
    throw(state) {
      return state
    },
  },
  'SRC/EDIT/DELETE_TAGS_ACTION': {
    next(state, action) {
      const removedTag = lodash.get(action, 'payload.removedTag')
      const removedTagIndex = state.getIn(['article', 'tags']).keyOf(removedTag)
      return state.deleteIn(['article', 'tags', removedTagIndex])
    },
    throw(state) {
      return state
    }
  },
  'SRC/EDIT/ADD_TAGS_ACTION': {
    next(state, action) {
      const addTag = lodash.get(action, 'payload.addTag')
      if(state.getIn('article', 'tags').includes(addTag)) {
        return state
      }
      return state.updateIn(['article', 'tags'], (value)=> value.push(addTag))
    },
    throw(state) {
      return state
    }
  },
  'SRC/EDIT/PUBLISH_ARTICLE_ACTION': {
    next(state, action) {
      console.log(lodash.get(action, 'payload'))
      return state
    },
    throw(state) {
      return state
    }
  }
}, initialState)
