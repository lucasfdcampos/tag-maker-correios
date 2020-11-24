import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FormTag from './pages/FormTag';
import Label from './pages/Label';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FormTag} />
        <Route path="/label" component={Label} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
