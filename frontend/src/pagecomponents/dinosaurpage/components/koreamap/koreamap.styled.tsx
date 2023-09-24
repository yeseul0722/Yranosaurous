import styled, { css } from 'styled-components';

const StyledMapContainer = styled.div`
  /* border: 1px solid yellow; */
  /* width: 1000px; */
`;

const StyledMapPath = styled.path`
  fill: ${(props) => props.theme.colors.light};
  fill-opacity: 1;
  stroke: #f3f8f8;
  stroke-opacity: 1;
  stroke-width: 1.5;
`;

const StyledMapExitsPath = styled.path`
  ${({ id }) => {
    if (id === 'gyeonggi') {
      return `
        fill: #599198;
      `;
    } else if (id === 'southgyeongsang') {
      return `
        fill : #599198;
      `;
    } else {
      return `
        fill : #599198;
      `;
    }
  }}
  fill-opacity: 1;
  stroke: #f3f8f8;
  stroke-opacity: 1;
  stroke-width: 1.5;
`;

const StyledMapSvg = styled.svg.attrs<any>((props) => ({
  width: 120,
  height: 120,
  viewBox: '-30 -60 100 100',
  preserveAspectRatio: 'none',
}))`
  overflow: visible;
`;

const StyledMapDs = styled.div`
  position: absolute;
`;

const StyledMapDsName = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const land = props.land;
    const landName: any = {
      gyeonggi: `
      // 위치/크키 변경 금지!
      visibility: visible;
      top : 18rem;
      left : 12.5rem;
    `,
      southgyeongsang: `
      visibility: visible;
      top : 33rem;
      left : 40rem;
    `,
      southjeolla: `
      visibility: visible;
      top : 35rem;
      left : 10rem;
    `,
    };
    return css`
      /* border: 1px solid red; */
      width: 30rem;
      position: absolute;
      display: flex;
      visibility: hidden;
      color: ${(props) => props.theme.colors.white};
      font-family: ${(props) => props.theme.fonts.dinoboldfont};
      font-size: 1.8rem;
      ${landName[land]};
    `;
  }}
`;

const StyledMapArrowContainer = styled.div`
  width: 5rem;
  height: 5rem;
`;

const StyledCircleGyeonggi = styled.div`
  position: absolute;
  top: 17rem;
  left: 25rem;
  width: 5rem;
  height: 5rem;
`;
const StyledCircleSouthgyeongsang = styled.div`
  position: absolute;
  top: 30rem;
  left: 33rem;
  width: 5rem;
  height: 5rem;
`;
const StyledCircleSouthjeolla = styled.div`
  position: absolute;
  top: 33rem;
  left: 25rem;
  width: 5rem;
  height: 5rem;
`;

export {
  StyledMapContainer,
  StyledMapSvg,
  StyledMapPath,
  StyledMapExitsPath,
  StyledMapDs,
  StyledMapDsName,
  StyledMapArrowContainer,
  StyledCircleGyeonggi,
  StyledCircleSouthgyeongsang,
  StyledCircleSouthjeolla,
};
