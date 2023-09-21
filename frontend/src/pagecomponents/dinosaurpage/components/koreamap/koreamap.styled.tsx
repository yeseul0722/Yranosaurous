import styled, { css } from 'styled-components';

const StyledMapContainer = styled.div`
  /* border: 1px solid yellow; */
  width: 1000px;
`;

const StyledMapPath = styled.path`
  fill: ${(props) => props.theme.colors.light};
  fill-opacity: 1;
  stroke: #f3f8f8;
  stroke-opacity: 1;
  stroke-width: 1.5;
`;

const StyledMapExitsPath = styled.path`
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
  viewBox: '180 -180 100 100',
  preserveAspectRatio: 'none',
}))`
  overflow: visible;
`;

const StyledMapDs = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const land = props.land;
    const landName: any = {
      gyeonggi: `
      // 위치/크키 변경 금지!
      visibility: visible;
      top : 14rem;
      left : 23rem;
    `,
      southgyeongsang: `
      visibility: visible;
      top : 30rem;
      left : 50rem;
    `,
      southjeolla: `
      visibility: visible;
      top : 28rem;
      left : 7rem;
    `,
    };
    return css`
      /* border: 1px solid green; */
      position: absolute;
      display: flex;
      visibility: hidden;
      ${landName[land]}
    `;
  }}
`;

const StyledMapDsName = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: 1.5rem;
  margin-top: 7rem;
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
`;

const StyledMapArrowContainer = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const land = props.land;
    const landName: any = {
      gyeonggi: `
      width: 15rem;
      height: auto;
    `,
      southgyeongsang: `
      width: 10rem;
      height: 5rem;
    `,
      southjeolla: `
      width: 10rem;
      height: 5rem;
    `,
    };
    return css`
      /* border: 1px solid green; */
      filter: invert(100%);
      /* width: 5rem;
      height: 5rem; */
      ${landName[land]}
    `;
  }}
`;

export {
  StyledMapContainer,
  StyledMapSvg,
  StyledMapPath,
  StyledMapExitsPath,
  StyledMapDs,
  StyledMapDsName,
  StyledMapArrowContainer,
};
