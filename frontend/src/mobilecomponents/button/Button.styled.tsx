import styled, { css } from 'styled-components';
import { ButtonStyles } from './Button.Type';

const StyledButton = styled.button.attrs<ButtonStyles>((props) => ({}))`
  ${(props) => {
    const use = props.use || 'basic';
    const main = props.theme.colors.main;
    const light = props.theme.colors.light;
    const white = props.theme.colors.white;
    const black = props.theme.colors.black;
    const font = props.theme.fonts.regularfont;
    const UseStlye: any = {
      basic: `
            
        `,
      list: `
            border-radius : 48px;
            background-color : ${main};
            color : ${white};
            font-size : 12px;
        `,
      category: `
        border-radius : 20px;
            background-color : ${light};
            color : ${white};
            font-size : 20px;
            padding-bottom:10px;
      `,
    };
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      border: hidden;
      width: 100%;
      height: 100%;
      font-family: ${font};
      ${UseStlye[use]}
      cursor: pointer;
    `;
  }}
`;

export { StyledButton };
