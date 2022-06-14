import styled from "styled-components";

const LoginFormStyled = styled.section`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  label {
    font-size: 1.2rem;
    margin: 0.5rem;
    font-weight: bold;
  }

  input {
    width: 70vw;
    border-radius: 4px;
    font-size: 1.2rem;
  }

  .button {
    width: 70vw;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 500px) {
    input {
      width: 50vw;
      border-radius: 4px;
      font-size: 1.2rem;
    }

    .button {
      width: 50vw;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

export default LoginFormStyled;
