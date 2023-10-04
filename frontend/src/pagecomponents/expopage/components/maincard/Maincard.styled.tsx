import styled, { css } from 'styled-components';

const StyledMainCard = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const main = props.theme.colors.main;
    const dark = props.theme.colors.dark;
    const light = props.theme.colors.light;
    const white = props.theme.colors.white;

    const font = props.theme.fonts.boldfont;
    const margin = props.num == '2' ? '40px' : '0px';
    return css`
      background-color: ${props.num === '1' ? white : props.num === '2' ? dark : light};
      color: ${props.num === '2' ? white : main};
      font-family: ${font};
      text-align: left;
      width: 330px;
      border-radius: 30px;
      padding-left: 20px;
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: ${margin};
      gap: 10px;
    `;
  }}
`;

const StyledTitle = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    return css`
      font-size: 20px;
    `;
  }}
`;

export { StyledMainCard, StyledTitle };
