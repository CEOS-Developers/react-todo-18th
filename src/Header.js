import styled from 'styled-components';

const Header = () => {
  let current = new Date();
  let year = current.getFullYear();
  let month = current.getMonth() + 1;
  let date = current.getDate();
  let day = current.getDay();
  const dayList = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <HeaderBlock>
      <Title>
        {year}년 {month}월 {date}일
      </Title>
      <SubTitle>{dayList[day]}요일</SubTitle>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding-left: 5%;
  padding-top: 3%;
`;

const Title = styled.div`
  font-size: 2vw;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const SubTitle = styled.div`
  font-size: 1vw;
  font-weight: 200;
  color: gray;
`;
export default Header;
