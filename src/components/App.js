import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import ErrorButton from './ErrorButton';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
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

const App = () => {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <Container>
        <Header>
          <Logo src={require('../assets/logo.svg')} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            <ErrorButton />
          </p>
          <p>Test</p>
          <p>
            <Link
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </Link>
          </p>
        </Header>
      </Container>
    </React.StrictMode>
  );
};

export default App;
