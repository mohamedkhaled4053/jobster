import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import authHeader from '../utils/authHeader';
import { customFetch } from '../utils/axios';
import checkForUnauthorized from '../utils/checkForUnauthorized';

let initialJobData = {
  position: '',
  company: '',
  jobLocation: '',
  status: 'pending',
  jobType: 'full-time',
};

let initialState = {
  isLoading: false,
  ...initialJobData,
};

export let addJob = createAsyncThunk('job/addJob', async (job, thunkAPI) => {
  try {
    let res = await customFetch.post('/jobs', job, authHeader(thunkAPI));
    return res.data;
  } catch (error) {
    // if error is because user unauthorized then logout
    // else reject normally
    return checkForUnauthorized(error, thunkAPI);
  }
});

let jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    changeJobData: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearJobData: (state) => {
      return { ...state, ...initialJobData };
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
  },
});

export let { changeJobData, clearJobData } = jobSlice.actions;
export default jobSlice.reducer;
