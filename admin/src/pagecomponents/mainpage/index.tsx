import { StyledMainpage, StyledBox, StyledTitle, StyledInputBox, StyledInput } from './Mainpage.styled';

const MainPage = () => {
  return (
    <StyledMainpage
      style={{
        backgroundImage: 'url(/images/main/background.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <StyledBox>
        <StyledTitle>
          <div>와이라노사우르스</div>
          <div>관리자 로그인</div>
        </StyledTitle>
        <StyledInputBox>
          <img src="/images/main/key.png" style={{ width: '20px', marginRight: '10px' }} />
          <StyledInput type="password" placeholder="password" />
        </StyledInputBox>
      </StyledBox>
    </StyledMainpage>
  );
};

export default MainPage;
