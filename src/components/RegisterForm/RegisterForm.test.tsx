import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a form with 3 inputs and a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Name")).toBeInTheDocument();
      expect(screen.getByLabelText("Username")).toBeInTheDocument();
      expect(screen.getByLabelText("Password")).toBeInTheDocument();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("When it's instantiated and login button is pressed", () => {
    test("Then it should call the submitLogin function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const nameInput = "Name";
      const name = "Luis";

      const usernameInput = "Username";
      const username = "Luis";
      const passwordInput = "Password";
      const password = "5678";

      const nameText = screen.getByLabelText(nameInput);
      userEvent.type(nameText, name);
      const usernameText = screen.getByLabelText(usernameInput);
      userEvent.type(usernameText, username);
      const passwordText = screen.getByLabelText(passwordInput);
      userEvent.type(passwordText, password);

      expect(nameText).toHaveValue(name);
      expect(usernameText).toHaveValue(username);
      expect(passwordText).toHaveValue(password);

      const button = screen.getByRole("button", { name: /Register/i });

      expect(button).toBeEnabled();
      userEvent.click(button);
    });
  });
});
