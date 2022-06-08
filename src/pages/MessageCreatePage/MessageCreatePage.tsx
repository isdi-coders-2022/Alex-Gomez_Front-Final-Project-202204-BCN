import MessageCreateForm from "../../components/MessageCreateForm/MessageCreateForm";
import NavBar from "../../components/NavBar/NavBar";
import MessageCreatePageStyled from "./MessageCreatePageStyled";

const MessageCreatePage = () => {
  return (
    <>
      <NavBar />
      <MessageCreatePageStyled>
        <MessageCreateForm />
      </MessageCreatePageStyled>
    </>
  );
};

export default MessageCreatePage;
