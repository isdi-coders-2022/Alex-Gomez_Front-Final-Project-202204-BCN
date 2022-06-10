import { createSlice } from "@reduxjs/toolkit";

interface State {
  id: string;
  image: string;
  text: string;
  category: string;
  author: string;
}

const initialState: State = {
  id: "",
  image: "",
  text: "",
  category: "",
  author: "",
};

const oneMessageSlice = createSlice({
  name: "oneMessage",
  initialState,
  reducers: {
    loadOneMessage: (oneMessage, action) => ({ ...action.payload }),
    blankState: () => initialState,
  },
});

export const { loadOneMessage: loadOneMessagesActionCreator } =
  oneMessageSlice.actions;

export default oneMessageSlice.reducer;
