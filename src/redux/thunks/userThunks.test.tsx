import server from "../../mocks/server";
import { userRegisterThunk } from "./userThunks";

beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});

describe("Given a userRegisterThunk", () => {
  describe("When it is invoked", () => {
    test("The dispatch function is called", async () => {
      const dispatch = jest.fn();

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
