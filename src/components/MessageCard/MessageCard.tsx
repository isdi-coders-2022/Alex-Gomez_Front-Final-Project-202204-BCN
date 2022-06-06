import MessageCardStyled from "./MessageCardStyled";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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
        <p className="category">{category}</p>
        <p className="text">{text}</p>
        <span className="author">by: {author}</span>
        <div className="buttons">
          <Button
            className="delete"
            variant="outlined"
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button
            className="delete"
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </div>
      </div>
    </MessageCardStyled>
  );
};

export default MessageCard;
