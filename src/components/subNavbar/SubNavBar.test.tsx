import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import SubNavBar from "./SubNavBar";

describe("Given a subNavBar component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a form with 1 inputs and a button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SubNavBar />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: /Filter/i });

      expect(button).toBeEnabled();
      userEvent.click(button);

      expect(screen.getByLabelText("CATEGORY")).toBeInTheDocument();
    });
  });
});
