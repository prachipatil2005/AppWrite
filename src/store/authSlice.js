import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,//Is the user logged in?
  userData: null,//Who is the logged-in user?
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => { //login and logout reducers
      state.status = true;
      state.userData = action.payload.userData;
    },

    logout: (state) => {
      state.status = false;//user is not logged in
      state.userData = null;//no user info yet
    },
  },
});
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
