import RegisteredFormStyled from "./RegisterFormStyled";

const RegisterForm = () => {
  const submitRegister = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <RegisteredFormStyled>
      <form onSubmit={submitRegister} noValidate autoComplete="off">
        <label htmlFor="nameRegister">Name</label>
        <input id="name" autoComplete="off" />
        <label htmlFor="usernameRegister">Username</label>
        <input id="userName" autoComplete="off" />
        <label htmlFor="passwordRegister">Password</label>
        <input id="password" type="password" autoComplete="off" />
        <button type="submit" value="Send">
          Register
        </button>
      </form>
    </RegisteredFormStyled>
  );
};

export default RegisterForm;
