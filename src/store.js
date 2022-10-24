import { configureStore } from '@reduxjs/toolkit';
import {allJobsReducer, dashboardReducer, newJobReducer, userReducer ,statsReducer} from './features'
const store = configureStore({
  reducer: {
    user: userReducer,
    dashboard: dashboardReducer,
    newJob: newJobReducer,
    allJobs: allJobsReducer,
    stats: statsReducer
  },
});

export default store;
