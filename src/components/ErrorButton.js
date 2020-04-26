import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 40;
  color: #ff0000;
`;

const ErrorButton = () => {
  const onError = () => {
    throw new Error('test error');
  };

  return (
    <Button type="button" onClick={onError}>
      Error
    </Button>
  );
};

export default ErrorButton;
