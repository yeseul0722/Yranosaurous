import styled from 'styled-components';

const StyledDsSpeciesPage = styled.div`
  /* border: 1px solid red; */
  margin: 18px;
  height: 630px;
`;

const StyledDsSpeciesTitle = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 15px;
`;

const StyledDsSpeciesTitleText = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 30px;
  padding: 5px;
`;

const StyledDsSpeciesBody = styled.div`
  border: 1px solid yellow;
`;

// 공룡 종 리스트
const StyledDsSpeciesCardList = styled.div`
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledDsSpeciesCard = styled.div`
  /* border: 1px solid salmon; */
  /* width: 100%; */
  /* height: 100%; */
`;

// 페이지 이동
const StyledDsSpeciesPagenation = styled.div`
  border: 1px solid blue;
`;

const StyledDsSpeciesPagenationButton = styled.div`
  border: 1px solid green;
`;

export {
  StyledDsSpeciesPage,
  StyledDsSpeciesTitle,
  StyledDsSpeciesTitleText,
  StyledDsSpeciesBody,
  StyledDsSpeciesCardList,
  StyledDsSpeciesCard,
  StyledDsSpeciesPagenation,
  StyledDsSpeciesPagenationButton,
};
