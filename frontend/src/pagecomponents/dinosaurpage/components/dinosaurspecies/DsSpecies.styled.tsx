import styled from 'styled-components';

const StyledDsSpeciesPage = styled.div`
  padding: 1.5rem;
  background-color: #0006b074;
  width: 22rem;
  transition: ease 3s;
  box-shadow: -4px 5px 3px 2px #2b2c38;
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
  cursor: default;
`;

const StyledDsSpeciesBody = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
`;

// 공룡 종 리스트
const StyledDsSpeciesCardList = styled.div`
  height: 40rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const SearchInput = styled.input`
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  width: 18rem;
  height: 2rem;
  margin-left: 0.8rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

// 공룡카드
const StyledDsSpeciesCard = styled.div`
  // figure
  position: relative;
  /* border: 1px solid red; */
  width: 150px;
  height: 100px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const StyledDsSpeciesCardImg = styled.img.attrs<any>((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  /* position: relative; */
  object-fit: fill;
  width: 150px;
  height: 100px;
`;

const StyledDsSpeciesCardName = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  bottom: 5px;
  left: 5px;
  color: ${(props) => props.theme.colors.night};
  font-family: ${(props) => props.theme.fonts.dinoboldfont};

  ${StyledDsSpeciesCard}:hover & {
    opacity: 0;
  }
`;

///////////////figcaption
const StyledDsSpeciesCardFigcaption = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  ${StyledDsSpeciesCard}:hover & {
    opacity: 1;
  }
`;

const StyledDsSpeciesCardFigcaptionName = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoregularfont};
  font-size: 18px;
`;

const StyledDsSpeciesCardFigcaptionGo = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoregularfont};
  font-size: 15px;
`;

const StyledDsSpeciesCardFigcaptionGoDetail = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.dinoregularfont};
  font-size: 15px;
  text-align: start;
  padding: 3px;
`;

// 페이지 이동
const StyledDsSpeciesPagenation = styled.div`
  /* border: 1px solid blue; */
  margin-top: 1.5rem;
`;

const StyledDsSpeciesPagenationButton = styled.div`
  /* border: 1px solid green; */
  cursor: pointer;
`;

export {
  StyledDsSpeciesPage,
  StyledDsSpeciesTitle,
  StyledDsSpeciesTitleText,
  StyledDsSpeciesBody,
  SearchInput,
  StyledDsSpeciesCardList,
  StyledDsSpeciesCard,
  StyledDsSpeciesPagenation,
  StyledDsSpeciesPagenationButton,
  StyledDsSpeciesCardImg,
  StyledDsSpeciesCardName,
  StyledDsSpeciesCardFigcaption,
  StyledDsSpeciesCardFigcaptionName,
  StyledDsSpeciesCardFigcaptionGo,
  StyledDsSpeciesCardFigcaptionGoDetail,
};
