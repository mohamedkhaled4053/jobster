import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import authHeader from '../utils/authHeader';
import { customFetch } from '../utils/axios';
import checkForUnauthorized from '../utils/checkForUnauthorized';


let initialState = {
  isLoading: false,
  jobs: [],
};

export let addJob = createAsyncThunk('job/addJob', async (job, thunkAPI) => {
  try {
    let res = await customFetch.post('/jobs', job, authHeader(thunkAPI));
    return res.data;
  } catch (error) {
    // if error is because user unauthorized then logout
    // else reject normally
    return checkForUnauthorized(error,thunkAPI)
  }
});

let jobSlice = createSlice({
  name: 'job',
  initialState,
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

export default jobSlice.reducer;
