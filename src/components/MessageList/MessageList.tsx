import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import messagesListThunk from "../../redux/thunks/messagesThunks";
import MessageCard from "../MessageCard/MessageCard";
import MessageListStyled from "./MessageListStyled";

const MessageList = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(messagesListThunk());
  }, [dispatch]);

  const useSelector = useAppSelector;
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
