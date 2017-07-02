/**
 * Created by yangliu on 2/07/2017.
 */
import React from 'react';

export default class index extends React.Component {
    render() {
        const headerStyle = { backgroundColor: `#3b5998` };
        return (
            <div className="home">
                <header style={headerStyle}>
                    <h1>Income</h1>
                </header>
                <p>content here for now..</p>
                <section>
                    <p>Winner medals:</p>
                </section>
            </div>
        );
    }
}