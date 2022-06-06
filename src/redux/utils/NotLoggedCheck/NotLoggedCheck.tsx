import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";

interface Props {
  children: JSX.Element;
}

const NotLoggedCheck = ({ children }: Props): JSX.Element | null => {
  const useSelector = useAppSelector;
  const { logged } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate("/messagelist");
    }
  }, [logged, navigate]);

  if (!logged) {
    return children;
  } else {
    return null;
  }
};

export default NotLoggedCheck;
