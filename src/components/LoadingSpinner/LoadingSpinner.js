import React from 'react';
import { Spin } from 'antd';
import { SpinnerContainer } from './LoadingSpinner.styles';

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spin size="large" tip="Loading users..." />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;