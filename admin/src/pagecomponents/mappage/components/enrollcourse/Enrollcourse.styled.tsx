import styled, { css } from 'styled-components';

const StyledCourseMap = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.boldfont;

    return css`
      font-family: ${font};
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 5px;
      justify-content: flex-start;
    `;
  }}
`;

export { StyledCourseMap };
