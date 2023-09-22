import styled, { css } from 'styled-components';

const StyledInput = styled.input.attrs<any>((props) => ({
  value: props.value || '',
  placeholder: props.placeholder || null,
}))`
  ${(props) => {
    const font = props.theme.fonts.regularfont;
    const black = props.theme.colors.black;
    const main = props.theme.colors.main;
    const white = props.theme.colors.white;

    return css`
      font-family: ${font};
      font-size: 15px;
      width: 100%;
      height: 100%;
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
