import axios from "axios";
import { toast } from "react-toastify";
import { loadMessagesActionCreator } from "../features/messagesSlice";
import { AppDispatch } from "../store/store";

const messagesListThunk = () => async (dispatch: AppDispatch) => {
  try {
    const urlPath = `${process.env.REACT_APP_API_URL}messages/list`;
    const {
      data: { messages },
    } = await axios.get(urlPath);
    dispatch(loadMessagesActionCreator(messages));
  } catch (Error) {
    toast.success(`Something gone wrong ${Error}`);
  }
};

export default messagesListThunk;
