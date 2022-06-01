import { createSlice } from "@reduxjs/toolkit";

interface State {
  name: string;
  username: string;
  logged: boolean;
}

const initialState: State = {
  name: "",
  username: "",
  logged: localStorage.getItem("token") ? true : false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user, action) => ({ ...action.payload, logged: true }),
  },
});

export const { login: loginActionCreator } = userSlice.actions;

export default userSlice.reducer;
