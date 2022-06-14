import styled from "styled-components";

const SubNavBarStyled = styled.div`
  background-color: rgb(23, 100, 192);
  width: 100vw;

  .filter {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    color: white;
  }
  .category {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .button {
    color: white;
  }
  label {
    font-size: 0.75rem;
  }
  @media (min-width: 500px) {
    display: flex;
    justify-content: flex-end;

    .button {
      margin-right: 1rem;
      margin-left: 1rem;
    }

    label {
      font-size: 1rem;
      font-weight: 400;
    }

    .filter {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 3rem;
      color: white;
    }
    select {
      font-size: 1.1rem;
    }
  }
`;

export default SubNavBarStyled;
