import styled from "styled-components";

const MessageCardStyled = styled.li`
  .smol-card-component {
    --img-ratio: 3/2;

    display: flex;
    flex-direction: column;
    /* Supported for flexbox in modern browsers since April 2021 */
    gap: 1rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.35);
    border-radius: 0.5rem;
  }

  .smol-card-component > img {
    aspect-ratio: var(--img-ratio);
    object-fit: cover;
    width: 100%;
  }
`;

export default MessageCardStyled;
