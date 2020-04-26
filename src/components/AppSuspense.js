import React from 'react';
import Loading from './Common/Loading';

const AppRouter = React.lazy(() => {
  return import(
    /* webpackChunkName: "AppRouter" */ '@app/src/components/AppRouter'
  );
});

const AppSuspense = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <AppRouter />
    </React.Suspense>
  );
};

export default AppSuspense;
