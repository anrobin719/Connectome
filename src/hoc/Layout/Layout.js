import React, { Component, Fragment } from 'react';

import ToolbarContainer from '../../containers/common/ToolbarContainer';
import Footer from '../../components/common/Footer/Footer';
import classes from './Layout.scss';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <ToolbarContainer />
                <main className={classes.LayoutMain}>
                    {this.props.children}
                </main>
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;