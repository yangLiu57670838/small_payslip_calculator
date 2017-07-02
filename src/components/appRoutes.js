/**
 * Created by yangliu on 3/07/2017.
 */
import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

export default class appRoutes extends React.Component {
    render() {
        return (
            <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
        );
    }
}