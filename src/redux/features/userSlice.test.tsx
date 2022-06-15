import userSlice, {
  loginActionCreator,
  logoutActionCreator,
} from "./userSlice";

describe("Given a userSlice reducer", () => {
  interface State {
    id: string;
    name: string;
    username: string;
    logged: boolean;
  }

  const initialState: State = {
    id: "",
    name: "",
    username: "",
    logged: localStorage.getItem("token") ? true : false,
  };

  const mockUser = { id: "111", name: "Luis", username: "Luis", logged: false };
  const mockUserLogged = {
    id: "111",
    name: "Luis",
    username: "Luis",
    logged: true,
  };

  describe("When it receives a username and password", () => {
    test("The it should load the new state with this data", () => {
      const payload = mockUser;

      const action = loginActionCreator(payload);
      const loggedUser = userSlice(initialState, action);

      expect(loggedUser).toEqual(mockUserLogged);
    });
  });
  describe("When a user is logged and it receives a logout action", () => {
    test("Then it should load the new state", () => {
      const userLogout = {
        id: "",
        name: "",
        username: "",
        logged: false,
      };

      const action = logoutActionCreator();
      const notLoggedUser = userSlice(mockUser, action);

      expect(notLoggedUser).toEqual(userLogout);
    });
  });
});
