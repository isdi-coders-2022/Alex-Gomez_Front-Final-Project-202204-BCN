import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a RegisterPage component", () => {
  describe("When invoked", () => {
    test("Then it should render an image in with alt=''", () => {
      render(<Header />);
      expect(screen.getByAltText("japan things logo")).toBeInTheDocument();
    });
  });
});
