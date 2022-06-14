import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import NavBarStyled from "./NavBarStyled";
import IconButton from "@mui/material/IconButton";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import FormatListBulletedSharpIcon from "@mui/icons-material/FormatListBulletedSharp";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";

const NavBar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const Logout = (): void => {
    localStorage.removeItem("token");
    dispatch(logoutActionCreator());
    toast.success("Logout successfull!");
  };

  const goToHome = (): void => {
    navigate("/");
  };

  const goToMyMessages = (): void => {
    navigate("/my-message-list");
  };

  const goToCreateMessage = (): void => {
    navigate("/message-create");
  };

  return (
    <NavBarStyled>
      <Button
        className="homeButtonDesktop"
        variant="contained"
        type="submit"
        onClick={goToHome}
      >
        Home
      </Button>

      <IconButton
        className="homeButtonMobile"
        color="primary"
        size="large"
        aria-label="Home button"
        onClick={goToHome}
      >
        <HomeSharpIcon />
      </IconButton>

      <Button
        className="myMessagesDesktop"
        variant="contained"
        type="submit"
        onClick={goToMyMessages}
      >
        My messages
      </Button>

      <IconButton
        className="myMessagesMobile"
        color="primary"
        size="large"
        aria-label="My Messages"
        onClick={goToMyMessages}
      >
        <FormatListBulletedSharpIcon />
      </IconButton>

      <Button
        className="createButtonDesktop"
        variant="contained"
        type="submit"
        onClick={goToCreateMessage}
      >
        Create message
      </Button>

      <IconButton
        className="createButtonMobile"
        color="primary"
        size="large"
        aria-label="Create message"
        onClick={goToCreateMessage}
      >
        <BorderColorSharpIcon />
      </IconButton>

      <Button
        className="logoutButtonDesktop"
        variant="contained"
        type="submit"
        onClick={Logout}
      >
        Logout
      </Button>

      <IconButton
        className="logoutButtonMobile"
        color="primary"
        size="large"
        aria-label="Logout"
        onClick={Logout}
      >
        <ExitToAppSharpIcon />
      </IconButton>
    </NavBarStyled>
  );
};

export default NavBar;
