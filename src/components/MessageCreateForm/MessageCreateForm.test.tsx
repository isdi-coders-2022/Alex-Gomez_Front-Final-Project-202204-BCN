import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockCreateData } from "../../mocks/handlers";
import store from "../../redux/store/store";
import MessageCreateForm from "./MessageCreateForm";

describe("Given a MessageCreateForm component", () => {
  describe("When it is instantiated", () => {
    test("Then it should render a form with an textarea and 1 button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MessageCreateForm message={mockCreateData} />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Category")).toBeInTheDocument();
      expect(screen.getByLabelText("Write your message")).toBeInTheDocument();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  test("Then it should call the submitPublish function", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MessageCreateForm message={mockCreateData} />
        </Provider>
      </BrowserRouter>
    );

    const messageLabel = "Write your message";
    const messageInput = screen.getByLabelText(messageLabel);

    const categoryLabel = "Category";
    const categoryInput = screen.getByLabelText(categoryLabel);

    expect(messageInput).toHaveValue(mockCreateData.text);
    expect(categoryInput).toHaveValue(mockCreateData.category);

    const button = screen.getByRole("button", { name: /Publish/i });

    expect(button).toBeEnabled();
    userEvent.click(button);
  });
});
