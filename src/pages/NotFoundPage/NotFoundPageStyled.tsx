import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .emoji {
    font-size: 5rem;
    margin-top: 4rem;
  }
  .error {
    font-size: 3rem;
    margin-top: 0rem;
  }
  text {
    font-weight: bold;
    font-size: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    word-wrap: break-word;
  }
`;

export default NotFoundPageStyled;
