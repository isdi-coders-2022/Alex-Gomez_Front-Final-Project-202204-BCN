import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { State } from "../../redux/features/messagesSlice";
import { resetMessageActionCreator } from "../../redux/features/oneMessageSlice";
import { useAppDispatch } from "../../redux/hooks";
import {
  messageCreateThunk,
  messageUpdateThunk,
} from "../../redux/thunks/messagesThunks";
import MessageCreateFormStyled from "./MessageCreateFormStyled";

type messageProp = {
  message: State | null;
};

const MessageCreateForm = ({ message }: messageProp): JSX.Element => {
  const formInitialState = {
    id: message ? message.id : "",
    author: message ? message.author : "",
    category: message ? message.category : "",
    text: message ? message.text : "",
    image: message ? message.image : "",
    imageBackup: message ? message.imageBackup : "",
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState(formInitialState);

  const changeData = (event: React.BaseSyntheticEvent) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files?.[0] || ""
          : event.target.value,
    });
  };

  const resetForm = () => {
    setFormData(formInitialState);
  };

  const submitMessage = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();

    const newFormData: FormData | any = new FormData();

    if (formData.id) newFormData.id = formData.id;
    if (formData.author) newFormData.author = formData.author;
    if (formData.imageBackup) newFormData.imageBackup = formData.imageBackup;
    newFormData.append("category", formData.category);
    newFormData.append("text", formData.text);
    newFormData.append("image", formData.image);

    if (formData.id) {
      dispatch(messageUpdateThunk(newFormData));
      resetForm();
      dispatch(resetMessageActionCreator());
      navigate("/myMessageList");
    } else {
      dispatch(messageCreateThunk(newFormData));
      resetForm();
      dispatch(resetMessageActionCreator());
      navigate("/");
    }
  };

  return (
    <MessageCreateFormStyled>
      <form className="createForm" onSubmit={submitMessage}>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={formData.category}
          onChange={changeData}
          autoComplete="off"
        >
          <option value="Tradition">Tradition</option>
          <option value="Culture">Culture</option>
          <option value="Leisure">Leisure</option>
          <option value="Gastronomy">Gastronomy</option>
          <option value="Locations">Locations</option>
        </select>

        <label htmlFor="text">Write your message</label>
        <textarea
          id="text"
          value={formData.text}
          onChange={changeData}
          autoComplete="off"
          maxLength={240}
          cols={30}
          rows={8}
        />

        <label htmlFor="image">Upload image</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/png, image/jpeg"
          onChange={changeData}
        />
        <button
          type="submit"
          value="Send"
          disabled={
            formData.category === "" ||
            formData.text === "" ||
            formData.image === ""
          }
        >
          Publish
        </button>
      </form>
    </MessageCreateFormStyled>
  );
};

export default MessageCreateForm;
