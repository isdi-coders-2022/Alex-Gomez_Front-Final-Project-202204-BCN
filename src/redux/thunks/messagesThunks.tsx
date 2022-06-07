import axios from "axios";
import { toast } from "react-toastify";
import {
  startLoadingModal,
  stopLoadingModal,
} from "../../components/LoadingModal/LoadingModal";
import {
  deleteMessageActionCreator,
  loadMessagesActionCreator,
} from "../features/messagesSlice";
import { AppDispatch } from "../store/store";

interface Message {
  id: string;
  image: string;
  text: string;
  category: string;
  author: string;
}

interface AxiosMessageResponse {
  messages: Message[];
}

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const messagesListThunk = () => async (dispatch: AppDispatch) => {
  try {
    startLoadingModal();
    const urlPath = `${process.env.REACT_APP_API_URL}messages/list`;
    const {
      data: { messages },
    } = await axios.get<AxiosMessageResponse>(urlPath, getAuthHeader());
    dispatch(loadMessagesActionCreator(messages));
  } catch (error: any) {
    toast.error(`Something gone wrong: ${error}`);
  } finally {
    stopLoadingModal();
  }
};

export const messageDeleteThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      startLoadingModal();
      const urlPath = `${process.env.REACT_APP_API_URL}messages/${id}`;
      await axios.delete(urlPath, getAuthHeader());
      dispatch(deleteMessageActionCreator(id));
      toast.success(`Message deleted successfully`);
    } catch (error: any) {
      toast.error(`Something gone wrong: ${error}`);
    } finally {
      stopLoadingModal();
    }
  };
