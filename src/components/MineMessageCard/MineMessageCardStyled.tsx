import styled from "styled-components";

const MineMessageCardStyled = styled.li`
  margin: 1rem;

  .container {
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.35);
    border-radius: 1rem;
    width: 90vw;
  }

  .img {
    aspect-ratio: 3/2;
    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
  }

  .img:hover {
    cursor: pointer;
  }

  p,
  span {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .category {
    font-weight: 600;
    margin-top: 0.5rem;
    margin-bottom: 0;
    font-style: oblique;
    text-decoration: underline;
    align-self: self-end;
  }

  .text {
    height: 3rem;
    word-wrap: break-word;
  }

  .author {
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .edit {
    width: 40%;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
  }

  .delete {
    width: 40%;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
  }

  @media (min-width: 450px) {
    .container {
      width: 370px;
    }
  }
`;

export default MineMessageCardStyled;
