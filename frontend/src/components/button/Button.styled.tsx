import styled, { css } from 'styled-components';
import { ButtonStyles } from './Button.Type';

const StyledButton = styled.button.attrs<ButtonStyles>((props) => ({}))`
  ${(props) => {
    const use = props.use || 'basic';
    const main = props.theme.colors.main;
    const white = props.theme.colors.white;
    const dark = props.theme.colors.dark;
    const font = props.theme.fonts.regularfont;
    const boldfont = props.theme.fonts.boldfont;
    const UseStlye: any = {
      basic: `
            
        `,
      ticket: `
            font-family:${boldfont};
            border-radius : 48px;
            background-color : ${white};
            color : ${main};
            font-size : 24px;
            padding : 10px;

            &:hover{
               color : ${white};
              background-color : ${dark};
            }
        `,
      mobileticket: `
            border-radius : 20px;
            background-color : ${white};
            color : ${main};
            font-size : 14px;
            
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
