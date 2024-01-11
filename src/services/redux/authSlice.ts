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
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(
        fetchAuth.fulfilled,
        (state, { payload }: PayloadAction<initialUserTYP>) => {
          state.status = 'success';
          const { $id, name, username, email, imageUrl } = payload;
          state.isAuthenticated = !!payload;
          console.log($id);
          state.initialUser = { id: $id, name, username, email, imageUrl };
        }
      )
      .addCase(fetchAuth.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export default authSlice.reducer;

export const isAuthenticated = (state) => state.auth.isAuthenticated;
export const userData = (state) => state.auth.initialUser;
export const authStatus = (state) => state.auth.status;
