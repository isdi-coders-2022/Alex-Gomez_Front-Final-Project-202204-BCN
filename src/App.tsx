import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MessageListPage from "./pages/MessageList/MessageListPage";
import LoggedCheck from "./components/LoggedCheck/LoggedCheck";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
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
