import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import MessageList from "./MessageList";

describe("Given a MessageList component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a form with 1 inputs and a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MessageList />
          </Provider>
        </BrowserRouter>
      );

      const prevButton = screen.getByRole("button", { name: /Prev/i });
      expect(prevButton).toBeEnabled();
      userEvent.click(prevButton);

      const nextButton = screen.getByRole("button", { name: /Next/i });
      expect(nextButton).toBeEnabled();
      userEvent.click(nextButton);
    });
  });
});
