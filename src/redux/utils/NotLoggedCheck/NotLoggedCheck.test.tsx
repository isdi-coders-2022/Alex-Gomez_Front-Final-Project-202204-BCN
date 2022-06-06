import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import NotLoggedCheck from "./NotLoggedCheck";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

describe("Given a notLoggedCheck component", () => {
  describe("When it's invoked and the user state is logged", () => {
    test("Then it should call useNavigate with the route '/messageList'", () => {
      const mockUserSlice = createSlice({
        name: "user",
        initialState: { name: "", username: "", logged: true },
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: { user: mockUserSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <NotLoggedCheck>
            <span></span>
          </NotLoggedCheck>
        </Provider>
      );
      expect(mockUseNavigate).toHaveBeenCalledWith("/messagelist");
    });
  });

  describe("When it is invoked and the user is not logged in", () => {
    test("Then it should return a JSX component", () => {
      const mockUserSlice = createSlice({
        name: "user",
        initialState: {
          name: "test",
          username: "testUser",
          logged: false,
        },
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: { user: mockUserSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <NotLoggedCheck>
            <h1>Test</h1>
          </NotLoggedCheck>
        </Provider>
      );

      const renderedText = screen.getByRole("heading");

      expect(renderedText).toBeInTheDocument();
    });
  });
});
