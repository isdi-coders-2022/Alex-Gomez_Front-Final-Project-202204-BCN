import { render, screen } from "@testing-library/react";
import EmptyList from "./EmptyList";

describe("Given an Empty list component", () => {
  describe("When it is instantiated", () => {
    test("Then it should render a paragraph with the text:'There are no messages to show'", () => {
      const expectedText = "There are no messages to show";

      render(<EmptyList />);

      const renderedParagraph = screen.getByText(expectedText);
      expect(renderedParagraph).toBeInTheDocument();
    });
  });
});
