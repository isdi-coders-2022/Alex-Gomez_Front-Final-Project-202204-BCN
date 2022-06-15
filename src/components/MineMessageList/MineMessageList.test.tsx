import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import MineMessageList from "./MineMessageList";

describe("Given a MineMessageList component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render at least a card", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MineMessageList />
          </Provider>
        </BrowserRouter>
      );

      const cardShown = screen.getByRole("list");
      expect(cardShown).toBeInTheDocument();
    });
  });
});
