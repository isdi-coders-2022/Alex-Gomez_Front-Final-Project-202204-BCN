import { oneMockMessage } from "../../mocks/handlers";
import oneMessageSlice, {
  loadOneMessageActionCreator,
} from "./oneMessageSlice";

interface State {
  id: string;
  image: string;
  imageBackup: string;
  text: string;
  category: string;
  author: string;
}
const initialState: State = {
  id: "",
  image: "",
  imageBackup: "",
  text: "",
  category: "",
  author: "",
};

describe("Given a messageSlice reducer", () => {
  describe("When loadMessages receives a list of messages", () => {
    test("Then it should load the new state with this new messages", async () => {
      const payload = oneMockMessage;

      const action = loadOneMessageActionCreator(payload);
      const loadedMessages = oneMessageSlice(initialState, action);

      expect(loadedMessages).toEqual(oneMockMessage);
    });
  });
});
