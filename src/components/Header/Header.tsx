import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const japanLogo = "/japanLogo.jpeg";
  return (
    <HeaderStyled>
      <img src={japanLogo} height={125} alt={"japan things logo"} />
    </HeaderStyled>
  );
};

export default Header;
