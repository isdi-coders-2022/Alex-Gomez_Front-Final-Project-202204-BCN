import axios from "axios";
import { toast } from "react-toastify";
import {
  startLoadingModal,
  stopLoadingModal,
} from "../../components/LoadingModal/LoadingModal";
import {
  createMessageActionCreator,
  deleteMessageActionCreator,
  loadMessagesActionCreator,
} from "../features/messagesSlice";
import { AppDispatch } from "../store/store";

interface Message {
  image: any;
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
    startLoadingModal("Loading messages...");
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
      startLoadingModal("Erasing message....");
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

export const messageCreateThunk =
  (formData: {
    username: string;
    category: string;
    text: string;
    image: any;
  }) =>
  async (dispatch: AppDispatch) => {
    try {
      startLoadingModal("Saving message....");
      const urlPath = `${process.env.REACT_APP_API_URL}messages/create`;
      await axios.post(urlPath, formData, getAuthHeader());
      dispatch(createMessageActionCreator);
      toast.success("Message Published correctly!");
    } catch (error) {
      toast.error(`Something gone wrong: ${error}`);
    } finally {
      stopLoadingModal();
    }
  };
