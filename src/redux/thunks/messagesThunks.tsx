import axios from "axios";
import {
  startLoadingModal,
  stopErrorLoadingModal,
  stopOkLoadingModal,
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
    stopOkLoadingModal("Messages loaded");
  } catch (error: any) {
    stopErrorLoadingModal(`Something gone wrong: ${error}`);
  }
};

export const mineMessagesListThunk =
  (username: string) => async (dispatch: AppDispatch) => {
    try {
      startLoadingModal("Loading messages...");
      const urlPath = `${process.env.REACT_APP_API_URL}messages/mine`;
      const {
        data: { messages },
      } = await axios.get<AxiosMessageResponse>(urlPath, getAuthHeader());
      dispatch(loadMessagesActionCreator(messages));
      stopOkLoadingModal(`Messages Loaded`);
    } catch (error: any) {
      stopErrorLoadingModal(`Something gone wrong: ${error}`);
    }
  };

export const messageDeleteThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      startLoadingModal("Erasing message....");
      const urlPath = `${process.env.REACT_APP_API_URL}messages/${id}`;
      await axios.delete(urlPath, getAuthHeader());
      dispatch(deleteMessageActionCreator(id));
      stopOkLoadingModal(`Message deleted successfully`);
    } catch (error: any) {
      stopErrorLoadingModal(`Something gone wrong: ${error}`);
    }
  };

export const messageCreateThunk =
  (formData: {
    username: string;
    category: string;
    text: string;
    image: string;
  }) =>
  async (dispatch: AppDispatch) => {
    try {
      startLoadingModal("Saving message....");
      const urlPath = `${process.env.REACT_APP_API_URL}messages/mine/create`;
      debugger;
      console.log(`dispatch category: ${formData.category}`);
      console.log(`dispatch text: ${formData.text}`);
      console.log(`dispatch image: ${formData.image}`);
      console.log(`dispatch username: ${formData.username}`);

      await axios.post(urlPath, formData, getAuthHeader());
      dispatch(createMessageActionCreator);
      stopOkLoadingModal("Message Published correctly!");
    } catch (error) {
      stopErrorLoadingModal(`Something gone wrong: ${error}`);
    }
  };
