import styled, { css } from 'styled-components';

const StyledInput = styled.input.attrs<any>((props) => ({
  value: props.value || undefined,
  placeholder: props.placeholder || null,
}))`
  ${(props) => {
    const font = props.theme.fonts.regularfont;
    const black = props.theme.colors.black;
    const main = props.theme.colors.main;
    const white = props.theme.colors.white;

    return css`
      font-family: ${font};
      font-size: 16px;
      padding: 10px 0px 10px 20px;
      color: ${black};
      background-color: ${white};
      border: 1.7px solid ${main};
      &:focus {
        outline: none;
        border: solid 2px ${main};
      }
    `;
  }};
`;

export { StyledInput };
