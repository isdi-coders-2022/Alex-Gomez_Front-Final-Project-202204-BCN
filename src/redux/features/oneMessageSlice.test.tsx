import { oneMockMessage } from "../../mocks/handlers";
import oneMessageSlice, {
  loadOneMessagesActionCreator,
} from "./oneMessageSlice";

describe("Given a oneMessageSlice reducer", () => {
  describe("When it receives a messages", () => {
    test("Then it should load the new state with this new message", async () => {
      interface State {
        id: string;
        image: string;
        text: string;
        category: string;
        author: string;
      }
      const initialState: State = {
        id: "",
        image: "",
        text: "",
        category: "",
        author: "",
      };

      const payload = oneMockMessage;

      const action = loadOneMessagesActionCreator(payload);
      const loadedMessage = oneMessageSlice(initialState, action);

      expect(loadedMessage).toEqual(oneMockMessage);
    });
  });
});
