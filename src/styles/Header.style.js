import styled from 'styled-components';

export const HeaderContainer = styled.div`
  margin: 10px 0 20px 0;
  display: flex;

  justify-content: center;
  position: relative;
  width: 100%;
  .authBtns {
    height: 24px;
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
  }
  @media screen and (max-width: 550px) {
    justify-content: left;
  }
`;

export const TitleH1 = styled.h1`
  font-family: 'GangwonState';
  font-size: 32px;
`;

export const PasswordOuter = styled.div`
  display: flex;
`;

export const PasswordInput = styled.input.attrs({
  type: 'password',
})`
  width: 100px;
  margin-right: 5px;
  border: none;
  border-bottom: 1px solid grey;
`;

export const PasswordButton = styled.button`
  border: 1px solid black;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  text-align: center;
  border-radius: 3px;
  padding: 3px;
  margin: 0 2px;
`;

export const AuthButton = styled.button`
  margin: 0 10px;

  .authIcon {
    width: 25px;
    height: 25px;
  }
`;
