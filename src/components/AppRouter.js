import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import CaseDirectory from '@app/src/components/CaseDirectory';
import SwitzerlandCases from '@app/src/components/SwitzerlandCases';
import AustriaSuspense from '@app/src/components/AustriaSuspense';
import LearnReact from '@app/src/components/LearnReact';
import { history } from '@app/src/helpers/routerHelpers';
import { store } from '@app/src/helpers/reduxHelpers';

const AppRouter = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <>
          <Switch>
            <Route exact path="/" component={CaseDirectory} />
            <Route exact path="/switzerland" component={SwitzerlandCases} />
            <Route exact path="/austria" component={AustriaSuspense} />
            <Route component={LearnReact} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
};

export default AppRouter;
