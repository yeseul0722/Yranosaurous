import React, { useState } from 'react';
import {
  StyledDsSpeciesPage,
  StyledDsSpeciesTitle,
  StyledDsSpeciesTitleText,
  StyledDsSpeciesBody,
  StyledDsSpeciesCardList,
  StyledDsSpeciesCard,
  StyledDsSpeciesPagenation,
  StyledDsSpeciesPagenationButton,
} from './DsSpecies.styled';

const DsSpeciesComponent = () => {
  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  //임시 공룡카드
  const ExCards = [
    { id: 1, image: '/dinosaur/profileImg.jpg', alt: '공룡1' },
    { id: 2, image: '/dinosaur/profileImg.jpg', alt: '공룡2' },
    { id: 3, image: '/dinosaur/profileImg.jpg', alt: '공룡3' },
    { id: 4, image: '/dinosaur/profileImg.jpg', alt: '공룡4' },
    { id: 5, image: '/dinosaur/profileImg.jpg', alt: '공룡5' },
    { id: 6, image: '/dinosaur/profileImg.jpg', alt: '공룡6' },
    { id: 7, image: '/dinosaur/profileImg.jpg', alt: '공룡7' },
    { id: 8, image: '/dinosaur/profileImg.jpg', alt: '공룡8' },
    { id: 9, image: '/dinosaur/profileImg.jpg', alt: '공룡9' },
    { id: 10, image: '/dinosaur/profileImg.jpg', alt: '공룡10' },
  ];

  //페이지 이동
  const indexLastCard = currentPage * cardsPerPage;
  const indexFirstCard = indexLastCard - cardsPerPage;
  const currentCards = ExCards.slice(indexFirstCard, indexLastCard);

  const goPrePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goNextPage = () => {
    const totalPages = Math.ceil(ExCards.length / cardsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <StyledDsSpeciesPage>
      {/* 타이틀 */}
      <StyledDsSpeciesTitle>
        <StyledDsSpeciesTitleText>이런 공룡이 있었어요!</StyledDsSpeciesTitleText>
      </StyledDsSpeciesTitle>

      {/* 공룡 종 리스트 */}
      <StyledDsSpeciesBody>
        <StyledDsSpeciesCardList>
          {currentCards.map((card) => (
            <StyledDsSpeciesCard key={card.id}>
              <img src={card.image} alt={card.alt} style={{ width: '150px', height: '100px', margin: '5px' }} />
            </StyledDsSpeciesCard>
          ))}
        </StyledDsSpeciesCardList>

        {/* 페이지 이동 */}
        <StyledDsSpeciesPagenation>
          <button onClick={goPrePage} disabled={currentPage === 1}>
            &lt;
          </button>
          현재 : {currentPage}
          <button onClick={goNextPage} disabled={currentPage === Math.ceil(ExCards.length / cardsPerPage)}>
            &gt;
          </button>
        </StyledDsSpeciesPagenation>
      </StyledDsSpeciesBody>
    </StyledDsSpeciesPage>
  );
};

export default DsSpeciesComponent;
