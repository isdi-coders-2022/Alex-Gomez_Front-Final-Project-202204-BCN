import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import {
  startLoadingModal,
  stopLoadingModal,
} from "../../components/LoadingModal/LoadingModal";
import { loginActionCreator, logoutActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

export const userRegisterThunk =
  (formData: { name: string; username: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      startLoadingModal();
      const urlPath = `${process.env.REACT_APP_API_URL}user/register`;
      const {
        data: { username },
      } = await axios.post(urlPath, formData);
      toast.success(`Registered successful ${username}!`);

      const newUser = {
        username: formData.username,
        password: formData.password,
      };

      const registerPath = `${process.env.REACT_APP_API_URL}user/login`;
      const {
        data: { token },
      } = await axios.post(registerPath, newUser);

      localStorage.setItem("token", token);
      const userInfo = jwtDecode(token);
      toast.success("You are now logged in");
      dispatch(loginActionCreator(userInfo));
      stopLoadingModal();
    } catch (error: any) {
      toast.error(`Something gone wrong: ${error}`);
    } finally {
      stopLoadingModal();
    }
  };

export const userLoginThunk =
  (formData: { username: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    toast.loading("Loading...");
    const urlPath = `${process.env.REACT_APP_API_URL}user/login`;
    try {
      const {
        data: { token },
      } = await axios.post(urlPath, formData);
      if ({ data: { token: String } }) {
        localStorage.setItem("token", token);
        toast.success("You are now logged in");
        const userInfo = jwtDecode(token);
        dispatch(loginActionCreator(userInfo));
      }
    } catch (Error) {
      toast.error(`Something gone wrong: ${Error}!`);
    } finally {
      toast.dismiss();
    }
  };

export const userLogoutThunk = () => (dispatch: AppDispatch) => {
  localStorage.removeItem("token");
  dispatch(logoutActionCreator());
};
