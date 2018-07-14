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
import AdminPage from '_containers/AdminPage';
import Contact from '_containers/Contact';
import Blog from '_containers/Blog'
import EditThoughts from '_containers/EditThoughts'

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

const CXZ = LoadComponent(() => (
    import('_containers/CXZ')
))

const Edit = LoadComponent(() => (
    import('_containers/Edit')
))

const Home = LoadComponent(() => (
    import('_containers/Home')
))

const routes = (
    <App>
        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/blog' component={Blog} />
            <Route path='/admin' render={() =>
                <AdminPage>
                    <Switch>
                        <Route path='/admin/editthoughts' component={EditThoughts} />
                        <Route path='/admin/edit' component={Edit} />
                        <Redirect from='/admin' to='/admin/edit' />
                    </Switch>
                </AdminPage>
            }>
            </Route>
            <Route path="/contact" component={Contact} />
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
