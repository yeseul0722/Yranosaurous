import React from 'react';
import Lottie from 'lottie-react';
import loadingLottie from '../../../../assets/loadingLottie.json';
import { StyledLoadingScreenContainer } from './Loading.styled';

const Loading = () => {
  return (
    <StyledLoadingScreenContainer>
      <Lottie animationData={loadingLottie} />;
    </StyledLoadingScreenContainer>
  );
};

export default Loading;
