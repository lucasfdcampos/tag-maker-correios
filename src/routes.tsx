import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateTag from './pages/CreateTag';
import Tag from './pages/Tag';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CreateTag} />
        <Route path="/tag/:name/:street/:number/:neighborhood/:complement/:cep/:city/:state" component={Tag} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
