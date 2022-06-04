import { mockMessage } from "../../mocks/handlers";
import messagesSlice, { loadMessagesActionCreator } from "./messagesSlice";

describe("Given a messageSlice reducer", () => {
  describe("When it receives a list of messages", () => {
    test("Then it should load the new state with this new messages", async () => {
      interface State {
        id: string;
        image: string;
        text: string;
        category: string;
        author: string;
      }
      const initialState: State[] = [];

      const payload = mockMessage;

      const action = loadMessagesActionCreator(payload);
      const loadedMessages = messagesSlice(initialState, action);

      expect(loadedMessages).toEqual(mockMessage);
    });
  });
});
