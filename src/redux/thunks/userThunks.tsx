import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

interface RegisterApi {
  data: { username: string };
}

export const userRegisterThunk =
  (formData: { name: string; username: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      const urlPath = `${process.env.REACT_APP_API_URL}user/register`;
      const { data: user } = await axios.post<RegisterApi>(urlPath, formData);
      toast.success(`Registered successful ${user}!`);
    } catch (Error) {
      toast.success(`Something gone wrong ${Error}`);
    }
  };

export const userLoginThunk =
  (formData: { username: string; password: string }) =>
  async (dispatch: AppDispatch) => {
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
    }
  };
