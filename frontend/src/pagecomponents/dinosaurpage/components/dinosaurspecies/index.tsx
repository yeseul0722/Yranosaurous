import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledDsSpeciesPage,
  StyledDsSpeciesTitle,
  StyledDsSpeciesTitleText,
  StyledDsSpeciesBody,
  StyledDsSpeciesCardList,
  StyledDsSpeciesCard,
  StyledDsSpeciesPagenation,
  StyledDsSpeciesCardImg,
  StyledDsSpeciesCardName,
} from './DsSpecies.styled';
import Modal from '../../../../components/modal';
import DsDetail from '../dinosaurdetail';

const DsSpeciesComponent = () => {
  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  //임시 공룡카드
  const ExCards = [
    { id: 1, image: '/dinosaur/profileImg.jpg', alt: '티라노사우루스' },
    { id: 2, image: '/dinosaur/profileImg.jpg', alt: '공룡2' },
    { id: 3, image: '/dinosaur/profileImg.jpg', alt: '공룡3' },
    { id: 4, image: '/dinosaur/profileImg.jpg', alt: '공룡4' },
    { id: 5, image: '/dinosaur/profileImg.jpg', alt: '공룡5' },
    { id: 6, image: '/dinosaur/profileImg.jpg', alt: '공룡6' },
    { id: 7, image: '/dinosaur/profileImg.jpg', alt: '공룡7' },
    { id: 8, image: '/dinosaur/profileImg.jpg', alt: '공룡8' },
    { id: 9, image: '/dinosaur/profileImg.jpg', alt: '공룡9' },
    { id: 10, image: '/dinosaur/profileImg.jpg', alt: '공룡10' },
    { id: 11, image: '/dinosaur/profileImg.jpg', alt: '공룡10' },
  ];

  //페이지 이동
  const indexLastCard = currentPage * cardsPerPage;
  const indexFirstCard = indexLastCard - cardsPerPage;
  const currentCards = ExCards.slice(indexFirstCard, indexLastCard);
  const totalPages = Math.ceil(ExCards.length / cardsPerPage);

  const goPrePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // 공룡 디테일
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const [DsName, setDsName] = useState();
  const [DsImg, setDsImg] = useState();
  const openDetail = (e: any) => {
    setDsName(e.target.alt);
    setDsImg(e.target.src);

    setIsDetailOpen(!isDetailOpen);
  };

  const closeDetail = () => {
    setIsDetailOpen(false);
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
            <StyledDsSpeciesCard key={card.id} onClick={openDetail}>
              <StyledDsSpeciesCardImg src={card.image} alt={card.alt} />
              <StyledDsSpeciesCardName>{card.alt}</StyledDsSpeciesCardName>
            </StyledDsSpeciesCard>
          ))}
        </StyledDsSpeciesCardList>

        {/* 공룡 디테일 */}
        {isDetailOpen === true && (
          <DsDetail isDetailOpen={isDetailOpen} DsName={DsName} DsImg={DsImg} closeDetail={closeDetail} />
        )}

        {/* 페이지 이동 */}
        <StyledDsSpeciesPagenation>
          <button onClick={goPrePage} disabled={currentPage === 1} style={{ margin: '5px', background: 'none' }}>
            ◀
          </button>
          {currentPage} / {totalPages}
          <button
            onClick={goNextPage}
            disabled={currentPage === Math.ceil(ExCards.length / cardsPerPage)}
            style={{ margin: '5px', background: 'none' }}
          >
            ▶
          </button>
        </StyledDsSpeciesPagenation>
      </StyledDsSpeciesBody>
    </StyledDsSpeciesPage>
  );
};

export default DsSpeciesComponent;
