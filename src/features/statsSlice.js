import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import authHeader from '../utils/authHeader';
import { customFetch } from '../utils/axios';
import checkForUnauthorized from '../utils/checkForUnauthorized';

let initialState = {
  pending: 0,
  interview: 0,
  declined: 0,
  chartData: [],
};

export const getStats = createAsyncThunk('getStats', async (_, thunkApi) => {
  try {
    let res = await customFetch('/jobs/stats', authHeader(thunkApi));
    return res.data;
  } catch (error) {
    return checkForUnauthorized(error, thunkApi);
  }
});

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  extraReducers: {
    [getStats.fulfilled]: (state, { payload }) => {
      let { defaultStats, monthlyApplications } = payload;
      return { ...state, ...defaultStats, chartData: monthlyApplications };
    },
    [getStats.rejected]: (state, { payload }) => {
      toast.error(payload);
    },
  },
});

export default statsSlice.reducer;
