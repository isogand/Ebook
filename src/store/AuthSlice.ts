import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserInfo {
  providerId: string | null;
  uid: string | null;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

interface AuthState {
  user: UserInfo | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUserinfo(state, action: PayloadAction<Omit<UserInfo, 'providerData' | 'stsTokenManager'>>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUserinfo(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUserinfo, clearUserinfo } = AuthSlice.actions;
export default AuthSlice.reducer;
