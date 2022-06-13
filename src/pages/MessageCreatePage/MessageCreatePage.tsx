import MessageCreateForm from "../../components/MessageCreateForm/MessageCreateForm";
import NavBar from "../../components/NavBar/NavBar";
import MessageCreatePageStyled from "./MessageCreatePageStyled";

const MessageCreatePage = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <MessageCreatePageStyled>
        <MessageCreateForm message={null} />
      </MessageCreatePageStyled>
    </>
  );
};

export default MessageCreatePage;
