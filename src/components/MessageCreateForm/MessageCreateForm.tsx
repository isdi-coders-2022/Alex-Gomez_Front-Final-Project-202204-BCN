import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  messageCreateThunk,
  messageUpdateThunk,
} from "../../redux/thunks/messagesThunks";
import MessageCreateFormStyled from "./MessageCreateFormStyled";

const MessageCreateForm = (): JSX.Element => {
  interface IRegisterForm {
    id: string;
    image: string;
    text: string;
    category: string;
  }

  const blankFields: IRegisterForm = {
    id: "",
    category: "",
    text: "",
    image: "",
  };
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState(blankFields);

  const message = useAppSelector((state) => state.message);

  useEffect(() => {
    if (message) {
      setFormData(message);
    }
  }, [message]);

  const changeData = (event: React.BaseSyntheticEvent) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files?.[0] || ""
          : event.target.value,
    });
  };

  const submitMessage = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();

    const newFormData: FormData | any = new FormData();

    newFormData.append("category", formData.category);
    newFormData.append("text", formData.text);
    newFormData.append("image", formData.image);
    formData.id
      ? dispatch(messageUpdateThunk(newFormData))
      : dispatch(messageCreateThunk(newFormData));
    setFormData(blankFields);
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
