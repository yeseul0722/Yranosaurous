import styled from 'styled-components';

const StyledMapPath = styled.path`
  fill: ${(props) => props.theme.colors.light};
  fill-opacity: 1;
  stroke: #f3f8f8;
  stroke-opacity: 1;
  stroke-width: 1.5;

  &:hover {
    fill: #000020;
  }
`;

const StyledMapSvg = styled.svg.attrs<any>((props) => ({
  width: 90,
  height: 90,
  viewBox: '180 -100 100 100',
  preserveAspectRatio: 'none',
}))`
  overflow: visible;
`;

export { StyledMapSvg, StyledMapPath };
