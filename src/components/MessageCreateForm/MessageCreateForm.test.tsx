import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import MessageCreateForm from "./MessageCreateForm";

describe("Given a MessageCreateForm component", () => {
  describe("When it is instantiated", () => {
    test("Then it should render a form with an textarea and 1 button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MessageCreateForm />
          </Provider>
        </BrowserRouter>
      );

      expect(screen.getByLabelText("Category")).toBeInTheDocument();
      expect(screen.getByLabelText("Write your message")).toBeInTheDocument();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("When it's instantiated and publish button is pressed", () => {
    test("Then it should call the submitPublish function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MessageCreateForm />
          </Provider>
        </BrowserRouter>
      );

      const messageLabel = "Write your message";
      const messageText = "My wrotten message";
      const messageInput = screen.getByLabelText(messageLabel);
      userEvent.type(messageInput, messageText);

      const categoryLabel = "Category";
      const categoryText = "Tradition";
      const categoryInput = screen.getByLabelText(categoryLabel);
      userEvent.type(categoryInput, categoryText);

      const imageLabel = "Upload image";
      const imageText = "";
      const imageInput = screen.getByLabelText(imageLabel);
      userEvent.type(imageInput, imageText);

      expect(messageInput).toHaveValue(messageText);
      expect(categoryInput).toHaveValue(categoryText);
      expect(imageInput).toHaveValue(imageText);
    });
  });
});
