import styled from 'styled-components';

const StyledDsSpeciesPage = styled.div`
  padding: 1.5rem;
  background-color: #0006b074;
  width: 22rem;
  transition: ease 3s;
`;

const StyledDsSpeciesTitle = styled.div`
  text-align: left;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 15px;
  padding-bottom: 5px;
  border-bottom: 5px solid ${(props) => props.theme.colors.white};
  width: 345px;
`;

const StyledDsSpeciesTitleText = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 30px;
  padding: 5px;
  color: ${(props) => props.theme.colors.white};
`;

const StyledDsSpeciesBody = styled.div`
  /* border: 1px solid yellow; */
`;

// 공룡 종 리스트
const StyledDsSpeciesCardList = styled.div`
  height: 530px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  align-content: flex-start;
`;

const StyledDsSpeciesCard = styled.div`
  position: relative;
  height: 130px;
`;

const StyledDsSpeciesCardImg = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 150px;
  height: 100px;
  margin: 5px;
  /* position: relative; */
`;

const StyledDsSpeciesCardName = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  bottom: 30px;
  left: 10px;
  color: ${(props) => props.theme.colors.white};
`;

// 페이지 이동
const StyledDsSpeciesPagenation = styled.div`
  /* border: 1px solid blue; */
`;

const StyledDsSpeciesPagenationButton = styled.div`
  /* border: 1px solid green; */
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
  StyledDsSpeciesCardImg,
  StyledDsSpeciesCardName,
};
