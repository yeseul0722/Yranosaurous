import styled, { css } from 'styled-components';
import { ButtonType } from './Button.type';

const StyledButton = styled.button.attrs<ButtonType>((props) => ({}))`
  ${(props) => {
    const main = props.theme.colors.main;
    const white = props.theme.colors.white;
    const black = props.theme.colors.black;
    const font = props.theme.fonts.regularfont;
    const bgcolor = props.ismain == 'true' ? main : white;
    const color = props.ismain == 'true' ? white : black;

    return css`
      cursor: pointer;
      font-size: 16px;
      font-family: ${font};
      height: 100%;
      width: 100%;
      background-color: ${bgcolor};
      color: ${color};
      border: none;
      border-radius: 5px;
      &:active {
        margin-left: 3px;
        margin-top: 3px;
      }
    `;
  }};
`;

export { StyledButton };
