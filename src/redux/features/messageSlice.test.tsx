import { mockMessage } from "../../mocks/handlers";
import messagesSlice, { loadMessagesActionCreator } from "./messagesSlice";
interface State {
  id: string;
  image: string;
  imageBackup: string;
  text: string;
  category: string;
  author: string;
}
const initialState: State[] = [];

describe("Given a messageSlice reducer", () => {
  describe("When loadMessages receives a list of messages", () => {
    test("Then it should load the new state with this new messages", async () => {
      const payload = mockMessage;

      const action = loadMessagesActionCreator(payload);
      const loadedMessages = messagesSlice(initialState, action);

      expect(loadedMessages).toEqual(mockMessage);
    });
  });
});
