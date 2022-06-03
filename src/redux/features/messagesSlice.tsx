import { createSlice } from "@reduxjs/toolkit";

interface State {
  image: string;
  test: string;
  category: string;
  author: string;
}

const initialState: State[] = [];

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    loadMessages: (messages, action) => [...action.payload],
  },
});

export const { loadMessages: loadMessagesActionCreator } = messageSlice.actions;

export default messageSlice.reducer;
