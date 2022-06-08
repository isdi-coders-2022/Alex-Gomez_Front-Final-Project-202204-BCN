import styled from "styled-components";

const MessageCreateFormStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .createForm {
    margin: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
  }

  select,
  textarea,
  input {
    width: 80vw;
  }

  textarea {
    resize: none;
  }

  label {
    margin: 1rem;
  }

  @media (min-width: 400px) {
    .createForm {
      width: 390px;
    }

    select,
    textarea,
    input {
      width: 390px;
    }
  }
`;

export default MessageCreateFormStyled;
