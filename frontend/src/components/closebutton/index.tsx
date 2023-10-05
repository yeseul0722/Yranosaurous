import React from 'react';
import { StyledBackIcon, StyledCloseButton, StyledForwardIcon } from './CloseButton.styled';

interface GosungCloseButtonProps {
  onClick: () => void;
  showSideList: boolean;
}

const GosungCloseButton: React.FC<GosungCloseButtonProps> = ({ onClick, showSideList }) => {
  return (
    <div>
      <StyledCloseButton onClick={onClick}>
        {showSideList ? <StyledBackIcon /> : <StyledForwardIcon />}
      </StyledCloseButton>
    </div>
  );
};
export default GosungCloseButton;
