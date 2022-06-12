import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { messageGetThunk } from "../../redux/thunks/messagesThunks";
import MessageDetailedCardStyled from "./MessageDetailedCardStyled";

const MessageDetailedCard = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(messageGetThunk(id as string));
  }, [dispatch, id]);

  const message = useAppSelector((state) => state.message);
  const actualmessage = message.text;
  console.log(message);

  return (
    <MessageDetailedCardStyled>
      <div className="container">
        {message !== undefined && (
          <>
            <img
              className="img"
              crossOrigin=""
              src={message.imageBackup}
              //src={`${process.env.REACT_APP_API_URL}uploads/images/${image}`}
              alt={`pic by ${message.author}`}
            />
            <p className="category">{message.category}</p>
            <p className="text">{actualmessage}</p>
            <span className="author">by: {message.author}</span>
          </>
        )}
      </div>
    </MessageDetailedCardStyled>
  );
};

export default MessageDetailedCard;
