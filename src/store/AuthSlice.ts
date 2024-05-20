import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure of the state
interface AuthState {
  user: {
    providerId: string | null;
    uid: string | null;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
  } | null;
  isAuthenticated: boolean;
}

// Initial state
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

// Create slice
const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    // Action to set user info
    setUserinfo(state, action: PayloadAction<any>) {
      state.user = {
        providerId: action.payload.providerId || null,
        uid: action.payload.uid || null,
        displayName: action.payload.displayName || null,
        email: action.payload.email || null,
        photoURL: action.payload.photoURL || null,
        // Add other user data properties here
      };
      state.isAuthenticated = true; // Assuming user is authenticated when info is set
    },
    clearUserinfo(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// Export actions and reducer
export const { setUserinfo, clearUserinfo } = AuthSlice.actions;
export default AuthSlice.reducer;

