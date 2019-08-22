import React, { Component, Fragment } from 'react';

import Toolbar from '../../components/common/Toolbar/Toolbar';
import classes from './Layout.scss';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Toolbar />
                <main className={classes.LayoutMain}>
                    {this.props.children}
                </main>
                <footer>footer</footer>
            </Fragment>
        );
    }
}

export default Layout;