import NavBar from "../../components/NavBar/NavBar";

import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <NotFoundPageStyled>
        <p className="emoji">404</p>
        <p className="error">ERROR</p>
        <p className="text">The page you are looking for doesn't exist.</p>
        <p className="text">Or maybe an error occurred.</p>
        <p className="text">Go back or just type again the url</p>
      </NotFoundPageStyled>
    </>
  );
};

export default NotFoundPage;
