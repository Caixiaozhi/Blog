import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import './index.css';
import Routes from './router';
import registerServiceWorker from './registerServiceWorker';
import createStore from "_store/createStore";

const initialState = fromJS({});
const store = createStore(initialState);

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('root')
    )
}

render(Routes)
//当模块更新的时候，通知index.js
if (module.hot) {
    module.hot.accept('./router', () => {
        render(Routes())
    });
}

registerServiceWorker();
