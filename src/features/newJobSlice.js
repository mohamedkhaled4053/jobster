import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import authHeader from '../utils/authHeader';
import { customFetch } from '../utils/axios';
import checkForUnauthorized from '../utils/checkForUnauthorized';
import { getAllJobs, loadingOff } from './allJobsSlice';

// initial data alone to deal with it without dealing with loading state if needed
let initialJobData = {
  position: '',
  company: '',
  jobLocation: '',
  status: 'pending',
  jobType: 'full-time',
};

let initialState = {
  isLoading: false,
  isEdit: false,
  editId: '',
  ...initialJobData,
};

// asynk thunks
export const addJob = createAsyncThunk('job/addJob', async (job, thunkAPI) => {
  try {
    let res = await customFetch.post('/jobs', job, authHeader(thunkAPI));
    return res.data;
  } catch (error) {
    return checkForUnauthorized(error, thunkAPI);
  }
});

export const editJob = createAsyncThunk('editJob', async ({ id, job }, thunkAPI) => {
  try {
    await customFetch.patch(`/jobs/${id}`, job, authHeader(thunkAPI));
    // get jobs after updating the job
    thunkAPI.dispatch(getAllJobs());
    toast.success('job modified');
    return;
  } catch (error) {
    thunkAPI.dispatch(loadingOff());
    return checkForUnauthorized(error, thunkAPI);
  }
});

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    changeJobData: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearJobData: (state) => {
      return { ...state, ...initialJobData };
    },
    setupEdit: (state, { payload }) => {
      return { ...state, ...payload, isEdit: true };
    },
    cancelEdit: (state) => {
      state.isEdit = false;
    },
  },
  extraReducers: {
    [addJob.pending]: (state) => {
      state.isLoading = true;
    },
    [addJob.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success('job created');
    },
    [addJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [editJob.rejected]: (_, { payload }) => {
      toast.error(payload);
    },
  },
});

export let { changeJobData, clearJobData, setupEdit, cancelEdit } = jobSlice.actions;
export default jobSlice.reducer;
