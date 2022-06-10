import MineMessageCardStyled from "./MineMessageCardStyled";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useAppDispatch } from "../../redux/hooks";
import { messageDeleteThunk } from "../../redux/thunks/messagesThunks";

interface IMessage {
  message: {
    id: string;
    image: string;
    text: string;
    category: string;
    author: string;
  };
}

const MineMessageCard = ({
  message: { id, image, text, category, author },
}: IMessage): JSX.Element => {
  const dispatch = useAppDispatch();

  const deleteMessage = () => {
    dispatch(messageDeleteThunk(id));
  };

  return (
    <MineMessageCardStyled>
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
        <div className="buttons">
          <Button className="edit" variant="outlined" startIcon={<EditIcon />}>
            Edit
          </Button>
          <Button
            onClick={deleteMessage}
            className="delete"
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </div>
      </div>
    </MineMessageCardStyled>
  );
};

export default MineMessageCard;
