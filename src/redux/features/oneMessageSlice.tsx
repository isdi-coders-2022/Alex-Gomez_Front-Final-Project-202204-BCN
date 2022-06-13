import { createSlice } from "@reduxjs/toolkit";
import { State } from "./messagesSlice";

const initialState: State = {
  id: "",
  image: "",
  imageBackup: "",
  text: "",
  category: "",
  author: "",
};

const oneMessageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    loadOneMessage: (message, action) => ({ ...action.payload }),
    resetMessage: () => initialState,
  },
});

export const {
  loadOneMessage: loadOneMessageActionCreator,
  resetMessage: resetMessageActionCreator,
} = oneMessageSlice.actions;

export default oneMessageSlice.reducer;
