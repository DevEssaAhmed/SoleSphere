// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   userInfo: localStorage.getItem('userInfo')
//     ? JSON.parse(localStorage.getItem('userInfo'))
//     : null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setCredentials: (state, action) => {
//       state.userInfo = action.payload;
//       localStorage.setItem('userInfo', JSON.stringify(action.payload));

//       const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days
//       localStorage.setItem('expirationTime', expirationTime.toString());
//     },
//     logout: (state, _action) => {
//       state.userInfo = null;
//       localStorage.removeItem('userInfo');
//       localStorage.removeItem('expirationTime');
//     },
//   },
// });

// export const { setCredentials, logout } = authSlice.actions;

// export default authSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  // name: string | null;
  // token: string | null;
  userInfo: any;
}

// const initialState: AuthState = {
//   // name: null,
//   // token: null,
//   userInfo: null,
// };

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ userInfo: any }>) => {
      // state.name = action.payload.name;
      // state.token = action.payload.token;
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));

      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days
      localStorage.setItem('expirationTime', expirationTime.toString());
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
