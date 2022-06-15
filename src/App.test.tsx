import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const userLoggedCredentials = {
  id: "1234",
  name: "Luis",
  username: "Luis",
  logged: false,
};

jest.mock("jwt-decode", () => () => userLoggedCredentials);

describe("Given an App component", () => {
  describe("When it's instantiated with a token in local storage", () => {
    test("Then it show at least a list item", () => {
      Object.defineProperty(window, "localStorage", {
        value: {
          getItem: jest.fn(() => "token"),
        },
      });

      const messageMockSlice = createSlice({
        name: "messages",
        initialState: [
          {
            id: "",
            image: "",
            imageBackup: "",
            text: "",
            category: "",
            author: "",
          },
        ],
        reducers: {},
      });

      const oneMessageMockSlice = createSlice({
        name: "message",
        initialState: [
          {
            id: "string",
            image: "string",
            imageBackup: "string",
            text: "string",
            category: "string",
            author: "string",
          },
        ],
        reducers: {},
      });
      const userMockSlice = createSlice({
        name: "user",
        initialState: {
          name: "Luis",
          username: "Luis",
          id: "1234",
          logged: true,
        },
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: {
          messages: messageMockSlice.reducer,
          message: oneMessageMockSlice.reducer,
          user: userMockSlice.reducer,
        },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });
  });
});
