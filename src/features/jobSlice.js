import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    isLoading: false
}

let jobSlice = createSlice({
    name: 'job',
    initialState
})


export default jobSlice.reducer