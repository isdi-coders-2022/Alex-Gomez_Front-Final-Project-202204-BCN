import { useNavigate } from "react-router-dom";
import MessageCardStyled from "./MessageCardStyled";

interface IMessage {
  message: {
    id: string;
    image: string;
    imageBackup: string;
    text: string;
    category: string;
    author: string;
  };
}

const MessageCard = ({
  message: { id, image, imageBackup, text, category, author },
}: IMessage): JSX.Element => {
  const navigate = useNavigate();
  const detailMessage = () => {
    navigate(`/message-detail/${id}`);
  };

  const srcErrorHandler = (error: any) => {
    let backupSrc = imageBackup;
    (error.target as HTMLImageElement).onerror = null;
    (error.target as HTMLImageElement).src = backupSrc;
  };

  return (
    <MessageCardStyled>
      <div className="container">
        <img
          onClick={detailMessage}
          className="img"
          alt={`pic by ${author}`}
          src={`${process.env.REACT_APP_API_URL}uploads/images/${image}`}
          onError={srcErrorHandler}
        />
        <p className="category">{category}</p>
        <p className="text">{`${
          text.length < 60 ? text : text.slice(0, 60).concat("...")
        }`}</p>
        <span className="author">by: {author}</span>
      </div>
    </MessageCardStyled>
  );
};

export default MessageCard;
