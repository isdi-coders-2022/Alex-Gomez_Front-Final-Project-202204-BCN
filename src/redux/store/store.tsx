import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import messagesReducer from "../features/messagesSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    messages: messagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
