import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import LoggedCheck from "./LoggedCheck";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

describe("Given a LoggedCheck component", () => {
  describe("When it's invoked and the user state is not logged", () => {
    test("Then it should call useNavigate with the route '/login'", () => {
      const mockUserSlice = createSlice({
        name: "user",
        initialState: { name: "", username: "", logged: false },
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: { user: mockUserSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <LoggedCheck>
            <span></span>
          </LoggedCheck>
        </Provider>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });
  });

  describe("When it is invoked and the user is logged", () => {
    test("Then it should render a list of messages", () => {
      const mockUserSlice = createSlice({
        name: "user",
        initialState: { name: "test", username: "testUser", logged: true },
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: { user: mockUserSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <LoggedCheck>
            <h1>Test</h1>
          </LoggedCheck>
        </Provider>
      );

      const renderedText = screen.getByRole("heading");

      expect(renderedText).toBeInTheDocument();
    });
  });
});
