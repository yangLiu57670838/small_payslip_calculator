/**
 * Created by yangliu on 3/07/2017.
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import index from './components/index';
import layout from './components/layout';

const routes = (
    <Route path="/" component={layout}>
        <IndexRoute component={index}/>
        <Route path="*" component={index}/>
    </Route>
);

export default routes;