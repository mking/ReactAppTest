import Promise from 'bluebird';
import React from 'react';
import styled from 'styled-components';

const Loading = styled.div`
  color: #ffffff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const AustriaCases = React.lazy(async () => {
  await Promise.delay(1000);
  return import(/* webpackChunkName: "austria" */ './AustriaCases');
});

const AustriaSuspense = () => {
  return (
    <React.Suspense fallback={<Loading>Loading...</Loading>}>
      <AustriaCases />
    </React.Suspense>
  );
};

export default AustriaSuspense;
