import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const LoggedCheck = ({ children }: { children: JSX.Element | null }): any => {
  const useSelector = useAppSelector;
  const { logged } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate("/login");
    }
  }, [logged, navigate]);

  if (logged) {
    return children;
  } else {
    return null;
  }
};

export default LoggedCheck;
