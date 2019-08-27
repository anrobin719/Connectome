import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage, ListPage, PostPage, EditPage, AuthPage, NotFoundPage } from './pages';
import ModalContainer from './containers/AuthModal/AuthModal';

import './App.scss';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <ModalContainer />
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