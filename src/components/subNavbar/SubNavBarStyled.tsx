import styled from "styled-components";

const SubNavBarStyled = styled.div`
  .subNavBar {
    background-color: white;
    height: 1rem;
  }
  .filter {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 3rem;
    background-color: rgb(23, 100, 192);
    height: 2rem;
    color: white;
    font-weight: bold;
  }
  .category {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export default SubNavBarStyled;
