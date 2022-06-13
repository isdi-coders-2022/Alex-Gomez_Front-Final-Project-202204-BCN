import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { mineMessagesListThunk } from "../../redux/thunks/messagesThunks";
import EmptyList from "../EmptyList/EmptyList";
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
      {messages.length >= 1 &&
        messages.map((message) => {
          return <MineMessageCard key={message.id} message={message} />;
        })}
      {messages.length === 0 && <EmptyList />}
    </MineMessageListStyled>
  );
};

export default MineMessageList;
