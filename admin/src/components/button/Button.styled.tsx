import styled, { css } from 'styled-components';
import { ButtonStyles } from './Button.type';

const StyledButton = styled.button.attrs<ButtonStyles>((props) => ({}))`
  ${(props) => {
    const main = props.theme.colors.main;
    const white = props.theme.colors.white;
    const black = props.theme.colors.black;

    const bgcolor = props.ismain ? main : white;
    const color = props.ismain ? white : black;

    return css`
      cursor: pointer;
      font-size: 16px;
      height: 100%;
      width: 100%;
      background-color: ${bgcolor};
      color: ${color};
      border-radius: 35px;
      &:hover {
        opacity: 0.5;
      }
      &:active {
        margin-left: 3px;
        margin-top: 3px;
      }
    `;
  }};
`;

export { StyledButton };
