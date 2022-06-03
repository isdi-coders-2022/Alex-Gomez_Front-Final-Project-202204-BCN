import { useAppSelector } from "../../redux/hooks";
import MessageCard from "../MessageCard/MessageCard";
import MessageListStyled from "./MessageListStyled";

const MessageList = () => {
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
