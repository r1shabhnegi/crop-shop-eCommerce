import { createSlice } from '@reduxjs/toolkit';
import { authInitialStateTYP, initialUserTYP } from '@/utils/types';

const initialUser: initialUserTYP = {
  id: '',
  name: '',
  username: '',
  email: '',
  imageUrl: '',
};

const initialState: authInitialStateTYP = {
  initialUser,
  auth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const { auth } = authSlice.actions;
export default authSlice.reducer;
