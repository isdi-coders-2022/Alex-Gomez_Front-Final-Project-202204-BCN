import server from "../../mocks/server";
import { userRegisterThunk, userLoginThunk } from "./userThunks";

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

jest.mock("jwt-decode", () =>
  jest.fn().mockResolvedValue({ username: "Luis" })
);

const dispatch = jest.fn();

describe("Given a userLoginThunk", () => {
  describe("When it's invoked", () => {
    test("Then the dispatch function is called", async () => {
      const thunk = userLoginThunk({
        username: "Luis",
        password: "1234",
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
