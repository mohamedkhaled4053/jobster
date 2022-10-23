import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import authHeader from '../utils/authHeader';
import { customFetch } from '../utils/axios';
import checkForUnauthorized from '../utils/checkForUnauthorized';

let initialState = {
  isLoading: false,
  jobs: [],
  numOfPages: 0,
  totalJobs: 0,
};

export let getAllJobs = createAsyncThunk('getAllJobs', async (_, thunkAPI) => {
  let url = '/jobs';
  try {
    let res = await customFetch.get(url, authHeader(thunkAPI));
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.response);
    return checkForUnauthorized(error, thunkAPI);
  }
});

let AlljobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  extraReducers: {
    [getAllJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllJobs.fulfilled]: (
      state,
      { payload: { jobs, numOfPages, totalJobs } }
    ) => {
      return { ...state, isLoading: false, jobs, numOfPages, totalJobs };
    },
    [getAllJobs.rejected]: (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
    },
  },
});

export default AlljobsSlice.reducer;
