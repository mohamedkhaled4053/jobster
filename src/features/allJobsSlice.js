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
    return res.data;
  } catch (error) {
    return checkForUnauthorized(error, thunkAPI);
  }
});

export let deleteJob = createAsyncThunk('deleteJob', async (id, thunkAPI) => {
  try {
    let res = await customFetch.delete(`/jobs/${id}`, authHeader(thunkAPI));
    toast.success(res.data.msg);
    thunkAPI.dispatch(getAllJobs());
  } catch (error) {
    return checkForUnauthorized(error, thunkAPI);
  }
});

let AlljobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  reducers: {
    loadingOn: (state) => {
      state.isLoading = true;
    },
  },
  extraReducers: {
    [getAllJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllJobs.fulfilled]: (state, { payload: { jobs, numOfPages, totalJobs } }) => {
      return { ...state, isLoading: false, jobs, numOfPages, totalJobs };
    },
    [getAllJobs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteJob.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { loadingOn } = AlljobsSlice.actions;
export default AlljobsSlice.reducer;
