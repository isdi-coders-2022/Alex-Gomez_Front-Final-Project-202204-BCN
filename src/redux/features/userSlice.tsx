import { createSlice } from "@reduxjs/toolkit";

interface State {
  name: string;
  username: string;
  logged: boolean;
}

const initialState: State = {
  name: "",
  username: "",
  logged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
