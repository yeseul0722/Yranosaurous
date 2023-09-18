import styled, { css } from 'styled-components';

const StyledCategories = styled.div`
  width: 80px;
  height: 100%;
  background-color: white;
`;

const StyledCategory = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const bgcolor = props.selected ? props.theme.colors.main : props.theme.colors.white;
    const fontcolor = props.selected ? props.theme.colors.white : props.theme.colors.black;
    const font = props.theme.fonts.boldfont;

    return css`
      display: flex;
      gap: 10px;
      flex-direction: column;
      align-items: center;
      padding: 15px 10px;
      cursor: pointer;
      background-color: ${bgcolor};
      color: ${fontcolor};
      font-family: ${font};
    `;
  }}
`;

export { StyledCategories, StyledCategory };
