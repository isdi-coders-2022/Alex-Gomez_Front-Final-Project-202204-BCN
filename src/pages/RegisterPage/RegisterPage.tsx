import Header from "../../components/Header/Header";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyled>
      <div className="maincontainer">
        <Header />
        <RegisterForm />
      </div>
    </RegisterPageStyled>
  );
};

export default RegisterPage;
