import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: #ffffff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Loading = () => <Container>Loading...</Container>;

export default Loading;
