import React from 'react';
import { StyledCloseButton } from './CloseButton.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

interface GosungCloseButtonProps {
  onClick: () => void;
}

const GosungCloseButton: React.FC<GosungCloseButtonProps> = ({ onClick }) => {
  return (
    <div>
      <StyledCloseButton onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </StyledCloseButton>
    </div>
  );
};
export default GosungCloseButton;
