import { createSlice } from '@reduxjs/toolkit';

export type UserType = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  address: string;
  createdAt: string;
  updatedAt: string;
};

type AuthType = {
  user: null | UserType;
  token: null | string;
};

const initialState: AuthType = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
