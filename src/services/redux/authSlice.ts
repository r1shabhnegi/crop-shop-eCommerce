import { createSlice } from '@reduxjs/toolkit';
import { authInitialStateTYP, initialUserTYP } from '@/utils/types';
import { getCurrentAccount } from '../appwrite/api';

const initialUser: initialUserTYP = {
  id: '',
  name: '',
  username: '',
  email: '',
  imageUrl: '',
};

const initialState: authInitialStateTYP = {
  isAuthenticated: false,
  initialUser,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { $id, name, username, email, imageUrl } = action.payload;

      state.initialUser = {
        id: $id,
        name,
        username,
        email,
        imageUrl,
      };

      state.isAuthenticated = !!action.payload;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;

export const checkAuthUser = () => {
  return async function fetchCheckAuthUser(dispatch) {
    try {
      const data = await getCurrentAccount();

      if (data) {
        dispatch(setCredentials(data));
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
};

// export const selectUserData = (state) => state.auth.isAuthenticated;
// export const selectUserData = (state) => state.auth.isAuthenticated;
