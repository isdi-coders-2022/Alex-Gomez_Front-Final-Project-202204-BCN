import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import messagesReducer from "../features/messagesSlice";
import oneMessageReducer from "../features/oneMessageSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    messages: messagesReducer,
    message: oneMessageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
