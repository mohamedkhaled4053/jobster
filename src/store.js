import { configureStore } from '@reduxjs/toolkit';
import allJobsReducer from './features/allJobsSlice';
import dashboardReducer from './features/dashboardSlice';
import newJobReducer from './features/newJobSlice';
import userReducer from './features/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    dashboard: dashboardReducer,
    newJob: newJobReducer,
    allJobs: allJobsReducer
  },
});

export default store;
