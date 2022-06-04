import styled from "styled-components";

const MessageListStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 400) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
`;

export default MessageListStyled;
