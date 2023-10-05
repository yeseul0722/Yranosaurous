import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const StyledTableHead = styled.thead`
  /* background-color: #f2f2f2; */
  border-bottom: 2px solid black;
`;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const StyledContentContainer = styled.tbody`
  background-color: ${(props) => props.theme.colors.menu};
  cursor: pointer;
`;

const StyledContent = styled.td.attrs<any>((props) => ({}))`
  font-family: ${(props) => props.theme.fonts.blodfont};
  font-size: 14px;
  color: ${(props) => (props.festivalID === props.id ? props.theme.colors.white : props.theme.colors.main)};
  background-color: ${(props) => (props.festivalID === props.id ? props.theme.colors.main : props.theme.colors.menu)};
  padding: 10px;
  border-right: 2px solid ${(props) => props.theme.colors.white};
  &:last-child {
    border-right: none;
  }
`;

const StyledTitle = styled.th`
  padding: 10px;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.blodfont};
  font-size: 14px;
  color: ${(props) => props.theme.colors.main};
  background-color: ${(props) => props.theme.colors.menu};
  border-right: 2px solid ${(props) => props.theme.colors.white};
  &:last-child {
    border-right: none;
  }
`;

const CustomTableRow = styled(StyledTableRow)`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
`;
export { StyledTable, StyledTableHead, CustomTableRow, StyledTitle, StyledContentContainer, StyledContent };
