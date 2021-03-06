import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { userRegisterThunk } from "../../redux/thunks/userThunks";
import RegisterFormStyled from "./RegisterFormStyled";
import Button from "@mui/material/Button";

const RegisterForm = (): JSX.Element => {
  const blankFields = {
    name: "",
    username: "",
    password: "",
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(blankFields);

  const changeData = (event: { target: { id: string; value: string } }) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const submitRegister = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(userRegisterThunk(formData));
    setFormData(blankFields);
    navigate("/login");
  };

  return (
    <RegisterFormStyled>
      <form onSubmit={submitRegister} noValidate autoComplete="off">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={changeData}
          autoComplete="off"
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={changeData}
          autoComplete="off"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={changeData}
          autoComplete="off"
        />
        <Button
          variant="contained"
          className="button"
          type="submit"
          value="Send"
          disabled={
            formData.name === "" ||
            formData.username === "" ||
            formData.password === ""
          }
          onClick={submitRegister}
        >
          Register
        </Button>
        <span>Already have account?</span>
        <Link to="/login">Login</Link>
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
