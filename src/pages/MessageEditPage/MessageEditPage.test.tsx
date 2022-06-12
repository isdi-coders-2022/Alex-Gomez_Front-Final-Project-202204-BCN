import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import MessageEditPage from "./MessageEditPage";

describe("Given a RegisterPage component", () => {
  describe("When invoked", () => {
    test("Then it should render 3 input text fields and a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MessageEditPage />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Write your message")).toBeInTheDocument();
      expect(screen.getByLabelText("Category")).toBeInTheDocument();
      expect(screen.getByLabelText("Upload image")).toBeInTheDocument();
    });
  });
});
