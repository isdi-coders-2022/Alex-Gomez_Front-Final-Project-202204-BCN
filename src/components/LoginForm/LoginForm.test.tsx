import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it is instantiated", () => {
    test("Then it should render a form with 2 inputs and 1 button", () => {
      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );
      expect(screen.getByLabelText("Username")).toBeInTheDocument();
      expect(screen.getByLabelText("Password")).toBeInTheDocument();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("When it's instantiated and login button is pressed", () => {
    test("Then it should call the submitLogin function", () => {
      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );
      const usernameInput = "Username";
      const username = "Marta";
      const passwordInput = "Password";
      const password = "1234";

      const nameText = screen.getByLabelText(usernameInput);
      userEvent.type(nameText, username);
      const passwordText = screen.getByLabelText(passwordInput);
      userEvent.type(passwordText, password);

      expect(nameText).toHaveValue(username);
      expect(passwordText).toHaveValue(password);

      const button = screen.getByRole("button", { name: /Login/i });

      expect(button).toBeEnabled();
      userEvent.click(button);
    });
  });
});
