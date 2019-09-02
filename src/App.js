import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage, ListPage, PostPage, EditPage, NotFoundPage } from './pages';
import Base from './containers/common/Base';

import './App.scss';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <Base />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/page/:page" component={ListPage} />
          <Route path="/tag/:tag/:page?" component={ListPage} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/edit" component={EditPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    );
  }
}

export default App;