import React from 'react';
import HotLoader from 'react-hot-component-loader';
import Loadable from 'react-loadable';
import {
    HashRouter,
    BrowserRouter,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import App from './App.js';
import LoadingComponent from '_containers/LoadingComponent';
import HomePage from '_containers/HomePage';

const Router = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;

const LoadComponent = (loader) => {
    if (process.env.NODE_ENV === 'production') {
      return Loadable({
        loader,
        loading: LoadingComponent,
        delay: 500,
      })
    }
    return HotLoader(
      loader,
      {
        LoadingComponent,
      }
    )
  }

const CXZ = LoadComponent(()=>(
    import('_containers/CXZ')
))

const Edit = LoadComponent(()=>(
    import('_containers/Edit')
))

const routes = (
            <App>
                <Switch>
                    <Route path='/home' render={()=>
                        <HomePage>
                            <Switch>
                                <Route path='/home/cxz' component={CXZ}/>
                                <Route path='/home/edit' component={Edit} />
                                <Redirect from='/home' to='/home/edit' />
                            </Switch>
                        </HomePage>
                    }>
                    </Route>
                    <Redirect from='/' to='/home' />
                </Switch>
            </App>
);

export default function Routes() {
    return (
        <Router>
            {routes}
        </Router>
    )
}
