import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import NotFoundPage from "./NotFoundPage";

describe("Given a LoginPage component", () => {
  describe("When it is invoked", () => {
    test("Then it should render a form with 2 inputs and a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <NotFoundPage />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByText("404")).toBeInTheDocument();
      expect(
        screen.getByText("Go back or just type again the url")
      ).toBeInTheDocument();
    });
  });
});
