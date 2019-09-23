import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Toolbar from "../../components/common/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/common/Navigation/SideDrawer/SideDrawer";
import Footer from "../../components/common/Footer/Footer";
import * as actions from "../../store/actions/index";
import classes from "./Layout.scss";

class Layout extends Component {
  state = {
    showDrawer: false
  };

  submitHandler = searchValue => {
    const { history } = this.props;
    if (searchValue.length !== 0) {
      history.push(`/list/${searchValue}`);
    }
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showDrawer: !prevState.showDrawer };
    });
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showDrawer: false });
  };

  render() {
    console.log(this.props.location);
    const { onShowModal, onLogout, isAuthenticated } = this.props;
    return (
      <Fragment>
        <SideDrawer
          onShowModal={onShowModal}
          onLogout={onLogout}
          isAuthenticated={isAuthenticated}
          show={this.state.showDrawer}
          hide={this.sideDrawerClosedHandler}
        />
        <Toolbar
          onShowModal={onShowModal}
          onLogout={onLogout}
          isAuthenticated={isAuthenticated}
          submitHandler={this.submitHandler}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <main className={classes.LayoutMain}>{this.props.children}</main>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onShowModal: modalName => dispatch(actions.showModal(modalName)),
    onLogout: () => dispatch(actions.authLogout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Layout));
