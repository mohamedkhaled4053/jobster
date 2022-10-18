import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    isSidebarOpen : true, 
    isUserSettingOpen: false
}

let dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers:{
        toggleSidebar: (state)=>{
            state.isSidebarOpen = !state.isSidebarOpen
        },
        toggleUserSetting:(state)=>{
            state.isUserSettingOpen = !state.isUserSettingOpen
        }
    }
})


export let {toggleSidebar , toggleUserSetting} = dashboardSlice.actions
export default dashboardSlice.reducer