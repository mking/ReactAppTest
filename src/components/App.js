import React from 'react';
import { Global, keyframes } from '@emotion/core';
import ErrorButton from './ErrorButton';

const App = () => {
  return (
    <React.StrictMode>
      <Global styles={styles.global} />
      <div css={styles.app}>
        <header css={styles.header}>
          <img
            css={styles.logo}
            src={require('../assets/logo.svg')}
            alt="logo"
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            <ErrorButton />
          </p>
          <p>Test</p>
          <p>
            <a
              css={styles.link}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </p>
        </header>
      </div>
    </React.StrictMode>
  );
};

const rotate = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

const styles = {
  global: {
    body: {
      margin: 0,
    },
  },
  app: {
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: '#ffffff',
  },
  logo: {
    height: '40vmin',
    pointerEvents: 'none',
    animation: `${rotate} infinite 20s linear`,
  },
  link: {
    color: '#61dafb',
  },
};

export default App;
