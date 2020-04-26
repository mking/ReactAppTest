import React from 'react';
import styled from 'styled-components';
import StyledLink from './Common/StyledLink';

const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #ffffff;
`;

const SwitzerlandCases = () => {
  return (
    <Container>
      <p>Countries</p>
      <p>
        <StyledLink to="/switzerland">Switzerland</StyledLink>
      </p>
      <p>
        <StyledLink to="/austria">Austria</StyledLink>
      </p>
      <p>
        <StyledLink to="/request">Request a country</StyledLink>
      </p>
    </Container>
  );
};

export default SwitzerlandCases;
