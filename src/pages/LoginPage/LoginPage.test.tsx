import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it is invoked", () => {
    test("Then it should render a form with 2 inputs and a button", () => {
      render(
        <Provider store={store}>
          <LoginPage />
        </Provider>
      );

      expect(screen.getByLabelText("Username")).toBeInTheDocument();
      expect(screen.getByLabelText("Password")).toBeInTheDocument();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });
});
