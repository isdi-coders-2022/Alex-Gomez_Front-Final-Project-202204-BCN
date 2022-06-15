import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import NotFoundPage from "./NotFoundPage";
import TestRenderer from "react-test-renderer";

describe("Given not notFoundPage", () => {
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

    test("Then it should match this snapshot", () => {
      const notFoundPageRender = TestRenderer.create(
        <BrowserRouter>
          <Provider store={store}>
            <NotFoundPage />
          </Provider>
        </BrowserRouter>
      );
      expect(notFoundPageRender).toMatchSnapshot();
    });
  });
});
