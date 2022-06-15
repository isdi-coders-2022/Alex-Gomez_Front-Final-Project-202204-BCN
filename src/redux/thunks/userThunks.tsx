import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  startLoadingModal,
  stopErrorLoadingModal,
  stopOkLoadingModal,
} from "../../components/LoadingModal/LoadingModal";
import { loginActionCreator, logoutActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

export const userRegisterThunk =
  (formData: { name: string; username: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      startLoadingModal("Registering user...");
      const urlPath = `${process.env.REACT_APP_API_URL}user/register`;
      const {
        data: { username },
      } = await axios.post(urlPath, formData);

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

      dispatch(loginActionCreator(userInfo));

      stopOkLoadingModal(`Registered successful ${username}!`);
    } catch (error: any) {
      stopErrorLoadingModal(`Something gone wrong: ${error}`);
    }
  };

export const userLoginThunk =
  (formData: { username: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    startLoadingModal("Logging in....");
    const urlPath = `${process.env.REACT_APP_API_URL}user/login`;
    try {
      const {
        data: { token },
      } = await axios.post(urlPath, formData);
      if ({ data: { token: String } }) {
        localStorage.setItem("token", token);
        const userInfo = jwtDecode(token);
        dispatch(loginActionCreator(userInfo));
        stopOkLoadingModal("You are now logged in");
      }
    } catch (Error) {
      stopErrorLoadingModal(`Something gone wrong: ${Error}!`);
    }
  };

export const userLogoutThunk = () => (dispatch: AppDispatch) => {
  localStorage.removeItem("token");
  dispatch(logoutActionCreator());
};
