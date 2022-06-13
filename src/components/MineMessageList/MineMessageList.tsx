import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { mineMessagesListThunk } from "../../redux/thunks/messagesThunks";
import MineMessageCard from "../MineMessageCard/MineMessageCard";
import MineMessageListStyled from "./MineMessageListStyled";

const MineMessageList = () => {
  const useSelector = useAppSelector;

  const dispatch = useAppDispatch();
  const { username } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(mineMessagesListThunk(username));
  }, [dispatch, username]);

  const messages = useSelector((state) => state.messages);
  return (
    <MineMessageListStyled>
      {messages.map((message) => {
        return <MineMessageCard key={message.id} message={message} />;
      })}
    </MineMessageListStyled>
  );
};

export default MineMessageList;
