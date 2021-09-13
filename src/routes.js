import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Posts from './pages/Posts'
import Albums from './pages/Albums'
import Todos from './pages/Todos'
import Galleries from './pages/Galleries'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Posts} path="/posts" exact />
      <Route component={Galleries} path="/albuns" exact />
      <Route component={Albums} path="/albums/:id" exact />
      <Route component={Todos} path="/todos" exact />
    </BrowserRouter>
  );
}

export default Routes;