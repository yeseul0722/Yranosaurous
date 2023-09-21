import { ButtonType } from './Button.type';
import { StyledButton } from './Button.styled';

const Button = (props: ButtonType) => {
  return (
    <>
      <StyledButton {...props}>{props.label || 'Button'}</StyledButton>
    </>
  );
};

export default Button;
