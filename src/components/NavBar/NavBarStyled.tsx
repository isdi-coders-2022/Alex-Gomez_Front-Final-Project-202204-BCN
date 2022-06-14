import styled from "styled-components";

const NavBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
  height: 5rem;
  background-color: rgb(23, 100, 192);
  .logoutButtonMobile,
  .createButtonMobile,
  .homeButtonMobile,
  .myMessagesMobile {
    margin-left: 1rem;
    margin-right: 1rem;
    display: block;
    height: 3rem;
    color: white;
  }
  .logoutButtonDesktop,
  .createButtonDesktop,
  .homeButtonDesktop,
  .myMessagesDesktop {
    display: none;
  }

  @media (min-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .logoutButtonMobile,
    .createButtonMobile,
    .homeButtonMobile,
    .myMessagesMobile {
      display: none;
    }

    .logoutButtonDesktop,
    .createButtonDesktop,
    .homeButtonDesktop,
    .myMessagesDesktop {
      display: block;
      height: 3.5rem;
      margin-left: 1rem;
    }
    .logoutButtonDesktop {
      margin-right: 1rem;
    }
  }
`;

export default NavBarStyled;
