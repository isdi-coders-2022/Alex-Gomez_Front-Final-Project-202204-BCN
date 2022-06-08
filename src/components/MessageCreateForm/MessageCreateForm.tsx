import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { messageCreateThunk } from "../../redux/thunks/messagesThunks";
import MessageCreateFormStyled from "./MessageCreateFormStyled";

const MessageCreateForm = (): JSX.Element => {
  const blankFields = {
    id: "",
    category: "",
    text: "",
    image: "",
  };

  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.user);

  const [formData, setFormData] = useState(blankFields);

  const changeData = (event: { target: { id: string; value: string } }) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const submitMessage = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    formData.id = id;
    dispatch(messageCreateThunk(formData));
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
          value={formData.image}
          onChange={changeData}
          autoComplete="off"
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
