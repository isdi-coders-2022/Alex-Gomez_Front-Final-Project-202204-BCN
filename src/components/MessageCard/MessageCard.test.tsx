import { render, screen } from "@testing-library/react";
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

      render(<MessageCard message={Message} />);

      const renderedImage = screen.getByAltText("pic by Writer");

      expect(renderedImage).toBeInTheDocument();
    });
  });
});
