import { useAuthStore } from '../stores/useAuthStore';

const DURATION = 10 * 60 * 1000; // 10분간 로그인 유지

export const useAuth = () => {
  const password = useAuthStore((state) => state.auth.password);
  const setAuth = useAuthStore((state) => state.setAuth);

  const register = (payload) => {
    const authInfo = {
      password: payload,
      authorizedDate: new Date().getTime(),
      duration: DURATION,
    };

    localStorage.setItem('auth', JSON.stringify(authInfo));
    setAuth({
      authState: 'authorized',
      ...authInfo,
    });
  };

  const login = (payload) => {
    if (password === payload) {
      const authInfo = {
        password: payload,
        authorizedDate: new Date().getTime(),
        duration: DURATION,
      };

      localStorage.setItem('auth', JSON.stringify(authInfo));
      setAuth({
        authState: 'authorized',
        ...authInfo,
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuth({ authState: 'unauthorized' });
    localStorage.setItem(
      'auth',
      JSON.stringify({
        password,
        authorizedDate: 0,
        duration: 0,
      })
    );
  };
  return { register, login, logout };
};
