import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { messagesListThunk } from "../../redux/thunks/messagesThunks";
import MessageCard from "../MessageCard/MessageCard";
import MessageListStyled from "./MessageListStyled";
import Button from "@mui/material/Button";

const MessageList = () => {
  interface State {
    id: string;
    image: string;
    imageBackup: string;
    text: string;
    category: string;
    author: string;
  }

  const initialPage: State[] = [];

  const useSelector = useAppSelector;
  const messages = useSelector((state) => state.messages);
  const { logged } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setCurrentPage(messages.slice(0, 6));
  }, [messages]);

  useEffect(() => {
    setCurrentPage(messages.slice(index, index + 6));
  }, [index, messages]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
    dispatch(messagesListThunk());
  }, [dispatch, logged, navigate]);

  return (
    <div className="container">
      <MessageListStyled>
        <>
          <ul>
            {currentPage.map((message) => {
              return <MessageCard key={message.id} message={message} />;
            })}
          </ul>
        </>
        <div className="page-buttons">
          {messages.length > 6 && (
            <Button
              variant="contained"
              type="submit"
              className="button"
              onClick={() => {
                if (index >= 6) {
                  setIndex(index - 6);
                }
              }}
            >
              Previous
            </Button>
          )}
          {messages.length > index + 6 && (
            <Button
              variant="contained"
              type="submit"
              className="button"
              onClick={() => {
                if (index < messages.length - 6) {
                  setIndex(index + 6);
                }
              }}
            >
              Next
            </Button>
          )}
        </div>
      </MessageListStyled>
    </div>
  );
};

export default MessageList;
