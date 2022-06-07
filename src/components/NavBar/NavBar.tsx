import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const Logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutActionCreator());
    toast.success("Logout successfull!");
  };

  return (
    <NavBarStyled>
      <Button className="homeButton" variant="contained" type="submit">
        Home
      </Button>
      <Button className="createButton" variant="contained" type="submit">
        Create message
      </Button>
      <Button
        className="logoutButton"
        variant="contained"
        type="submit"
        onClick={Logout}
      >
        Logout
      </Button>
    </NavBarStyled>
  );
};

export default NavBar;
