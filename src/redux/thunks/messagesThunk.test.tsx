import server from "../../mocks/server";
import messagesListThunk from "./messagesThunks";

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

      await thunk(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
