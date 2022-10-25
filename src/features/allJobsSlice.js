import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
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
  page: 1,
  filters: initialSearchFilters,
};

export let getAllJobs = createAsyncThunk(
  'getAllJobs',
  async ({ filters: { search, status, type, sort }, page }, thunkAPI) => {
    // setup the url
    let url = `/jobs?status=${status}&jobType=${type}&sort=${sort}&page=${page}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    // cancel http request if aborted
    let source = axios.CancelToken.source();
    thunkAPI.signal.addEventListener('abort', () => {
      source.cancel();
    });
    // fetch data
    try {
      let res = await customFetch.get(url, {
        ...authHeader(thunkAPI),
        cancelToken: source.token,
      });
      return res.data;
    } catch (error) {
      return checkForUnauthorized(error, thunkAPI);
    }
  }
);

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
      state.page = 1;
    },
    clearSearchFilters: (state) => {
      return { ...state, filters: initialSearchFilters };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
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
    [getAllJobs.rejected]: (state, { payload, meta }) => {
      if (!meta.aborted) {
        state.isLoading = false;
        toast.error(payload);
      }
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
  changePage,
} = AlljobsSlice.actions;
export default AlljobsSlice.reducer;
