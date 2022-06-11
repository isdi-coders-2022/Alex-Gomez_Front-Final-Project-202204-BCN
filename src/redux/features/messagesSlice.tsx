import { createSlice } from "@reduxjs/toolkit";

interface State {
  id: string;
  image: string;
  imageBackup: string;
  text: string;
  category: string;
  author: string;
}

const initialState: State[] = [];

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    loadMessages: (messages, action) => [...action.payload],
    deleteMessage: (messages, action) =>
      messages.filter((message) => message.id !== action.payload),
    createMessage: (messages, action) => [...messages, action.payload],
  },
});

export const {
  loadMessages: loadMessagesActionCreator,
  deleteMessage: deleteMessageActionCreator,
  createMessage: createMessageActionCreator,
} = messageSlice.actions;

export default messageSlice.reducer;
