import styled from "styled-components";

const MessageCardStyled = styled.li`
  .container {
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.35);
    border-radius: 1rem;
  }

  .img {
    aspect-ratio: 3/2;
    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
  }

  p,
  span {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .category {
    margin-top: 1rem;
    font-weight: bold;
  }

  .author {
    margin-bottom: 1rem;
  }

  @media (min-width: 400px) {
    .container {
      width: 390px;
    }
  }
`;

export default MessageCardStyled;
