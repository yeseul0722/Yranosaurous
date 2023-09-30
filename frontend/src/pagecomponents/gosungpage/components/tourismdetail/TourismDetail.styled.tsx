import styled from 'styled-components';

const StyledTourismDetailContainer = styled.div`
  /* height: 100%; */
  width: 360px;
  display: flex;
  z-index: 5;
  background-color: ${(props) => props.theme.colors.white};
  flex-direction: column;
`;

const StyledTourismImgWrap = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  margin-bottom: 15px;
`;

const StyledTourismDetailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledTourismName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.main};
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 20px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  /* border-bottom: 1px solid ${(props) => props.theme.colors.lightgray}; */
`;

const StyledTourismInfo = styled.div`
  margin-top: 15px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  padding-bottom: 15px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
`;

const StyledTourismAdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTourismAd = styled.div`
  margin-left: 10px;
`;

export {
  StyledTourismAd,
  StyledTourismAdContainer,
  StyledTourismDetailContainer,
  StyledTourismDetailImg,
  StyledTourismImgWrap,
  StyledTourismInfo,
  StyledTourismName,
};
