import MessageList from "../../components/MessageList/MessageList";
import NavBar from "../../components/NavBar/NavBar";
import MessageListPageStyled from "./MessageListPageStyled";

const MessageListPage = () => {
  return (
    <>
      <NavBar />
      <MessageListPageStyled>
        <MessageList />
      </MessageListPageStyled>
    </>
  );
};

export default MessageListPage;
