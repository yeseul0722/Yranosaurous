import React from 'react';
import { StyledButton } from './Button.styled';
import { ButtonStyles } from './Button.Type';

const Button = (props: ButtonStyles) => {
  return <StyledButton {...props}>{props.label || null}</StyledButton>;
};

export default Button;
