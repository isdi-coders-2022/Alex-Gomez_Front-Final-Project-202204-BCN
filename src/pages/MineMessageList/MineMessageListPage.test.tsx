import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import MineMessageListPage from "./MineMessageListPage";

describe("Given a MineMessageListPage component", () => {
  describe("When it's instantiated", () => {
    test("It should render an unordered list", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MineMessageListPage />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getAllByRole("list")).toHaveLength(1);
    });
  });
});
