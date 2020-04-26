import React from 'react';

const ErrorButton = () => {
  const onError = () => {
    throw new Error('test error');
  };

  return (
    <button css={styles.button} type="button" onClick={onError}>
      Error
    </button>
  );
};

const styles = {
  button: {
    fontSize: 40,
    color: '#ff0000',
  },
};

export default ErrorButton;
