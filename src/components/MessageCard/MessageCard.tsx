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
        <img className="img" src={image} alt={`pic by ${author}`} />
        <span className="category">{category}</span>
        <p className="text">{text}</p>
        <span className="author">{author}</span>
      </div>
    </MessageCardStyled>
  );
};

export default MessageCard;
