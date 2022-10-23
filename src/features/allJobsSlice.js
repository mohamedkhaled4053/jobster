import {createSlice} from '@reduxjs/toolkit'

let initialState= {
    jobs : []
}

let AlljobsSlice = createSlice({
    name:'allJobs',
    initialState
})

export default AlljobsSlice.reducer