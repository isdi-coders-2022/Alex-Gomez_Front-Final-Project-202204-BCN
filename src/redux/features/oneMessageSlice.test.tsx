import { oneMockMessage } from "../../mocks/handlers";
import oneMessageSlice, {
  loadOneMessageActionCreator,
} from "./oneMessageSlice";

describe("Given a oneMessageSlice reducer", () => {
  describe("When it receives a message", () => {
    test("Then it should load the new state with this new message", async () => {
      interface IState {
        id: string;
        image: string;
        imageBackup: string;
        text: string;
        category: string;
        author: string;
      }

      interface MessageState {
        oneMessage: IState;
      }

      const initialState: MessageState = {
        oneMessage: {
          id: "",
          image: "",
          imageBackup: "",
          text: "",
          category: "",
          author: "",
        },
      };

      const payload = oneMockMessage;

      const action = loadOneMessageActionCreator(payload);
      const loadedMessage = oneMessageSlice(initialState, action);

      expect(loadedMessage).toBeCalled();
    });
  });
});
