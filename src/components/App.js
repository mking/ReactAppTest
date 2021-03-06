import React, { useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import debug from 'debug';
import CaseDirectory from '@app/src/components/CaseDirectory';
import SwitzerlandCases from '@app/src/components/SwitzerlandCases';
import AustriaSuspense from '@app/src/components/AustriaSuspense';
import LearnReact from '@app/src/components/LearnReact';
import { history } from '@app/src/helpers/routerHelpers';
import { store } from '@app/src/helpers/reduxHelpers';

// eliminate background flash by loading this css file in the head
import './App.css';

const App = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      debug.enable('ReactAppTest:*');
    }
  }, []);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={CaseDirectory} />
            <Route exact path="/switzerland" component={SwitzerlandCases} />
            <Route exact path="/austria" component={AustriaSuspense} />
            <Route component={LearnReact} />
          </Switch>
        </Router>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
