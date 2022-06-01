import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a form with 3 inputs and a button", () => {
      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      expect(screen.getByLabelText("Name")).toBeInTheDocument();
      expect(screen.getByLabelText("Username")).toBeInTheDocument();
      expect(screen.getByLabelText("Password")).toBeInTheDocument();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });
});
