import styled from "styled-components";

const NavBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

  @media (min-width: 450px) {
    justify-content: flex-end;

    .logoutButton,
    .createButton,
    .homeButton,
    .myMessages {
      height: 3rem;
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }
`;

export default NavBarStyled;
