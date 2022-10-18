import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './features/dashboardSlice';
import userReducer from './features/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    dashboard: dashboardReducer
  },
});

export default store;
