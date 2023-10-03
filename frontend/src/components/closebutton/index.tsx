import React from 'react';
import { StyledCloseButton } from './CloseButton.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface GosungCloseButtonProps {
  onClick: () => void;
  showSideList: boolean;
}

const GosungCloseButton: React.FC<GosungCloseButtonProps> = ({ onClick, showSideList }) => {
  return (
    <div>
      <StyledCloseButton onClick={onClick}>
        {showSideList ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} />}
      </StyledCloseButton>
    </div>
  );
};
export default GosungCloseButton;
