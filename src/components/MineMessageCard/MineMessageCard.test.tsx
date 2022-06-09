import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import MineMessageCard from "./MineMessageCard";

describe("Given a MineMessageCard component", () => {
  describe("When it is instantiated", () => {
    test("Then it renders an image", () => {
      const Message = {
        id: "fakeId",
        text: "A message posted in the BD",
        image: "aFakeImageUrl",
        category: "Leisure",
        author: "loggedUser",
      };

      render(
        <Provider store={store}>
          <MineMessageCard message={Message} />
        </Provider>
      );

      const renderedImage = screen.getByAltText("pic by loggedUser");

      expect(renderedImage).toBeInTheDocument();
    });
  });
});