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
    padding-right: 3rem;
    height: 2.5rem;
    color: white;
    font-weight: bold;
  }
  .category {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .button {
    color: white;
  }
`;

export default SubNavBarStyled;
