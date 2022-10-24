import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let initialState = {
    
}

export const getStats = createAsyncThunk('getStats',()=>{

})

const statsSlice = createSlice({ name: 'stats', initialState });


export default statsSlice.reducer