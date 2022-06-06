import { mockId } from "../../mocks/handlers";
import server from "../../mocks/server";
import { messagesListThunk, messageDeleteThunk } from "./messagesThunks";

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
      const thunk = messageDeleteThunk(mockId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
