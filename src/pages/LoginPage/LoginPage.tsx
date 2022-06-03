import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <LoginPageStyled>
        <LoginForm />
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
