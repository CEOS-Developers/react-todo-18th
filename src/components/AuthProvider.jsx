import { useEffect, useState } from 'react';
import { authStates, useAuthStore } from '../stores/useAuthStore';

const AuthProvider = ({ children }) => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const cachedAuth = JSON.parse(localStorage.getItem('auth') || 'null');
  // 인증 상태가 설정될 때까지 isInit을 통해 children 렌더링 방지
  const [isInit, setIsInit] = useState(true);

  useEffect(() => {
    if (!cachedAuth) setAuth({ authState: authStates.NOT_REGISTERED });
    else if (
      cachedAuth.authorizedDate + cachedAuth.duration <
      new Date().getTime()
    )
      setAuth({
        ...cachedAuth,
        authState: 'unauthorized',
      });
    else
      setAuth({
        ...cachedAuth,
        authState: 'authorized',
      });
    setIsInit(false);
  }, [cachedAuth, setAuth]);

  return <>{isInit ? null : children}</>;
};

export default AuthProvider;
