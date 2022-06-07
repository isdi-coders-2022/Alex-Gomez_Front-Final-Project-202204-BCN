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

export const messagesListThunk = () => async (dispatch: AppDispatch) => {
  try {
    startLoadingModal();
    const urlPath = `${process.env.REACT_APP_API_URL}messages/list`;
    const {
      data: { messages },
    } = await axios.get(urlPath);
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
      await axios.delete(urlPath);
      dispatch(deleteMessageActionCreator(id));
      toast.success(`Message deleted successfully`);
    } catch (error: any) {
      toast.error(`Something gone wrong: ${error}`);
    } finally {
      stopLoadingModal();
    }
  };
