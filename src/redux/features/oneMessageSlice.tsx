import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  id: string;
  image: string;
  imageBackup: string;
  text: string;
  category: string;
  author: string;
}

interface MessageState {
  oneMessage: IState;
}

const initialState: MessageState = {
  oneMessage: {
    id: "",
    image: "",
    imageBackup: "",
    text: "",
    category: "",
    author: "",
  },
};

const oneMessageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    loadOneMessage: (message, action: PayloadAction<IState>) => ({
      oneMessage: { ...action.payload },
    }),
    blankState: () => initialState,
  },
});

export const {
  loadOneMessage: loadOneMessageActionCreator,
  blankState: resetOneMessageActionCreator,
} = oneMessageSlice.actions;

export default oneMessageSlice.reducer;
