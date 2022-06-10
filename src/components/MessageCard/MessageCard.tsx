import MessageCardStyled from "./MessageCardStyled";

interface IMessage {
  message: {
    id: string;
    image: string;
    text: string;
    category: string;
    author: string;
  };
}

const MessageCard = ({
  message: { id, image, text, category, author },
}: IMessage): JSX.Element => {
  return (
    <MessageCardStyled>
      <div className="container">
        <img
          className="img"
          crossOrigin=""
          src={`${process.env.REACT_APP_API_URL}uploads/images/${image}`}
          alt={`pic by ${author}`}
        />
        <p className="category">{category}</p>
        <p className="text">{text}</p>
        <span className="author">by: {author}</span>
      </div>
    </MessageCardStyled>
  );
};

export default MessageCard;
