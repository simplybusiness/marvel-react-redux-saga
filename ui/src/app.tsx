import React from 'react';

import heroes from 'assets/heroes.json';
import HeroList from 'components/HeroList';

// import { Route, Switch, withRouter } from 'react-router-dom';

// import PrivateRoute from 'components/PrivateRoute';
// import TaskScene from 'scenes/TaskBoard';
// import LoginScene from 'scenes/Login';
// import GlobalStyle from 'atoms/GlobalStyle';

const App = (): JSX.Element => {
  return <HeroList heroes={heroes} />;
};

/*
<GlobalStyle />
<Switch>
  <Route path="/login" component={LoginScene} />
  <PrivateRoute path="/" exact component={TaskScene} />
</Switch>
*/

export default App; // withRouter(App);
