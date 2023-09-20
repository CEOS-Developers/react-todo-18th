import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// 인증 상태에 대한 정의
export const authStates = {
  INIT: 'init',
  NOT_REGISTERED: 'notRegistered',
  AUTHORIZED: 'authorized',
  UNAUTHORIZED: 'unauthorized',
};

const initialState = {
  authState: authStates.INIT,
  password: null,
  authorizedDate: null,
  duration: null,
};

// 브라우저에서 redux devtool로 상태변화를 확인할 수 있도록 devtools middleware 사용
export const useAuthStore = create(
  devtools((set, get) => ({
    auth: initialState,
    setAuth: (payload) =>
      set({
        auth: payload ? { ...get().auth, ...payload } : { ...initialState },
      }),
  }))
);
