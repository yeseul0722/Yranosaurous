import styled from 'styled-components';

const StyledMoblilFacilitySelectContainer = styled.div.attrs<any>((props) => ({}))`
  border-bottom: 1px solid ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.name === props.select && props.theme.colors.menu};
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px;
`;

const StyledMobileFacilityImageContainer = styled.div`
  width: 50px;
  height: 50px;
`;
const StyledMobileFacilityImage = styled.img.attrs<any>((props) => ({
  src: `/markers/${props.marker}.png`,
}))`
  width: 100%;
  height: 100%;
`;

const StyledMobileFacility = styled.div.attrs<any>((props) => ({}))`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => (props.select === props.name ? props.theme.colors.main : props.theme.colors.white)};
  font-size: 20px;
`;
const StyledMobileFacilityContainer = styled.div`
  display: flex;
`;
export {
  StyledMoblilFacilitySelectContainer,
  StyledMobileFacilityImageContainer,
  StyledMobileFacilityImage,
  StyledMobileFacilityContainer,
  StyledMobileFacility,
};
