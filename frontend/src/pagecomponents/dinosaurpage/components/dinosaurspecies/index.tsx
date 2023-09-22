import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  StyledDsSpeciesCardFigcaption,
  StyledDsSpeciesCardFigcaptionName,
  StyledDsSpeciesCardFigcaptionGo,
  StyledDsSpeciesCardFigcaptionGoDetail,
} from './DsSpecies.styled';
import Modal from '../../../../components/modal';
import DsDetail from '../dinosaurdetail';
import DinosaurListGet from '../../../../apis/dinosaur/dinosaurListGet';
import { useDinosaurListHook } from '../../../../hooks/dinosaur/useDinosaurListHook';

const DsSpeciesComponent = () => {
  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  // 공룡 리스트
  const { dinosaurList } = useDinosaurListHook();

  // 지구본 좌표
  // const
  // useEffect(() => {
  //   axios.get(`http://j9e102A.p.ssafy.io:8080/api/dinosaurSub/${DsEnName}`);
  // })

  //페이지 이동
  const indexLastCard = currentPage * cardsPerPage;
  const indexFirstCard = indexLastCard - cardsPerPage;
  const currentCards = dinosaurList.slice(indexFirstCard, indexLastCard);
  const totalPages = Math.ceil(dinosaurList.length / cardsPerPage);

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

  const [DsId, setDsId] = useState();
  const [DsName, setDsName] = useState();
  const [DsImg, setDsImg] = useState();
  const [DsEnName, setDsEnName] = useState();

  const openDetail = (e: any) => {
    setDsId(e.target.id);
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
          {currentCards.map((card: any) => (
            // 공룡 카드
            <StyledDsSpeciesCard key={card.id}>
              <StyledDsSpeciesCardImg id={card.id} src={card.imgAddress} alt={card.korName} />
              <StyledDsSpeciesCardName>| {card.korName}</StyledDsSpeciesCardName>
              <StyledDsSpeciesCardFigcaption>
                <StyledDsSpeciesCardFigcaptionGo>
                  <StyledDsSpeciesCardFigcaptionGoDetail>🌍 지구본에서 보기</StyledDsSpeciesCardFigcaptionGoDetail>
                  <StyledDsSpeciesCardFigcaptionGoDetail onClick={openDetail} id={card.id}>
                    🦕 공룡상세 정보
                  </StyledDsSpeciesCardFigcaptionGoDetail>
                </StyledDsSpeciesCardFigcaptionGo>
              </StyledDsSpeciesCardFigcaption>
            </StyledDsSpeciesCard>
          ))}
        </StyledDsSpeciesCardList>

        {/* 공룡 디테일 */}
        {isDetailOpen === true && (
          <DsDetail isDetailOpen={isDetailOpen} DsName={DsName} DsImg={DsImg} DsId={DsId} closeDetail={closeDetail} />
        )}

        {/* 페이지 이동 */}
        <StyledDsSpeciesPagenation>
          <button onClick={goPrePage} disabled={currentPage === 1} style={{ margin: '5px', background: 'none' }}>
            ◀
          </button>
          {currentPage} / {totalPages}
          <button
            onClick={goNextPage}
            disabled={currentPage === Math.ceil(dinosaurList.length / cardsPerPage)}
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
