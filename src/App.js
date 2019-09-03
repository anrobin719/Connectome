import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions/index';
import { HomePage, ListPage, PostPage, EditPage, NotFoundPage } from './pages';
import Layout from './hoc/Layout/Layout';
import Base from './containers/common/Base';
import './App.scss';

class App extends Component {
  componentDidMount() {
    this.props.onCheckAuth();
  }

  render() {
    const { isAuthenticated } = this.props;
    let routes = (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/list" component={ListPage} />
        <Route path="/list/:search" component={ListPage} />
        <Route path="/tag/:tag1/:tag2?" component={ListPage} />
        <Route path="/post/:id" component={PostPage} />
        <Route component={NotFoundPage} />
      </Switch>
    );
    if (isAuthenticated) {
      routes = (
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/list" component={ListPage} />
          <Route path="/list/:search" component={ListPage} />
          <Route path="/tag/:tag1/:tag2?" component={ListPage} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/edit" component={EditPage} />
          <Route component={NotFoundPage} />
        </Switch>
      )
    }
    return (
      <Layout>
        <Base />
        {routes}
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckAuth: () => dispatch(actions.checkAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);