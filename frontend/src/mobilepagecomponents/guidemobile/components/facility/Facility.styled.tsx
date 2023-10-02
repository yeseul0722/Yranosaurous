import styled from 'styled-components';

const StyledMoblilFacilitySelectContainer = styled.div.attrs<any>((props) => ({}))`
  /* border-bottom: 1px solid ${(props) => props.theme.colors.light}; */
  /* background-color: ${(props) => props.name && props.name === props.select && props.theme.colors.main}; */
  display: flex;
  align-items: center;
  /* gap: 20px; */
  padding: 5px 15px;
  justify-content: center;
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
  color: ${(props) => props.theme.colors.main};
  font-size: 20px;
`;
const StyledMobileFacilityContainer = styled.div`
  display: flex;
`;

const Test = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  margin-top: 3%;
  padding: 10px;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.theme.colors.white};
  gap: 15px;
`;
export {
  StyledMoblilFacilitySelectContainer,
  StyledMobileFacilityImageContainer,
  StyledMobileFacilityImage,
  StyledMobileFacilityContainer,
  StyledMobileFacility,
  Test,
};
