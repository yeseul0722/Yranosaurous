import React, { useState, useEffect } from 'react';
import {
  StyledDsSpeciesPage,
  StyledDsSpeciesTitle,
  StyledDsSpeciesTitleText,
  StyledDsSpeciesBody,
  SearchInput,
  StyledDsSpeciesCardList,
  StyledDsSpeciesCard,
  StyledDsSpeciesPagenation,
  StyledDsSpeciesCardImg,
  StyledDsSpeciesCardName,
  StyledDsSpeciesCardFigcaption,
  StyledDsSpeciesCardFigcaptionGo,
  StyledDsSpeciesCardFigcaptionGoDetail,
} from './DsSpecies.styled';
import DsDetail from '../dinosaurdetail';
import { useDinosaurListHook } from '../../../../hooks/dinosaur/useDinosaurListHook';
import useDinosaurStore from '../../../../stores/dinosaur/useDinosaurStore';
import { useDinosaurSubHook } from '../../../../hooks/dinosaur/useDinosaurSubHook';

const DsSpeciesComponent = () => {
  // 공룡 리스트
  const { dinosaurList } = useDinosaurListHook();

  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  // 공룡검색
  const [searchDs, setSearchDs] = useState('');

  const handleSearchChange = (event: any) => {
    setSearchDs(event.target.value);
  };

  const filterDinosaurList = dinosaurList.filter((card: any) =>
    card.korName.toLowerCase().includes(searchDs.toLowerCase()),
  );

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

  // 주스턴드2-1. 호출
  const setDsEngName = useDinosaurStore((state: any) => state.setDsEngName);
  const setDsKorName = useDinosaurStore((state: any) => state.setDsKorName);

  const openDetail = (card: any) => {
    setDsId(card.id);
    setDsName(card.korName);
    setDsImg(card.imgAddress);
    setDsEngName(card.engName);

    setIsDetailOpen(!isDetailOpen);
  };

  const closeDetail = () => {
    setIsDetailOpen(false);
  };

  // 공룡 지구본

  const goGlobe = (e: any) => {
    const clickId = parseInt(e.target.id);

    for (let i = 0; i < 99; i++) {
      if (dinosaurList[i].id === clickId) {
        // 주스턴드2-2. 저장함수(저장할값)
        setDsEngName(dinosaurList[i].engName);
        setDsKorName(dinosaurList[i].korName);
      }
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
        <SearchInput
          type="text"
          placeholder="티라노사우루스, 코리아,,,"
          value={searchDs}
          onChange={handleSearchChange}
        />
        <StyledDsSpeciesCardList>
          {filterDinosaurList.map((card: any) => (
            <StyledDsSpeciesCard key={card.id}>
              <StyledDsSpeciesCardImg id={card.id} src={card.imgAddress} alt={card.korName} />
              <StyledDsSpeciesCardName>| {card.korName}</StyledDsSpeciesCardName>
              <StyledDsSpeciesCardFigcaption>
                <StyledDsSpeciesCardFigcaptionGo>
                  <StyledDsSpeciesCardFigcaptionGoDetail onClick={goGlobe} id={card.id}>
                    🌍 지구본에서 보기
                  </StyledDsSpeciesCardFigcaptionGoDetail>
                  <StyledDsSpeciesCardFigcaptionGoDetail onClick={() => openDetail(card)} id={card.id}>
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
        {/* <StyledDsSpeciesPagenation>
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
        </StyledDsSpeciesPagenation> */}
      </StyledDsSpeciesBody>
    </StyledDsSpeciesPage>
  );
};

export default DsSpeciesComponent;
