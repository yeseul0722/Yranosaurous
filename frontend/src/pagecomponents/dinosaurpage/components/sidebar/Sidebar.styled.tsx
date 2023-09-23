import styled from 'styled-components';

const ScrollableContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export { ScrollableContainer };
