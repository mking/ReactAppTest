import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Router, Switch, Route } from 'react-router-dom';
import debug from 'debug';
import CaseDirectory from './CaseDirectory';
import SwitzerlandCases from './SwitzerlandCases';
import LearnReact from './LearnReact';
import { history } from '../helpers/historyHelpers';

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
      <Router history={history}>
        <>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={CaseDirectory} />
            <Route exact path="/switzerland" component={SwitzerlandCases} />
            <Route component={LearnReact} />
          </Switch>
        </>
      </Router>
    </React.StrictMode>
  );
};

export default App;
