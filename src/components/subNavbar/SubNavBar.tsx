import React, { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { getMessagesByCategoryThunk } from "../../redux/thunks/messagesThunks";
import SubNavBarStyled from "./SubNavBarStyled";

const SubNavBar = (): JSX.Element => {
  const resetForm = {
    category: "",
  };
  debugger;
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState(resetForm);

  const changeData = (event: { target: { id: string; value: string } }) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const submitCategory = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(getMessagesByCategoryThunk(formData.category));
  };

  return (
    <SubNavBarStyled>
      <>
        <div className="subNavBar"></div>
        <div className="filter">
          <form className="searchCategory" onSubmit={submitCategory}>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              className="category"
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
            <button type="submit" value="send">
              Filter
            </button>
          </form>
        </div>
      </>
    </SubNavBarStyled>
  );
};

export default SubNavBar;
