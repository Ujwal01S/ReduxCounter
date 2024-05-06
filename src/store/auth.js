import { createSlice } from "@reduxjs/toolkit";


const initialAuthState= {isAuthenticated: false};
const authslice= createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        logIn(state) {
            state.isAuthenticated= true
        },
        logout(state) {
            state.isAuthenticated= false
        }
    }
});

export const authActions= authslice.actions;

export default authslice.reducer;