import styled from 'styled-components';

const StyledTtsBox = styled.div`
  border: 3.5px solid ${(props) => props.theme.colors.white};
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-left: 1rem;
`;

const StyledTtsAudio = styled.audio`
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
`;

export { StyledTtsBox, StyledTtsAudio };
