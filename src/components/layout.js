/**
 * Created by yangliu on 2/07/2017.
 */
import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <header>
                    <Link to="/">
                        <h1>Income tax calculator</h1>
                    </Link>
                </header>
                <div className="app-content">{this.props.children}</div>
                <footer>
                    <p>
                       Contact <strong>yangliu1010my@gmail.com</strong>.
                    </p>
                </footer>
            </div>
        );
    }
}