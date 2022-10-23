import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { customFetch } from '../utils/axios';
import { toast } from 'react-toastify';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../utils/localStorage';
import authHeader from '../utils/authHeader';
import checkForUnauthorized from '../utils/checkForUnauthorized';

let initialState = {
  user: getUserFromLocalStorage() || null,
  isLoading: false,
};

// use Async thunk to login or register
export const userRequest = createAsyncThunk(
  'user/useRequest',
  async ({ user, process, message }, thunkAPI) => {
    try {
      let res;
      // update case
      if (process === 'updateUser') {
        res = await customFetch.patch('/auth/updateUser', user, authHeader(thunkAPI));
      } else {
        // login and register case
        res = await customFetch.post(`/auth/${process}`, user);
      }
      return { user: res.data.user, message };
    } catch (error) {
      return checkForUnauthorized(error,thunkAPI)
    }
  }
);

let userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutuser: (state, {payload}) => {
      // if payload exist then alert an error with payload content
      // else just say goodbye to the user
      if (payload) {
        toast.error(payload);
      } else {
        toast.success(`we will miss you ,${state.user.name}`);
      }
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: {
    [userRequest.pending]: (state) => {
      state.isLoading = true;
    },
    [userRequest.fulfilled]: (state, { payload }) => {
      let { user, message } = payload;
      addUserToLocalStorage(user);
      toast.success(`${message} ,${user.name}`);
      return { ...state, user, isLoading: false };
    },
    [userRequest.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export let { logoutuser } = userSlice.actions;
export default userSlice.reducer;
