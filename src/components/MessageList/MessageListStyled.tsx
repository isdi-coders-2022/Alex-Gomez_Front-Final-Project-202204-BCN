import styled from "styled-components";

const MessageListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-left: 0;
  list-style-type: none;
  margin: 1rem;

  @media (min-width: 400px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export default MessageListStyled;
