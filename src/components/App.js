import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import debug from 'debug';
import AppSuspense from './AppSuspense';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #282c34;
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
      <GlobalStyle />
      <AppSuspense />
    </React.StrictMode>
  );
};

export default App;
