import styled from 'styled-components';

const StyledSplitPage = styled.div`
  background-color: #d3b9b9;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  font-family: ${(props) => props.theme.fonts.dinoboldfont};
  color: ${(props) => props.theme.colors.white};
  text-align: left;
`;

const StyledGoDinosaur = styled.div`
  width: 50%;
  background-color: #000020;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  padding-top: 10rem;
`;

const StyledGoExpo = styled.div`
  width: 50%;
  background-color: #3d5a61;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  padding-top: 10rem;
`;

const StyledGoCover = styled.div`
  background-color: #ffffff;

  :hover {
    opacity: 1;
  }
`;

const StyledTitleText = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const StyledContent = styled.div`
  font-size: 1.3rem;
  line-height: 150%;
  padding-left: 0.5rem;
  height: 7rem;
`;

const StyledGoDinosaurButton = styled.div`
  background-color: #3d5a61;
  width: 13rem;
  height: 3rem;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledGoExpoButton = styled.div`
  background-color: #000020;
  width: 13rem;
  height: 3rem;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export {
  StyledSplitPage,
  StyledGoCover,
  StyledGoDinosaur,
  StyledGoExpo,
  StyledTitleText,
  StyledContent,
  StyledGoDinosaurButton,
  StyledGoExpoButton,
};
