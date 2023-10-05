import styled from 'styled-components';

const StyledAccomoListContainer = styled.div``;

const StyledAccomoContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
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
  font-family: ${(props) => props.theme.fonts.regularfont};
`;

export {
  StyledAccomoImg,
  StyledAccomoListContainer,
  StyledAccomoListInfo,
  StyledAccomoRating,
  StyledAccomoStoreName,
  StyledAccomoContainer,
};
