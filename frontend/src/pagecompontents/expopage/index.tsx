import React from 'react';
import { ExpoPageContainer, ExpoMainPosterContainer, ExpoMainPoster, ExpoInfo } from './Expopage.styled';
const ExpoPage = () => {
  return (
    <ExpoPageContainer>
      <ExpoMainPosterContainer>
        <ExpoMainPoster>
          <ExpoInfo>아이들과</ExpoInfo>
          <ExpoInfo>공룡세계엑스포부터</ExpoInfo>
          <ExpoInfo>고성여행까지!</ExpoInfo>
        </ExpoMainPoster>
      </ExpoMainPosterContainer>
    </ExpoPageContainer>
  );
};

export default ExpoPage;
