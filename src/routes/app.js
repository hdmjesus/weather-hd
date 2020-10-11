import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../template/Home';
import NotFound from '../template/NotFount';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
