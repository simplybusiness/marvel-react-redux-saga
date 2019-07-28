import React from 'react';

// import { Route, Switch, withRouter } from 'react-router-dom';

// import PrivateRoute from 'components/PrivateRoute';
// import TaskScene from 'scenes/TaskBoard';
// import LoginScene from 'scenes/Login';
// import GlobalStyle from 'atoms/GlobalStyle';

const App = (): JSX.Element => {
  return (
    <div>
      This is the first step of your Marvelous react adventure!
      {/* <GlobalStyle />
      <Switch>
        <Route path="/login" component={LoginScene} />
        <PrivateRoute path="/" exact component={TaskScene} />
      </Switch> */}
    </div>
  );
};

export default App; // withRouter(App);
