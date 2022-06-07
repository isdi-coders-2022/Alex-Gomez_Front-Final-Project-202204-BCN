import Button from "@mui/material/Button";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const Logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutActionCreator());
  };

  return (
    <NavBarStyled>
      <Button variant="contained" type="submit" onClick={Logout}>
        Logout
      </Button>
    </NavBarStyled>
  );
};

export default NavBar;
