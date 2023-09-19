import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

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

export const useAuthStore = create(
  devtools((set, get) => ({
    auth: initialState,
    setAuth: (payload) =>
      set({
        auth: payload ? { ...get().auth, ...payload } : { ...initialState },
      }),
  }))
);
