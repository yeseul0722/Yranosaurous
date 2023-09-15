import React, { useState } from 'react';
import {
  StyledDinosaurCardPagination,
  DinosaurCardPageComponent,
  StyledDinosaurCardContainer,
} from './dinosaurcardpagination.styled';
import DinosaurCardComponent from '../dinosaurcard';

const DinosaurCardPaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  // 임시 카드
  const allCards = [
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
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(allCards.length / cardsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <StyledDinosaurCardPagination>
      <StyledDinosaurCardContainer>
        {currentCards.map((card) => (
          <DinosaurCardPageComponent key={card.id}>
            <img src={card.image} alt={card.alt} style={{ width: '100%', height: '100%' }} />
          </DinosaurCardPageComponent>
        ))}
      </StyledDinosaurCardContainer>
      {/* <div>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          이전 페이지
        </button>
        <button onClick={goToNextPage} disabled={currentPage === Math.ceil(allCards.length / cardsPerPage)}>
          다음 페이지
        </button>
        <p>현재 페이지: {currentPage}</p>
      </div> */}
    </StyledDinosaurCardPagination>
  );
};

export default DinosaurCardPaginationComponent;
