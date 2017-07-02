/**
 * Created by yangliu on 3/07/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import appRoutes from './components/appRoutes';

window.onload = () => {
    ReactDOM.render(<appRoutes/>, document.getElementById('main'));
};