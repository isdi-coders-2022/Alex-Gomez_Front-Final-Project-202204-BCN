import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MessageListPage from "./pages/MessageList/MessageListPage";
import LoggedCheck from "./redux/utils/LoggedCheck/LoggedCheck";
import NotLoggedCheck from "./redux/utils/NotLoggedCheck/NotLoggedCheck";
import MessageCreatePage from "./pages/MessageCreatePage/MessageCreatePage";
import MineMessageListPage from "./pages/MineMessageList/MineMessageListPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LoggedCheck>
              <Navigate to="/messageslist" />
            </LoggedCheck>
          }
        />
        <Route
          path="/register"
          element={
            <NotLoggedCheck>
              <RegisterPage />
            </NotLoggedCheck>
          }
        />
        <Route
          path="/login"
          element={
            <NotLoggedCheck>
              <LoginPage />
            </NotLoggedCheck>
          }
        />
        <Route
          path="/messageslist"
          element={
            <LoggedCheck>
              <MessageListPage />
            </LoggedCheck>
          }
        />
        <Route
          path="/myMessageList"
          element={
            <LoggedCheck>
              <MineMessageListPage />
            </LoggedCheck>
          }
        />

        <Route
          path="/messageCreate"
          element={
            <LoggedCheck>
              <MessageCreatePage />
            </LoggedCheck>
          }
        />
      </Routes>
    </>
  );
}

export default App;
