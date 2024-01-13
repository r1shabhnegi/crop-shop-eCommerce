import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authInitialStateTYP, initialUserTYP } from '@/utils/types';
import { getCurrentAccount } from '../appwrite/api';

const initialUser = {
  id: '',
  name: '',
  username: '',
  email: '',
  imageUrl: '',
};

const initialState: authInitialStateTYP = {
  isAuthenticated: false,
  status: 'rejected',
  initialUser,
};

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async () => {
  try {
    const data = await getCurrentAccount();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthentication: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setInitialUser: (state, action) => {
      state.initialUser = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(
        fetchAuth.fulfilled,
        (state, { payload }: PayloadAction<initialUserTYP>) => {
          state.status = 'success';
          if (payload) {
            const { $id, name, username, email, imageUrl } = payload;
            state.initialUser = { id: $id, name, username, email, imageUrl };
          }
          state.isAuthenticated = !!payload;
        }
      )
      .addCase(fetchAuth.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});
export const { setAuthentication, setInitialUser, setStatus } =
  authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUserData = (state) => state.auth.initialUser;
export const selectAuthStatus = (state) => state.auth.status;
