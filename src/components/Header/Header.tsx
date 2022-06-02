import HeaderStyled from "./HeaderStyled";

const Header = () => {
  const japanLogo = "/japanLogo.png";
  return (
    <HeaderStyled>
      <img src={japanLogo} height={150} alt={"japan things logo"} />
    </HeaderStyled>
  );
};

export default Header;
