import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MessageListPage from "./pages/MessageList/MessageListPage";
import LoggedCheck from "./redux/utils/LoggedCheck/LoggedCheck";
import NotLoggedCheck from "./redux/utils/NotLoggedCheck/NotLoggedCheck";

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
      </Routes>
    </>
  );
}

export default App;
