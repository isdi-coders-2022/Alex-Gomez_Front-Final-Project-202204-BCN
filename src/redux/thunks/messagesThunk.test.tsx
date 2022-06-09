import { mockCreateData } from "../../mocks/handlers";
import server from "../../mocks/server";
import {
  messagesListThunk,
  messageDeleteThunk,
  messageCreateThunk,
} from "./messagesThunks";

beforeEach(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

const dispatch = jest.fn();

describe("Given a messagesListThunk", () => {
  describe("When it's invoked", () => {
    test("Then the dispatch function is called", async () => {
      const thunk = messagesListThunk();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a messageDeleteThunk", () => {
  describe("When it's invoked with an id", () => {
    test("Then it shouls call the dispatch", async () => {
      const id = "123456789";

      const thunk = messageDeleteThunk(id);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a messageCreateThunk", () => {
  describe("When it's invoked with an formData", () => {
    test("Then it shouls call the dispatch", async () => {
      const thunk = messageCreateThunk(mockCreateData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
