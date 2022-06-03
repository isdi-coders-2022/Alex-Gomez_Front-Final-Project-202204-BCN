import MessageCardStyled from "./MessageCardStyled";

interface IMessage {
  message: {
    image: string;
    text: string;
    category: string;
    author: string;
  };
}

const MessageCard = ({
  message: { image, text, category, author },
}: IMessage): JSX.Element => {
  return (
    <MessageCardStyled>
      <img className="img" src={image} alt={`pic by ${author}`} />
      <p className="text">{text}</p>
      <span className="category">{category}</span>
      <span className="author">{author}</span>
    </MessageCardStyled>
  );
};

export default MessageCard;
