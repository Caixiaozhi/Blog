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
const Login = LoadComponent(()=>(
    import('_containers/Login')
))
const LoginPage = LoadComponent(()=>(
    import('_containers/LoginPage')
))
const routes = (
            <App>
                <Switch>
                    <Route path='/home' render={()=>
                        <HomePage>
                            <Switch>
                                <Route path='/home/cxz' component={CXZ}/>
                            </Switch>
                        </HomePage>
                    }>
                    </Route>
                    <Route path='/login' component={Login}/>
                    <Route path='/login_page' component={LoginPage}/>
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
