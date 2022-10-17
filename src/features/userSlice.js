import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

let initialState ={
    user: null,
    isLoading : false
}

export const registerUser = createAsyncThunk('user/register', async ()=>{
    console.log('registerd');
})
export const loginUser = createAsyncThunk('user/login', async ()=>{
    console.log('logind');
})

let userSlice = createSlice({
    name: 'user',
    initialState
})

export default userSlice.reducer