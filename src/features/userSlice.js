import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customFetch } from '../utils/axios';
import { toast } from 'react-toastify';
import { addUserToLocalStorage, getUserFromLocalStorage } from '../utils/localStorage';

let initialState = {
  user: getUserFromLocalStorage() || null,
  isLoading: false,
};

export const registerAndLogin = createAsyncThunk(
  'user/register',
  async ({ user, process, message }, thunkAPI) => {
    try {
      let res = await customFetch.post(`/auth/${process}`, user);
      return { user: res.data.user, message };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.msg || error.response.data
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (user, thunkAPI) => {}
);

let userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [registerAndLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [registerAndLogin.fulfilled]: (state, { payload }) => {
      let { user, message } = payload;
      addUserToLocalStorage(user)
      toast.success(`${message} ${user.name}`);
      return { ...state, user, isLoading: false };
    },
    [registerAndLogin.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export default userSlice.reducer;
