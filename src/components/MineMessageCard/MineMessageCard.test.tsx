import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import MineMessageCard from "./MineMessageCard";

describe("Given a MineMessageCard component", () => {
  describe("When it is instantiated", () => {
    test("Then it renders an image", () => {
      const Message = {
        id: "fakeId",
        text: "A message posted in the BD",
        image: "aFakeImageUrl",
        imageBackup: "aFakeImageUrl",
        category: "Leisure",
        author: "loggedUser",
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <MineMessageCard message={Message} />
          </Provider>
        </BrowserRouter>
      );

      const renderedImage = screen.getByAltText("pic by loggedUser");

      expect(renderedImage).toBeInTheDocument();
    });
  });
});
