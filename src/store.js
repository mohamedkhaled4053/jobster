import { configureStore } from '@reduxjs/toolkit';
import {allJobsReducer, dashboardReducer, newJobReducer, userReducer} from './features'

const store = configureStore({
  reducer: {
    user: userReducer,
    dashboard: dashboardReducer,
    newJob: newJobReducer,
    allJobs: allJobsReducer
  },
});

export default store;
