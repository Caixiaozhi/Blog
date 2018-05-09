import { applyMiddleware, compose, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';

import  rootReducer  from './reducer';


function configStore (initialState) {
  let store = null;
  if(process.env.NODE_ENV === 'production') {
    const createStoreWithMiddleware = compose(
      applyMiddleware(
        promiseMiddleware,
      ),
    )(createStore)
    store = createStoreWithMiddleware(rootReducer, initialState)
  } else {
    const middlewares = [promiseMiddleware, createLogger()]
    const enhancers = []
    const devToolsExtension = window.devToolsExtension;
    if(typeof devToolsExtension === 'function'){
      enhancers.push(devToolsExtension())
    }
    store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(...middlewares),
        ...enhancers
      )
    );
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducer', () => {
        const nextRootReducer = require('./reducer')  // eslint-disable-line
        store.replaceReducer(nextRootReducer)
      })
    }
  }
  return store;
}

export default configStore