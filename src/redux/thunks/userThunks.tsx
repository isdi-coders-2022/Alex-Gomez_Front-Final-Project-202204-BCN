import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

interface RegisterApi {
  data: { username: string };
}

export const userRegisterThunk =
  (formData: { name: string; username: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    const urlPath = `${process.env.REACT_APP_API_URL}user/register`;
    const { data: username } = await axios.post<RegisterApi>(urlPath, formData);
    if (username) {
    }
  };

export const userLoginThunk =
  (formData: { username: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    const urlPath = `${process.env.REACT_APP_API_URL}user/login`;
    const {
      data: { token },
    } = await axios.post(urlPath, formData);
    if (token) {
      localStorage.setItem("token", token);
      const userInfo = jwtDecode(token);
      dispatch(loginActionCreator(userInfo));
    }
  };
