import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MessageCreateForm from "../../components/MessageCreateForm/MessageCreateForm";
import NavBar from "../../components/NavBar/NavBar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { messageGetThunk } from "../../redux/thunks/messagesThunks";
import MessageEditPageStyled from "./MessageEditPageStyled";

const MessageEditPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(messageGetThunk(id as string));
  }, [dispatch, id]);

  const message = useAppSelector((state) => state.message);

  return (
    <>
      <NavBar />
      <MessageEditPageStyled>
        <MessageCreateForm message={message} />
      </MessageEditPageStyled>
    </>
  );
};

export default MessageEditPage;
