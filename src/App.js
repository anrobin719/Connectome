import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Layout from './hoc/Layout/Layout';
import { ListPage, PostPage, EditPage, AuthPage, NotFoundPage } from './pages';
import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/page/:page" component={ListPage} />
          <Route path="/tag/:tag/:page?" component={ListPage} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/edit" component={EditPage} />
          <Route path="/auth" component={AuthPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    );
  }
}

export default App;