import styled from 'styled-components';

const StyledAccomoListContainer = styled.div``;

const StyledAccomoContainer = styled.div<{ isSelected: boolean }>`
  height: 200px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
  background-color: ${(props) => (props.isSelected ? props.theme.colors.light : props.theme.colors.white)};
  cursor: pointer;
`;

const StyledAccomoListInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;

const StyledAccomoStoreName = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  color: ${(props) => props.theme.colors.main};
  font-size: 17px;
`;

const StyledAccomoImg = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 20px;
  margin: 10px;
  border: 7px solid ${(props) => props.theme.colors.main};
`;

const StyledAccomoRating = styled.div`
  margin-left: 10px;
  margin-bottom: 7px;
`;

const StyledRating = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export {
  StyledAccomoImg,
  StyledAccomoListContainer,
  StyledAccomoListInfo,
  StyledAccomoRating,
  StyledAccomoStoreName,
  StyledAccomoContainer,
  StyledRating,
};
