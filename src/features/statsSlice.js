import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
    return checkForUnauthorized();
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
  },
});

export default statsSlice.reducer;
