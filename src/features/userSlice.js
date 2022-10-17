import {createSlice} from '@reduxjs/toolkit'

let initialState ={
    user: null,
    isLoading : false
}

let userSlice = createSlice({
    name: 'user',
    initialState
})

export default userSlice.reducer