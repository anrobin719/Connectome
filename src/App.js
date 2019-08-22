import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Layout from './hoc/Layout/Layout';
import { HomePage, ListPage, PostPage, EditPage, AuthPage, NotFoundPage } from './pages';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" Component={HomePage} />
          <Route path="/page/:page" Component={ListPage} />
          <Route path="/tag/:tag/:page?" Component={ListPage} />
          <Route path="/post/:id" Component={PostPage} />
          <Route path="/edit" Component={EditPage} />
          <Route path="/auth" Component={AuthPage} />
          <Route Component={NotFoundPage} />
        </Switch>
      </Layout>
    );
  }
}

export default App;