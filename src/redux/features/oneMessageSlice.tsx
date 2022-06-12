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
  },
});

export const { loadOneMessage: loadOneMessageActionCreator } =
  oneMessageSlice.actions;

export default oneMessageSlice.reducer;
