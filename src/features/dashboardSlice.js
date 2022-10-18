import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    isSidebarOpen : true, 
    isUseSettingOpen: false
}

let dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers:{
        toggleSidebar: (state)=>{
            state.isSidebarOpen = !state.isSidebarOpen
        }
    }
})


export let {toggleSidebar} = dashboardSlice.actions
export default dashboardSlice.reducer