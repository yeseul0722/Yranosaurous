import styled from 'styled-components';

const StyledAnimalDetailPage = styled.div``;

const StyledAnimalDetailWindow = styled.div`
  background-color: #a5a5a542;
  border-radius: 30px;
  overflow: hidden;
  width: 400px;
  height: 500px;
  /* margin-left: 15%; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyldAnimalDetailWindowBorder = styled.div`
  border: 3px solid ${(props) => props.theme.colors.white};
  background-color: #a5a5a542;
  width: 89%;
  height: 93%;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  text-align: left;
`;

const StyledAnimalDetailTitle = styled.div`
  font-size: 1.3rem;
  padding: 1.5rem;
`;

const StyledAnimalCloseButton = styled.div`
  color: #ffffff;
  padding-top: 1.5rem;
  padding-right: 1rem;
  font-size: 30px;
  cursor: pointer;
`;

const StyledAnimalBody = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid blue; */
`;

const StyledAnimalSpecies = styled.div`
  /* border: 1px solid red; */
  margin: 5px;
  padding-left: 20px;
`;

const StyledAnimalSpeciesInfo = styled.div``;

export {
  StyledAnimalDetailPage,
  StyledAnimalDetailWindow,
  StyldAnimalDetailWindowBorder,
  StyledAnimalDetailTitle,
  StyledAnimalBody,
  StyledAnimalSpecies,
  StyledAnimalSpeciesInfo,
  StyledAnimalCloseButton,
};
