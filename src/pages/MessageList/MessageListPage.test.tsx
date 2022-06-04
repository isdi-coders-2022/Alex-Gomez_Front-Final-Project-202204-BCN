import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import MessageListPage from "./MessageListPage";

describe("Given a MessageListPage component", () => {
  describe("When it's invoked", () => {
    test("It should render an unordered list", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MessageListPage />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getAllByRole("list")).toHaveLength(1);
    });
  });
});
