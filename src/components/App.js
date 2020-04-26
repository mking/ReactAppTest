import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import debug from 'debug';
import CaseDirectory from './CaseDirectory';
import SwitzerlandCases from './SwitzerlandCases';
import AustriaCases from './AustriaCases';
import LearnReact from './LearnReact';
import { history } from '../helpers/routerHelpers';
import { store } from '../helpers/reduxHelpers';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

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
          <>
            <GlobalStyle />
            <Switch>
              <Route exact path="/" component={CaseDirectory} />
              <Route exact path="/switzerland" component={SwitzerlandCases} />
              <Route exact path="/austria" component={AustriaCases} />
              <Route component={LearnReact} />
            </Switch>
          </>
        </Router>
      </Provider>
      s
    </React.StrictMode>
  );
};

export default App;
