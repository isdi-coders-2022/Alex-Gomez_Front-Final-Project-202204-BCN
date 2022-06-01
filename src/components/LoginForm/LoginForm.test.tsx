import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it is instantiated", () => {
    test("Then it should render a form with 2 inputs and 1 button", () => {
      render(<LoginForm />);

      expect(screen.getByLabelText("Username")).toBeInTheDocument();
      expect(screen.getByLabelText("Password")).toBeInTheDocument();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });
});
