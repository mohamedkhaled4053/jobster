import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customFetch } from '../utils/axios';
import { toast } from 'react-toastify';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../utils/localStorage';

let initialState = {
  user: getUserFromLocalStorage() || null,
  isLoading: false,
};

// use Async thunk to login or register
export const registerAndLogin = createAsyncThunk(
  'user/register',
  async ({ user, process, message }, thunkAPI) => {
    try {
      let res;
      if (process === 'updateUser') {
        res = await customFetch.patch('/auth/updateUser', user, {
          headers:{
            authorization: `Bearer ${thunkAPI.getState().user.user.token}`
          }
        })
      } else {
        res = await customFetch.post(`/auth/${process}`, user);
      }
      return { user: res.data.user, message };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.msg || error.response.data
      );
    }
  }
);

let userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutuser: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: {
    [registerAndLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [registerAndLogin.fulfilled]: (state, { payload }) => {
      let { user, message } = payload;
      addUserToLocalStorage(user);
      toast.success(`${message} ,${user.name}`);
      return { ...state, user, isLoading: false };
    },
    [registerAndLogin.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export let { logoutuser } = userSlice.actions;
export default userSlice.reducer;
