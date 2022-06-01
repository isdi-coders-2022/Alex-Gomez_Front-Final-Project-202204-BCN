import axios from "axios";
import { AppDispatch } from "../store/store";

interface responseApi {
  data: { username: string };
}

export const userRegisterThunk =
  (formData: { name: string; username: string; password: string }) =>
  async (dispatch: AppDispatch) => {
    const { data: username } = await axios.post<responseApi>(
      `${process.env.REACT_APP_API_URL}user/register`,
      formData
    );
    if (username) {
    }
  };
