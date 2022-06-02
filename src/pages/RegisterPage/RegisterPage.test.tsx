import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage component", () => {
  describe("When invoked", () => {
    test("Then it should render 3 input text fields and a button", () => {
      render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );

      expect(screen.getByLabelText("Name")).toBeInTheDocument();
      expect(screen.getByLabelText("Username")).toBeInTheDocument();
      expect(screen.getByLabelText("Password")).toBeInTheDocument();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });
});
