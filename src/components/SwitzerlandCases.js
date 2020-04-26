import React from 'react';
import styled from 'styled-components';
import StyledLink from './Common/StyledLink';

const debug = require('debug')('ReactAppTest:SwitzerlandCases');

const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: #ffffff;
`;

const SwitzerlandCases = () => {
  const onClick = () => {
    debug('fetching switzerland cases');
  };

  return (
    <Container>
      <p>
        <StyledLink to="/">Home</StyledLink>
      </p>
      <p>Switzerland</p>
      <p>
        <button type="button" onClick={onClick}>
          Get cases
        </button>
      </p>
    </Container>
  );
};

export default SwitzerlandCases;
