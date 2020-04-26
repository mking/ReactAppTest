/*global REACT_APP_COVID_URL*/

import React from 'react';
import styled, { keyframes } from 'styled-components';
import ErrorButton from '@app/src/components/ErrorButton';
import StyledLink from '@app/src/components/Common/StyledLink';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #ffffff;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`;

const Link = styled.a`
  color: #61dafb;
`;

const LearnReact = () => {
  return (
    <Container>
      <Logo src={require('../assets/logo.svg')} alt="logo" />
      <p>
        <StyledLink to="/">Home</StyledLink>
      </p>
      <p>
        <ErrorButton />
      </p>
      <p>NODE_ENV: {process.env.NODE_ENV}</p>
      <p>REACT_APP_COVID_URL: {`${REACT_APP_COVID_URL}/api/123`}</p>
      <p>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </p>
    </Container>
  );
};

export default LearnReact;
