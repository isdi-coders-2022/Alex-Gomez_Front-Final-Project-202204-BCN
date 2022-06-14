import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { mineMessagesListThunk } from "../../redux/thunks/messagesThunks";
import MineMessageCard from "../MineMessageCard/MineMessageCard";
import MineMessageListStyled from "./MineMessageListStyled";
import Button from "@mui/material/Button";

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
    <div className="container">
      <MineMessageListStyled>
        <>
          <ul>
            {currentPage.map((message) => {
              return <MineMessageCard key={message.id} message={message} />;
            })}
          </ul>
        </>
        <div className="page-buttons">
          <Button
            variant="contained"
            type="submit"
            className="button"
            onClick={() => {
              if (index >= 6) {
                setIndex(index - 6);
              }
            }}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            type="submit"
            className="button"
            onClick={() => {
              if (index < messages.length - 6) {
                setIndex(index + 6);
              }
            }}
          >
            Next
          </Button>
        </div>
      </MineMessageListStyled>
    </div>
  );
};

export default MineMessageList;
