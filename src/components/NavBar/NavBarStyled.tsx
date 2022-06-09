import styled from "styled-components";

const NavBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 0;
  height: 5rem;
  background-color: rgb(23, 100, 192);
  .logoutButton,
  .createButton,
  .homeButton,
  .myMessages {
    height: 3rem;
  }
`;

export default NavBarStyled;
