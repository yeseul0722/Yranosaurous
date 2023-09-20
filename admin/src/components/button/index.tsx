import { ButtonStyles } from './Button.type';
import { StyledButton } from './Button.styled';

const Button = (props: ButtonStyles) => {
  return (
    <>
      <StyledButton {...props}>{props.label || 'Button'}</StyledButton>
    </>
  );
};

export default Button;
