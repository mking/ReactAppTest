import delay from 'delay';
import React from 'react';
import Loading from './Common/Loading';
import { injectReducer } from '../helpers/reduxHelpers';

const AustriaCases = React.lazy(async () => {
  const [reducerModule, componentModule] = await Promise.all([
    import(
      /* webpackChunkName: "austriaReducer"  */ '@app/src/reducers/austriaReducer'
    ),
    import(
      /* webpackChunkName: "AustriaCases" */ '@app/src/components/AustriaCases'
    ),
  ]);

  await delay(1000);
  injectReducer({
    reducerKey: 'austria',
    reducer: reducerModule.default,
  });
  return componentModule;
});

const AustriaSuspense = () => {
  return (
    <React.Suspense fallback={<Loading>Loading...</Loading>}>
      <AustriaCases />
    </React.Suspense>
  );
};

export default AustriaSuspense;
