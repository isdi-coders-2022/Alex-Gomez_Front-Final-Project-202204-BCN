import MessageDetailedCard from "../../components/MessageDetailedCard/MessageDetailedCard";
import NavBar from "../../components/NavBar/NavBar";
import MessageDetailPageStyled from "./MessageDetailPageStyled";

const MessageDetailPage = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <MessageDetailPageStyled>
        <MessageDetailedCard />
      </MessageDetailPageStyled>
    </>
  );
};

export default MessageDetailPage;
