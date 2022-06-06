import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import MessageCard from "./MessageCard";

describe("Given a MessageCard component", () => {
  describe("When it is invoked", () => {
    test("it renders an image", () => {
      const Message = {
        id: "asdasdaadasdasda",
        text: "First message posted in the BD",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/8f/ItsukushimaTorii73…",
        category: "Locations",
        author: "Writer",
      };

      render(
        <Provider store={store}>
          <MessageCard message={Message} />
        </Provider>
      );

      const renderedImage = screen.getByAltText("pic by Writer");

      expect(renderedImage).toBeInTheDocument();
    });
  });
});
