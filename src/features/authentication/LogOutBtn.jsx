import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LogOutBtn = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    await logOutUser();
    navigate("/");
  };
  return (
    <button onClick={logOutHandler} className="btn-secondary btn text-white">
      logout
    </button>
  );
};

export default LogOutBtn;
