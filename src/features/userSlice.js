import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { customFetch } from '../utils/axios'
import {toast} from 'react-toastify'

let initialState ={
    user: null,
    isLoading : false
}

export const registerUser = createAsyncThunk('user/register', async (user, thunkAPI)=>{
    try {
        let res = await customFetch.post('/auth/register',user)
        toast.success(`Hello There ${user.name}`);
        return res.data
    } catch (error) {
        toast.error(error.response.data.msg || error.response.data)
        return thunkAPI.rejectWithValue()
    }
})

export const loginUser = createAsyncThunk('user/login', async (user, thunkAPI)=>{
    
})

let userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers:{
        [registerUser.pending]: (state)=>{
            state.isLoading = true
        },
        [registerUser.fulfilled]: (state, {payload})=>{
            return {...state, user: payload.user, isLoading: false}
        },
        [registerUser.rejected]: (state)=>{
            state.isLoading=false
        }
    }
})

export default userSlice.reducer