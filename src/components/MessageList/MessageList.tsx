import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { messagesListThunk } from "../../redux/thunks/messagesThunks";
import MessageCard from "../MessageCard/MessageCard";
import MessageListStyled from "./MessageListStyled";

const MessageList = () => {
  const useSelector = useAppSelector;
  const { logged } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
    dispatch(messagesListThunk());
  }, [dispatch, logged, navigate]);

  const messages = useSelector((state) => state.messages);
  return (
    <MessageListStyled>
      {messages.map((message) => {
        return <MessageCard key={message.id} message={message} />;
      })}
    </MessageListStyled>
  );
};

export default MessageList;
