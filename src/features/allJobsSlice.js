import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import authHeader from '../utils/authHeader';
import { customFetch } from '../utils/axios';
import checkForUnauthorized from '../utils/checkForUnauthorized';

let initialSearchFilters = {
  search: '',
  status: 'all',
  type: 'all',
  sort: 'latest',
};

let initialState = {
  isLoading: false,
  jobs: [],
  numOfPages: 0,
  totalJobs: 0,
  filters: initialSearchFilters,
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
    loadingOff: (state) => {
      state.isLoading = false;
    },
    changeSearchFilters: (state, { payload: { name, value } }) => {
      state.filters = { ...state.filters, [name]: value };
    },
    clearSearchFilters: (state) => {
      return { ...state, filters: initialSearchFilters };
    },
  },
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
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteJob.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {
  loadingOn,
  loadingOff,
  changeSearchFilters,
  clearSearchFilters,
} = AlljobsSlice.actions;
export default AlljobsSlice.reducer;
