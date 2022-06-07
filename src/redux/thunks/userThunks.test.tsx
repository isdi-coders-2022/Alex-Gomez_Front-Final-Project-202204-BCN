import server from "../../mocks/server";
import {
  userRegisterThunk,
  userLoginThunk,
  userLogoutThunk,
} from "./userThunks";

beforeEach(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

jest.mock("jwt-decode", () =>
  jest.fn().mockResolvedValue({ username: "fakeUser" })
);

const dispatch = jest.fn();

describe("Given a userLoginThunk", () => {
  describe("When it's invoked", () => {
    test("Then the dispatch function is called", async () => {
      const thunk = userLoginThunk({
        username: "Marta",
        password: "5678",
      });

      await thunk(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a userRegisterThunk", () => {
  describe("When it is invoked", () => {
    test("Then the dispatch function is called", async () => {
      const thunk = userRegisterThunk({
        name: "Luis",
        username: "Luis",
        password: "1234",
      });

      await thunk(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a userLogoutThunk", () => {
  describe("When it is invoked", () => {
    test("Then the dispatch function is called", async () => {
      const thunk = userLogoutThunk();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
