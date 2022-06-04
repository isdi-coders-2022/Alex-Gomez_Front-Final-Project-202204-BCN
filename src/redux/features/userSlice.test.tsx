import userSlice, { loginActionCreator } from "./userSlice";

describe("Given a userSlice reducer", () => {
  describe("When it receives a username and password", () => {
    test("The it should load the new state with this data", () => {
      interface State {
        name: string;
        username: string;
        logged: boolean;
      }

      const initialState: State = {
        name: "",
        username: "",
        logged: localStorage.getItem("token") ? true : false,
      };
      const mockUser = { name: "Luis", username: "Luis", logged: false };
      const mockUserLogged = { name: "Luis", username: "Luis", logged: true };

      const payload = mockUser;

      const action = loginActionCreator(payload);
      const loggedUser = userSlice(initialState, action);

      expect(loggedUser).toEqual(mockUserLogged);
    });
  });
});
