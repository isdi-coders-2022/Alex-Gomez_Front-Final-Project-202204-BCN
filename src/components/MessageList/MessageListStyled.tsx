import styled from "styled-components";

const MessageListStyled = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0;
    list-style-type: none;
    margin: 1rem;
  }

  .page-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
  }

  .button {
    color: white;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  @media (min-width: 400px) {
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

export default MessageListStyled;
