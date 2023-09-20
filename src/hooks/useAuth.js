import { useAuthStore } from '../stores/useAuthStore';

const DURATION = 5 * 60 * 1000; // 5분간 로그인 유지

// 유저 인증을 위한 custom hook
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

  const reset = () => {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');

    localStorage.setItem(
      'todos',
      JSON.stringify(todos.filter((todo) => !todo.isSecret))
    );
    localStorage.removeItem('auth');
    // 상태를 초기화하고 업데이트된 localStorage에서 새로 데이터 받아오기 위해 앱 전체 reload
    window.location.reload();
  };

  return { register, login, logout, reset };
};
