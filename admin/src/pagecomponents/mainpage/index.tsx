import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledMainpage, StyledBox, StyledTitle, StyledInputBox, StyledInput, StyledWrongMsg } from './Mainpage.styled';
import useLoginStore from '../../stores/login/useLoginStore';

const MainPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [wrongvalue, setWrongvalue] = useState(0);
  const { setLogin } = useLoginStore();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (inputValue === process.env.REACT_APP_ADMIN_KEY) {
      setWrongvalue(0);
      setLogin(true);
      navigate('/map');
    } else {
      setWrongvalue(wrongvalue + 1);
    }
  };

  return (
    <StyledMainpage
      style={{
        backgroundImage: `url(${process.env.REACT_APP_ADMIN_URL}/images/main/background.png)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <StyledBox>
        <StyledTitle>
          <div>와이라노사우르스</div>
          <div>관리자 로그인</div>
        </StyledTitle>
        <form onSubmit={handleSubmit}>
          <StyledInputBox>
            <img
              src={`${process.env.REACT_APP_ADMIN_URL}/images/main/key.png`}
              style={{ width: '20px', marginRight: '10px' }}
            />
            <StyledInput
              type="password"
              placeholder="password"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </StyledInputBox>
          {wrongvalue > 0 && <StyledWrongMsg> 틀렸습니다 ({wrongvalue}회)</StyledWrongMsg>}
          <button type="submit" style={{ display: 'none' }}>
            Submit
          </button>
        </form>
      </StyledBox>
    </StyledMainpage>
  );
};

export default MainPage;
