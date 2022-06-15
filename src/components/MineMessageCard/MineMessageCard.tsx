import MineMessageCardStyled from "./MineMessageCardStyled";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useAppDispatch } from "../../redux/hooks";
import { messageDeleteThunk } from "../../redux/thunks/messagesThunks";
import { useNavigate } from "react-router-dom";

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

const MineMessageCard = ({
  message: { id, image, imageBackup, text, category, author },
}: IMessage): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const deleteMessage = () => {
    dispatch(messageDeleteThunk(id));
  };

  const editMessage = () => {
    navigate(`/message-edit/${id}`);
  };

  const detailMessage = () => {
    navigate(`/message-detail/${id}`);
  };

  const srcErrorHandler = (error: any) => {
    let backupSrc = imageBackup;
    (error.target as HTMLImageElement).onerror = null;
    (error.target as HTMLImageElement).src = backupSrc;
  };

  return (
    <MineMessageCardStyled>
      <div className="container">
        <img
          onClick={detailMessage}
          className="img"
          src={`${process.env.REACT_APP_API_URL}uploads/images/${image}`}
          onError={srcErrorHandler}
          alt={`pic by ${author}`}
        />
        <p className="category">{category}</p>
        <p className="text">{`${
          text.length < 60 ? text : text.slice(0, 60).concat("...")
        }`}</p>
        <span className="author">by: {author}</span>
        <div className="buttons">
          <Button
            onClick={editMessage}
            className="edit"
            variant="outlined"
            startIcon={<EditIcon />}
          >
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
