import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import MessageList from "./MessageList";

describe("Given a MessageList component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render at least a card", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MessageList />
          </Provider>
        </BrowserRouter>
      );

      const cardShown = screen.getByRole("list");
      expect(cardShown).toBeInTheDocument();
    });
  });
});
