import styled from "styled-components";

const SubNavBarStyled = styled.div`
  background-color: rgb(23, 100, 192);
  .subNavBar {
    background-color: white;
    height: 1rem;
  }
  .filter {
    display: flex;
    justify-content: flex-end;
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
  @media (min-width: 450px) {
    justify-content: flex-end;

    .button {
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }
`;

export default SubNavBarStyled;
