import { logoutuser } from '../features/userSlice';

// if error is because user unauthorized then logout
// else reject normally
export default function checkForUnauthorized(error, thunkAPI) {
  if (error.response.status === 401) {
    thunkAPI.dispatch(logoutuser('unauthorized! please login'));
    return thunkAPI.rejectWithValue();
  }
  return thunkAPI.rejectWithValue(error.response.data.msg || error.response.data || 'some thing went wrong');
}
