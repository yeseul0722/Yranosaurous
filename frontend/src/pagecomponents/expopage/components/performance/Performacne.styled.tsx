import styled from 'styled-components';

const StyledPerformanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1120px;
  margin: 0px 200px 100px 200px;
`;

const StyledNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

const StyledNav = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 64px;
  color: ${(props) => props.theme.colors.main};
  border-bottom: 5px solid ${(props) => props.theme.colors.main};
  padding-bottom: 10px;
`;

const StyeldPerformanceContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCarouselContainer = styled.div`
  max-width: 700px;
`;

const StyledPerformanceInfo = styled.div`
  width: 200px;
  height: auto;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 30px;
  padding: 20px 30px 0px;
`;

const StyledText = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 40px;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 20px;
`;

const StyledBoxContainer = styled.div`
  margin-bottom: 10px;
`;

const StyledBox = styled.div`
  padding: 5px;
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 20px;
  color: ${(props) => props.theme.colors.black};
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
`;

const StyledGoPerformanceContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;
`;
const StyledGoPerformance = styled.div`
  padding: 5px;
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 15px;
  color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
  cursor: pointer;
`;
export {
  StyledPerformanceContainer,
  StyledNavContainer,
  StyledNav,
  StyeldPerformanceContent,
  StyledCarouselContainer,
  StyledPerformanceInfo,
  StyledText,
  StyledBoxContainer,
  StyledBox,
  StyledGoPerformanceContainer,
  StyledGoPerformance,
};
