import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import MessageDetailPage from "./MessageDetailPage";

describe("Given a MessageDetail page", () => {
  describe("When it's instantiated", () => {
    test("It should render a list of one message", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MessageDetailPage />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getAllByRole("list")).toHaveLength(1);
    });
  });
});
