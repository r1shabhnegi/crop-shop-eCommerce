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
  initialUser,
  auth: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setInitialUser: (state, action) => {
      const { $id, name, username, email, imageUrl } = action.payload;
      state.initialUser = {
        id: $id,
        name,
        username,
        email,
        imageUrl,
      };
      state.auth = !!action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setInitialUser, setLoading } = authSlice.actions;
export default authSlice.reducer;

export const checkAuthUser = () => {
  return async function fetchCheckAuthUser(dispatch) {
    try {
      dispatch(setLoading(true));
      const data = await getCurrentAccount();
      if (data) {
        dispatch(setInitialUser(data));
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      dispatch(setLoading(false));
    }
  };
};
