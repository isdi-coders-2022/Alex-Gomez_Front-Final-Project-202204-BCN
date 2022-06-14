import Button from "@mui/material/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { getMessagesByCategoryThunk } from "../../redux/thunks/messagesThunks";
import SubNavBarStyled from "./SubNavBarStyled";

const SubNavBar = (): JSX.Element => {
  const resetForm = {
    category: "",
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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

  const resetFilters = (event: React.SyntheticEvent) => {
    event.preventDefault();
    navigate("/");
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
            <Button
              variant="contained"
              type="submit"
              className="button"
              value="send"
            >
              Filter
            </Button>
          </form>
          <Button
            variant="contained"
            type="submit"
            className="button"
            onClick={resetFilters}
          >
            Reset
          </Button>
        </div>
      </>
    </SubNavBarStyled>
  );
};

export default SubNavBar;
