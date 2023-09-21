import { memo, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { authStates, useAuthStore } from '../stores/useAuthStore';
import {
  HeaderContainer,
  TitleH1,
  PasswordOuter,
  PasswordInput,
  PasswordButton,
  AuthButton,
} from '../styles/Header.style';
import lockIcon from '../images/lock.png';
import unlockIcon from '../images/unlock.png';
import settingIcon from '../images/setting.png';
import resetIcon from '../images/reset.png';

// header에 기능이 추가된다면 코드를 분리하는게 나을듯
const Header = () => {
  const { login, logout, register, reset } = useAuth();

  const authState = useAuthStore((state) => state.auth.authState);
  const [isInputMode, setIsInputMode] = useState(false); // 로그인 or 가입 버튼 눌렀을 때 input display
  const [password, setPassword] = useState(''); // 입력된 password

  // 상태에 따라 버튼의 handler와 이미지 src를 설정하기 위한 selector
  const ButtonSelector = {};
  ButtonSelector[authStates.AUTHORIZED] = {
    clickHandler: logout,
    src: unlockIcon,
  };
  ButtonSelector[authStates.UNAUTHORIZED] = {
    clickHandler: login,
    src: lockIcon,
  };
  ButtonSelector[authStates.NOT_REGISTERED] = {
    clickHandler: register,
    src: settingIcon,
  };

  return (
    <HeaderContainer>
      <TitleH1>나의 할 일</TitleH1>
      <div className="authBtns">
        {isInputMode ? (
          <PasswordOuter>
            <PasswordInput
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <PasswordButton
              onClick={() => {
                ButtonSelector[authState].clickHandler(password);
                setPassword('');
                setIsInputMode(false);
              }}
            >
              ✓
            </PasswordButton>
            <PasswordButton
              onClick={() => {
                setPassword('');
                setIsInputMode(false);
              }}
            >
              X
            </PasswordButton>
          </PasswordOuter>
        ) : (
          <AuthButton
            onClick={() => {
              if (authState === authStates.AUTHORIZED) {
                logout();
                setPassword('');
              } else setIsInputMode(true);
            }}
          >
            <img
              src={ButtonSelector[authState].src}
              alt=""
              className="authIcon"
            />
          </AuthButton>
        )}
        {!isInputMode && authState !== authStates.NOT_REGISTERED && (
          // 비밀번호를 설정한 적이 있다면 reset 버튼 display
          <AuthButton onClick={reset}>
            <img src={resetIcon} alt="" className="authIcon" />
          </AuthButton>
        )}
      </div>
    </HeaderContainer>
  );
};

export default memo(Header);
