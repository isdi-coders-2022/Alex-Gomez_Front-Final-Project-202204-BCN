import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { mineMessagesListThunk } from "../../redux/thunks/messagesThunks";
import MineMessageCard from "../MineMessageCard/MineMessageCard";
import MineMessageListStyled from "./MineMessageListStyled";

const MineMessageList = () => {
  interface State {
    id: string;
    image: string;
    imageBackup: string;
    text: string;
    category: string;
    author: string;
  }

  const initialPage: State[] = [];
  const useSelector = useAppSelector;
  const messages = useSelector((state) => state.messages);

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setCurrentPage(messages.slice(0, 6));
  }, [messages]);

  useEffect(() => {
    setCurrentPage(messages.slice(index, index + 6));
  }, [index, messages]);

  const dispatch = useAppDispatch();
  const { username } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(mineMessagesListThunk(username));
  }, [dispatch, username]);

  return (
    <>
      <MineMessageListStyled>
        {currentPage.map((message) => {
          return <MineMessageCard key={message.id} message={message} />;
        })}
      </MineMessageListStyled>
      <div className="page-buttons">
        <button
          onClick={() => {
            if (index >= 6) {
              setIndex(index - 6);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (index < messages.length - 6) {
              setIndex(index + 6);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default MineMessageList;
