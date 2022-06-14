import styled from "styled-components";

const MessageCreateFormStyled = styled.section`
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

  input,
  select {
    width: 70vw;
    border-radius: 4px;
    font-size: 1.2rem;
  }

  .button {
    width: 70vw;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  textarea {
    resize: none;
    width: 70vw;
    border-radius: 4px;
    font-size: 1.2rem;
  }

  @media (min-width: 500px) {
    .createForm {
      margin-top: 2rem;
    }

    input {
      width: 50vw;
      border-radius: 4px;
      font-size: 1.2rem;
    }

    select,
    textarea {
      width: 50vw;
    }

    .button {
      width: 50vw;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

export default MessageCreateFormStyled;
