import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: false,
  mail: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action.payload.user);
      state.status = true;
      state.mail = action.payload.user.email;
    },
    logout: (state) => {
      state.status = false;
      state.mail = "";
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
