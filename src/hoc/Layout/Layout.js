import React, { Component, Fragment } from 'react';

import Toolbar from '../../components/common/Toolbar/Toolbar';
import Footer from '../../components/common/Footer/Footer';
import classes from './Layout.scss';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Toolbar />
                <main className={classes.LayoutMain}>
                    {this.props.children}
                </main>
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;